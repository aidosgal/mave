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
    title: `${doctor.name} — Mave Dental`,
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
          <div className="flex items-center gap-2 mb-12">
            <span style={{ color: "#4F6EF7", fontSize: "8px" }}>●</span>
            <span
              className="font-sans font-medium tracking-[0.18em] uppercase"
              style={{ fontSize: "11px", color: "#4F6EF7" }}
            >
              Сертификаты и достижения
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctor.certificates.map((cert, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E8E7E3",
                  borderRadius: "12px",
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #4F6EF7, #00E5C3)",
                    borderRadius: "12px 0 0 12px",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(79,110,247,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4F6EF7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M9 15l-3 7 6-3 6 3-3-7" />
                    <path d="M9 15c1 .7 2 1 3 1s2-.3 3-1" />
                  </svg>
                </div>

                <p
                  className="font-sans font-medium"
                  style={{
                    fontSize: "15px",
                    color: "#0D0E1A",
                    lineHeight: "1.5",
                  }}
                >
                  {cert}
                </p>
              </div>
            ))}
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
