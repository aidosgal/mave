import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import { DOCTORS } from "../../lib/doctors-data";

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);
  if (!doctor) return {};
  return {
    title: `${doctor.name} — Mavi Dental`,
    description: doctor.bio,
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);
  if (!doctor) notFound();

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
        {/* Background blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle at center, #4F6EF7 0%, transparent 65%)",
            opacity: 0.18,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back link */}
          <Link
            href="/#врачи"
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
            ← Все врачи
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left – info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
                <span
                  className="font-sans font-medium tracking-[0.18em] uppercase"
                  style={{ fontSize: "11px", color: "#4F6EF7" }}
                >
                  {doctor.specialty}
                </span>
              </div>

              <h1
                className="font-display font-black mb-6"
                style={{
                  fontSize: "clamp(40px, 5vw, 68px)",
                  lineHeight: "1.0",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {doctor.name}
              </h1>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(79,110,247,0.12)",
                  border: "1px solid rgba(79,110,247,0.3)",
                  borderRadius: "6px",
                  padding: "8px 16px",
                  marginBottom: "28px",
                }}
              >
                <span
                  className="font-sans font-semibold"
                  style={{ fontSize: "13px", color: "#4F6EF7" }}
                >
                  {doctor.experience} лет опыта
                </span>
              </div>

              <p
                className="font-sans leading-relaxed mb-8"
                style={{ fontSize: "16px", color: "#8B8FA8", maxWidth: "480px" }}
              >
                {doctor.bio}
              </p>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: "24px",
                }}
              >
                <p
                  className="font-sans"
                  style={{ fontSize: "13px", color: "#8B8FA8", lineHeight: "1.8" }}
                >
                  <span style={{ color: "#ffffff", fontWeight: 500 }}>
                    Образование:{" "}
                  </span>
                  {doctor.education}
                </p>
              </div>
            </div>

            {/* Right – photo */}
            <div className="flex justify-center lg:justify-end">
              <div
                style={{
                  position: "relative",
                  width: "360px",
                  maxWidth: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(79,110,247,0.25)",
                }}
              >
                <div style={{ position: "relative", paddingTop: "120%" }}>
                  <Image
                    src={`/doctor/${doctor.id}.png`}
                    alt={doctor.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    priority
                    sizes="360px"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(24,26,51,0.6) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <span style={{ color: "#00E5C3", fontSize: "8px" }}>●</span>
            <span
              className="font-sans font-medium tracking-[0.18em] uppercase"
              style={{ fontSize: "11px", color: "#4F6EF7" }}
            >
              Сертификаты и достижения
            </span>
          </div>

          <h2
            className="font-display font-black mb-14"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "1.0",
              color: "#0D0E1A",
              letterSpacing: "-0.02em",
            }}
          >
            Документы,{" "}
            <span style={{ color: "#4F6EF7" }}>подтверждающие</span>
            <br />
            квалификацию
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctor.certificates.map((cert, i) => {
              const yearMatch = cert.match(/\b(20\d{2}|19\d{2})\b/);
              const year = yearMatch ? yearMatch[0] : null;
              const title = year ? cert.replace(/,?\s*\b(20\d{2}|19\d{2})\b/, "").trim() : cert;
              const colors = ["#4F6EF7", "#00E5C3", "#4F6EF7"];
              const accent = colors[i % colors.length];

              return (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #E8E7E3",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 2px 16px -4px rgba(13,14,26,0.07)",
                  }}
                >
                  {/* Certificate header */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${accent}14 0%, ${accent}06 100%)`,
                      borderBottom: `1px solid ${accent}20`,
                      padding: "28px 28px 24px",
                      position: "relative",
                    }}
                  >
                    {/* Decorative rings */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-24px",
                        right: "-24px",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        border: `1px solid ${accent}18`,
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-10px",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        border: `1px solid ${accent}12`,
                        pointerEvents: "none",
                      }}
                    />

                    <div className="flex items-start justify-between gap-4">
                      {/* Medal icon */}
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "12px",
                          background: `linear-gradient(135deg, ${accent}22, ${accent}0a)`,
                          border: `1px solid ${accent}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={accent}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="9" r="5" />
                          <path d="M12 14v7" />
                          <path d="M9 18l3 3 3-3" />
                          <path d="M8 9h.01M12 6v.01M16 9h.01" />
                        </svg>
                      </div>

                      {/* Year badge */}
                      {year && (
                        <div
                          style={{
                            background: accent,
                            color: "#ffffff",
                            borderRadius: "6px",
                            padding: "4px 10px",
                            flexShrink: 0,
                          }}
                        >
                          <span className="font-display font-black" style={{ fontSize: "15px" }}>
                            {year}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Certificate body */}
                  <div style={{ padding: "24px 28px 28px" }}>
                    <p
                      className="font-display font-semibold mb-4"
                      style={{
                        fontSize: "16px",
                        color: "#0D0E1A",
                        lineHeight: "1.45",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {title}
                    </p>

                    {/* Verified badge */}
                    <div className="flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={accent}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span
                        className="font-sans font-medium"
                        style={{ fontSize: "12px", color: accent }}
                      >
                        Подтверждено
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "64px",
              background: "#181A33",
              borderRadius: "16px",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "24px",
            }}
          >
            <h3
              className="font-display font-bold"
              style={{ fontSize: "28px", color: "#ffffff", letterSpacing: "-0.01em" }}
            >
              Записаться к {doctor.name.split(" ")[0]}
            </h3>
            <p
              className="font-sans"
              style={{ fontSize: "15px", color: "#8B8FA8", maxWidth: "400px" }}
            >
              Оставьте заявку — мы свяжемся с вами в течение 30 минут и подберём
              удобное время.
            </p>
            <button
              className="font-sans font-medium text-white"
              style={{
                background: "#4F6EF7",
                fontSize: "15px",
                padding: "16px 40px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Записаться на приём
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
