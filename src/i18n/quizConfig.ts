import type { Dict } from "./translations";

export type BranchId = "b1" | "b2" | "b3" | "b4" | "b5";
export type QuestionOption = { value: string; labelKey: string };
export type Question = { id: string; titleKey: string; options: QuestionOption[]; showIf?: (a: Record<string, string>) => boolean };
export type Branch = { id: BranchId; nameKey: string; questions: Question[] };

export function tKey(t: Dict, key: string): string {
  const parts = key.split(".");
  let cur: unknown = t;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return key;
    }
  }
  return typeof cur === "string" ? cur : key;
}

const universal: Question[] = [
  { id: "prior_refusal", titleKey: "quiz.universal.prior_refusal", options: [{ value: "yes", labelKey: "quiz.universal.yes" }, { value: "no", labelKey: "quiz.universal.no" }] },
  { id: "criminal", titleKey: "quiz.universal.criminal", options: [{ value: "yes", labelKey: "quiz.universal.yes" }, { value: "no", labelKey: "quiz.universal.no" }] },
];

const b1: Branch = {
  id: "b1",
  nameKey: "branch_names.b1",
  questions: [
    { id: "subpurpose", titleKey: "branches.b1_subpurpose_title", options: [
      { value: "short", labelKey: "branches.b1_subpurpose_options.short" },
      { value: "family_short", labelKey: "branches.b1_subpurpose_options.family_short" },
      { value: "family_reunification", labelKey: "branches.b1_subpurpose_options.family_reunification" },
    ]},
    { id: "duration", titleKey: "branches.b1_short_duration", showIf: (a) => a.subpurpose === "short" || a.subpurpose === "family_short", options: [
      { value: "under_15", labelKey: "branches.b1_short_duration_opts.under_15" },
      { value: "days_15_30", labelKey: "branches.b1_short_duration_opts.days_15_30" },
      { value: "days_30_90", labelKey: "branches.b1_short_duration_opts.days_30_90" },
    ]},
    { id: "insurance_funds", titleKey: "branches.b1_short_insurance", showIf: (a) => a.subpurpose === "short" || a.subpurpose === "family_short", options: [
      { value: "yes", labelKey: "branches.b1_short_insurance_opts.yes" },
      { value: "partial", labelKey: "branches.b1_short_insurance_opts.partial" },
      { value: "no", labelKey: "branches.b1_short_insurance_opts.no" },
    ]},
    { id: "invite", titleKey: "branches.b1_short_invite", showIf: (a) => a.subpurpose === "family_short", options: [
      { value: "yes", labelKey: "branches.b1_short_invite_opts.yes" },
      { value: "no", labelKey: "branches.b1_short_invite_opts.no" },
      { value: "na", labelKey: "branches.b1_short_invite_opts.na" },
    ]},
    { id: "relation", titleKey: "branches.b1_reun_relation", showIf: (a) => a.subpurpose === "family_reunification", options: [
      { value: "spouse", labelKey: "branches.b1_reun_relation_opts.spouse" },
      { value: "minor_child", labelKey: "branches.b1_reun_relation_opts.minor_child" },
    ]},
    { id: "sponsor_status", titleKey: "branches.b1_reun_sponsor", showIf: (a) => a.subpurpose === "family_reunification", options: [
      { value: "permanent", labelKey: "branches.b1_reun_sponsor_opts.permanent" },
      { value: "temporary", labelKey: "branches.b1_reun_sponsor_opts.temporary" },
      { value: "citizen", labelKey: "branches.b1_reun_sponsor_opts.citizen" },
    ]},
    { id: "german_level", titleKey: "branches.b1_reun_german", showIf: (a) => a.subpurpose === "family_reunification" && a.relation === "spouse", options: [
      { value: "a1", labelKey: "branches.b1_reun_german_opts.a1" },
      { value: "less_a1", labelKey: "branches.b1_reun_german_opts.less_a1" },
      { value: "higher", labelKey: "branches.b1_reun_german_opts.higher" },
    ]},
    { id: "sponsor_income", titleKey: "branches.b1_reun_income", showIf: (a) => a.subpurpose === "family_reunification", options: [
      { value: "sufficient", labelKey: "branches.b1_reun_income_opts.sufficient" },
      { value: "borderline", labelKey: "branches.b1_reun_income_opts.borderline" },
      { value: "insufficient", labelKey: "branches.b1_reun_income_opts.insufficient" },
    ]},
    ...universal,
  ],
};

const b2: Branch = {
  id: "b2",
  nameKey: "branch_names.b2",
  questions: [
    { id: "subpurpose", titleKey: "branches.b2_subpurpose_title", options: [
      { value: "offer", labelKey: "branches.b2_subpurpose_opts.offer" },
      { value: "no_offer", labelKey: "branches.b2_subpurpose_opts.no_offer" },
      { value: "skilled_trade", labelKey: "branches.b2_subpurpose_opts.skilled_trade" },
    ]},
    { id: "qualification", titleKey: "branches.b2_qualification", options: [
      { value: "higher", labelKey: "branches.b2_qualification_opts.higher" },
      { value: "vocational", labelKey: "branches.b2_qualification_opts.vocational" },
      { value: "it_3y", labelKey: "branches.b2_qualification_opts.it_3y" },
      { value: "recognized_trade", labelKey: "branches.b2_qualification_opts.recognized_trade" },
      { value: "none", labelKey: "branches.b2_qualification_opts.none" },
    ]},
    { id: "contract", titleKey: "branches.b2_contract", showIf: (a) => a.subpurpose === "offer", options: [
      { value: "above_bluecard", labelKey: "branches.b2_contract_opts.above_bluecard" },
      { value: "below_bluecard", labelKey: "branches.b2_contract_opts.below_bluecard" },
      { value: "negotiation", labelKey: "branches.b2_contract_opts.negotiation" },
    ]},
    { id: "job_language", titleKey: "branches.b2_job_language", showIf: (a) => {
      if (a.subpurpose === "offer" || a.subpurpose === "skilled_trade") return true;
      if (a.subpurpose === "no_offer") {
        const qualifying = ["higher", "vocational", "it_3y", "recognized_trade"];
        return !qualifying.includes(a.qualification);
      }
      return false;
    }, options: [
      { value: "de", labelKey: "branches.b2_job_language_opts.de" },
      { value: "en", labelKey: "branches.b2_job_language_opts.en" },
      { value: "both", labelKey: "branches.b2_job_language_opts.both" },
    ]},
    { id: "language_level", titleKey: "branches.b2_language_level", showIf: (a) => !!a.job_language, options: [
      { value: "c1", labelKey: "branches.b2_language_level_opts.c1" },
      { value: "b2", labelKey: "branches.b2_language_level_opts.b2" },
      { value: "b1", labelKey: "branches.b2_language_level_opts.b1" },
      { value: "a2", labelKey: "branches.b2_language_level_opts.a2" },
      { value: "a1", labelKey: "branches.b2_language_level_opts.a1" },
      { value: "none", labelKey: "branches.b2_language_level_opts.none" },
    ]},
    { id: "funds", titleKey: "branches.b2_funds", showIf: (a) => a.subpurpose === "no_offer", options: [
      { value: "sperrkonto_full", labelKey: "branches.b2_funds_opts.sperrkonto_full" },
      { value: "sperrkonto_partial", labelKey: "branches.b2_funds_opts.sperrkonto_partial" },
      { value: "none", labelKey: "branches.b2_funds_opts.none" },
    ]},
    ...universal,
  ],
};

const b3: Branch = {
  id: "b3",
  nameKey: "branch_names.b3",
  questions: [
    { id: "subpurpose", titleKey: "branches.b3_subpurpose_title", options: [
      { value: "university", labelKey: "branches.b3_subpurpose_opts.university" },
      { value: "language_course", labelKey: "branches.b3_subpurpose_opts.language_course" },
      { value: "ausbildung", labelKey: "branches.b3_subpurpose_opts.ausbildung" },
    ]},
    { id: "admission", titleKey: "branches.b3_admission", options: [
      { value: "unconditional", labelKey: "branches.b3_admission_opts.unconditional" },
      { value: "conditional_lang", labelKey: "branches.b3_admission_opts.conditional_lang" },
      { value: "ausbildung_signed", labelKey: "branches.b3_admission_opts.ausbildung_signed" },
      { value: "none", labelKey: "branches.b3_admission_opts.none" },
    ]},
    { id: "program_language", titleKey: "branches.b3_program_language", showIf: (a) => a.subpurpose === "university", options: [
      { value: "de", labelKey: "branches.b3_program_language_opts.de" },
      { value: "en", labelKey: "branches.b3_program_language_opts.en" },
    ]},
    { id: "language_level", titleKey: "branches.b3_language_level", options: [
      { value: "c1", labelKey: "branches.b2_language_level_opts.c1" },
      { value: "b2", labelKey: "branches.b2_language_level_opts.b2" },
      { value: "b1", labelKey: "branches.b2_language_level_opts.b1" },
      { value: "a2", labelKey: "branches.b2_language_level_opts.a2" },
      { value: "a1", labelKey: "branches.b2_language_level_opts.a1" },
      { value: "none", labelKey: "branches.b2_language_level_opts.none" },
    ]},
    { id: "funds", titleKey: "branches.b3_funds", options: [
      { value: "sperrkonto_full", labelKey: "branches.b3_funds_opts.sperrkonto_full" },
      { value: "sperrkonto_partial", labelKey: "branches.b3_funds_opts.sperrkonto_partial" },
      { value: "none", labelKey: "branches.b3_funds_opts.none" },
    ]},
    ...universal,
  ],
};

const b4: Branch = {
  id: "b4",
  nameKey: "branch_names.b4",
  questions: [
    { id: "subpurpose", titleKey: "branches.b4_subpurpose_title", options: [
      { value: "extension", labelKey: "branches.b4_subpurpose_opts.extension" },
      { value: "permanent", labelKey: "branches.b4_subpurpose_opts.permanent" },
      { value: "citizenship", labelKey: "branches.b4_subpurpose_opts.citizenship" },
    ]},
    { id: "years", titleKey: "branches.b4_years", options: [
      { value: "under_3", labelKey: "branches.b4_years_opts.under_3" },
      { value: "y3_5", labelKey: "branches.b4_years_opts.y3_5" },
      { value: "y5_8", labelKey: "branches.b4_years_opts.y5_8" },
      { value: "over_8", labelKey: "branches.b4_years_opts.over_8" },
    ]},
    { id: "married_german", titleKey: "branches.b4_married_german", showIf: (a) => a.subpurpose === "citizenship", options: [
      { value: "yes", labelKey: "branches.b4_married_german_opts.yes" },
      { value: "no", labelKey: "branches.b4_married_german_opts.no" },
    ]},
    { id: "current_basis", titleKey: "branches.b4_current_basis", options: [
      { value: "work_bluecard", labelKey: "branches.b4_current_basis_opts.work_bluecard" },
      { value: "work_general", labelKey: "branches.b4_current_basis_opts.work_general" },
      { value: "study", labelKey: "branches.b4_current_basis_opts.study" },
      { value: "family", labelKey: "branches.b4_current_basis_opts.family" },
    ]},
    { id: "language_level", titleKey: "branches.b4_language_level", options: [
      { value: "c1", labelKey: "branches.b2_language_level_opts.c1" },
      { value: "b2", labelKey: "branches.b2_language_level_opts.b2" },
      { value: "b1", labelKey: "branches.b2_language_level_opts.b1" },
      { value: "a2", labelKey: "branches.b2_language_level_opts.a2" },
      { value: "a1", labelKey: "branches.b2_language_level_opts.a1" },
      { value: "none", labelKey: "branches.b2_language_level_opts.none" },
    ]},
    { id: "income_status", titleKey: "branches.b4_income_status", options: [
      { value: "stable_pension", labelKey: "branches.b4_income_status_opts.stable_pension" },
      { value: "stable_no_pension", labelKey: "branches.b4_income_status_opts.stable_no_pension" },
      { value: "unstable", labelKey: "branches.b4_income_status_opts.unstable" },
    ]},
    ...universal,
  ],
};

const b5: Branch = {
  id: "b5",
  nameKey: "branch_names.b5",
  questions: [
    { id: "business_status", titleKey: "branches.b5_business_status", options: [
      { value: "registered", labelKey: "branches.b5_business_status_opts.registered" },
      { value: "plan_ready", labelKey: "branches.b5_business_status_opts.plan_ready" },
      { value: "idea", labelKey: "branches.b5_business_status_opts.idea" },
    ]},
    { id: "funding", titleKey: "branches.b5_funding", options: [
      { value: "own_50k_plus", labelKey: "branches.b5_funding_opts.own_50k_plus" },
      { value: "own_10_50", labelKey: "branches.b5_funding_opts.own_10_50" },
      { value: "investor", labelKey: "branches.b5_funding_opts.investor" },
      { value: "none", labelKey: "branches.b5_funding_opts.none" },
    ]},
    { id: "experience", titleKey: "branches.b5_experience", options: [
      { value: "over_5", labelKey: "branches.b5_experience_opts.over_5" },
      { value: "y2_5", labelKey: "branches.b5_experience_opts.y2_5" },
      { value: "under_2", labelKey: "branches.b5_experience_opts.under_2" },
    ]},
    { id: "language_level", titleKey: "branches.b5_language_level", options: [
      { value: "c1", labelKey: "branches.b2_language_level_opts.c1" },
      { value: "b2", labelKey: "branches.b2_language_level_opts.b2" },
      { value: "b1", labelKey: "branches.b2_language_level_opts.b1" },
      { value: "a2", labelKey: "branches.b2_language_level_opts.a2" },
      { value: "a1", labelKey: "branches.b2_language_level_opts.a1" },
      { value: "none", labelKey: "branches.b2_language_level_opts.none" },
    ]},
    ...universal,
  ],
};

export const BRANCHES: Record<BranchId, Branch> = { b1, b2, b3, b4, b5 };

export function getVisibleQuestions(branchId: BranchId, answers: Record<string, string>): Question[] {
  return BRANCHES[branchId].questions.filter((q) => !q.showIf || q.showIf(answers));
}

