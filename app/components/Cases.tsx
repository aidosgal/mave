"use client";
import { useEffect, useRef, useState } from "react";

const CASES = [
  {
    id: "01",
    tag: "Имплантация",
    title: "Полное восстановление улыбки",
    description:
      "Пациент обратился с отсутствием 6 зубов после травмы. За 3 месяца установили имплантаты Nobel Biocare с постоянными коронками.",
    stats: [
      { value: "6", label: "имплантатов" },
      { value: "3 мес", label: "срок лечения" },
      { value: "10 лет", label: "гарантия" },
    ],
    accent: "#4F6EF7",
  },
  {
    id: "02",
    tag: "Эстетика",
    title: "Голливудская улыбка за 2 визита",
    description:
      "Пациентка хотела скрыть трещины и неравномерный цвет зубов. Установили 10 тончайших фарфоровых виниров без болезненного препарирования.",
    stats: [
      { value: "10", label: "виниров" },
      { value: "2 визита", label: "весь процесс" },
      { value: "E1", label: "оттенок VITA" },
    ],
    accent: "#00E5C3",
  },
  {
    id: "03",
    tag: "Ортодонтия",
    title: "Ровный прикус без брекетов",
    description:
      "Исправили скученность зубов и неправильный прикус с помощью 24 элайнеров Invisalign. Результат закреплён ретейнерами.",
    stats: [
      { value: "24", label: "элайнера" },
      { value: "14 мес", label: "курс лечения" },
      { value: "0", label: "видимых конструкций" },
    ],
    accent: "#4F6EF7",
  },
];

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function CaseCard({
  id,
  tag,
  title,
  description,
  stats,
  accent,
  delay,
}: (typeof CASES)[number] & { delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        border: `1px solid ${hovered ? accent : "#E8E7E3"}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "border-color 0.25s ease, transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 60px -12px ${accent}26`
          : "0 2px 12px -4px rgba(13,14,26,0.06)",
        position: "relative",
      }}
    >
      {/* Top gradient bar */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(to right, ${accent}, ${accent === "#4F6EF7" ? "#00E5C3" : "#4F6EF7"})`,
        }}
      />

      <div style={{ padding: "32px 28px 28px" }}>
        {/* Tag + case number */}
        <div className="flex items-center justify-between mb-7">
          <span
            className="font-sans font-semibold"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: accent,
              background: accent === "#4F6EF7" ? "rgba(79,110,247,0.08)" : "rgba(0,229,195,0.1)",
              padding: "5px 12px",
              borderRadius: "4px",
            }}
          >
            {tag}
          </span>
          <span
            className="font-display font-black"
            style={{ fontSize: "36px", color: "#F0EFE9", lineHeight: 1 }}
          >
            {id}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold mb-4"
          style={{
            fontSize: "21px",
            color: "#0D0E1A",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="font-sans mb-8"
          style={{ fontSize: "14px", color: "#8B8FA8", lineHeight: "1.75" }}
        >
          {description}
        </p>

        {/* Stats */}
        <div
          style={{
            borderTop: "1px solid #E8E7E3",
            paddingTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                borderRight: i < 2 ? "1px solid #E8E7E3" : "none",
                padding: i === 0 ? "0 12px 0 0" : i === 1 ? "0 12px" : "0 0 0 12px",
                textAlign: i === 1 ? "center" : i === 2 ? "right" : "left",
              }}
            >
              <div
                className="font-display font-black"
                style={{
                  fontSize: "22px",
                  color: accent,
                  lineHeight: 1,
                  marginBottom: "5px",
                }}
              >
                {s.value}
              </div>
              <div
                className="font-sans"
                style={{ fontSize: "11px", color: "#8B8FA8", lineHeight: 1.4 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="кейсы"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#ffffff",
        padding: "120px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
              <span
                className="font-sans font-medium tracking-[0.18em] uppercase"
                style={{ fontSize: "11px", color: "#4F6EF7" }}
              >
                Наши кейсы
              </span>
            </div>
            <h2
              className="font-display font-black"
              style={{
                fontSize: "clamp(38px, 4.5vw, 58px)",
                lineHeight: "1.0",
                color: "#0D0E1A",
                letterSpacing: "-0.02em",
              }}
            >
              Результаты,
              <br />
              которые{" "}
              <span style={{ color: "#4F6EF7" }}>говорят</span>
              <br />
              сами за себя
            </h2>
          </div>
          <div className="lg:col-span-3 flex items-end">
            <p
              className="font-sans"
              style={{
                fontSize: "16px",
                color: "#8B8FA8",
                lineHeight: "1.7",
                maxWidth: "480px",
              }}
            >
              Каждый случай уникален. Ниже — реальные истории наших пациентов
              с конкретными, измеримыми результатами.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <CaseCard key={c.id} {...c} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
