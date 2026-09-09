"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Server, Zap, Sparkles, Cloud, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Server,
    title: "Backend & API Architecture",
    tag: "Node.js · Express · REST",
    description:
      "Designing clean, versioned REST APIs and resilient database schemas engineered for real-world load and seamless client integration.",
  },
  {
    icon: Zap,
    title: "Async & Queue Processing",
    tag: "BullMQ · Redis",
    description:
      "Offloading heavy background tasks, batch generations, and third-party webhooks to Redis queues to keep response times fast and non-blocking.",
  },
  {
    icon: Sparkles,
    title: "AI Provider Integrations",
    tag: "OpenAI · Gemini · Replicate",
    description:
      "Building unified AI provider abstractions and fault-tolerant generation workflows that effortlessly adapt to multiple AI model vendors.",
  },
  {
    icon: Cloud,
    title: "Database & Cloud DevOps",
    tag: "MongoDB · AWS · Docker",
    description:
      "Optimizing query execution plans under heavy traffic and shipping high performance, scalable, and reliable software to clients.",
  },
];

const highlights = [
  "3+ Years Experience",
  "MERN Stack Specialist",
  "Production-Grade APIs",
  "Async Queue Architecture",
];

const keywords = [
  "REST API Design",
  "MongoDB Optimization",
  "AI Provider Integrations",
  "BullMQ & Redis Queues",
  "AWS & Docker Deployments",
  "System Architecture",
  "TypeScript & Node.js",
  "Express.js & React",
  "Razorpay / Payment Gateways",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-lg">
        <SectionHeader
          eyebrow="About"
          title="Engineering at Every Layer"
          description="Full Stack Developer with 3+ years of experience architecting end-to-end web applications, resilient backend APIs, and scalable cloud workflows."
        />

        {/* Bio Card with Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card rounded-2xl p-6 md:p-8 mb-10 relative overflow-hidden"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="max-w-3xl">
            <h3 className="font-heading font-bold text-xl md:text-2xl mb-3" style={{ color: "var(--text-primary)" }}>
              Building Production-First Web Applications & APIs
            </h3>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              I specialize in building full-stack applications with the MERN stack — moving beyond basic UI components to architecting high-throughput backend services, optimizing slow database queries, integrating multiple AI model APIs into unified abstractions, and shipping reliable software to AWS cloud infrastructure.
            </p>

            {/* Quick highlight pills */}
            <div className="flex flex-wrap gap-2.5">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--accent-bg)",
                    color: "var(--accent)",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                  }}
                >
                  <CheckCircle2 size={13} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                className="card card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <h3
                    className="font-heading font-semibold text-lg mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Horizontal Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="min-w-[180px]">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Core Competencies
            </p>
            <p className="font-heading font-medium text-sm mt-0.5" style={{ color: "var(--text-primary)" }}>
              Skills & Focus Areas
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <span key={kw} className="tech-badge text-xs px-3 py-1 rounded-lg">
                {kw}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
