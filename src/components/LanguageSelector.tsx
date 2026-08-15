import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { ALL_LOCALES, LOCALE_LABELS, LOCALE_FLAG } from "@/i18n/types";
import { ChevronDown } from "lucide-react";

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[44px] items-center gap-1.5 rounded-full border border-line bg-parchment px-3 py-2 text-sm font-medium text-ink hover:border-clay"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span aria-hidden="true">{LOCALE_FLAG[locale]}</span>
        <span>{LOCALE_LABELS[locale]}</span>
        <ChevronDown size={14} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-parchment shadow-lg"
        >
          {ALL_LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`flex min-h-[44px] w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-line/40 ${
                  l === locale ? "font-semibold text-clay" : "text-ink"
                }`}
              >
                <span aria-hidden="true">{LOCALE_FLAG[l]}</span>
                {LOCALE_LABELS[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

