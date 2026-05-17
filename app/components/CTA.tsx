"use client";
import { useEffect, useRef, useState } from "react";

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

export default function CTA() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="контакты"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{
        background: "#181A33",
        padding: "140px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      {/* Background blob */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle at center, #4F6EF7 0%, transparent 65%)",
          opacity: 0.12,
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
          <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
          <span
            className="font-sans font-medium tracking-[0.18em] uppercase"
            style={{ fontSize: "11px", color: "#4F6EF7" }}
          >
            Начните сегодня
          </span>
        </div>

        <h2
          className="font-display font-black text-white mb-8"
          style={{
            fontSize: "clamp(48px, 8vw, 110px)",
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
          }}
        >
          Запишитесь
          <br />
          <span style={{ color: "#4F6EF7" }}>сегодня</span>
        </h2>

        <p
          className="font-sans mb-12 mx-auto"
          style={{
            fontSize: "17px",
            color: "#8B8FA8",
            lineHeight: "1.7",
            maxWidth: "480px",
          }}
        >
          Первичная консультация бесплатно.
          Мы перезвоним в течение 15 минут.
        </p>

        <button
          className="font-sans font-medium text-white transition-all duration-200 mb-10"
          style={{
            background: "#4F6EF7",
            fontSize: "16px",
            padding: "20px 48px",
            borderRadius: "6px",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#3d5ce8";
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#4F6EF7";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Записаться на приём
        </button>

        <div>
          <a
            href="tel:+77001234567"
            className="font-sans transition-colors duration-200"
            style={{ fontSize: "15px", color: "#8B8FA8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8B8FA8")}
          >
            +7 (700) 123-45-67
          </a>
        </div>

        {/* Bottom separator */}
        <div
          className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="font-sans" style={{ fontSize: "13px", color: "#8B8FA8" }}>
            © 2025 Mave Dental. Все права защищены.
          </p>
          <p className="font-sans" style={{ fontSize: "13px", color: "#8B8FA8" }}>
            Алматы, ул. Абая 12, этаж 3
          </p>
        </div>
      </div>
    </section>
  );
}
