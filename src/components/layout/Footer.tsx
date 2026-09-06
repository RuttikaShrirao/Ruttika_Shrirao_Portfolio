"use client";

import { Mail, ArrowUp } from "lucide-react";
import { PERSONAL } from "@/lib/data";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D0B1A 0%, #1E1B4B 100%)" }}
    >
      {/* Monogram watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading font-extrabold text-[20rem] leading-none opacity-[0.025]"
          style={{ color: "white", userSelect: "none" }}
        >
          RS
        </span>
      </div>

      <div className="container-lg relative py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: brand + CLI line */}
          <div>
            <p className="font-heading font-bold text-lg mb-1" style={{ color: "white" }}>
              Ruttika <span style={{ background: "linear-gradient(135deg, #6366F1, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Shrirao</span>
            </p>
            <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              <span style={{ color: "#A78BFA" }}>$</span>{" "}
              <span style={{ color: "rgba(255,255,255,0.5)" }}>ruttika@fullstack:~$</span>{" "}
              <span style={{ color: "#86EFAC" }}>open_to_work --status=active</span>
            </p>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: PERSONAL.github, icon: <GithubIcon />, label: "GitHub", id: "footer-github" },
              { href: PERSONAL.linkedin, icon: <LinkedinIcon />, label: "LinkedIn", id: "footer-linkedin" },
              { href: `mailto:${PERSONAL.email}`, icon: <Mail size={15} />, label: "Email", id: "footer-email" },
            ].map(({ href, icon, label, id }) => (
              <a
                key={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.55)",
                }}
                aria-label={label}
                id={id}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Right: back to top + copyright */}
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              © {new Date().getFullYear()} Ruttika Shrirao
            </span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                color: "white",
              }}
              aria-label="Scroll to top"
              id="footer-back-to-top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
