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

const ToothIcon = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 22"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M3 7.5C3 4.5 5.7 2 9 2C12.3 2 15 4.5 15 7.5C15 10 13.5 13 12 15L10.5 18L9 15.5L7.5 18L6 15C4.5 13 3 10 3 7.5Z"
      stroke="#4F6EF7"
      strokeWidth="1.3"
      strokeLinejoin="round"
      strokeOpacity="0.55"
    />
    <line
      x1="9" y1="4.5" x2="9" y2="9"
      stroke="#00E5C3"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
  </svg>
);

function ServiceRow({ num, name, desc }: (typeof SERVICES)[number]) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid #E8E7E3",
        padding: "22px 0",
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
      <div className="relative flex items-center gap-4 px-1">
        <span
          className="font-sans font-medium shrink-0 transition-colors duration-200"
          style={{ fontSize: "11px", color: hovered ? "#4F6EF7" : "#8B8FA8", minWidth: "20px" }}
        >
          {num}
        </span>

        <ToothIcon />

        <div className="flex-1 min-w-0">
          <p
            className="font-display font-semibold transition-colors duration-200"
            style={{
              fontSize: "clamp(16px, 2.2vw, 24px)",
              color: hovered ? "#4F6EF7" : "#0D0E1A",
              marginBottom: "3px",
            }}
          >
            {name}
          </p>
          <p
            className="font-sans transition-colors duration-200"
            style={{ fontSize: "13px", color: "#8B8FA8" }}
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
      className="py-16 sm:py-24 lg:py-[120px]"
      style={{
        background: "#F7F6F2",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
              <span
                className="font-sans font-medium tracking-[0.18em] uppercase"
                style={{ fontSize: "11px", color: "#4F6EF7" }}
              >
                Стоматологические услуги
              </span>
            </div>

            <h2
              className="font-display font-black mb-5 sm:mb-6"
              style={{
                fontSize: "clamp(34px, 4.5vw, 58px)",
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
              style={{ fontSize: "15px", color: "#8B8FA8", lineHeight: "1.7" }}
            >
              Каждое лечение — это продуманный процесс от диагностики до результата, без компромиссов.
            </p>
          </div>

          {/* Right – services list */}
          <div className="lg:col-span-3">
            <div style={{ borderTop: "1px solid #E8E7E3" }}>
              {SERVICES.map((s) => (
                <ServiceRow key={s.num} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
