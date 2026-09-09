"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Terminal, Briefcase, Mail, Code, Server, Layers } from "lucide-react";
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
  { label: "React.js", top: "8%", left: "4%", delay: 0 },
  { label: "Node.js", top: "18%", right: "2%", delay: 0.6 },
  { label: "MongoDB", bottom: "25%", left: "2%", delay: 1.2 },
  { label: "AWS", bottom: "12%", right: "4%", delay: 1.8 },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">("frontend");

  return (
    <section className="hero-mesh min-h-screen flex items-center pt-24 pb-16">
      <div className="container-lg w-full">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5 items-center">
          {/* ── Left column: 70% width (8 cols out of 12) ── */}
          <div className="lg:col-span-7">
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
              
              <span className="text-gradient-hero"> Shrirao</span>
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
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
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

          {/* ── Right column: Tighter gap & taller JSON terminal card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative hidden lg:block lg:col-span-5"
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
                  className="px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
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

            {/* Taller JSON Response Terminal Window */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(30, 27, 75, 0.97), rgba(49, 46, 129, 0.95))",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                boxShadow: "0 24px 60px rgba(79, 70, 229, 0.22)",
              }}
            >
              {/* Window Header */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 ml-1 font-semibold">
                    GET /api/v1/developer/profile
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded text-emerald-400 bg-emerald-950/90 border border-emerald-500/40">
                  200 OK
                </span>
              </div>

              {/* Taller JSON Body with Complete Full Stack Specs */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5" style={{ color: "#E2E8F0" }}>
                <p><span className="text-slate-400">&#123;</span></p>
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;name&quot;</span>: <span className="text-amber-300">&quot;Ruttika Shrirao&quot;</span>,
                </p>
                {/* <p className="pl-4">
                  <span className="text-indigo-300">&quot;title&quot;</span>: <span className="text-amber-300">&quot;Full Stack / MERN Developer&quot;</span>,
                </p> */}
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;experience&quot;</span>: <span className="text-amber-300">&quot;3+ Years Experience&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;frontend&quot;</span>: [<span className="text-emerald-300">&quot;React.js&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;Redux&quot;</span>, <span className="text-emerald-300">&quot;Tailwind&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;backend&quot;</span>: [<span className="text-emerald-300">&quot;Node.js&quot;</span>, <span className="text-emerald-300">&quot;Express.js&quot;</span>, <span className="text-emerald-300">&quot;REST APIs&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;databases&quot;</span>: [<span className="text-purple-300">&quot;MongoDB&quot;</span>, <span className="text-purple-300">&quot;MySQL&quot;</span>, <span className="text-purple-300">&quot;Redis&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;cloud_devops&quot;</span>: [<span className="text-blue-300">&quot;AWS&quot;</span>, <span className="text-blue-300">&quot;Docker&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;background_jobs&quot;</span>:
                  [<span className="text-amber-300">&quot;BullMQ&quot;</span>,
                  <span className="text-amber-300">&quot;SQS&quot;</span>,
                  <span className="text-amber-300">&quot;Async Processing&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-indigo-300">&quot;ai_integrations&quot;</span>: [<span className="text-emerald-300">&quot;OpenAI&quot;</span>,
                   <span className="text-emerald-300">&quot;Gemini&quot;</span>,
                   <span className="text-emerald-300">&quot;Replicate&quot;</span>],
                </p>
                {/* <p className="pl-4">
                  <span className="text-indigo-300">&quot;availability&quot;</span>: <span className="text-emerald-400 font-bold">&quot;Immediate / Open for Roles&quot;</span>
                </p> */}
                <p><span className="text-slate-400">&#125;</span></p>
              </div>

              {/* Status Footer */}
              <div
                className="px-4 py-2.5 flex items-center justify-between text-xs font-mono"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.88)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  REST API Endpoint
                </span>
                <span className="text-slate-300 font-sans font-medium">Production Payload</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
