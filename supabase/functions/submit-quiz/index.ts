// deno-lint-ignore-file
// Supabase Edge Function: submit-quiz
// Computes an internal priority tag (never returned to the client),
// stores the submission, and forwards it to Telegram + amoCRM.

// @ts-ignore Deno remote imports
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// @ts-ignore
declare const Deno: { env: { get(k: string): string | undefined }; serve: (h: (r: Request) => Promise<Response> | Response) => void };

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type QuizPayload = {
  session_id: string;
  branch: "b1" | "b2" | "b3" | "b4" | "b5";
  locale?: string;
  answers: Record<string, string>;
};

function computeOutcome(branch: string, a: Record<string, string>): "A" | "B" {
  if (a.prior_refusal === "yes" || a.criminal === "yes") return "B";

  const qualifyingEdu = new Set(["higher", "vocational", "it_3y", "recognized_trade"]);

  switch (branch) {
    case "b1": {
      if (a.subpurpose === "family_reunification") {
        if (a.relation === "spouse" && a.german_level !== "a1" && a.german_level !== "higher") return "B";
        if (a.sponsor_income === "insufficient") return "B";
      }
      return "A";
    }
    case "b2": {
      if (a.subpurpose === "offer" && a.contract === "negotiation") return "B";
      if (a.subpurpose === "no_offer") {
        const hasQual = qualifyingEdu.has(a.qualification);
        if (hasQual) {
          if (a.funds === "none") return "B";
        } else {
          const langOk =
            (a.job_language === "de" && ["c1", "b2", "b1", "a2", "a1"].includes(a.language_level)) ||
            (a.job_language === "en" && ["c1", "b2"].includes(a.language_level)) ||
            (a.job_language === "both" && ["c1", "b2", "b1"].includes(a.language_level));
          if (!langOk || a.funds === "none") return "B";
        }
      }
      return "A";
    }
    case "b3": {
      if (a.admission === "none" && a.funds === "none") return "B";
      return "A";
    }
    case "b4": {
      if (a.subpurpose === "citizenship") {
        const married = a.married_german === "yes";
        if (!married && (a.years === "under_3" || a.years === "y3_5")) return "B";
        if (married && a.years === "under_3") return "B";
      }
      if (a.subpurpose === "permanent") {
        if (a.current_basis === "work_bluecard") {
          if (a.years === "under_3" && !["b1", "b2", "c1"].includes(a.language_level)) return "B";
        } else if (a.years === "under_3" || a.years === "y3_5") {
          return "B";
        }
      }
      return "A";
    }
    case "b5": {
      if (a.business_status === "idea" && a.funding === "none") return "B";
      return "A";
    }
  }
  return "A";
}

function sanitize(s: unknown, max = 2000): string {
  if (typeof s !== "string") return "";
  return s.slice(0, max);
}

function formatTelegram(payload: QuizPayload, outcome: "A" | "B"): string {
  const lines: string[] = [];
  lines.push(`🆕 Новая заявка с квиза [${outcome}]`);
  lines.push(`Ветка: ${payload.branch}`);
  lines.push(`Язык: ${payload.locale ?? "-"}`);
  lines.push(`Session: ${payload.session_id}`);
  lines.push(`--- Ответы ---`);
  for (const [k, v] of Object.entries(payload.answers)) lines.push(`• ${k}: ${v}`);
  return lines.join("\n");
}

async function sendTelegram(text: string, chatId: string, token: string) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });
}

async function sendToAmoCrm(payload: QuizPayload, outcome: "A" | "B") {
  const accessToken = Deno.env.get("AMOCRM_ACCESS_TOKEN");
  if (!accessToken) {
    console.error("amoCRM: AMOCRM_ACCESS_TOKEN not set, skipping CRM sync");
    return;
  }
  try {
    const body = [
      {
        name: `Заявка — ${payload.branch} — ${payload.session_id.slice(0, 8)}`,
        custom_fields_values: [
          { field_code: "PRIORITY_TAG", values: [{ value: outcome }] },
          { field_code: "BRANCH", values: [{ value: payload.branch }] },
          { field_code: "LOCALE", values: [{ value: payload.locale ?? "" }] },
          { field_code: "ANSWERS_JSON", values: [{ value: JSON.stringify(payload.answers) }] },
        ],
      },
    ];
    const res = await fetch("https://shuhratavezov.amocrm.ru/api/v4/leads/complex", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error("amoCRM error", res.status, await res.text());
    }
  } catch (e) {
    console.error("amoCRM request failed", e);
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const raw = (await req.json()) as QuizPayload;
    if (!raw?.session_id || !raw?.branch || !raw?.answers) {
      return new Response(JSON.stringify({ error: "invalid_payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const answers: Record<string, string> = {};
    for (const [k, v] of Object.entries(raw.answers)) {
      if (/^[a-z0-9_]+$/i.test(k)) answers[k] = sanitize(v, 200);
    }
    const payload: QuizPayload = {
      session_id: sanitize(raw.session_id, 100),
      branch: raw.branch,
      locale: sanitize(raw.locale ?? "", 10),
      answers,
    };

    const outcome = computeOutcome(payload.branch, payload.answers);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const { error: insertErr } = await supabase.from("quiz_submissions").insert({
      session_id: payload.session_id,
      branch: payload.branch,
      locale: payload.locale || null,
      answers: payload.answers,
      priority_tag: outcome,
      status: "new",
    });
    if (insertErr) console.error("insert error", insertErr);

    const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const quizChat = Deno.env.get("TELEGRAM_QUIZ_CHAT_ID");
    if (token && quizChat) {
      try {
        await sendTelegram(formatTelegram(payload, outcome), quizChat, token);
      } catch (e) {
        console.error("telegram error", e);
      }
    }

    await sendToAmoCrm(payload, outcome);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "server_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

