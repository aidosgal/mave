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

export default function Testimonial() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="отзывы"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#F7F6F2",
        padding: "120px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2 mb-12">
          <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
          <span
            className="font-sans font-medium tracking-[0.18em] uppercase"
            style={{ fontSize: "11px", color: "#4F6EF7" }}
          >
            Отзывы
          </span>
        </div>

        {/* Giant decorative quote mark */}
        <div
          className="font-display font-black leading-none select-none"
          style={{
            fontSize: "clamp(80px, 14vw, 180px)",
            color: "#4F6EF7",
            opacity: 0.12,
            lineHeight: 0.8,
            marginBottom: "-0.2em",
            userSelect: "none",
          }}
        >
          "
        </div>

        {/* Quote text */}
        <blockquote
          className="font-display font-semibold italic"
          style={{
            fontSize: "clamp(22px, 3.5vw, 42px)",
            color: "#0D0E1A",
            lineHeight: "1.25",
            letterSpacing: "-0.01em",
            maxWidth: "900px",
            marginBottom: "48px",
          }}
        >
          Впервые в жизни я не боялся идти к стоматологу.
          <br />
          Команда Mave — это совсем другой уровень заботы
          <br />
          и профессионализма.
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div
            className="rounded-full flex items-center justify-center font-display font-bold text-white"
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #4F6EF7, #00E5C3)",
              fontSize: "18px",
              flexShrink: 0,
            }}
          >
            А
          </div>
          <div>
            <p
              className="font-sans font-medium"
              style={{ fontSize: "15px", color: "#0D0E1A" }}
            >
              Алия Сейтова
            </p>
            <p
              className="font-sans"
              style={{ fontSize: "13px", color: "#8B8FA8" }}
            >
              Пациент клиники, имплантация
            </p>
          </div>

          {/* Stars */}
          <div className="ml-auto hidden sm:flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#4F6EF7", fontSize: "16px" }}>★</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
