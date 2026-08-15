import { useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{t.faq.heading}</h2>
        <div className="mt-8 divide-y divide-line rounded-xl border border-line">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex min-h-[52px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-ink">{item.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-clay transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-ink/75">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

