import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "./types";
import { ALL_LOCALES } from "./types";
import { DICTIONARIES, type Dict } from "./translations";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

function detectInitialLocale(): Locale {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem("locale") : null;
  if (stored && ALL_LOCALES.includes(stored as Locale)) return stored as Locale;
  const nav = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "en";
  if (nav.startsWith("ru")) return "ru";
  if (nav.startsWith("de")) return "de";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    let cancelled = false;
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data: { country_code?: string }) => {
        if (cancelled) return;
        const explicitlyStored = window.localStorage.getItem("locale");
        if (explicitlyStored) return;
        const cc = data.country_code;
        if (cc === "DE" || cc === "AT" || cc === "CH") setLocaleState("de");
      })
      .catch(() => {
        /* geolocation is best-effort only */
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    window.localStorage.setItem("locale", l);
  }

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: DICTIONARIES[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

