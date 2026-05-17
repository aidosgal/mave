"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS } from "../lib/doctors-data";

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

function DoctorCard({
  doctor,
  index,
}: {
  doctor: (typeof DOCTORS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/doctors/${doctor.id}`}
      className="block"
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: hovered
            ? "rgba(79,110,247,0.08)"
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? "rgba(79,110,247,0.4)" : "rgba(255,255,255,0.07)"}`,
          borderRadius: "12px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "110%",
            overflow: "hidden",
            background: "#0D0E1A",
          }}
        >
          <Image
            src={`/doctor/${doctor.id}.png`}
            alt={doctor.name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              transition: "transform 0.4s ease",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(24,26,51,0.85) 0%, transparent 55%)",
            }}
          />
          {/* Experience badge */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "rgba(79,110,247,0.9)",
              borderRadius: "6px",
              padding: "4px 10px",
            }}
          >
            <span
              className="font-sans font-semibold"
              style={{ fontSize: "12px", color: "#fff" }}
            >
              {doctor.experience} лет
            </span>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "20px 24px 24px" }}>
          <p
            className="font-sans font-medium mb-1"
            style={{ fontSize: "12px", color: "#00E5C3", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            {doctor.specialty}
          </p>
          <h3
            className="font-display font-bold mb-4"
            style={{
              fontSize: "20px",
              color: "#ffffff",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {doctor.name}
          </h3>
          <div
            className="flex items-center gap-2"
            style={{
              color: hovered ? "#4F6EF7" : "#8B8FA8",
              transition: "color 0.2s ease",
            }}
          >
            <span className="font-sans" style={{ fontSize: "13px" }}>
              Подробнее
            </span>
            <span
              style={{
                fontSize: "16px",
                transform: hovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.2s ease",
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Doctors() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="врачи"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#181A33",
        padding: "120px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
              <span
                className="font-sans font-medium tracking-[0.18em] uppercase"
                style={{ fontSize: "11px", color: "#4F6EF7" }}
              >
                Наша команда
              </span>
            </div>
            <h2
              className="font-display font-black"
              style={{
                fontSize: "clamp(38px, 4.5vw, 58px)",
                lineHeight: "1.0",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Врачи, которым
              <br />
              вы доверяете{" "}
              <span style={{ color: "#4F6EF7" }}>улыбку</span>
            </h2>
          </div>
          <p
            className="font-sans lg:max-w-xs"
            style={{ fontSize: "15px", color: "#8B8FA8", lineHeight: "1.7" }}
          >
            Каждый специалист клиники — эксперт с международной подготовкой
            и&nbsp;многолетней практикой.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor, i) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
