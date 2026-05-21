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
    initial: "В",
    name: "Виктория Курмалеева",
    procedure: "Установка коронки",
    text: "От всей души благодарю клинику за профессионализм и тёплое отношение. Врач Гамара Бахмановна — очень внимательная и чуткая, лечение максимально комфортное. Дидар Накенович установил коронку идеально. Теперь только к вам!",
  },
  {
    initial: "S",
    name: "Sergey Lapkin",
    procedure: "Удаление зуба",
    text: "Рекомендую клинику всем! Доктор Саидин Небиевич — мастер своего дела, удаление зуба прошло абсолютно безболезненно. Всё супер и цены приемлемые.",
  },
  {
    initial: "R",
    name: "Roza Suleimenova",
    procedure: "Общая стоматология",
    text: "Очень хорошая клиника, уже три года хожу сюда. Вежливое отношение к клиентам, уютная атмосфера.",
  },
  {
    initial: "E",
    name: "E-ONE-OFF",
    procedure: "Общая стоматология",
    text: "Высококлассный сервис, пожалуй, лучший в городе. Всегда слышат и заботятся о клиенте, начиная с первого звонка и на протяжении всего приёма. Рекомендую от души!",
  },
  {
    initial: "A",
    name: "Ann Avi",
    procedure: "Удаление зубов мудрости, брекеты",
    text: "В восторге от профессионализма специалистов! Удаление зубов мудрости у доктора Сидина Набиевича — на высшем уровне. Брекеты у доктора Мушвига Афатовича — шикарный результат. Теперь эта клиника — моя смелая рекомендация всем!",
  },
  {
    initial: "С",
    name: "Севинч Ахмедова",
    procedure: "Удаление зубов мудрости",
    text: "Удалила два зуба мудрости у хирурга Мушвига Афатоглы — процедуры прошли абсолютно безболезненно, отёка практически не было. Самые лучшие специалисты!",
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
          Не могу отличить пломбу от своего зуба —
          <br />
          вот что значит настоящий профессионализм.
          <br />
          Рекомендую от всей души.
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
            I
          </div>
          <div>
            <p
                className="font-sans font-medium"
                style={{ fontSize: "15px", color: "#0D0E1A" }}
            >
              Ismail
            </p>
            <p
                className="font-sans"
                style={{ fontSize: "13px", color: "#8B8FA8" }}
            >
              Пациент клиники, лечение кариеса
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

        {/* 2GIS CTA */}
        <div className="flex flex-col items-center mt-20 gap-4">
          <p className="font-sans" style={{ fontSize: "13px", color: "#8B8FA8", letterSpacing: "0.02em" }}>
            Ещё больше отзывов наших пациентов
          </p>
          <a
            href="https://2gis.kz/karaganda/geo/70000001105620243"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 20px 56px rgba(11, 191, 111, 0.55), 0 6px 20px rgba(11, 191, 111, 0.3)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 10px 40px rgba(11, 191, 111, 0.38), 0 4px 12px rgba(11, 191, 111, 0.2)";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "20px",
              background: "linear-gradient(135deg, #0BBF6F 0%, #00D48D 55%, #00BFA0 100%)",
              borderRadius: "18px",
              padding: "18px 32px",
              textDecoration: "none",
              boxShadow: "0 10px 40px rgba(11, 191, 111, 0.38), 0 4px 12px rgba(11, 191, 111, 0.2)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Shine overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
              borderRadius: "18px",
              pointerEvents: "none",
            }} />

            {/* 2GIS logo badge */}
            <div style={{
              background: "rgba(255,255,255,0.2)",
              borderRadius: "12px",
              padding: "10px 16px",
              border: "1.5px solid rgba(255,255,255,0.45)",
              flexShrink: 0,
              zIndex: 1,
            }}>
              <span style={{ fontWeight: 900, fontSize: "18px", color: "white", letterSpacing: "-0.3px" }}>
                2GIS
              </span>
            </div>

            {/* Text */}
            <div style={{ zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "5px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "rgba(255,255,255,0.95)", fontSize: "14px" }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.2 }}>
                Все отзывы о MAVI
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", margin: "3px 0 0 0" }}>
                Открыть на 2GIS
              </p>
            </div>

            {/* Arrow */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              style={{ flexShrink: 0, zIndex: 1, opacity: 0.85 }}
            >
              <path d="M4.5 11h13M12 5l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
