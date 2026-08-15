import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { BRANCHES, getVisibleQuestions, tKey, type BranchId } from "@/i18n/quizConfig";
import { PrivacyModal } from "./PrivacyModal";
import { QuizOutcome } from "./QuizOutcome";
import { getSessionId } from "@/lib/session";
import { supabase } from "@/lib/supabase";

type Step = "q0" | "questions" | "consent" | "outcome";

export function Quiz() {
  const { t, locale } = useI18n();
  const [step, setStep] = useState<Step>("q0");
  const [branchId, setBranchId] = useState<BranchId | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [qIndex, setQIndex] = useState(0);
  const [consent, setConsent] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const visible = useMemo(() => (branchId ? getVisibleQuestions(branchId, answers) : []), [branchId, answers]);
  const current = visible[qIndex];
  const total = visible.length;
  const branchLabelKey = branchId ? BRANCHES[branchId].nameKey : "";

  function pickBranch(id: BranchId) {
    setBranchId(id);
    setAnswers({});
    setQIndex(0);
    setStep("questions");
  }

  function answer(value: string) {
    if (!current) return;
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    const nextVisible = branchId ? getVisibleQuestions(branchId, next) : [];
    if (qIndex + 1 >= nextVisible.length) setStep("consent");
    else setQIndex(qIndex + 1);
  }

  function goBack() {
    if (step === "consent") {
      setStep("questions");
      setQIndex(Math.max(0, visible.length - 1));
      return;
    }
    if (step === "questions") {
      if (qIndex === 0) {
        setStep("q0");
        setBranchId(null);
        return;
      }
      setQIndex(qIndex - 1);
    }
  }

  async function submit() {
    if (!branchId || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const { error: fnError } = await supabase.functions.invoke("submit-quiz", {
        body: { session_id: getSessionId(), branch: branchId, locale, answers },
      });
      if (fnError) throw fnError;
      setStep("outcome");
    } catch (e) {
      console.error(e);
      setError(t.quiz.error);
    } finally {
      setSubmitting(false);
    }
  }

  function restart() {
    setStep("q0");
    setBranchId(null);
    setAnswers({});
    setQIndex(0);
    setConsent(false);
    setError(null);
  }

  return (
    <section id="quiz" className="border-b border-line bg-moss/[0.03]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.quiz.heading}</h2>
        <p className="mt-3 text-sm text-ink/65 sm:text-base">{t.quiz.subheading}</p>

        <div className="mt-8 rounded-xl border border-line bg-parchment p-5 shadow-sm sm:p-8">
          {step === "q0" && (
            <div>
              <h3 className="text-lg font-semibold text-ink sm:text-xl">{t.quiz.q0_title}</h3>
              <div className="mt-6 grid gap-3">
                {(
                  [
                    ["b1", t.quiz.q0_options.short_family],
                    ["b2", t.quiz.q0_options.work],
                    ["b3", t.quiz.q0_options.study],
                    ["b4", t.quiz.q0_options.status],
                    ["b5", t.quiz.q0_options.business],
                  ] as Array<[BranchId, string]>
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => pickBranch(id)}
                    className="min-h-[52px] rounded-lg border border-line bg-parchment px-4 py-3 text-left text-base leading-snug text-ink hover:border-clay hover:bg-clay/5"
                    style={{ fontSize: "16px" }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "questions" && current && (
            <div>
              <div className="flex items-center justify-between text-xs text-ink/50">
                <span>{t.quiz.progress(qIndex + 1, total)}</span>
                <span className="truncate pl-4">{tKey(t, branchLabelKey)}</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                <div className="h-full bg-clay transition-all" style={{ width: `${((qIndex + 1) / total) * 100}%` }} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink sm:text-xl">{tKey(t, current.titleKey)}</h3>
              <div className="mt-6 grid gap-3">
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => answer(opt.value)}
                    className={`min-h-[52px] rounded-lg border px-4 py-3 text-left text-base leading-snug hover:border-clay hover:bg-clay/5 ${
                      answers[current.id] === opt.value ? "border-clay bg-clay/10" : "border-line bg-parchment"
                    }`}
                    style={{ fontSize: "16px" }}
                  >
                    {tKey(t, opt.labelKey)}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  className="min-h-[44px] rounded-md border border-line bg-parchment px-4 py-2 text-sm font-medium text-ink hover:bg-line/40"
                >
                  ← {t.quiz.back}
                </button>
              </div>
            </div>
          )}

          {step === "consent" && (
            <div>
              <h3 className="text-lg font-semibold text-ink sm:text-xl">{t.quiz.consent.label}</h3>
              <label className="mt-6 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-line"
                />
                <span className="text-sm leading-relaxed text-ink/80">
                  {t.quiz.consent.label}{" "}
                  <button type="button" onClick={() => setPrivacyOpen(true)} className="text-clay underline hover:no-underline">
                    {t.quiz.consent.read}
                  </button>
                </span>
              </label>
              {error && <p className="mt-4 text-sm text-red-700">{error}</p>}
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  className="min-h-[44px] rounded-md border border-line bg-parchment px-4 py-2 text-sm font-medium text-ink hover:bg-line/40"
                >
                  ← {t.quiz.back}
                </button>
                <button
                  type="button"
                  disabled={!consent || submitting}
                  onClick={submit}
                  className="min-h-[52px] rounded-md bg-clay px-6 py-3 text-base font-semibold text-parchment shadow-sm hover:bg-clay/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? t.quiz.submitting : t.quiz.submit}
                </button>
              </div>
            </div>
          )}

          {step === "outcome" && branchId && <QuizOutcome branchId={branchId} onRestart={restart} />}
        </div>
      </div>
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </section>
  );
}

