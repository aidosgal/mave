export type Phase = {
  label: string;
  slug: string;
  images: { src: string; alt: string }[];
};

export type CaseData = {
  id: string;
  tag: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  accent: string;
  accentRgb: string;
  result: string;
  phases: Phase[];
};

export const CASES: CaseData[] = [
  {
    id: "1",
    tag: "Имплантация",
    title: "Полное восстановление улыбки",
    description:
      "Пациентка обратилась с отсутствием зубов на верхней челюсти и съемным протезом.\n\nУстановили 6 имплантов MegaGen AnyRidge, через 3 дня зафиксировали несъёмные временные зубы на импланты, а спустя 3 месяца — постоянные эстетичные циркониевые коронки.",
    stats: [
      { value: "6", label: "имплантатов" },
      { value: "3 мес", label: "срок лечения" },
      { value: "14", label: "коронок из циркона" },
    ],
    accent: "#4F6EF7",
    accentRgb: "79,110,247",
    result: "Полное восстановление",
    phases: [
      {
        label: "До",
        slug: "before",
        images: [
          { src: "/cases/1/before/1.png", alt: "До лечения — вид 1" },
          { src: "/cases/1/before/2.png", alt: "До лечения — вид 2" },
        ],
      },
      {
        label: "Фиксация временных зубов на третий день",
        slug: "temporal",
        images: [
          { src: "/cases/1/temporal/1.png", alt: "С временными коронками — вид 1" },
          { src: "/cases/1/temporal/2.png", alt: "С временными коронками — вид 2" },
        ],
      },
      {
        label: "Десна в процессе заживления",
        slug: "in_progress",
        images: [
          { src: "/cases/1/in_progress/1.png", alt: "Десна в процессе заживления" },
        ],
      },
      {
        label: "Постоянные коронки на третий месяц",
        slug: "after",
        images: [
          { src: "/cases/1/after/1.png", alt: "Постоянные коронки на третий месяц" },
        ],
      },
    ],
  },
  {
    id: "2",
    tag: "Эстетика",
    title: "Голливудская улыбка за 7 коронок",
    description:
      "Пациентку не устраивали эстетика улыбки, сложность гигиены и постоянный запах из полости рта.\n\nПосле подготовки лечения и подготовки десны, мы изготовили 7 коронок из диоксида циркония — восстановив эстетику, комфорт и здоровье улыбки.",
    stats: [
      { value: "7", label: "коронок" },
      { value: "2 недели", label: "весь процесс" },
      { value: "A1", label: "оттенок VITA" },
    ],
    accent: "#F59E0B",
    accentRgb: "245,158,11",
    result: "Голливудская улыбка",
    phases: [
      {
        label: "Ситуация до лечения",
        slug: "before",
        images: [
          { src: "/cases/2/before/1.png", alt: "До лечения" },
        ],
      },
      {
        label: "Процесс подготовки десны и зубов под коронки",
        slug: "prep",
        images: [
          { src: "/cases/2/prep/1.png", alt: "Подготовка десны и зубов" },
        ],
      },
      {
        label: "Изготовленные коронки из диоксида циркония в цифровом протоколе",
        slug: "make",
        images: [
          { src: "/cases/2/make/1.png", alt: "Коронки из диоксида циркония" },
        ],
      },
      {
        label: "Финальный результат",
        slug: "result",
        images: [
          { src: "/cases/2/result/1.png", alt: "Финальный результат" },
        ],
      },
    ],
  },
  {
    id: "3",
    tag: "Ортодонтия",
    title: "Коррекция прикуса на брекет системе",
    description:
      "Исправление скученности зубов и неправильного прикуса с помощью брекет системы. Результат за 12 месяцев.",
    stats: [
      { value: "12", label: "месяцев лечения" },
      { value: "0", label: "дискомфорта" },
      { value: "1", label: "довольный пациент" },
    ],
    accent: "#8B5CF6",
    accentRgb: "139,92,246",
    result: "Ровный прикус",
    phases: [
      {
        label: "Процесс лечения: вид спереди",
        slug: "front",
        images: [
          { src: "/cases/3/front/1.png", alt: "Процесс лечения — вид спереди" },
        ],
      },
      {
        label: "Процесс лечения: вид сбоку",
        slug: "left",
        images: [
          { src: "/cases/3/left/1.png", alt: "Процесс лечения — вид сбоку" },
        ],
      },
    ],
  },
];
