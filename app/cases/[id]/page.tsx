import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import { CASES, type Phase } from "../../lib/cases-data";

export function generateStaticParams() {
  return CASES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseData = CASES.find((c) => c.id === id);
  if (!caseData) return {};
  return {
    title: `${caseData.title} — MAVI clinic`,
    description: caseData.description.replace(/\n/g, " "),
  };
}

const PHASE_COLORS = ["#4F6EF7", "#00C9A7", "#F59E0B", "#8B5CF6"];

function PhaseSection({
  phase,
  index,
  total,
}: {
  phase: Phase;
  index: number;
  total: number;
}) {
  const color = PHASE_COLORS[index % PHASE_COLORS.length];
  const isSingle = phase.images.length === 1;

  return (
    <div style={{ position: "relative" }}>
      {/* Connector line */}
      {index < total - 1 && (
        <div
          style={{
            position: "absolute",
            left: "27px",
            top: "56px",
            bottom: "-48px",
            width: "2px",
            background: `linear-gradient(to bottom, ${color}40, transparent)`,
            zIndex: 0,
          }}
        />
      )}

      {/* Phase header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Number badge */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${color}18, ${color}08)`,
            border: `2px solid ${color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            className="font-display"
            style={{
              fontWeight: 900,
              fontSize: "20px",
              color: color,
              lineHeight: 1,
            }}
          >
            {index + 1}
          </span>
        </div>

        <div>
          <p
            className="font-sans"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: color,
              marginBottom: "4px",
            }}
          >
            Этап {index + 1}
          </p>
          <h3
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: "22px",
              color: "#0D0E1A",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {phase.label}
          </h3>
        </div>
      </div>

      {/* Images */}
      <div
        style={{
          marginLeft: "72px",
          display: "grid",
          gridTemplateColumns: isSingle ? "1fr" : "repeat(2, 1fr)",
          gap: "12px",
          marginBottom: "48px",
        }}
      >
        {phase.images.map((img, imgIdx) => (
          <div
            key={imgIdx}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: `1px solid ${color}20`,
              boxShadow: "0 4px 24px rgba(13,14,26,0.08)",
              position: "relative",
              aspectRatio: isSingle ? "16/9" : "4/3",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes={isSingle ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 50vw, 400px"}
            />
            {/* Subtle overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, ${color}10 0%, transparent 50%)`,
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseData = CASES.find((c) => c.id === id);
  if (!caseData) notFound();

  const paragraphs = caseData.description.split("\n\n").filter(Boolean);

  return (
    <main style={{ background: "#F7F6F2", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background: "#181A33",
          paddingTop: "120px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "700px",
            height: "700px",
            background: `radial-gradient(circle at center, ${caseData.accent} 0%, transparent 65%)`,
            opacity: 0.12,
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle at center, #8B5CF6 0%, transparent 65%)",
            opacity: 0.08,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back link */}
          <Link
            href="/#кейсы"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#8B8FA8",
              fontSize: "13px",
              textDecoration: "none",
              marginBottom: "48px",
              fontFamily: "var(--font-inter)",
              transition: "color 0.2s",
            }}
            className="hover:!text-white"
          >
            ← Все кейсы
          </Link>

          {/* Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: `rgba(${caseData.accentRgb},0.12)`,
              border: `1px solid rgba(${caseData.accentRgb},0.3)`,
              color: caseData.accent,
              fontSize: "10.5px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "6px 14px 6px 10px",
              borderRadius: "6px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: caseData.accent,
                boxShadow: `0 0 8px ${caseData.accent}`,
              }}
            />
            {caseData.tag}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <h1
                className="font-display font-black mb-8"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  lineHeight: "1.0",
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                }}
              >
                {caseData.title}
              </h1>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="font-sans leading-relaxed"
                    style={{
                      fontSize: "16px",
                      color: i === 0 ? "#C8CAD8" : "#8B8FA8",
                      maxWidth: "500px",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Result badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "10px 18px",
                }}
              >
                <span style={{ color: "#00E5C3", fontSize: "14px" }}>✓</span>
                <span
                  className="font-sans font-medium"
                  style={{ fontSize: "13px", color: "#ffffff" }}
                >
                  {caseData.result}
                </span>
              </div>
            </div>

            {/* Right – stats */}
            <div className="flex items-start justify-start lg:justify-end">
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "36px",
                  width: "100%",
                  maxWidth: "360px",
                }}
              >
                <p
                  className="font-sans font-semibold mb-6"
                  style={{
                    fontSize: "11px",
                    color: caseData.accent,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Ключевые показатели
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {caseData.stats.map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 0",
                        borderBottom:
                          i < caseData.stats.length - 1
                            ? "1px solid rgba(255,255,255,0.06)"
                            : "none",
                      }}
                    >
                      <span
                        className="font-sans"
                        style={{ fontSize: "14px", color: "#8B8FA8" }}
                      >
                        {stat.label}
                      </span>
                      <span
                        className="font-display font-black"
                        style={{
                          fontSize: "24px",
                          color: caseData.accent,
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <p
                    className="font-sans"
                    style={{ fontSize: "11px", color: "#8B8FA8", marginBottom: "10px" }}
                  >
                    Прогресс лечения
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    {caseData.phases.map((phase, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: "4px",
                          borderRadius: "2px",
                          background: PHASE_COLORS[i % PHASE_COLORS.length],
                          opacity: 0.8,
                        }}
                        title={phase.label}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "8px",
                    }}
                  >
                    <span className="font-sans" style={{ fontSize: "10px", color: "#8B8FA8" }}>
                      До
                    </span>
                    <span className="font-sans" style={{ fontSize: "10px", color: "#8B8FA8" }}>
                      Результат
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo timeline */}
      {caseData.phases.length > 0 && (
        <section style={{ padding: "80px 0 120px" }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            {/* Section header */}
            <div style={{ marginBottom: "64px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
                <span
                  className="font-sans font-medium tracking-[0.18em] uppercase"
                  style={{ fontSize: "11px", color: "#4F6EF7" }}
                >
                  Этапы лечения
                </span>
              </div>
              <h2
                className="font-display font-black"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: "1.05",
                  color: "#0D0E1A",
                  letterSpacing: "-0.02em",
                }}
              >
                От первого визита до{" "}
                <span style={{ color: "#4F6EF7" }}>идеальной улыбки</span>
              </h2>
            </div>

            {/* Phases */}
            <div>
              {caseData.phases.map((phase, i) => (
                <PhaseSection
                  key={phase.slug}
                  phase={phase}
                  index={i}
                  total={caseData.phases.length}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div
            style={{
              background: "#181A33",
              borderRadius: "20px",
              padding: "56px 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "400px",
                height: "400px",
                background: `radial-gradient(circle, ${caseData.accent} 0%, transparent 65%)`,
                opacity: 0.1,
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: `rgba(${caseData.accentRgb},0.12)`,
                border: `1px solid rgba(${caseData.accentRgb},0.25)`,
                borderRadius: "6px",
                padding: "5px 14px",
              }}
            >
              <span style={{ color: caseData.accent, fontSize: "8px" }}>●</span>
              <span
                className="font-sans font-semibold"
                style={{ fontSize: "11px", color: caseData.accent, letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                Хотите такой же результат?
              </span>
            </div>
            <h3
              className="font-display font-bold"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Запишитесь на бесплатную консультацию
            </h3>
            <p
              className="font-sans"
              style={{ fontSize: "15px", color: "#8B8FA8", maxWidth: "420px", lineHeight: 1.7 }}
            >
              Расскажем о вашем случае, составим план лечения и подберём удобное время.
            </p>
            <a
              href="https://wa.me/77473674734"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-white"
              style={{
                background: caseData.accent,
                fontSize: "15px",
                padding: "16px 44px",
                borderRadius: "8px",
                display: "inline-block",
                cursor: "pointer",
                marginTop: "4px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Записаться на приём
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
