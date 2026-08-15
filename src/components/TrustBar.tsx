import { useI18n } from "@/i18n/LanguageContext";
import { REGULATORY_BODY, LICENSE_NUMBER } from "@/lib/config";

export function TrustBar() {
  const { t } = useI18n();
  return (
    <section className="border-b border-line bg-moss/[0.04]">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="seal mx-auto flex h-24 w-24 shrink-0 items-center justify-center text-center font-display text-xs font-semibold uppercase tracking-wider text-moss sm:mx-0">
            <span>Rechtsanwaltskammer<br />Berlin</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <div className="font-display text-2xl font-semibold text-ink">15+</div>
              <div className="text-sm text-ink/70">{t.trust.years}</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-ink">500+</div>
              <div className="text-sm text-ink/70">{t.trust.cases}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-clay">{t.trust.license}</div>
              <div className="mt-1 text-xs leading-snug text-ink/60">{REGULATORY_BODY}</div>
            </div>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/70">{t.trust.bio}</p>
        <p className="mt-1 text-xs leading-relaxed text-ink/45">{LICENSE_NUMBER}</p>
      </div>
    </section>
  );
}

