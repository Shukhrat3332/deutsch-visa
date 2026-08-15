import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { getSessionId } from "@/lib/session";
import { supabase } from "@/lib/supabase";
import { PrivacyModal } from "./PrivacyModal";

type Channel = "whatsapp" | "telegram" | "email";

export function Litigation() {
  const { t, locale } = useI18n();
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [channel, setChannel] = useState<Channel>("whatsapp");
  const [value, setValue] = useState("");
  const [consent, setConsent] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const { error: fnError } = await supabase.functions.invoke("submit-litigation", {
        body: { session_id: getSessionId(), locale, description, contact: { name, contact_type: channel, contact_value: value } },
      });
      if (fnError) throw fnError;
      setDone(true);
    } catch (err) {
      console.error(err);
      setError(t.litigation.error);
    } finally {
      setSubmitting(false);
    }
  }

  const placeholder = channel === "email" ? t.litigation.email_placeholder : channel === "whatsapp" ? t.litigation.wa_placeholder : t.litigation.tg_placeholder;

  return (
    <section id="litigation" className="border-b border-line bg-clay/[0.04]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.litigation.heading}</h2>
        <p className="mt-4 rounded-md border border-clay/30 bg-parchment p-4 text-sm leading-relaxed text-ink/80">{t.litigation.notice}</p>
        {done ? (
          <p className="mt-8 rounded-md bg-moss/10 p-4 text-sm text-moss">{t.litigation.submitted}</p>
        ) : (
          <form onSubmit={submit} className="mt-8 grid gap-4">
            <label className="grid gap-1.5">
              <span className="text-sm font-medium text-ink">{t.litigation.description_label}</span>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder={t.litigation.description_placeholder}
                className="min-h-[140px] rounded-md border border-line bg-parchment px-3 py-2 text-base text-ink"
                style={{ fontSize: "16px" }}
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-medium text-ink">{t.litigation.name}</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-h-[44px] rounded-md border border-line bg-parchment px-3 py-2 text-base text-ink"
                style={{ fontSize: "16px" }}
              />
            </label>
            <div>
              <span className="text-sm font-medium text-ink">{t.litigation.channel}</span>
              <div className="mt-2 grid grid-cols-3 overflow-hidden rounded-md border border-line">
                {([["whatsapp", t.litigation.wa_label], ["telegram", t.litigation.tg_label], ["email", t.litigation.email_label]] as Array<[Channel, string]>).map(
                  ([c, label]) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setChannel(c);
                        setValue("");
                      }}
                      className={`min-h-[44px] px-3 py-2 text-sm font-medium ${channel === c ? "bg-clay text-parchment" : "bg-parchment text-ink hover:bg-line/40"}`}
                    >
                      {label}
                    </button>
                  ),
                )}
              </div>
            </div>
            <input
              required
              type={channel === "email" ? "email" : "text"}
              inputMode={channel === "whatsapp" ? "tel" : "text"}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="min-h-[44px] rounded-md border border-line bg-parchment px-3 py-2 text-base text-ink"
              style={{ fontSize: "16px" }}
            />
            <label className="flex items-start gap-3">
              <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-5 w-5" />
              <span className="text-sm leading-relaxed text-ink/80">
                {t.quiz.consent.label}{" "}
                <button type="button" onClick={() => setPrivacyOpen(true)} className="text-clay underline hover:no-underline">
                  {t.quiz.consent.read}
                </button>
              </span>
            </label>
            {error && <p className="text-sm text-red-700">{error}</p>}
            <button
              type="submit"
              disabled={submitting || !consent}
              className="min-h-[52px] rounded-md bg-clay px-6 py-3 text-base font-semibold text-parchment shadow-sm hover:bg-clay/90 disabled:opacity-60"
            >
              {submitting ? t.litigation.submitting : t.litigation.submit}
            </button>
          </form>
        )}
      </div>
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </section>
  );
}

