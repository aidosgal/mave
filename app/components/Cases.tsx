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
    accentRgb: "79,110,247",
    result: "Полное восстановление",
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
    accent: "#F59E0B",
    accentRgb: "245,158,11",
    result: "Идеальная эстетика",
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
    accent: "#8B5CF6",
    accentRgb: "139,92,246",
    result: "Ровный прикус",
  },
];

function useScrollReveal(threshold = 0.1) {
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
  accentRgb,
  result,
  index,
  visible,
}: (typeof CASES)[number] & { index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        border: `1px solid ${hovered ? `rgba(${accentRgb},0.4)` : "#ECEAE4"}`,
        borderRadius: "20px",
        overflow: "hidden",
        transition:
          "border-color 0.4s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, opacity 0.7s ease",
        transitionDelay: `${index * 0.12}s`,
        transform: visible
          ? hovered
            ? "translateY(-10px) scale(1.02)"
            : "translateY(0) scale(1)"
          : "translateY(32px) scale(0.98)",
        opacity: visible ? 1 : 0,
        boxShadow: hovered
          ? `0 24px 70px -10px rgba(${accentRgb},0.18), 0 0 0 1px rgba(${accentRgb},0.12)`
          : "0 2px 20px rgba(13,14,26,0.06)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Visual header */}
      <div
        style={{
          height: "210px",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, rgba(${accentRgb},0.08) 0%, rgba(${accentRgb},0.03) 55%, transparent 100%)`,
          flexShrink: 0,
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(${accentRgb},0.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(${accentRgb},0.09) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Fade grid into white at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "90px",
            background: "linear-gradient(to bottom, transparent, #ffffff)",
            pointerEvents: "none",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: "38%",
            transform: "translate(-50%, -50%)",
            width: "210px",
            height: "210px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${accentRgb},0.14) 0%, transparent 68%)`,
            opacity: hovered ? 1 : 0.55,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Oversized case number */}
        <div
          className="font-display"
          style={{
            position: "absolute",
            bottom: "-14px",
            right: "14px",
            fontSize: "130px",
            fontWeight: 900,
            color: `rgba(${accentRgb},0.2)`,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            userSelect: "none",
            transition: "transform 0.45s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        >
          {id}
        </div>

        {/* Tag pill */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: `rgba(${accentRgb},0.1)`,
            border: `1px solid rgba(${accentRgb},0.24)`,
            color: accent,
            fontSize: "10.5px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "5px 12px 5px 9px",
            borderRadius: "6px",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 7px ${accent}`,
              flexShrink: 0,
            }}
          />
          {tag}
        </div>

        {/* Result badge */}
        <div
          className="font-sans"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            background: "rgba(13,14,26,0.04)",
            border: "1px solid rgba(13,14,26,0.08)",
            color: "#8B8FA8",
            fontSize: "10px",
            fontWeight: 500,
            padding: "4px 10px",
            borderRadius: "6px",
          }}
        >
          ✓ {result}
        </div>

        {/* Accent bottom divider */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent 0%, rgba(${accentRgb},0.5) 50%, transparent 100%)`,
            opacity: hovered ? 1 : 0.3,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>

      {/* Body */}
      <div
        style={{
          padding: "24px 24px 22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          className="font-display"
          style={{
            fontWeight: 800,
            fontSize: "21px",
            color: "#0D0E1A",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "12px",
          }}
        >
          {title}
        </h3>

        <p
          className="font-sans"
          style={{
            fontSize: "13.5px",
            color: "#8B8FA8",
            lineHeight: 1.75,
            flex: 1,
            marginBottom: "24px",
          }}
        >
          {description}
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #ECEAE4",
            paddingTop: "18px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "0 8px",
                borderRight: i < 2 ? "1px solid #ECEAE4" : "none",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontWeight: 900,
                  fontSize: "22px",
                  color: accent,
                  lineHeight: 1,
                  marginBottom: "5px",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div
                className="font-sans"
                style={{
                  fontSize: "10.5px",
                  color: "#B0B4C8",
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
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
        background: "#F7F6F2",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle ambient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,110,247,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-160px",
          width: "580px",
          height: "580px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.85s ease, transform 0.85s ease",
          }}
        >
          <div className="lg:col-span-2">
            {/* Section label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(79,110,247,0.08)",
                border: "1px solid rgba(79,110,247,0.2)",
                borderRadius: "8px",
                padding: "6px 14px 6px 10px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4F6EF7",
                  boxShadow: "0 0 10px rgba(79,110,247,0.7)",
                }}
              />
              <span
                className="font-sans"
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#4F6EF7",
                }}
              >
                Наши кейсы
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontWeight: 900,
                fontSize: "clamp(38px, 4.5vw, 58px)",
                lineHeight: "1.0",
                letterSpacing: "-0.025em",
                color: "#0D0E1A",
              }}
            >
              Результаты,
              <br />
              которые{" "}
              <span
                style={
                  {
                    background:
                      "linear-gradient(120deg, #4F6EF7 0%, #8B5CF6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  } as React.CSSProperties
                }
              >
                говорят
              </span>
              <br />
              сами за себя
            </h2>
          </div>

          <div className="lg:col-span-3 flex items-end">
            <div>
              <p
                className="font-sans"
                style={{
                  fontSize: "16px",
                  color: "#8B8FA8",
                  lineHeight: "1.75",
                  maxWidth: "480px",
                  marginBottom: "36px",
                }}
              >
                Каждый случай уникален. Ниже — реальные истории наших пациентов
                с конкретными, измеримыми результатами.
              </p>

              {/* Trust numbers */}
              <div style={{ display: "flex", gap: "40px" }}>
                {[
                  { value: "1200+", label: "успешных случаев" },
                  { value: "98%", label: "довольных пациентов" },
                ].map((item, i) => (
                  <div key={i}>
                    <div
                      className="font-display"
                      style={{
                        fontWeight: 900,
                        fontSize: "32px",
                        color: "#0D0E1A",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        marginBottom: "5px",
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="font-sans"
                      style={{
                        fontSize: "12px",
                        color: "#8B8FA8",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <CaseCard key={c.id} {...c} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
