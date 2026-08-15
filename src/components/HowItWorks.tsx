import { useI18n } from "@/i18n/LanguageContext";

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="how" className="border-b border-line">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.how.heading}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((step, i) => (
            <div key={i} className="rounded-xl border border-line bg-parchment p-5">
              <div className="font-display text-2xl font-semibold text-clay">{i + 1}</div>
              <h3 className="mt-2 font-display text-base font-semibold text-ink">{step.title.replace(/^\d+\.\s*/, "")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

