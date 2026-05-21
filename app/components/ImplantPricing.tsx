"use client";

const ITEMS = [
  { label: "Имплантация зубов", price: "от 80 000 ₸" },
  { label: "All-on-4", price: "820 000 ₸" },
];

function Separator() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.4)",
        margin: "0 48px",
        flexShrink: 0,
        alignSelf: "center",
      }}
    />
  );
}

function PriceItem({ label, price }: { label: string; price: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "14px",
        flexShrink: 0,
      }}
    >
      <span
        className="font-sans font-medium"
        style={{ fontSize: "clamp(14px, 1.4vw, 18px)", color: "rgba(255,255,255,0.65)", whiteSpace: "nowrap" }}
      >
        {label}
      </span>
      <span
        className="font-display font-black"
        style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#ffffff", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}
      >
        {price}
      </span>
    </span>
  );
}

export default function ImplantPricing() {
  return (
    <div
      style={{ background: "#4F6EF7", overflow: "hidden", padding: "22px 0" }}
    >
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
            {ITEMS.map((item, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                <PriceItem {...item} />
                <Separator />
              </span>
            ))}
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
