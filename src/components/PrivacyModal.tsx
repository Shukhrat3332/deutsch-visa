import { useI18n } from "@/i18n/LanguageContext";
import { X } from "lucide-react";
import { useEffect } from "react";

export function PrivacyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true">
      <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-parchment p-6 shadow-xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-ink">{t.privacy.title}</h3>
          <button type="button" onClick={onClose} aria-label={t.privacy.close} className="rounded-md p-1 text-ink/60 hover:bg-line/40">
            <X size={20} />
          </button>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink/80">{t.privacy.body}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 min-h-[44px] w-full rounded-md bg-clay px-4 py-2 text-sm font-semibold text-parchment hover:bg-clay/90"
        >
          {t.privacy.close}
        </button>
      </div>
    </div>
  );
}

