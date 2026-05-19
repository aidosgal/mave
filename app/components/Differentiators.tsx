"use client";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="4" x2="14" y2="0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="28" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="14" x2="0" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Инновационные технологии",
    desc: "3D-диагностика и цифровое планирование каждого лечения с точностью до 0.01 мм.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2 L25 7 L25 17 C25 22 20.5 25.5 14 27 C7.5 25.5 3 22 3 17 L3 7 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 15 L13 18 L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Команда экспертов",
    desc: "Специалисты с международной сертификацией и опытом работы от 10 лет.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8 L10 6 C10 4.3 11.3 3 13 3 L15 3 C16.7 3 18 4.3 18 6 L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="13" x2="14" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Комфорт и безопасность",
    desc: "Безболезненное лечение в полностью стерильных условиях. Анестезия без страха.",
  },
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

export default function Differentiators() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="о нас"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-24 lg:py-[120px]"
      style={{
        background: "#181A33",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-16 flex items-center gap-2">
          <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
          <span
            className="font-sans font-medium tracking-[0.18em] uppercase"
            style={{ fontSize: "11px", color: "#4F6EF7" }}
          >
            Почему мы
          </span>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="px-6 py-10 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
              style={{
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Icon */}
              <div className="mb-5 sm:mb-6" style={{ color: "#00E5C3" }}>
                {item.icon}
              </div>

              <h3
                className="font-display font-bold mb-3"
                style={{ fontSize: "19px", color: "#ffffff", letterSpacing: "-0.01em" }}
              >
                {item.title}
              </h3>
              <p
                className="font-sans"
                style={{ fontSize: "15px", color: "#8B8FA8", lineHeight: "1.7" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "0" }} />
      </div>
    </section>
  );
}
