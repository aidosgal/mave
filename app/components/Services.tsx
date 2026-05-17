"use client";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { num: "01", name: "Имплантация зубов", desc: "Постоянное решение для восстановления зубного ряда" },
  { num: "02", name: "Ортодонтическое лечение", desc: "Брекеты, элайнеры, ретейнеры" },
  { num: "03", name: "Эстетическая реставрация", desc: "Виниры, коронки, отбеливание" },
  { num: "04", name: "Профессиональная гигиена", desc: "Чистка, полировка, фторирование" },
  { num: "05", name: "Лечение корневых каналов", desc: "Эндодонтия под микроскопом" },
  { num: "06", name: "Детская стоматология", desc: "Бережное лечение от 3 лет" },
];

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ServiceRow({ num, name, desc, index }: (typeof SERVICES)[number] & { index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid #E8E7E3",
        padding: "28px 0",
        transition: "all 0.2s ease",
      }}
    >
      {/* Hover bg stripe */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(79,110,247,0.04)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          borderLeft: hovered ? "3px solid #4F6EF7" : "3px solid transparent",
        }}
      />
      <div className="relative flex items-center gap-6 px-1">
        <span
          className="font-sans font-medium shrink-0 transition-colors duration-200"
          style={{ fontSize: "12px", color: hovered ? "#4F6EF7" : "#8B8FA8" }}
        >
          {num}
        </span>

        <div className="flex-1 min-w-0">
          <p
            className="font-display font-semibold transition-colors duration-200"
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              color: hovered ? "#4F6EF7" : "#0D0E1A",
              marginBottom: "4px",
            }}
          >
            {name}
          </p>
          <p
            className="font-sans transition-colors duration-200"
            style={{ fontSize: "14px", color: "#8B8FA8" }}
          >
            {desc}
          </p>
        </div>

        {/* Arrow */}
        <span
          className="font-sans font-medium shrink-0 transition-all duration-200"
          style={{
            fontSize: "20px",
            color: "#4F6EF7",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-10px)",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="услуги"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#F7F6F2",
        padding: "120px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-2 mb-6">
              <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
              <span
                className="font-sans font-medium tracking-[0.18em] uppercase"
                style={{ fontSize: "11px", color: "#4F6EF7" }}
              >
                Что мы делаем
              </span>
            </div>

            <h2
              className="font-display font-black mb-6"
              style={{
                fontSize: "clamp(38px, 4.5vw, 58px)",
                lineHeight: "1.0",
                color: "#0D0E1A",
                letterSpacing: "-0.02em",
              }}
            >
              Мы делаем
              <br />
              это лучше
              <br />
              <span style={{ color: "#4F6EF7" }}>всех</span>
            </h2>

            <p
              className="font-sans"
              style={{ fontSize: "16px", color: "#8B8FA8", lineHeight: "1.7" }}
            >
              Каждое лечение — это продуманный процесс от диагностики до результата, без компромиссов.
            </p>
          </div>

          {/* Right – services list */}
          <div className="lg:col-span-3">
            <div style={{ borderTop: "1px solid #E8E7E3" }}>
              {SERVICES.map((s, i) => (
                <ServiceRow key={s.num} {...s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
