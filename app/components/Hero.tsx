"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#181A33" }}
    >
      {/* Primary gradient blob */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-120px",
          right: "-80px",
          width: "750px",
          height: "750px",
          background: "radial-gradient(circle at center, #4F6EF7 0%, transparent 65%)",
          opacity: 0.28,
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      {/* Secondary mint blob */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "80px",
          left: "-60px",
          width: "340px",
          height: "340px",
          background: "radial-gradient(circle at center, #00E5C3 0%, transparent 70%)",
          opacity: 0.1,
          filter: "blur(60px)",
          animation: "float 12s ease-in-out infinite reverse",
        }}
      />

      {/* Nav spacer */}
      <div className="h-20" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center py-10 lg:py-16">
          {/* Left */}
          <div>
            <div
              className="flex items-center gap-2 mb-6 sm:mb-8"
              style={{ animation: "fade-up 0.6s ease 0.1s both" }}
            >
              <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
              <span
                className="font-sans font-medium tracking-[0.18em] uppercase"
                style={{ fontSize: "11px", color: "#4F6EF7" }}
              >
                Стоматологическая клиника · Карагандa
              </span>
            </div>

            <h1
              className="font-display font-black text-white mb-6 sm:mb-8"
              style={{
                fontSize: "clamp(48px, 7.5vw, 108px)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
              }}
            >
              <span
                className="block"
                style={{ animation: "reveal-text 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
              >
                Мы создаём
              </span>
              <span
                className="block"
                style={{
                  color: "#4F6EF7",
                  animation: "reveal-text 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both",
                }}
              >
                идеальные
              </span>
              <span
                className="block"
                style={{ animation: "reveal-text 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s both" }}
              >
                улыбки
              </span>
            </h1>

            <p
              className="font-sans leading-relaxed mb-8 sm:mb-10 max-w-md"
              style={{
                fontSize: "16px",
                color: "#8B8FA8",
                animation: "fade-up 0.8s ease 0.65s both",
              }}
            >
              Передовые технологии, опытные специалисты и&nbsp;индивидуальный
              подход — всё для вашей идеальной улыбки.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              style={{ animation: "fade-up 0.8s ease 0.8s both" }}
            >
              <a
                href="https://wa.me/77473674734"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-medium text-white transition-all duration-200"
                style={{
                  background: "#4F6EF7",
                  fontSize: "15px",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#3d5ce8";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#4F6EF7";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                Записаться на приём
              </a>
              <button
                className="font-sans font-medium transition-all duration-200"
                style={{
                  fontSize: "15px",
                  padding: "16px 32px",
                  borderRadius: "6px",
                  border: "1px solid #4F6EF7",
                  color: "#4F6EF7",
                  background: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(79,110,247,0.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                Узнать больше
              </button>
            </div>
          </div>

          {/* Right – technical tooth diagram (visible on all screen sizes) */}
          <div
            className="flex items-center justify-center py-4 lg:py-0"
            style={{ animation: "fade-up 1s ease 0.35s both" }}
          >
            <ToothDiagram />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative z-10 pb-10 flex justify-center"
        style={{ animation: "fade-up 0.8s ease 1.1s both" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span
            className="font-sans tracking-[0.18em] uppercase"
            style={{ fontSize: "11px", color: "#8B8FA8" }}
          >
            Прокрутите
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #8B8FA8 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ToothDiagram() {
  return (
    <div
      className="relative w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[400px]"
      style={{ aspectRatio: "400 / 460" }}
    >
      <svg
        viewBox="0 0 400 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="toothBodyGrad" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00E5C3" stopOpacity="0.03" />
          </radialGradient>
          <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F6EF7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4F6EF7" stopOpacity="0.25" />
          </linearGradient>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Radar rings */}
        <circle cx="200" cy="200" r="175" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="3 9" />
        <circle cx="200" cy="200" r="130" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="2 7" />

        {/* Axis guides */}
        <line x1="200" y1="20" x2="200" y2="440" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="3 7" />
        <line x1="20" y1="220" x2="380" y2="220" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="3 7" />

        {/* Tooth body fill */}
        <path
          d="M 200 52
             C 225 52, 250 62, 266 80
             Q 276 68, 290 75
             C 310 88, 318 115, 312 148
             C 306 178, 295 206, 288 232
             L 282 320
             C 281 338, 273 350, 262 350
             L 252 350
             C 241 350, 234 340, 231 326
             L 226 296
             C 223 281, 216 274, 200 274
             C 184 274, 177 281, 174 296
             L 169 326
             C 166 340, 159 350, 148 350
             L 138 350
             C 127 350, 119 338, 118 320
             L 112 232
             C 105 206, 94 178, 88 148
             C 82 115, 90 88, 110 75
             Q 124 68, 134 80
             C 150 62, 175 52, 200 52 Z"
          fill="url(#toothBodyGrad)"
        />

        {/* Tooth outline */}
        <path
          d="M 200 52
             C 225 52, 250 62, 266 80
             Q 276 68, 290 75
             C 310 88, 318 115, 312 148
             C 306 178, 295 206, 288 232
             L 282 320
             C 281 338, 273 350, 262 350
             L 252 350
             C 241 350, 234 340, 231 326
             L 226 296
             C 223 281, 216 274, 200 274
             C 184 274, 177 281, 174 296
             L 169 326
             C 166 340, 159 350, 148 350
             L 138 350
             C 127 350, 119 338, 118 320
             L 112 232
             C 105 206, 94 178, 88 148
             C 82 115, 90 88, 110 75
             Q 124 68, 134 80
             C 150 62, 175 52, 200 52 Z"
          stroke="url(#strokeGrad)"
          strokeWidth="1.5"
        />

        {/* Crown–root divider */}
        <line x1="112" y1="256" x2="288" y2="256" stroke="#4F6EF7" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4 5" />

        {/* Root mid-divider */}
        <line x1="200" y1="274" x2="200" y2="350" stroke="#4F6EF7" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="3 4" />

        {/* Inner canal suggestion */}
        <path
          d="M 200 100 C 205 120, 205 200, 203 260"
          stroke="#00E5C3"
          strokeWidth="0.75"
          strokeOpacity="0.3"
          strokeLinecap="round"
          strokeDasharray="3 5"
        />

        {/* Cusp highlight lines */}
        <path d="M 148 72 C 165 58, 182 54, 200 52" stroke="#4F6EF7" strokeWidth="0.75" strokeOpacity="0.35" strokeLinecap="round" />
        <path d="M 252 72 C 235 58, 218 54, 200 52" stroke="#4F6EF7" strokeWidth="0.75" strokeOpacity="0.35" strokeLinecap="round" />

        {/* Cusp node dots */}
        <circle cx="144" cy="76" r="5" fill="#4F6EF7" fillOpacity="0.85" filter="url(#nodeGlow)" />
        <circle cx="200" cy="52" r="6" fill="#00E5C3" fillOpacity="0.9" filter="url(#nodeGlow)" />
        <circle cx="256" cy="76" r="5" fill="#4F6EF7" fillOpacity="0.85" filter="url(#nodeGlow)" />

        {/* Root tip nodes */}
        <circle cx="164" cy="350" r="4" fill="#4F6EF7" fillOpacity="0.5" />
        <circle cx="236" cy="350" r="4" fill="#4F6EF7" fillOpacity="0.5" />

        {/* Left measurement bar */}
        <line x1="68" y1="76" x2="88" y2="76" stroke="#4F6EF7" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="68" y1="350" x2="88" y2="350" stroke="#4F6EF7" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="68" y1="76" x2="68" y2="350" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 4" />
        <text x="55" y="218" fill="#4F6EF7" fillOpacity="0.45" fontSize="8" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 55 218)">
          274px
        </text>

        {/* Tech corner box – top right */}
        <rect x="338" y="28" width="40" height="40" rx="3" stroke="#4F6EF7" strokeWidth="0.75" strokeOpacity="0.3" fill="none" />
        <line x1="338" y1="48" x2="378" y2="48" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="358" y1="28" x2="358" y2="68" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.25" />

        {/* Labels */}
        <text x="370" y="24" fill="#00E5C3" fillOpacity="0.55" fontSize="7" fontFamily="monospace" textAnchor="end">
          SCAN:OK
        </text>

        {/* Bottom accent dot */}
        <circle cx="200" cy="430" r="3" fill="#00E5C3" fillOpacity="0.35" />
        <line x1="160" y1="430" x2="240" y2="430" stroke="#4F6EF7" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    </div>
  );
}
