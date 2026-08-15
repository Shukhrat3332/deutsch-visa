import { useI18n } from "@/i18n/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { ATTORNEY_NAME } from "@/lib/config";

export function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-clay font-display text-sm font-semibold text-clay">
            AR
          </span>
          <span className="font-display text-base font-semibold leading-none text-ink sm:text-lg">
            Kanzlei {ATTORNEY_NAME}
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 md:flex">
          <a href="#quiz" className="hover:text-clay">{t.nav.quiz}</a>
          <a href="#how" className="hover:text-clay">{t.nav.how}</a>
          <a href="#about" className="hover:text-clay">{t.nav.about}</a>
          <a href="#faq" className="hover:text-clay">{t.nav.faq}</a>
          <a href="#litigation" className="hover:text-clay">{t.nav.litigation}</a>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}

