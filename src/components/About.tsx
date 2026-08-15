import { useI18n } from "@/i18n/LanguageContext";
import { ATTORNEY_NAME, REGULATORY_BODY } from "@/lib/config";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="border-b border-line bg-moss/[0.03]">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
          <div className="mx-auto grid h-28 w-28 shrink-0 place-items-center rounded-full border-2 border-moss font-display text-3xl font-semibold text-moss sm:mx-0">
            {ATTORNEY_NAME.split(" ").map((p) => p[0]).join("")}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.about.heading}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75">{t.about.body}</p>
            <p className="mt-3 text-sm font-medium text-clay">{REGULATORY_BODY}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

