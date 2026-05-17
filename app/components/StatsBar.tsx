"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 98, suffix: "%", label: "довольных пациентов" },
  { value: 12, suffix: "+", label: "лет на рынке" },
  { value: 500, suffix: "+", label: "успешных имплантаций" },
  { value: 15, suffix: "", label: "врачей-специалистов" },
];

function useCounter(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return count;
}

function StatItem({ value, suffix, label }: (typeof STATS)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(value, 1800, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center lg:items-start px-8 py-10"
    >
      <span
        className="font-display font-black leading-none tracking-tight"
        style={{
          fontSize: "clamp(48px, 6vw, 100px)",
          color: "#0D0E1A",
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {count.toLocaleString("ru")}
        {suffix}
      </span>
      <span
        className="font-sans mt-2"
        style={{ fontSize: "14px", color: "#8B8FA8" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section style={{ background: "#ffffff", borderTop: "1px solid #E8E7E3", borderBottom: "1px solid #E8E7E3" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-soft-gray">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
