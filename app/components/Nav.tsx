"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const TICKER_ITEMS = [
  { label: "Имплантация зубов", price: "от 80 000 ₸" },
  { label: "All-on-4", price: "820 000 ₸" },
];

function Ticker() {
  return (
    <div style={{ background: "#4F6EF7", overflow: "hidden", padding: "9px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          animation: "marquee 22s linear infinite",
        }}
      >
        {[0, 1].map((copy) => (
          <span
            key={copy}
            style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {Array.from({ length: 8 }, (_, i) => {
              const item = TICKER_ITEMS[i % TICKER_ITEMS.length];
              return (
                <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span
                    className="font-sans"
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-sans font-bold"
                    style={{ fontSize: "13px", color: "#ffffff", whiteSpace: "nowrap", marginLeft: "8px" }}
                  >
                    {item.price}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.35)",
                      margin: "0 40px",
                      flexShrink: 0,
                    }}
                  />
                </span>
              );
            })}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Ticker />
    <nav
      className="transition-all duration-300"
      style={{
        background: scrolled ? "rgba(24,26,51,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-24">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MAVI clinic"
            width={200}
            height={68}
            style={{ width: "auto", height: "62px" }}
            priority
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Услуги", "О нас", "Врачи", "Отзывы", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-[14px] transition-colors duration-200"
              style={{ color: "#8B8FA8" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#8B8FA8")
              }
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/77473674734"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans font-medium text-[14px] text-white px-6 py-3 rounded-[6px] transition-all duration-200"
          style={{ background: "#4F6EF7", display: "inline-block" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#3d5ce8";
            (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#4F6EF7";
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          Записаться
        </a>
      </div>
    </nav>
    </div>
  );
}
