// deno-lint-ignore-file
// Supabase Edge Function: submit-litigation
// Separate, manual-only intake — no eligibility scoring, immediate alert.

// @ts-ignore Deno remote imports
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// @ts-ignore
declare const Deno: { env: { get(k: string): string | undefined }; serve: (h: (r: Request) => Promise<Response> | Response) => void };

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function sanitize(s: unknown, max = 3000): string {
  if (typeof s !== "string") return "";
  return s.slice(0, max);
}

async function sendTelegram(text: string, chatId: string, token: string) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const raw = await req.json();
    if (!raw?.session_id || !raw?.description || !raw?.contact) {
      return new Response(JSON.stringify({ error: "invalid_payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = {
      session_id: sanitize(raw.session_id, 100),
      locale: sanitize(raw.locale ?? "", 10),
      description: sanitize(raw.description, 3000),
      contact_name: sanitize(raw.contact.name, 200),
      contact_type: sanitize(raw.contact.contact_type, 20),
      contact_value: sanitize(raw.contact.contact_value, 200),
    };

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const { error: insertErr } = await supabase.from("litigation_submissions").insert(payload);
    if (insertErr) console.error("insert error", insertErr);

    const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const urgentChat = Deno.env.get("TELEGRAM_URGENT_CHAT_ID");
    if (token && urgentChat) {
      const text = [
        "\ud83d\udea8 СРОЧНО — обжалование/убежище",
        `Session: ${payload.session_id}`,
        `Имя: ${payload.contact_name}`,
        `Связь: ${payload.contact_type} — ${payload.contact_value}`,
        `--- Описание ---`,
        payload.description,
      ].join("\n");
      try {
        await sendTelegram(text, urgentChat, token);
      } catch (e) {
        console.error("telegram error", e);
      }
    }

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

