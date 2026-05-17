"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(24,26,51,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Image
          src="/logo.png"
          alt="Mave Dental"
          width={160}
          height={54}
          style={{ width: "auto", height: "44px" }}
          priority
        />

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

        <button
          className="font-sans font-medium text-[14px] text-white px-6 py-3 rounded-[6px] transition-all duration-200"
          style={{ background: "#4F6EF7" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#3d5ce8";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#4F6EF7";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Записаться
        </button>
      </div>
    </nav>
  );
}
