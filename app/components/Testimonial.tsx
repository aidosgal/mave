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

const reviews = [
  {
    initial: "Д",
    name: "Дмитрий Ковалёв",
    procedure: "Отбеливание зубов",
    text: "Уже через час улыбка стала на несколько тонов светлее. Врачи объяснили каждый шаг процедуры — никаких сюрпризов.",
  },
  {
    initial: "З",
    name: "Зарина Нурланова",
    procedure: "Брекеты",
    text: "Год лечения — и результат потрясающий. Команда всегда на связи, отвечают на любые вопросы быстро.",
  },
  {
    initial: "М",
    name: "Михаил Петров",
    procedure: "Протезирование",
    text: "Профессиональный подход с первого визита. Мне сделали красивую улыбку — именно то, о чём я мечтал.",
  },
  {
    initial: "С",
    name: "Сауле Бекова",
    procedure: "Детская стоматология",
    text: "Дочь раньше боялась врачей, а теперь сама просится на приём! Детский кабинет — просто волшебство.",
  },
  {
    initial: "Р",
    name: "Руслан Ахметов",
    procedure: "Имплантация",
    text: "Восстановление прошло без осложнений. Полный контроль на каждом этапе — чувствую себя уверенно.",
  },
  {
    initial: "А",
    name: "Анна Соколова",
    procedure: "Виниры",
    text: "Виниры выглядят абсолютно натурально. Несколько подруг уже спросили, всегда ли у меня такая улыбка.",
  },
];

export default function Testimonial() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="отзывы"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-24 lg:py-[120px]"
      style={{
        background: "#F7F6F2",
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

        {/* Featured quote */}
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
          Команда Mavi — это совсем другой уровень заботы
          <br />
          и профессионализма.
        </blockquote>

        {/* Featured author */}
        <div className="flex items-center gap-4 mb-20">
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
          <div className="ml-auto hidden sm:flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#4F6EF7", fontSize: "16px" }}>★</span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "64px" }} />

        {/* Review cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "32px",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: "#4F6EF7", fontSize: "13px" }}>★</span>
                ))}
              </div>

              {/* Review text */}
              <p
                className="font-sans"
                style={{
                  fontSize: "15px",
                  color: "#3A3D52",
                  lineHeight: "1.65",
                  flexGrow: 1,
                  marginBottom: "28px",
                }}
              >
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full flex items-center justify-center font-display font-bold text-white flex-shrink-0"
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "linear-gradient(135deg, #4F6EF7, #00E5C3)",
                    fontSize: "14px",
                  }}
                >
                  {review.initial}
                </div>
                <div>
                  <p
                    className="font-sans font-medium"
                    style={{ fontSize: "14px", color: "#0D0E1A" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "12px", color: "#8B8FA8" }}
                  >
                    {review.procedure}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
