import type { Locale } from "./types";

export type Dict = {
  nav: { quiz: string; how: string; about: string; faq: string; contact: string; litigation: string };
  hero: { eyebrow: string; title: string; subtitle: string; cta: string; cta_litigation: string };
  trust: { years: string; cases: string; license: string; bio: string };
  quiz: {
    heading: string;
    subheading: string;
    progress: (n: number, total: number) => string;
    back: string;
    next: string;
    submit: string;
    submitting: string;
    restart: string;
    q0_title: string;
    q0_options: { short_family: string; work: string; study: string; status: string; business: string };
    universal: { prior_refusal: string; criminal: string; yes: string; no: string };
    consent: { label: string; read: string };
    error: string;
  };
  outcome: {
    thanks: string;
    contact_now_heading: string;
    prefilled_prefix: string;
    whatsapp: string;
    telegram: string;
  };
  how: { heading: string; steps: Array<{ title: string; body: string }> };
  about: { heading: string; body: string };
  faq: { heading: string; items: Array<{ q: string; a: string }> };
  litigation: {
    heading: string;
    notice: string;
    description_label: string;
    description_placeholder: string;
    name: string;
    channel: string;
    wa_label: string;
    tg_label: string;
    email_label: string;
    email_placeholder: string;
    wa_placeholder: string;
    tg_placeholder: string;
    submit: string;
    submitting: string;
    submitted: string;
    error: string;
  };
  footer: { address: string; email: string; rights: string; channel: string };
  privacy: { title: string; body: string; close: string };
  common: { required: string; select: string; close: string; loading: string };
  branches: {
    b1_subpurpose_title: string;
    b1_subpurpose_options: { short: string; family_short: string; family_reunification: string };
    b1_short_duration: string;
    b1_short_duration_opts: { under_15: string; days_15_30: string; days_30_90: string };
    b1_short_insurance: string;
    b1_short_insurance_opts: { yes: string; partial: string; no: string };
    b1_short_invite: string;
    b1_short_invite_opts: { yes: string; no: string; na: string };
    b1_reun_relation: string;
    b1_reun_relation_opts: { spouse: string; minor_child: string };
    b1_reun_sponsor: string;
    b1_reun_sponsor_opts: { permanent: string; temporary: string; citizen: string };
    b1_reun_german: string;
    b1_reun_german_opts: { a1: string; less_a1: string; higher: string };
    b1_reun_income: string;
    b1_reun_income_opts: { sufficient: string; borderline: string; insufficient: string };
    b2_subpurpose_title: string;
    b2_subpurpose_opts: { offer: string; no_offer: string; skilled_trade: string };
    b2_qualification: string;
    b2_qualification_opts: { higher: string; vocational: string; it_3y: string; recognized_trade: string; none: string };
    b2_contract: string;
    b2_contract_opts: { above_bluecard: string; below_bluecard: string; negotiation: string };
    b2_job_language: string;
    b2_job_language_opts: { de: string; en: string; both: string };
    b2_language_level: string;
    b2_language_level_opts: { c1: string; b2: string; b1: string; a2: string; a1: string; none: string };
    b2_funds: string;
    b2_funds_opts: { sperrkonto_full: string; sperrkonto_partial: string; none: string };
    b3_subpurpose_title: string;
    b3_subpurpose_opts: { university: string; language_course: string; ausbildung: string };
    b3_admission: string;
    b3_admission_opts: { unconditional: string; conditional_lang: string; ausbildung_signed: string; none: string };
    b3_program_language: string;
    b3_program_language_opts: { de: string; en: string };
    b3_language_level: string;
    b3_funds: string;
    b3_funds_opts: { sperrkonto_full: string; sperrkonto_partial: string; none: string };
    b4_subpurpose_title: string;
    b4_subpurpose_opts: { extension: string; permanent: string; citizenship: string };
    b4_years: string;
    b4_years_opts: { under_3: string; y3_5: string; y5_8: string; over_8: string };
    b4_married_german: string;
    b4_married_german_opts: { yes: string; no: string };
    b4_current_basis: string;
    b4_current_basis_opts: { work_bluecard: string; work_general: string; study: string; family: string };
    b4_language_level: string;
    b4_income_status: string;
    b4_income_status_opts: { stable_pension: string; stable_no_pension: string; unstable: string };
    b5_business_status: string;
    b5_business_status_opts: { registered: string; plan_ready: string; idea: string };
    b5_funding: string;
    b5_funding_opts: { own_50k_plus: string; own_10_50: string; investor: string; none: string };
    b5_experience: string;
    b5_experience_opts: { over_5: string; y2_5: string; under_2: string };
    b5_language_level: string;
  };
  branch_names: { b1: string; b2: string; b3: string; b4: string; b5: string };
};

const ru: Dict = {
  nav: { quiz: "Оценка кейса", how: "Как это работает", about: "Обо мне", faq: "Частые вопросы", contact: "Контакты", litigation: "Обжалование / убежище" },
  hero: {
    eyebrow: "Иммиграционное право Германии",
    title: "Я адвокат Alica Rusta — помощь с визой и видом на жительство в Германии",
    subtitle: "Я лично подготавливаю и подаю документы, веду переписку с ведомством и, при необходимости, представляю ваши интересы в апелляции и в суде.",
    cta: "Пройти короткую оценку кейса",
    cta_litigation: "Есть отказ или срочный случай? Написать напрямую",
  },
  trust: { years: "лет практики", cases: "рассмотренных дел", license: "Проверка адвоката", bio: "Адвокат, специализация — иммиграционное и административное право Германии." },
  quiz: {
    heading: "Короткая оценка вашего кейса",
    subheading: "Ответьте на несколько вопросов — я разберу вашу ситуацию и назову точную стоимость сопровождения.",
    progress: (n, total) => `Вопрос ${n} из ${total}`,
    back: "Назад",
    next: "Далее",
    submit: "Отправить",
    submitting: "Отправляем…",
    restart: "Начать заново",
    q0_title: "Что лучше всего описывает вашу ситуацию?",
    q0_options: {
      short_family: "Короткая поездка, гостевая виза или воссоединение семьи",
      work: "Работа (Chancenkarte, Blue Card, рабочая виза)",
      study: "Учёба (университет, языковые курсы, Ausbildung)",
      status: "Изменение статуса (продление, ПМЖ, гражданство)",
      business: "Бизнес-иммиграция / самозанятость",
    },
    universal: {
      prior_refusal: "Был ли у вас ранее отказ в визе ЕС/Шенген?",
      criminal: "Есть ли у вас судимость или незакрытые уголовные дела?",
      yes: "Да",
      no: "Нет",
    },
    consent: {
      label: "Я согласен(на) на обработку персональных данных и подтверждаю, что ознакомился(лась) с политикой конфиденциальности.",
      read: "Читать политику конфиденциальности",
    },
    error: "Не удалось отправить. Попробуйте ещё раз или напишите мне напрямую.",
  },
  outcome: {
    thanks: "Спасибо за ответы. Я лично рассмотрю ваш случай и расскажу точную стоимость сопровождения в зависимости от типа визы и сложности дела — напишите мне в WhatsApp или Telegram, и мы обсудим детали.",
    contact_now_heading: "Написать мне сейчас",
    prefilled_prefix: "Заявка",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
  },
  how: {
    heading: "Как проходит сопровождение",
    steps: [
      { title: "1. Оценка кейса", body: "Вы отвечаете на несколько вопросов, я разбираю детали вашей ситуации." },
      { title: "2. Согласование условий", body: "Обсуждаем объём работы и стоимость — индивидуально под ваш случай." },
      { title: "3. Подготовка документов", body: "Я проверяю документы, готовлю правильный пакет и переводы." },
      { title: "4. Подача и сопровождение", body: "Подаю в ведомство и веду всю переписку — до решения." },
    ],
  },
  about: {
    heading: "Обо мне",
    body: "Меня зовут Alica Rusta, я адвокат, состою в Rechtsanwaltskammer Berlin, специализируюсь на иммиграционном и административном праве Германии. Работаю с полным спектром вопросов: от воссоединения семьи до Blue Card, ПМЖ, гражданства и обжалования отказов в судебном порядке.",
  },
  faq: {
    heading: "Частые вопросы",
    items: [
      { q: "Правда ли, что можно купить рабочую визу?", a: "Нет — визы не продаются и не покупаются. Предложение «гарантированной визы» или фиктивного рабочего контракта — это мошенничество, которое может привести к многолетнему запрету на въезд в Шенген, а не просто к отказу. Я не продаю визу — я помогаю корректно подготовить настоящую заявку." },
      { q: "Могу ли я оформить документы сам, без вас?", a: "Да, честно — процедура доступна каждому и бесплатна, если делать самостоятельно. Моя работа экономит ваше время и снижает риск технических ошибок (неверный формат, отсутствующий документ, неточная формулировка), из-за которых чаще всего задерживают или отклоняют самостоятельно поданные заявки." },
      { q: "Как проверить, что вы действующий адвокат?", a: "Alica Rusta, состою в Rechtsanwaltskammer Berlin с 2010 года — вы можете проверить это самостоятельно в официальном реестре адвокатской палаты по имени (у немецких адвокатов нет отдельного публичного номера лицензии, проверка идёт по имени и членству в палате)." },
      { q: "Что входит в сопровождение и как формируется цена?", a: "Я лично готовлю документы, подаю их, веду переписку с ведомством, даю юридическую оценку и, при необходимости, представляю ваши интересы в апелляции и суде. Стоимость индивидуальна — зависит от типа визы и сложности дела, обсуждается после рассмотрения кейса. Единого прайс-листа нет." },
      { q: "Гарантируете ли вы, что визу одобрят?", a: "Нет. Любой, кто это обещает, либо не понимает процесс, либо вводит вас в заблуждение: решение принимает консульство/ведомство, а не я. Я отвечаю за качество своей работы — полную, точную и корректно оформленную заявку." },
      { q: "Что если мне откажут?", a: "Как адвокат, я могу подготовить обжалование и, при необходимости, представлять вас в административном суде. Это реальная возможность, но не обещание конкретного исхода." },
      { q: "Нужна ли нотариально заверенная доверенность?", a: "В большинстве случаев достаточно простой подписанной доверенности — даже фотографии рукописного подписанного документа, без нотариуса. По немецкому праву простая отзывная доверенность (в т.ч. для представительства в суде) не требует нотариального заверения — достаточно письменной формы. Я уточню требования конкретного ведомства для вашего кейса. Важно: подача документов и вся переписка ведутся по доверенности, но один раз личное присутствие всё же требуется — для сдачи биометрии (отпечатки, фото). Закон не позволяет никому, включая адвоката, пройти этот шаг за клиента. Если у вас уже есть действующая биометрия по визе, выданной в последние 5 лет, этот шаг может быть пропущен." },
      { q: "Сколько времени занимает процесс?", a: "Сроки зависят от типа визы и загрузки ведомства. Ориентировочно: краткосрочные визы — от 2 недель, национальные визы (работа, учёба) — 1–3 месяца, воссоединение семьи — 3–6 месяцев, статусные изменения — 1–4 месяца. Конкретные сроки по вашему кейсу я называю после рассмотрения." },
      { q: "Как вы обрабатываете мои данные?", a: "Я собираю только те данные, которые нужны для оценки и ведения вашего кейса. Часть данных относится к особой категории (сведения о судимости, финансовое положение) и обрабатывается с повышенной защитой. Данные хранятся в течение срока, необходимого для оказания услуги и последующих юридических обязательств. Полный текст — в политике конфиденциальности." },
    ],
  },
  litigation: {
    heading: "Обжалование отказа или ходатайство об убежище",
    notice: "Эти категории дел требуют индивидуального разбора — автоматическая оценка здесь не проводится. Опишите ситуацию, я свяжусь с вами напрямую.",
    description_label: "Опишите вашу ситуацию",
    description_placeholder: "Тип решения, дата, ведомство, срок обжалования, ключевые обстоятельства…",
    name: "Ваше имя",
    channel: "Как с вами связаться",
    wa_label: "WhatsApp",
    tg_label: "Telegram",
    email_label: "Email",
    email_placeholder: "you@example.com",
    wa_placeholder: "+49 …",
    tg_placeholder: "@username",
    submit: "Отправить",
    submitting: "Отправляем…",
    submitted: "Спасибо. Я свяжусь с вами в ближайшее время.",
    error: "Не удалось отправить. Попробуйте ещё раз или напишите мне напрямую.",
  },
  footer: { address: "Адрес:", email: "Email:", rights: "© Все права защищены.", channel: "Мой Telegram-канал" },
  privacy: {
    title: "Политика конфиденциальности",
    body: "Я собираю: имя, контактные данные и ответы на анкету. Часть данных (сведения о судимости, финансовое положение) относится к особой категории и обрабатывается с повышенной защитой. Цель: предварительная оценка кейса и последующее адвокатское сопровождение. Данные хранятся до 3 лет после закрытия кейса. Обработчики: моя адвокатская практика и, при необходимости, IT-подрядчики по договору обработки. Вы имеете право запросить копию, исправление или удаление данных по адресу, указанному в футере.",
    close: "Закрыть",
  },
  common: { required: "Обязательное поле", select: "Выберите вариант", close: "Закрыть", loading: "Загрузка…" },
  branches: {
    b1_subpurpose_title: "Уточните цель поездки",
    b1_subpurpose_options: { short: "Туризм / короткая деловая поездка", family_short: "Короткий визит к семье или друзьям", family_reunification: "Долгосрочное воссоединение семьи" },
    b1_short_duration: "Планируемая длительность поездки",
    b1_short_duration_opts: { under_15: "До 15 дней", days_15_30: "15–30 дней", days_30_90: "30–90 дней" },
    b1_short_insurance: "Есть ли медицинская страховка и подтверждение средств на поездку?",
    b1_short_insurance_opts: { yes: "Да, полностью", partial: "Частично", no: "Нет" },
    b1_short_invite: "Есть ли приглашение от принимающей стороны?",
    b1_short_invite_opts: { yes: "Да", no: "Нет", na: "Не применимо" },
    b1_reun_relation: "Кто воссоединяется?",
    b1_reun_relation_opts: { spouse: "Супруг(а) едет к супругу(е) в Германию", minor_child: "Несовершеннолетний ребёнок едет к родителю в Германию" },
    b1_reun_sponsor: "Статус проживания принимающей стороны в Германии",
    b1_reun_sponsor_opts: { permanent: "Постоянный вид на жительство (Niederlassungserlaubnis)", temporary: "Временный вид на жительство", citizen: "Гражданство Германии" },
    b1_reun_german: "Уровень немецкого языка заявителя",
    b1_reun_german_opts: { a1: "A1 (подтверждён сертификатом)", less_a1: "Ниже A1 / нет сертификата", higher: "Выше A1" },
    b1_reun_income: "Достаточен ли доход принимающей стороны в Германии для содержания семьи?",
    b1_reun_income_opts: { sufficient: "Да, достаточен", borderline: "На грани", insufficient: "Недостаточен" },
    b2_subpurpose_title: "Уточните вашу ситуацию",
    b2_subpurpose_opts: { offer: "У меня уже есть рабочий контракт от работодателя в Германии", no_offer: "Контракта пока нет — хочу Chancenkarte / визу для поиска работы", skilled_trade: "Рабочая профессия (водитель, повар и т.п.) с признанным опытом" },
    b2_qualification: "Ваше образование / квалификация",
    b2_qualification_opts: { higher: "Высшее образование (диплом)", vocational: "Среднее профессиональное (техникум/колледж)", it_3y: "3+ года опыта в IT без диплома", recognized_trade: "Признанная профессиональная лицензия + подтверждённый опыт", none: "Нет образования и подтверждённого опыта" },
    b2_contract: "Условия рабочего контракта",
    b2_contract_opts: { above_bluecard: "Зарплата выше порога Blue Card", below_bluecard: "Зарплата ниже порога Blue Card", negotiation: "Контракт ещё обсуждается, зарплата не зафиксирована" },
    b2_job_language: "На каком языке ведётся работа на целевой позиции?",
    b2_job_language_opts: { de: "Немецкий", en: "Английский", both: "Оба" },
    b2_language_level: "Ваш уровень этого языка",
    b2_language_level_opts: { c1: "C1 или выше", b2: "B2", b1: "B1", a2: "A2", a1: "A1", none: "Нет / ниже A1" },
    b2_funds: "Подтверждение средств (Sperrkonto / другие)",
    b2_funds_opts: { sperrkonto_full: "Да, полная сумма", sperrkonto_partial: "Частично", none: "Нет подтверждения" },
    b3_subpurpose_title: "Уточните цель учёбы",
    b3_subpurpose_opts: { university: "Поступление в университет", language_course: "Языковые курсы", ausbildung: "Подписан контракт на Ausbildung" },
    b3_admission: "Статус зачисления",
    b3_admission_opts: { unconditional: "Безусловное зачисление", conditional_lang: "Условное зачисление (при условии языкового курса)", ausbildung_signed: "Подписан контракт Ausbildung", none: "Пока не зачислен(а)" },
    b3_program_language: "На каком языке проводится программа?",
    b3_program_language_opts: { de: "Немецкий", en: "Английский" },
    b3_language_level: "Ваш уровень этого языка",
    b3_funds: "Подтверждение средств",
    b3_funds_opts: { sperrkonto_full: "Sperrkonto на полную сумму", sperrkonto_partial: "Sperrkonto частично", none: "Нет подтверждения" },
    b4_subpurpose_title: "Уточните тип статусного изменения",
    b4_subpurpose_opts: { extension: "Продление текущего ВНЖ", permanent: "Постоянный ВНЖ (Niederlassungserlaubnis)", citizenship: "Гражданство (Einbürgerung)" },
    b4_years: "Сколько лет вы легально проживаете в Германии?",
    b4_years_opts: { under_3: "Менее 3 лет", y3_5: "3–5 лет", y5_8: "5–8 лет", over_8: "Более 8 лет" },
    b4_married_german: "Вы состоите в браке с гражданином(кой) Германии?",
    b4_married_german_opts: { yes: "Да", no: "Нет" },
    b4_current_basis: "На каком основании вы проживаете сейчас?",
    b4_current_basis_opts: { work_bluecard: "Работа (Blue Card)", work_general: "Работа (общее основание)", study: "Учёба", family: "Воссоединение семьи" },
    b4_language_level: "Уровень немецкого языка",
    b4_income_status: "Ваше финансовое положение и пенсионные взносы",
    b4_income_status_opts: { stable_pension: "Стабильный доход + пенсионные взносы платятся", stable_no_pension: "Стабильный доход, но без пенсионных взносов", unstable: "Нестабильный доход" },
    b5_business_status: "Статус вашего бизнеса",
    b5_business_status_opts: { registered: "Уже зарегистрирован", plan_ready: "Готов бизнес-план", idea: "Только идея" },
    b5_funding: "Финансирование",
    b5_funding_opts: { own_50k_plus: "Собственные средства свыше 50 000 €", own_10_50: "Собственные средства 10 000–50 000 €", investor: "Есть инвестор с подтверждением", none: "Пока нет подтверждённого финансирования" },
    b5_experience: "Профессиональный опыт в сфере",
    b5_experience_opts: { over_5: "Более 5 лет", y2_5: "2–5 лет", under_2: "Менее 2 лет" },
    b5_language_level: "Уровень немецкого языка",
  },
  branch_names: { b1: "Короткая поездка / семья", b2: "Работа", b3: "Учёба", b4: "Изменение статуса", b5: "Бизнес-иммиграция" },
};

const en: Dict = {
  nav: { quiz: "Case check", how: "How it works", about: "About me", faq: "FAQ", contact: "Contact", litigation: "Appeal / asylum" },
  hero: {
    eyebrow: "German immigration law",
    title: "I'm attorney Alica Rusta — help with German visas and residence permits",
    subtitle: "I personally prepare and file your documents, handle correspondence with the authority and, if needed, represent you in appeal and in court.",
    cta: "Take the short case check",
    cta_litigation: "Have a refusal or urgent case? Message me directly",
  },
  trust: { years: "years of practice", cases: "cases handled", license: "Verify my credentials", bio: "Licensed attorney specialising in German immigration and administrative law." },
  quiz: {
    heading: "Quick case check",
    subheading: "A few questions — I'll review your situation and give you the exact cost of representation.",
    progress: (n, total) => `Question ${n} of ${total}`,
    back: "Back",
    next: "Next",
    submit: "Submit",
    submitting: "Submitting…",
    restart: "Restart",
    q0_title: "What best describes your situation?",
    q0_options: {
      short_family: "Short stay, guest visa or family reunification",
      work: "Work (Chancenkarte, Blue Card, work visa)",
      study: "Study (university, language courses, Ausbildung)",
      status: "Status change (extension, permanent residency, citizenship)",
      business: "Business immigration / self-employment",
    },
    universal: {
      prior_refusal: "Have you had a previous EU/Schengen visa refusal?",
      criminal: "Do you have a criminal record or open criminal proceedings?",
      yes: "Yes",
      no: "No",
    },
    consent: { label: "I consent to the processing of my personal data and confirm I have read the privacy policy.", read: "Read the privacy policy" },
    error: "Could not send. Please try again or message me directly.",
  },
  outcome: {
    thanks: "Thank you for your answers. I'll personally review your case and give you the exact cost of representation based on your visa type and case complexity — message me on WhatsApp or Telegram and we'll go through the details.",
    contact_now_heading: "Message me now",
    prefilled_prefix: "Enquiry",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
  },
  how: {
    heading: "How the process works",
    steps: [
      { title: "1. Case check", body: "You answer a few questions and I review the details of your situation." },
      { title: "2. Terms agreed", body: "We agree the scope of work and the fee — individually for your case." },
      { title: "3. Document preparation", body: "I check your documents, prepare the correct package and translations." },
      { title: "4. Filing & follow-up", body: "I file with the authority and handle all correspondence until a decision." },
    ],
  },
  about: {
    heading: "About me",
    body: "My name is Alica Rusta, I'm an attorney admitted to the Rechtsanwaltskammer Berlin, specialising in German immigration and administrative law: family reunification, Blue Card, permanent residency, citizenship, and appeals in administrative court.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      { q: "Is it true you can buy a work visa?", a: "No — visas are not sold or bought. Any offer of a \"guaranteed visa\" or a fake employment contract is fraud and can result in a multi-year Schengen entry ban, not just a refusal. I don't sell a visa — I help you properly prepare a genuine application." },
      { q: "Can I file everything myself, without you?", a: "Yes, honestly — the procedure is open to everyone and free of charge if you do it yourself. My service saves time and reduces the risk of technical errors (wrong format, missing document, unclear wording) that most often delay or cause rejection of self-filed applications." },
      { q: "How can I verify you're a licensed attorney?", a: "Alica Rusta, admitted to the Rechtsanwaltskammer Berlin since 2010 — you can verify this yourself in the official bar registry by name (German attorneys don't have a separate public license number; verification is by name and bar membership)." },
      { q: "What's included in the service and how is the price set?", a: "I personally handle document preparation, filing, communication with the authority, legal assessment, and — if needed — appeals and court representation. The fee is individual, depending on visa type and case complexity, agreed after reviewing your case. There's no public price list." },
      { q: "Do you guarantee visa approval?", a: "No. Anyone promising this either misunderstands the process or is misleading you: the decision is made by the consulate/authority, not by me. I'm responsible for the quality of my own work — a complete, accurate, correctly formatted application." },
      { q: "What if I get refused?", a: "As a licensed attorney, I can prepare an appeal and, if necessary, represent you before the administrative court. This is a real capability, not a promise of a specific outcome." },
      { q: "Do I need a notarised power of attorney?", a: "In most cases a simple signed power of attorney is enough — even a photo of a handwritten signed document, no notary required. German law does not require notarisation for a simple revocable power of attorney (including for court representation) — written form is sufficient. I'll confirm the specific consulate's requirements. Note: while filing and correspondence happen via power of attorney, personal appearance is still legally required once — for biometric data (fingerprints, photo). No one, including an attorney, may do this step on your behalf. If you already have valid biometrics from a visa issued in the last 5 years, this step may be skipped." },
      { q: "How long does the process take?", a: "Timeframes depend on visa type and authority workload. Rough ranges: short-stay visas from 2 weeks; national visas (work, study) 1–3 months; family reunification 3–6 months; status changes 1–4 months. I give a case-specific estimate after reviewing your situation." },
      { q: "How do you handle my data?", a: "I collect only the data needed to review and run your case. Some data is special-category (criminal record, financial standing) and is handled with additional protection. Data is retained for as long as needed to deliver the service and meet legal obligations. Full text is in the privacy policy." },
    ],
  },
  litigation: {
    heading: "Refusal appeal or asylum application",
    notice: "These cases require individual review — no automated assessment is provided. Describe your situation and I'll contact you directly.",
    description_label: "Describe your situation",
    description_placeholder: "Type of decision, date, authority, appeal deadline, key facts…",
    name: "Your name",
    channel: "How should I reach you",
    wa_label: "WhatsApp",
    tg_label: "Telegram",
    email_label: "Email",
    email_placeholder: "you@example.com",
    wa_placeholder: "+49 …",
    tg_placeholder: "@username",
    submit: "Send",
    submitting: "Sending…",
    submitted: "Thank you. I'll contact you shortly.",
    error: "Could not send. Please try again or message me directly.",
  },
  footer: { address: "Address:", email: "Email:", rights: "© All rights reserved.", channel: "My Telegram channel" },
  privacy: {
    title: "Privacy policy",
    body: "I collect: your name, contact details and quiz answers. Some data (criminal record, financial standing) is special-category and receives additional protection. Purpose: preliminary case assessment and legal representation. Data is retained for up to 3 years after case closure. Processors: my law practice and, where necessary, IT vendors under a data processing agreement. You may request a copy, correction or deletion at the email in the footer.",
    close: "Close",
  },
  common: { required: "Required field", select: "Select an option", close: "Close", loading: "Loading…" },
  branches: {
    b1_subpurpose_title: "Please specify the purpose of the trip",
    b1_subpurpose_options: { short: "Tourism / short business trip", family_short: "Short visit to family or friends", family_reunification: "Long-term family reunification" },
    b1_short_duration: "Planned duration of trip",
    b1_short_duration_opts: { under_15: "Up to 15 days", days_15_30: "15–30 days", days_30_90: "30–90 days" },
    b1_short_insurance: "Do you have travel insurance and proof of funds?",
    b1_short_insurance_opts: { yes: "Yes, fully", partial: "Partially", no: "No" },
    b1_short_invite: "Do you have an invitation from the host?",
    b1_short_invite_opts: { yes: "Yes", no: "No", na: "Not applicable" },
    b1_reun_relation: "Who is being reunited?",
    b1_reun_relation_opts: { spouse: "Spouse joining a spouse in Germany", minor_child: "Minor child joining a parent in Germany" },
    b1_reun_sponsor: "Sponsor's residence status in Germany",
    b1_reun_sponsor_opts: { permanent: "Permanent residency (Niederlassungserlaubnis)", temporary: "Temporary residence permit", citizen: "German citizenship" },
    b1_reun_german: "Applicant's German language level",
    b1_reun_german_opts: { a1: "A1 (certified)", less_a1: "Below A1 / no certificate", higher: "Above A1" },
    b1_reun_income: "Is the sponsor's income in Germany sufficient to support the family?",
    b1_reun_income_opts: { sufficient: "Yes, sufficient", borderline: "Borderline", insufficient: "Not sufficient" },
    b2_subpurpose_title: "Please specify your situation",
    b2_subpurpose_opts: { offer: "I already have a work contract from an employer in Germany", no_offer: "No offer yet — want Chancenkarte / job-seeker visa", skilled_trade: "Skilled trade (driver, cook, etc.) with recognised experience" },
    b2_qualification: "Your education / qualification",
    b2_qualification_opts: { higher: "Higher education (degree)", vocational: "Vocational education (college/technical school)", it_3y: "3+ years of IT experience without a degree", recognized_trade: "Recognised professional licence + documented experience", none: "No education or documented experience" },
    b2_contract: "Work contract terms",
    b2_contract_opts: { above_bluecard: "Salary above Blue Card threshold", below_bluecard: "Salary below Blue Card threshold", negotiation: "Contract still in negotiation, salary not fixed" },
    b2_job_language: "What language does the target job use?",
    b2_job_language_opts: { de: "German", en: "English", both: "Both" },
    b2_language_level: "Your level in that language",
    b2_language_level_opts: { c1: "C1 or higher", b2: "B2", b1: "B1", a2: "A2", a1: "A1", none: "None / below A1" },
    b2_funds: "Proof of funds (Sperrkonto or other)",
    b2_funds_opts: { sperrkonto_full: "Yes, full amount", sperrkonto_partial: "Partially", none: "No proof" },
    b3_subpurpose_title: "Please specify the study purpose",
    b3_subpurpose_opts: { university: "University admission", language_course: "Language course", ausbildung: "Signed Ausbildung contract" },
    b3_admission: "Admission status",
    b3_admission_opts: { unconditional: "Unconditional admission", conditional_lang: "Conditional admission (pending language course)", ausbildung_signed: "Signed Ausbildung contract", none: "Not admitted anywhere yet" },
    b3_program_language: "What language is the programme in?",
    b3_program_language_opts: { de: "German", en: "English" },
    b3_language_level: "Your level in that language",
    b3_funds: "Proof of funds",
    b3_funds_opts: { sperrkonto_full: "Sperrkonto — full amount", sperrkonto_partial: "Sperrkonto — partial", none: "No proof" },
    b4_subpurpose_title: "Please specify the type of status change",
    b4_subpurpose_opts: { extension: "Extension of current residence permit", permanent: "Permanent residency (Niederlassungserlaubnis)", citizenship: "Citizenship (Einbürgerung)" },
    b4_years: "Years of legal residence in Germany",
    b4_years_opts: { under_3: "Under 3 years", y3_5: "3–5 years", y5_8: "5–8 years", over_8: "Over 8 years" },
    b4_married_german: "Are you married to a German citizen?",
    b4_married_german_opts: { yes: "Yes", no: "No" },
    b4_current_basis: "Current basis of residence",
    b4_current_basis_opts: { work_bluecard: "Work (Blue Card)", work_general: "Work (general)", study: "Study", family: "Family reunification" },
    b4_language_level: "German language level",
    b4_income_status: "Financial situation and pension contributions",
    b4_income_status_opts: { stable_pension: "Stable income + pension contributions paid", stable_no_pension: "Stable income, no pension contributions", unstable: "Unstable income" },
    b5_business_status: "Business status",
    b5_business_status_opts: { registered: "Already registered", plan_ready: "Business plan ready", idea: "Idea stage only" },
    b5_funding: "Funding",
    b5_funding_opts: { own_50k_plus: "Own funds over €50,000", own_10_50: "Own funds €10,000–50,000", investor: "Investor with confirmation", none: "No confirmed funding yet" },
    b5_experience: "Professional experience in the field",
    b5_experience_opts: { over_5: "Over 5 years", y2_5: "2–5 years", under_2: "Under 2 years" },
    b5_language_level: "German language level",
  },
  branch_names: { b1: "Short stay / family", b2: "Work", b3: "Study", b4: "Status change", b5: "Business immigration" },
};

const de: Dict = {
  nav: { quiz: "Fall-Check", how: "So funktioniert's", about: "Über mich", faq: "Häufige Fragen", contact: "Kontakt", litigation: "Widerspruch / Asyl" },
  hero: {
    eyebrow: "Migrationsrecht Deutschland",
    title: "Ich bin Rechtsanwältin Alica Rusta — Hilfe bei Visum und Aufenthalt in Deutschland",
    subtitle: "Ich bereite Ihre Unterlagen persönlich vor, reiche sie ein, führe die Kommunikation mit der Behörde und vertrete Sie bei Bedarf im Widerspruchsverfahren und vor Gericht.",
    cta: "Kurzen Fall-Check starten",
    cta_litigation: "Ablehnung oder dringender Fall? Direkt schreiben",
  },
  trust: { years: "Jahre Praxis", cases: "bearbeitete Fälle", license: "Zulassung prüfen", bio: "Zugelassene Rechtsanwältin für Migrations- und Verwaltungsrecht in Deutschland." },
  quiz: {
    heading: "Kurzer Fall-Check",
    subheading: "Nur wenige Fragen — ich prüfe Ihre Situation und nenne die genauen Kosten der Vertretung.",
    progress: (n, total) => `Frage ${n} von ${total}`,
    back: "Zurück",
    next: "Weiter",
    submit: "Absenden",
    submitting: "Wird gesendet…",
    restart: "Neu starten",
    q0_title: "Was beschreibt Ihre Situation am besten?",
    q0_options: {
      short_family: "Kurzaufenthalt, Besuchsvisum oder Familienzusammenführung",
      work: "Arbeit (Chancenkarte, Blaue Karte EU, Arbeitsvisum)",
      study: "Studium (Universität, Sprachkurs, Ausbildung)",
      status: "Statuswechsel (Verlängerung, Niederlassung, Einbürgerung)",
      business: "Unternehmerische Migration / Selbstständigkeit",
    },
    universal: {
      prior_refusal: "Hatten Sie bereits eine Ablehnung eines EU-/Schengen-Visums?",
      criminal: "Haben Sie Vorstrafen oder laufende Strafverfahren?",
      yes: "Ja",
      no: "Nein",
    },
    consent: { label: "Ich willige in die Verarbeitung meiner personenbezogenen Daten ein und habe die Datenschutzerklärung gelesen.", read: "Datenschutzerklärung lesen" },
    error: "Senden nicht möglich. Bitte erneut versuchen oder direkt schreiben.",
  },
  outcome: {
    thanks: "Vielen Dank für Ihre Antworten. Ich prüfe Ihren Fall persönlich und nenne Ihnen die genauen Kosten der Vertretung je nach Visumsart und Fallkomplexität — schreiben Sie mir auf WhatsApp oder Telegram, dann besprechen wir die Details.",
    contact_now_heading: "Jetzt schreiben",
    prefilled_prefix: "Anfrage",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
  },
  how: {
    heading: "So läuft die Betreuung",
    steps: [
      { title: "1. Fall-Check", body: "Sie beantworten wenige Fragen, ich prüfe die Details Ihrer Situation." },
      { title: "2. Konditionen", body: "Wir vereinbaren den Umfang der Arbeit und das Honorar — individuell für Ihren Fall." },
      { title: "3. Unterlagen", body: "Ich prüfe Ihre Unterlagen und erstelle das richtige Paket samt Übersetzungen." },
      { title: "4. Einreichung", body: "Ich reiche bei der Behörde ein und führe die gesamte Kommunikation bis zur Entscheidung." },
    ],
  },
  about: {
    heading: "Über mich",
    body: "Mein Name ist Alica Rusta, ich bin Rechtsanwältin, zugelassen bei der Rechtsanwaltskammer Berlin, spezialisiert auf Migrations- und Verwaltungsrecht: Familienzusammenführung, Blaue Karte EU, Niederlassung, Einbürgerung und Klagen vor dem Verwaltungsgericht.",
  },
  faq: {
    heading: "Häufige Fragen",
    items: [
      { q: "Kann man ein Arbeitsvisum wirklich kaufen?", a: "Nein — Visa werden nicht verkauft oder gekauft. Angebote eines „garantierten Visums“ oder eines fingierten Arbeitsvertrags sind Betrug und können ein mehrjähriges Einreiseverbot im Schengen-Raum zur Folge haben, nicht nur eine Ablehnung. Ich verkaufe kein Visum — ich helfe Ihnen, einen echten Antrag korrekt vorzubereiten." },
      { q: "Kann ich alles selbst einreichen, ohne Sie?", a: "Ja, ehrlich gesagt — das Verfahren steht jedem offen und ist kostenlos, wenn man es selbst macht. Meine Leistung spart Zeit und reduziert das Risiko formaler Fehler (falsches Format, fehlendes Dokument, unklare Formulierung), die selbst eingereichte Anträge am häufigsten verzögern oder scheitern lassen." },
      { q: "Wie kann ich prüfen, dass Sie eine zugelassene Rechtsanwältin sind?", a: "Alica Rusta, zugelassen bei der Rechtsanwaltskammer Berlin seit 2010 — Sie können dies selbst im offiziellen Kammerverzeichnis anhand des Namens prüfen (deutsche Anwälte haben keine öffentliche Zulassungsnummer, die Prüfung erfolgt über Name und Kammermitgliedschaft)." },
      { q: "Was ist in der Betreuung enthalten und wie kommt der Preis zustande?", a: "Ich übernehme persönlich die Vorbereitung der Unterlagen, die Einreichung, die Kommunikation mit der Behörde, die rechtliche Bewertung und bei Bedarf Widerspruch und Vertretung vor Gericht. Das Honorar ist individuell, abhängig von Visumsart und Fallkomplexität, und wird nach Prüfung Ihres Falls vereinbart. Es gibt keine öffentliche Preisliste." },
      { q: "Garantieren Sie die Erteilung des Visums?", a: "Nein. Wer das verspricht, missversteht das Verfahren oder führt Sie in die Irre: Die Entscheidung trifft das Konsulat/die Behörde, nicht ich. Ich hafte für die Qualität meiner Arbeit — einen vollständigen, korrekten und formal einwandfreien Antrag." },
      { q: "Was tun bei einer Ablehnung?", a: "Als zugelassene Rechtsanwältin kann ich einen Widerspruch vorbereiten und Sie bei Bedarf vor dem Verwaltungsgericht vertreten. Das ist eine reale Möglichkeit, kein Versprechen eines bestimmten Ergebnisses." },
      { q: "Brauche ich eine notariell beglaubigte Vollmacht?", a: "In den meisten Fällen genügt eine einfache unterschriebene Vollmacht — auch ein Foto eines handschriftlich unterschriebenen Dokuments, ohne Notar. Das deutsche Recht verlangt für eine einfache widerrufliche Vollmacht (auch zur gerichtlichen Vertretung) keine notarielle Beurkundung — die Schriftform reicht. Die konkreten Anforderungen des jeweiligen Konsulats kläre ich für Sie. Hinweis: Einreichung und Kommunikation erfolgen per Vollmacht, aber die persönliche Vorsprache zur Abgabe der biometrischen Daten (Fingerabdrücke, Foto) bleibt einmal zwingend — niemand, auch keine Anwältin, darf diesen Schritt für Sie erledigen. Liegen gültige Biometrie-Daten aus einem in den letzten 5 Jahren erteilten Visum vor, kann dieser Schritt entfallen." },
      { q: "Wie lange dauert das Verfahren?", a: "Die Bearbeitungsdauer hängt von Visumsart und Auslastung der Behörde ab. Grobe Richtwerte: Kurzaufenthaltsvisa ab 2 Wochen, nationale Visa (Arbeit, Studium) 1–3 Monate, Familienzusammenführung 3–6 Monate, Statusänderungen 1–4 Monate. Eine fallbezogene Einschätzung gebe ich nach Prüfung Ihrer Situation." },
      { q: "Wie behandeln Sie meine Daten?", a: "Ich erhebe nur die Daten, die zur Prüfung und Bearbeitung Ihres Falles nötig sind. Ein Teil (Vorstrafen, finanzielle Verhältnisse) fällt unter besondere Kategorien personenbezogener Daten und wird mit zusätzlichem Schutz verarbeitet. Die Daten werden so lange gespeichert, wie es für die Leistung und gesetzliche Pflichten erforderlich ist. Vollständiger Text in der Datenschutzerklärung." },
    ],
  },
  litigation: {
    heading: "Widerspruch gegen Ablehnung oder Asylantrag",
    notice: "Diese Fälle erfordern eine individuelle Prüfung — keine automatische Bewertung. Beschreiben Sie Ihre Situation, ich melde mich direkt.",
    description_label: "Beschreiben Sie Ihre Situation",
    description_placeholder: "Art der Entscheidung, Datum, Behörde, Frist, wichtige Fakten…",
    name: "Ihr Name",
    channel: "Wie soll ich Sie erreichen",
    wa_label: "WhatsApp",
    tg_label: "Telegram",
    email_label: "Email",
    email_placeholder: "sie@example.com",
    wa_placeholder: "+49 …",
    tg_placeholder: "@username",
    submit: "Senden",
    submitting: "Wird gesendet…",
    submitted: "Vielen Dank. Ich melde mich in Kürze.",
    error: "Senden nicht möglich. Bitte erneut versuchen oder direkt schreiben.",
  },
  footer: { address: "Adresse:", email: "Email:", rights: "© Alle Rechte vorbehalten.", channel: "Mein Telegram-Kanal" },
  privacy: {
    title: "Datenschutzerklärung",
    body: "Ich erhebe: Ihren Namen, Kontaktdaten und die Antworten im Fragebogen. Ein Teil der Daten (Vorstrafen, finanzielle Verhältnisse) fällt unter besondere Kategorien und wird mit zusätzlichem Schutz verarbeitet. Zweck: vorläufige Fallbewertung und anschließende anwaltliche Vertretung. Die Daten werden bis zu 3 Jahre nach Abschluss des Falls gespeichert. Verarbeiter: meine Kanzlei und, soweit erforderlich, IT-Dienstleister im Rahmen eines Auftragsverarbeitungsvertrags. Sie haben das Recht, eine Kopie, Berichtigung oder Löschung der Daten unter der im Footer genannten Adresse zu verlangen.",
    close: "Schließen",
  },
  common: { required: "Pflichtfeld", select: "Bitte auswählen", close: "Schließen", loading: "Wird geladen…" },
  branches: {
    b1_subpurpose_title: "Bitte geben Sie den Zweck der Reise an",
    b1_subpurpose_options: { short: "Tourismus / kurze Geschäftsreise", family_short: "Kurzer Besuch bei Familie oder Freunden", family_reunification: "Langfristige Familienzusammenführung" },
    b1_short_duration: "Geplante Aufenthaltsdauer",
    b1_short_duration_opts: { under_15: "Bis 15 Tage", days_15_30: "15–30 Tage", days_30_90: "30–90 Tage" },
    b1_short_insurance: "Haben Sie eine Reisekrankenversicherung und einen Finanzierungsnachweis?",
    b1_short_insurance_opts: { yes: "Ja, vollständig", partial: "Teilweise", no: "Nein" },
    b1_short_invite: "Haben Sie eine Einladung der gastgebenden Person?",
    b1_short_invite_opts: { yes: "Ja", no: "Nein", na: "Nicht zutreffend" },
    b1_reun_relation: "Wer wird zusammengeführt?",
    b1_reun_relation_opts: { spouse: "Ehepartner:in zieht zum Ehepartner:in nach Deutschland", minor_child: "Minderjähriges Kind zieht zu einem Elternteil nach Deutschland" },
    b1_reun_sponsor: "Aufenthaltsstatus der in Deutschland lebenden Person",
    b1_reun_sponsor_opts: { permanent: "Niederlassungserlaubnis", temporary: "Befristeter Aufenthaltstitel", citizen: "Deutsche Staatsangehörigkeit" },
    b1_reun_german: "Deutschkenntnisse der antragstellenden Person",
    b1_reun_german_opts: { a1: "A1 (durch Zertifikat nachgewiesen)", less_a1: "Unter A1 / kein Zertifikat", higher: "Über A1" },
    b1_reun_income: "Reicht das Einkommen der in Deutschland lebenden Person zur Sicherung des Lebensunterhalts der Familie aus?",
    b1_reun_income_opts: { sufficient: "Ja, ausreichend", borderline: "Grenzwertig", insufficient: "Nicht ausreichend" },
    b2_subpurpose_title: "Bitte beschreiben Sie Ihre Situation",
    b2_subpurpose_opts: { offer: "Ich habe bereits einen Arbeitsvertrag von einem Arbeitgeber in Deutschland", no_offer: "Noch kein Angebot — ich möchte die Chancenkarte / ein Visum zur Arbeitsuche", skilled_trade: "Handwerksberuf (Fahrer, Koch usw.) mit anerkannter Erfahrung" },
    b2_qualification: "Ihre Ausbildung / Qualifikation",
    b2_qualification_opts: { higher: "Hochschulabschluss", vocational: "Berufsausbildung (Fachschule/Kolleg)", it_3y: "3+ Jahre IT-Erfahrung ohne Abschluss", recognized_trade: "Anerkannte Berufslizenz + dokumentierte Erfahrung", none: "Keine Ausbildung oder dokumentierte Erfahrung" },
    b2_contract: "Bedingungen des Arbeitsvertrags",
    b2_contract_opts: { above_bluecard: "Gehalt über der Blaue-Karte-Schwelle", below_bluecard: "Gehalt unter der Blaue-Karte-Schwelle", negotiation: "Vertrag wird noch verhandelt, Gehalt nicht fixiert" },
    b2_job_language: "Welche Sprache wird bei der Zielstelle verwendet?",
    b2_job_language_opts: { de: "Deutsch", en: "Englisch", both: "Beides" },
    b2_language_level: "Ihr Niveau in dieser Sprache",
    b2_language_level_opts: { c1: "C1 oder höher", b2: "B2", b1: "B1", a2: "A2", a1: "A1", none: "Keine / unter A1" },
    b2_funds: "Finanzierungsnachweis (Sperrkonto o.ä.)",
    b2_funds_opts: { sperrkonto_full: "Ja, voller Betrag", sperrkonto_partial: "Teilweise", none: "Kein Nachweis" },
    b3_subpurpose_title: "Bitte geben Sie den Studienzweck an",
    b3_subpurpose_opts: { university: "Zulassung an der Universität", language_course: "Sprachkurs", ausbildung: "Unterschriebener Ausbildungsvertrag" },
    b3_admission: "Zulassungsstatus",
    b3_admission_opts: { unconditional: "Uneingeschränkte Zulassung", conditional_lang: "Bedingte Zulassung (abhängig von Sprachkurs)", ausbildung_signed: "Unterschriebener Ausbildungsvertrag", none: "Noch nirgends zugelassen" },
    b3_program_language: "In welcher Sprache wird das Programm durchgeführt?",
    b3_program_language_opts: { de: "Deutsch", en: "Englisch" },
    b3_language_level: "Ihr Niveau in dieser Sprache",
    b3_funds: "Finanzierungsnachweis",
    b3_funds_opts: { sperrkonto_full: "Sperrkonto — voller Betrag", sperrkonto_partial: "Sperrkonto — teilweise", none: "Kein Nachweis" },
    b4_subpurpose_title: "Bitte geben Sie die Art des Statuswechsels an",
    b4_subpurpose_opts: { extension: "Verlängerung des aktuellen Aufenthaltstitels", permanent: "Niederlassungserlaubnis", citizenship: "Einbürgerung" },
    b4_years: "Jahre des rechtmäßigen Aufenthalts in Deutschland",
    b4_years_opts: { under_3: "Unter 3 Jahre", y3_5: "3–5 Jahre", y5_8: "5–8 Jahre", over_8: "Über 8 Jahre" },
    b4_married_german: "Sind Sie mit einer deutschen Staatsangehörigen/einem deutschen Staatsangehörigen verheiratet?",
    b4_married_german_opts: { yes: "Ja", no: "Nein" },
    b4_current_basis: "Aktuelle Aufenthaltsgrundlage",
    b4_current_basis_opts: { work_bluecard: "Arbeit (Blaue Karte EU)", work_general: "Arbeit (allgemein)", study: "Studium", family: "Familienzusammenführung" },
    b4_language_level: "Deutschkenntnisse",
    b4_income_status: "Finanzielle Situation und Rentenbeiträge",
    b4_income_status_opts: { stable_pension: "Stabiles Einkommen + Rentenbeiträge werden gezahlt", stable_no_pension: "Stabiles Einkommen, keine Rentenbeiträge", unstable: "Instabiles Einkommen" },
    b5_business_status: "Status Ihres Unternehmens",
    b5_business_status_opts: { registered: "Bereits registriert", plan_ready: "Businessplan fertig", idea: "Nur eine Idee" },
    b5_funding: "Finanzierung",
    b5_funding_opts: { own_50k_plus: "Eigenmittel über 50.000 €", own_10_50: "Eigenmittel 10.000–50.000 €", investor: "Investor mit Bestätigung vorhanden", none: "Noch keine bestätigte Finanzierung" },
    b5_experience: "Berufserfahrung in diesem Bereich",
    b5_experience_opts: { over_5: "Über 5 Jahre", y2_5: "2–5 Jahre", under_2: "Unter 2 Jahre" },
    b5_language_level: "Deutschkenntnisse",
  },
  branch_names: { b1: "Kurzaufenthalt / Familie", b2: "Arbeit", b3: "Studium", b4: "Statuswechsel", b5: "Unternehmerische Migration" },
};

export const DICTIONARIES: Record<Locale, Dict> = { ru, en, de };

