import { useI18n } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-[0.15]"
        style={{ background: "radial-gradient(circle, #B08A3E 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-clay">{t.hero.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">{t.hero.subtitle}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quiz"
            className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-clay px-6 py-3 text-base font-semibold text-parchment shadow-sm transition hover:bg-clay/90"
          >
            {t.hero.cta}
          </a>
          <a
            href="#litigation"
            className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-ink/20 bg-transparent px-6 py-3 text-base font-semibold text-ink hover:border-clay hover:text-clay"
          >
            {t.hero.cta_litigation}
          </a>
        </div>
      </div>
    </section>
  );
}

