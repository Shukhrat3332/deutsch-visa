import { useI18n } from "@/i18n/LanguageContext";
import { getSessionId } from "@/lib/session";
import { BRANCHES, tKey, type BranchId } from "@/i18n/quizConfig";
import { WHATSAPP_NUMBER, TELEGRAM_USERNAME } from "@/lib/config";
import { MessageCircle, Send } from "lucide-react";

export function QuizOutcome({ branchId, onRestart }: { branchId: BranchId; onRestart: () => void }) {
  const { t } = useI18n();

  const sessionId = getSessionId();
  const branchName = tKey(t, BRANCHES[branchId].nameKey);
  const prefill = `${t.outcome.prefilled_prefix} #${sessionId.slice(0, 8)} — ${branchName}`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefill)}`;
  const tgHref = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(prefill)}`;

  return (
    <div>
      <p className="text-base leading-relaxed text-ink/85">{t.outcome.thanks}</p>

      <div className="mt-8">
        <h4 className="text-lg font-semibold text-ink">{t.outcome.contact_now_heading}</h4>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 text-base font-semibold text-parchment hover:bg-clay/90"
          >
            <MessageCircle size={18} /> {t.outcome.whatsapp}
          </a>
          <a
            href={tgHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-clay bg-transparent px-6 py-3 text-base font-semibold text-clay hover:bg-clay/10"
          >
            <Send size={18} /> {t.outcome.telegram}
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button type="button" onClick={onRestart} className="text-sm text-ink/50 underline hover:text-ink">
          {t.quiz.restart}
        </button>
      </div>
    </div>
  );
}

