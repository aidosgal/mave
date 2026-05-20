"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CASES } from "../lib/cases-data";

const BLUE = "#4F6EF7";
const BLUE_RGB = "79,110,247";

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

function DescriptionText({ text }: { text: string }) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {paragraphs.map((para, i) => (
        <p key={i} className="font-sans" style={{ fontSize: "13.5px", color: "#8B8FA8", lineHeight: 1.75, margin: 0 }}>
          {para}
        </p>
      ))}
    </div>
  );
}

/* ── Technical dental diagrams (hero blueprint style) ── */

function DiagramImplant() {
  return (
    <svg viewBox="0 0 140 225" width="118" height="160" fill="none" aria-hidden>
      <defs>
        <radialGradient id="impl-body" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.03" />
        </radialGradient>
        <linearGradient id="impl-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.22" />
        </linearGradient>
        <filter id="impl-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Radar rings */}
      <circle cx="70" cy="68" r="60" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="3 9" />
      <circle cx="70" cy="68" r="42" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="2 7" />

      {/* Axis guides */}
      <line x1="70" y1="8" x2="70" y2="218" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 7" />
      <line x1="10" y1="88" x2="130" y2="88" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.09" strokeDasharray="3 7" />

      {/* Tooth crown — fill */}
      <path
        d="M70 18 C57 18 46 26 42 38 Q36 31 28 36 C18 44 16 62 21 80 C26 97 35 110 41 120 L39 148 C38 156 44 159 48 154 L54 141 C57 134 62 129 70 129 C78 129 83 134 86 141 L92 154 C96 159 102 156 101 148 L99 120 C105 110 114 97 119 80 C124 62 122 44 112 36 Q104 31 98 38 C94 26 83 18 70 18Z"
        fill="url(#impl-body)"
      />
      {/* Tooth crown — outline */}
      <path
        d="M70 18 C57 18 46 26 42 38 Q36 31 28 36 C18 44 16 62 21 80 C26 97 35 110 41 120 L39 148 C38 156 44 159 48 154 L54 141 C57 134 62 129 70 129 C78 129 83 134 86 141 L92 154 C96 159 102 156 101 148 L99 120 C105 110 114 97 119 80 C124 62 122 44 112 36 Q104 31 98 38 C94 26 83 18 70 18Z"
        stroke="url(#impl-stroke)"
        strokeWidth="1.3"
      />

      {/* Crown / root divider */}
      <line x1="39" y1="132" x2="101" y2="132" stroke="#4F6EF7" strokeWidth="0.7" strokeOpacity="0.3" strokeDasharray="4 5" />

      {/* Inner canal */}
      <path d="M70 36 C73 58 73 100 71 128" stroke="#00E5C3" strokeWidth="0.7" strokeOpacity="0.32" strokeLinecap="round" strokeDasharray="3 5" />

      {/* Cusp highlight lines */}
      <path d="M42 38 C52 28 62 22 70 18" stroke="#4F6EF7" strokeWidth="0.7" strokeOpacity="0.38" strokeLinecap="round" />
      <path d="M98 38 C88 28 78 22 70 18" stroke="#4F6EF7" strokeWidth="0.7" strokeOpacity="0.38" strokeLinecap="round" />

      {/* Implant post body */}
      <rect x="62" y="154" width="16" height="50" rx="8" fill="#4F6EF7" fillOpacity="0.12" stroke="#4F6EF7" strokeWidth="1.1" strokeOpacity="0.45" />

      {/* Thread lines */}
      {[162, 170, 178, 186, 194].map((y) => (
        <line key={y} x1="59" y1={y} x2="81" y2={y} stroke="#4F6EF7" strokeWidth="0.9" strokeOpacity="0.28" strokeLinecap="round" />
      ))}

      {/* Post tip */}
      <path d="M62 204 L70 213 L78 204" fill="none" stroke="#4F6EF7" strokeWidth="0.9" strokeOpacity="0.45" strokeLinejoin="round" />

      {/* Bone level line */}
      <path d="M18 158 Q70 152 122 158" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="2 5" fill="none" />
      <text x="124" y="156" fill="#4F6EF7" fillOpacity="0.3" fontSize="5.5" fontFamily="monospace">BONE</text>

      {/* Glow nodes — cusps */}
      <circle cx="42" cy="38" r="4.5" fill="#4F6EF7" fillOpacity="0.82" filter="url(#impl-glow)" />
      <circle cx="70" cy="18" r="5.5" fill="#00E5C3" fillOpacity="0.88" filter="url(#impl-glow)" />
      <circle cx="98" cy="38" r="4.5" fill="#4F6EF7" fillOpacity="0.82" filter="url(#impl-glow)" />

      {/* Root tips */}
      <circle cx="54" cy="154" r="3" fill="#4F6EF7" fillOpacity="0.45" />
      <circle cx="86" cy="154" r="3" fill="#4F6EF7" fillOpacity="0.45" />

      {/* Post tip node */}
      <circle cx="70" cy="213" r="3" fill="#4F6EF7" fillOpacity="0.5" />

      {/* Left dimension bar */}
      <line x1="6" y1="18" x2="14" y2="18" stroke="#4F6EF7" strokeWidth="0.6" strokeOpacity="0.38" />
      <line x1="6" y1="213" x2="14" y2="213" stroke="#4F6EF7" strokeWidth="0.6" strokeOpacity="0.38" />
      <line x1="6" y1="18" x2="6" y2="213" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="2 4" />

      {/* Label */}
      <text x="133" y="10" fill="#00E5C3" fillOpacity="0.55" fontSize="6.5" fontFamily="monospace" textAnchor="end">IMPL:OK</text>
    </svg>
  );
}

function DiagramVeneer() {
  return (
    <svg viewBox="0 0 140 190" width="118" height="145" fill="none" aria-hidden>
      <defs>
        <radialGradient id="ven-body" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.17" />
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.03" />
        </radialGradient>
        <radialGradient id="ven-shine" cx="28%" cy="22%" r="58%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.02" />
        </radialGradient>
        <linearGradient id="ven-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.22" />
        </linearGradient>
        <filter id="ven-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Radar rings */}
      <circle cx="70" cy="72" r="62" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.07" strokeDasharray="3 9" />
      <circle cx="70" cy="72" r="44" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.05" strokeDasharray="2 7" />

      {/* Axis guides */}
      <line x1="70" y1="8" x2="70" y2="182" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 7" />
      <line x1="8" y1="90" x2="132" y2="90" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.09" strokeDasharray="3 7" />

      {/* Tooth body fill */}
      <path
        d="M70 20 C58 20 48 27 44 38 Q38 32 32 35 C22 43 20 59 24 76 C28 91 36 103 42 112 L40 143 C39 151 44 154 48 150 L53 138 C56 131 61 126 70 126 C79 126 84 131 87 138 L92 150 C96 154 101 151 100 143 L98 112 C104 103 112 91 116 76 C120 59 118 43 108 35 Q102 32 96 38 C92 27 82 20 70 20Z"
        fill="url(#ven-body)"
      />
      <path
        d="M70 20 C58 20 48 27 44 38 Q38 32 32 35 C22 43 20 59 24 76 C28 91 36 103 42 112 L40 143 C39 151 44 154 48 150 L53 138 C56 131 61 126 70 126 C79 126 84 131 87 138 L92 150 C96 154 101 151 100 143 L98 112 C104 103 112 91 116 76 C120 59 118 43 108 35 Q102 32 96 38 C92 27 82 20 70 20Z"
        stroke="url(#ven-stroke)"
        strokeWidth="1.3"
      />

      {/* Veneer face overlay */}
      <path
        d="M70 27 C62 27 55 33 52 43 C49 53 50 65 53 76 C56 86 61 95 64 102 C66 108 68 112 70 112 C72 112 74 108 76 102 C79 95 84 86 87 76 C90 65 91 53 88 43 C85 33 78 27 70 27Z"
        fill="url(#ven-shine)"
        stroke="white"
        strokeWidth="0.9"
        strokeOpacity="0.3"
      />

      {/* Shine arc on veneer */}
      <path d="M52 48 C59 37 74 31 86 36" stroke="white" strokeWidth="2.2" strokeOpacity="0.38" strokeLinecap="round" />

      {/* Cusp lines */}
      <path d="M44 38 C52 28 62 22 70 20" stroke="#4F6EF7" strokeWidth="0.7" strokeOpacity="0.38" strokeLinecap="round" />
      <path d="M96 38 C88 28 78 22 70 20" stroke="#4F6EF7" strokeWidth="0.7" strokeOpacity="0.38" strokeLinecap="round" />

      {/* Cusp glow nodes */}
      <circle cx="44" cy="38" r="4.5" fill="#4F6EF7" fillOpacity="0.82" filter="url(#ven-glow)" />
      <circle cx="70" cy="20" r="5.5" fill="#00E5C3" fillOpacity="0.88" filter="url(#ven-glow)" />
      <circle cx="96" cy="38" r="4.5" fill="#4F6EF7" fillOpacity="0.82" filter="url(#ven-glow)" />

      {/* Sparkle — top right (4-point star) */}
      <path d="M118 22 L119.8 28 L126 30 L119.8 32 L118 38 L116.2 32 L110 30 L116.2 28Z" fill="#4F6EF7" fillOpacity="0.42" />
      {/* Sparkle — top left (smaller) */}
      <path d="M20 28 L21.2 32 L25 33.5 L21.2 35 L20 39 L18.8 35 L15 33.5 L18.8 32Z" fill="#00E5C3" fillOpacity="0.4" />

      {/* Tiny reflection nodes */}
      <circle cx="126" cy="54" r="2" fill="#4F6EF7" fillOpacity="0.3" />
      <circle cx="14" cy="52" r="1.5" fill="#4F6EF7" fillOpacity="0.25" />

      {/* Root tips */}
      <circle cx="54" cy="150" r="3.5" fill="#4F6EF7" fillOpacity="0.42" />
      <circle cx="86" cy="150" r="3.5" fill="#4F6EF7" fillOpacity="0.42" />

      {/* Crown/root divider */}
      <line x1="40" y1="130" x2="100" y2="130" stroke="#4F6EF7" strokeWidth="0.7" strokeOpacity="0.28" strokeDasharray="4 5" />

      {/* Inner canal */}
      <path d="M70 36 C72 58 72 98 71 125" stroke="#00E5C3" strokeWidth="0.7" strokeOpacity="0.28" strokeLinecap="round" strokeDasharray="3 5" />

      {/* Bottom baseline */}
      <line x1="30" y1="168" x2="110" y2="168" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.15" />
      <circle cx="70" cy="173" r="2.5" fill="#00E5C3" fillOpacity="0.32" />

      {/* Label */}
      <text x="133" y="10" fill="#00E5C3" fillOpacity="0.55" fontSize="6.5" fontFamily="monospace" textAnchor="end">VITA:E1</text>
    </svg>
  );
}

function DiagramAligner() {
  const brackets = [
    { cx: 26, cy: 86, r: -30 },
    { cx: 44, cy: 62, r: -16 },
    { cx: 65, cy: 50, r: -5 },
    { cx: 87, cy: 50, r: 5 },
    { cx: 108, cy: 62, r: 16 },
    { cx: 126, cy: 86, r: 30 },
  ];

  return (
    <svg viewBox="0 0 152 145" width="136" height="130" fill="none" aria-hidden>
      <defs>
        <filter id="aln-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="aln-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#4F6EF7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Radar ellipse */}
      <ellipse cx="76" cy="85" rx="68" ry="52" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.07" strokeDasharray="3 9" />

      {/* Axis guides */}
      <line x1="76" y1="8" x2="76" y2="138" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.11" strokeDasharray="3 7" />
      <line x1="8" y1="78" x2="144" y2="78" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="3 7" />

      {/* Outer arch */}
      <path
        d="M 18 100 C 18 48 40 18 76 18 C 112 18 134 48 134 100"
        stroke="#4F6EF7"
        strokeWidth="1"
        strokeOpacity="0.22"
        strokeDasharray="4 6"
        strokeLinecap="round"
        fill="none"
      />

      {/* 6 tooth rectangles */}
      {brackets.map((b, i) => (
        <rect
          key={i}
          x={b.cx - 7}
          y={b.cy - 13}
          width="14"
          height="22"
          rx="6"
          fill="#4F6EF7"
          fillOpacity="0.12"
          stroke="#4F6EF7"
          strokeWidth="1.2"
          strokeOpacity="0.4"
          transform={`rotate(${b.r} ${b.cx} ${b.cy})`}
        />
      ))}

      {/* Aligner wire */}
      <path
        d="M 22 92 Q 40 66 58 54 Q 68 47 76 46 Q 84 47 94 54 Q 112 66 130 92"
        stroke="url(#aln-arc)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bracket squares on the wire */}
      {brackets.map((b, i) => (
        <rect
          key={i}
          x={b.cx - 3.5}
          y={b.cy - 3.5}
          width="7"
          height="7"
          rx="1.5"
          fill="#4F6EF7"
          fillOpacity="0.65"
          transform={`rotate(${b.r} ${b.cx} ${b.cy})`}
        />
      ))}

      {/* Movement arrows — centre two teeth */}
      <path d="M66 46 L70 38 L74 46" fill="none" stroke="#00E5C3" strokeWidth="1" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78 46 L82 38 L86 46" fill="none" stroke="#00E5C3" strokeWidth="1" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round" />

      {/* Glow nodes — arch endpoints + apex */}
      <circle cx="18" cy="100" r="4.5" fill="#4F6EF7" fillOpacity="0.8" filter="url(#aln-glow)" />
      <circle cx="76" cy="18" r="5.5" fill="#00E5C3" fillOpacity="0.88" filter="url(#aln-glow)" />
      <circle cx="134" cy="100" r="4.5" fill="#4F6EF7" fillOpacity="0.8" filter="url(#aln-glow)" />

      {/* Occlusal baseline */}
      <line x1="18" y1="100" x2="134" y2="100" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.22" strokeDasharray="2 5" />
      <text x="76" y="112" fill="#4F6EF7" fillOpacity="0.32" fontSize="6" fontFamily="monospace" textAnchor="middle">OCCLUSAL·PLANE</text>

      {/* Left dimension bar */}
      <line x1="6" y1="18" x2="14" y2="18" stroke="#4F6EF7" strokeWidth="0.6" strokeOpacity="0.35" />
      <line x1="6" y1="100" x2="14" y2="100" stroke="#4F6EF7" strokeWidth="0.6" strokeOpacity="0.35" />
      <line x1="6" y1="18" x2="6" y2="100" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.22" strokeDasharray="2 4" />

      {/* Label */}
      <text x="144" y="11" fill="#00E5C3" fillOpacity="0.55" fontSize="6.5" fontFamily="monospace" textAnchor="end">ALN:24</text>
    </svg>
  );
}

const DIAGRAMS = [DiagramImplant, DiagramVeneer, DiagramAligner];

function CaseCard({
  id,
  tag,
  title,
  description,
  stats,
  result,
  index,
  visible,
}: (typeof CASES)[number] & { index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Diagram = DIAGRAMS[index % DIAGRAMS.length];

  return (
    <Link href={`/cases/${id}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#ffffff",
          border: `1px solid ${hovered ? `rgba(${BLUE_RGB},0.4)` : "#ECEAE4"}`,
          borderRadius: "20px",
          overflow: "hidden",
          transition: "border-color 0.4s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, opacity 0.7s ease",
          transitionDelay: `${index * 0.12}s`,
          transform: visible
            ? hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)"
            : "translateY(32px) scale(0.98)",
          opacity: visible ? 1 : 0,
          boxShadow: hovered
            ? `0 24px 70px -10px rgba(${BLUE_RGB},0.18), 0 0 0 1px rgba(${BLUE_RGB},0.1)`
            : "0 2px 20px rgba(13,14,26,0.06)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Visual header */}
        <div
          style={{
            height: "210px",
            position: "relative",
            overflow: "hidden",
            background: `linear-gradient(135deg, rgba(${BLUE_RGB},0.07) 0%, rgba(${BLUE_RGB},0.025) 55%, transparent 100%)`,
            flexShrink: 0,
          }}
        >
          {/* Dot grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(circle, rgba(${BLUE_RGB},0.16) 1px, transparent 1px)`,
              backgroundSize: "22px 22px",
            }}
          />

          {/* Fade to white */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "110px",
              background: "linear-gradient(to bottom, transparent, #ffffff)",
              pointerEvents: "none",
            }}
          />

          {/* Diagram — centered */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -54%) scale(${hovered ? 1.07 : 1})`,
              transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
              opacity: hovered ? 1 : 0.72,
              pointerEvents: "none",
              transition2: "opacity 0.4s ease",
            } as React.CSSProperties}
          >
            <Diagram />
          </div>

          {/* Case number — ghost watermark bottom-right */}
          <div
            className="font-display"
            style={{
              position: "absolute",
              bottom: "6px",
              right: "14px",
              fontSize: "64px",
              fontWeight: 900,
              color: `rgba(${BLUE_RGB},0.1)`,
              lineHeight: 1,
              letterSpacing: "-0.06em",
              userSelect: "none",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.45s ease",
            }}
          >
            {id}
          </div>

          {/* Tag pill */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: `rgba(${BLUE_RGB},0.1)`,
              border: `1px solid rgba(${BLUE_RGB},0.24)`,
              color: BLUE,
              fontSize: "10.5px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "5px 12px 5px 9px",
              borderRadius: "6px",
            }}
          >
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: BLUE, boxShadow: `0 0 7px ${BLUE}`, flexShrink: 0 }} />
            {tag}
          </div>

          {/* Result badge */}
          <div
            className="font-sans"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: "rgba(13,14,26,0.04)",
              border: "1px solid rgba(13,14,26,0.08)",
              color: "#8B8FA8",
              fontSize: "10px",
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: "6px",
            }}
          >
            ✓ {result}
          </div>

          {/* Accent bottom line */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: `linear-gradient(90deg, transparent 0%, rgba(${BLUE_RGB},0.6) 50%, transparent 100%)`,
              opacity: hovered ? 1 : 0.22,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* Body */}
        <div style={{ padding: "24px 24px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3
            className="font-display"
            style={{ fontWeight: 800, fontSize: "20px", color: "#0D0E1A", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "12px" }}
          >
            {title}
          </h3>

          <div style={{ flex: 1, marginBottom: "24px" }}>
            <DescriptionText text={description} />
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #ECEAE4", paddingTop: "18px" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "0 8px", borderRight: i < 2 ? "1px solid #ECEAE4" : "none" }}>
                <div className="font-display" style={{ fontWeight: 900, fontSize: "20px", color: BLUE, lineHeight: 1, marginBottom: "5px", letterSpacing: "-0.02em" }}>
                  {s.value}
                </div>
                <div className="font-sans" style={{ fontSize: "10px", color: "#B0B4C8", lineHeight: 1.4, fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Cases() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="кейсы"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-[140px]"
      style={{ background: "#F7F6F2", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient blobs */}
      <div style={{ position: "absolute", top: "-200px", left: "-200px", width: "560px", height: "560px", borderRadius: "50%", background: `radial-gradient(circle, rgba(${BLUE_RGB},0.05) 0%, transparent 65%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-200px", right: "-160px", width: "580px", height: "580px", borderRadius: "50%", background: `radial-gradient(circle, rgba(${BLUE_RGB},0.04) 0%, transparent 65%)`, pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-20 mb-12 sm:mb-20"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.85s ease, transform 0.85s ease" }}
        >
          <div className="lg:col-span-2">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `rgba(${BLUE_RGB},0.08)`, border: `1px solid rgba(${BLUE_RGB},0.2)`, borderRadius: "8px", padding: "6px 14px 6px 10px", marginBottom: "20px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: BLUE, boxShadow: `0 0 10px rgba(${BLUE_RGB},0.7)` }} />
              <span className="font-sans" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: BLUE }}>
                Наши кейсы
              </span>
            </div>

            <h2
              className="font-display"
              style={{ fontWeight: 900, fontSize: "clamp(34px, 4.5vw, 58px)", lineHeight: "1.0", letterSpacing: "-0.025em", color: "#0D0E1A" }}
            >
              Результаты,
              <br />
              которые{" "}
              <span style={{ background: `linear-gradient(120deg, ${BLUE} 0%, #7B94FA 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties}>
                говорят
              </span>
              <br />
              сами за себя
            </h2>
          </div>

          <div className="lg:col-span-3 flex items-end">
            <div>
              <p className="font-sans" style={{ fontSize: "15px", color: "#8B8FA8", lineHeight: "1.75", maxWidth: "480px", marginBottom: "28px" }}>
                Каждый случай уникален. Ниже — реальные истории наших пациентов с конкретными, измеримыми результатами.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 40px" }}>
                {[{ value: "10 000+", label: "успешных случаев" }, { value: "98%", label: "довольных пациентов" }].map((item, i) => (
                  <div key={i}>
                    <div className="font-display" style={{ fontWeight: 900, fontSize: "28px", color: "#0D0E1A", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "5px" }}>{item.value}</div>
                    <div className="font-sans" style={{ fontSize: "12px", color: "#8B8FA8", fontWeight: 500 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {CASES.map((c, i) => (
            <CaseCard key={c.id} {...c} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
