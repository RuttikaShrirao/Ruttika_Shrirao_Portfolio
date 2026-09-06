"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Terminal, Briefcase, Mail } from "lucide-react";
import { PERSONAL } from "@/lib/data";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const FLOATING_BADGES: {
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
}[] = [
  { label: "React.js", top: "10%", left: "8%", delay: 0 },
  { label: "Node.js", top: "20%", right: "4%", delay: 0.6 },
  { label: "MongoDB", bottom: "28%", left: "4%", delay: 1.2 },
  { label: "AWS", bottom: "15%", right: "6%", delay: 1.8 },
];

const API_ROUTES = [
  { method: "GET", path: "/api/users", status: 200, ms: "24ms" },
  { method: "POST", path: "/api/auth/login", status: 201, ms: "48ms" },
  { method: "GET", path: "/api/products", status: 200, ms: "31ms" },
  { method: "PUT", path: "/api/orders/:id", status: 200, ms: "62ms" },
];

const STATUS_COLOR: Record<number, string> = {
  200: "#10B981",
  201: "#6366F1",
  404: "#EF4444",
};

export default function Hero() {
  return (
    <section className="hero-mesh min-h-screen flex items-center pt-24 pb-16">
      <div className="container-lg w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left column ── */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                backgroundColor: "var(--accent-bg)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
            >
              <span className="dot-pulse" />
              {PERSONAL.availability}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-4"
            >
              <span style={{ color: "var(--text-primary)" }}>
                {PERSONAL.firstName}
              </span>
              <br />
              <span className="text-gradient-hero">Shrirao</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div
                className="w-1 h-6 rounded-full"
                style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
              />
              <span
                className="font-heading font-semibold text-lg"
                style={{ color: "var(--accent)" }}
              >
                Full Stack Developer
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Full Stack Developer with <strong style={{ color: "var(--text-primary)" }}>3+ years</strong> building production-grade MERN applications — from scalable REST APIs and AI integrations to real-time dashboards with React and Next.js.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a href="#projects" className="btn-primary" id="hero-view-work">
                <Briefcase size={15} />
                View My Work
                <ArrowRight size={14} />
              </a>
              <a href="#contact" className="btn-secondary" id="hero-contact">
                <Mail size={15} />
                Get In Touch
              </a>
              <a
                href={PERSONAL.resumeUrl}
                className="btn-secondary"
                download
                id="hero-download-resume"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-3"
            >
              {[
                { href: PERSONAL.github, Icon: GithubIcon, label: "GitHub", id: "hero-github" },
                { href: PERSONAL.linkedin, Icon: LinkedinIcon, label: "LinkedIn", id: "hero-linkedin" },
                { href: `mailto:${PERSONAL.email}`, Icon: Mail, label: "Email", id: "hero-email" },
                { href: "#", Icon: Terminal, label: "Portfolio", id: "hero-terminal" },
              ].map(({ href, Icon, label, id }) => (
                <a
                  key={id}
                  href={href}
                  id={id}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1.5px solid var(--border)",
                    color: "var(--text-secondary)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: App card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative hidden lg:block"
          >
            {/* Floating tech badges */}
            {FLOATING_BADGES.map((badge) => (
              <motion.div
                key={badge.label}
                className="absolute float-badge z-10"
                style={{
                  top: badge.top,
                  left: badge.left,
                  right: badge.right,
                  bottom: badge.bottom,
                  animationDelay: `${badge.delay}s`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + badge.delay, duration: 0.4 }}
              >
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--accent-border)",
                    color: "var(--accent)",
                    boxShadow: "0 4px 16px rgba(79, 70, 229, 0.15)",
                  }}
                >
                  ✦ {badge.label}
                </span>
              </motion.div>
            ))}

            {/* Main app mockup card */}
            <div
              className="rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm"
              style={{
                background: "linear-gradient(145deg, #1E1B4B, #312E81)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                boxShadow: "0 32px 80px rgba(79, 70, 229, 0.4)",
              }}
            >
              {/* Card header */}
              <div
                className="px-5 py-3.5 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-semibold ml-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                    MERN · REST API
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="dot-pulse" />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>live</span>
                </div>
              </div>

              {/* Terminal prompt */}
              <div className="px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span style={{ color: "#A78BFA" }}>❯</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>ruttika@api</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>~</span>
                  <span style={{ color: "#86EFAC" }}>$ node server.js</span>
                  <span
                    className="w-1.5 h-3.5 rounded-sm animate-pulse"
                    style={{ backgroundColor: "#A78BFA" }}
                  />
                </div>
              </div>

              {/* API routes */}
              <div className="px-5 py-4 space-y-2">
                {API_ROUTES.map((route, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12 }}
                    className="flex items-center justify-between py-2 px-3 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-xs font-bold w-10 text-center py-0.5 rounded"
                        style={{
                          backgroundColor: route.method === "POST" ? "rgba(99,102,241,0.25)" : route.method === "PUT" ? "rgba(245,158,11,0.2)" : "rgba(16,185,129,0.15)",
                          color: route.method === "POST" ? "#818CF8" : route.method === "PUT" ? "#FCD34D" : "#6EE7B7",
                        }}
                      >
                        {route.method}
                      </span>
                      <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {route.path}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{route.ms}</span>
                      <span
                        className="text-xs font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${STATUS_COLOR[route.status]}22`,
                          color: STATUS_COLOR[route.status],
                        }}
                      >
                        {route.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats footer */}
              <div
                className="px-5 py-4 grid grid-cols-3 gap-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                {[
                  { value: "3+", label: "YRS EXP" },
                  { value: "10+", label: "PROJECTS" },
                  { value: "99%", label: "UPTIME" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-heading font-extrabold text-lg" style={{ color: "white" }}>
                      {s.value}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
