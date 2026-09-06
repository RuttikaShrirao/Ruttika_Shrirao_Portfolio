"use client";

const TICKER_ITEMS = [
  "3 Years Experience",
  "MERN Stack",
  "10+ Apps Shipped",
  "AI Integrations",
  "AWS Deployed",
  "REST APIs at Scale",
  "React & Next.js",
  "MongoDB & Redis",
  "Open to Opportunities",
  "Full Stack Dev",
];

const DOT = "✦";

export default function Marquee() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="overflow-hidden py-3.5 border-y"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="marquee-track gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 whitespace-nowrap px-5 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            <span style={{ color: "var(--accent)" }}>{DOT}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
