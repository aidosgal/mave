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
        label: "Десна в процессе заживления",
        slug: "in_progress",
        images: [
          { src: "/cases/1/in_progress/1.png", alt: "Десна в процессе заживления" },
        ],
      },
      {
        label: "С временными",
        slug: "temporal",
        images: [
          { src: "/cases/1/temporal/1.png", alt: "С временными коронками — вид 1" },
          { src: "/cases/1/temporal/2.png", alt: "С временными коронками — вид 2" },
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
    title: "Голливудская улыбка за 2 визита",
    description:
      "Пациентка хотела скрыть трещины и неравномерный цвет зубов. Установили 10 тончайших фарфоровых виниров без болезненного препарирования.",
    stats: [
      { value: "10", label: "виниров" },
      { value: "2 визита", label: "весь процесс" },
      { value: "E1", label: "оттенок VITA" },
    ],
    accent: "#F59E0B",
    accentRgb: "245,158,11",
    result: "Идеальная эстетика",
    phases: [],
  },
  {
    id: "3",
    tag: "Ортодонтия",
    title: "Ровный прикус без брекетов",
    description:
      "Исправили скученность зубов и неправильный прикус с помощью 24 элайнеров Invisalign. Результат закреплён ретейнерами.",
    stats: [
      { value: "24", label: "элайнера" },
      { value: "14 мес", label: "курс лечения" },
      { value: "0", label: "видимых конструкций" },
    ],
    accent: "#8B5CF6",
    accentRgb: "139,92,246",
    result: "Ровный прикус",
    phases: [],
  },
];
