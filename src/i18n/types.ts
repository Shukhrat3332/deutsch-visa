export type Locale = "ru" | "en" | "de";

export const ALL_LOCALES: Locale[] = ["ru", "en", "de"];

export const LOCALE_LABELS: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  de: "Deutsch",
};

// Emoji flag (or globe for English as a lingua franca, not tied to one country).
export const LOCALE_FLAG: Record<Locale, string> = {
  ru: "🇷🇺",
  en: "🌐",
  de: "🇩🇪",
};

