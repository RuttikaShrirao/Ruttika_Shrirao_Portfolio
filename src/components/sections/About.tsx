"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const keywords = [
  "REST API Design",
  "MongoDB Optimization",
  "AI Integrations",
  "Payment Gateways",
  "Background Jobs",
  "Redis Caching",
  "Cloud Deployments",
  "Production Systems",
  "TypeScript",
  "System Design",
];

const traits = [
  {
    label: "Production First",
    description:
      "Every system I build is designed for real-world load — not just to pass a demo.",
  },
  {
    label: "API Architecture",
    description:
      "I design REST APIs that are clean, versioned, and built to scale with the business.",
  },
  {
    label: "Performance Mindset",
    description:
      "I look for bottlenecks before they become incidents — query optimization, caching, and load testing are part of my process.",
  },
  {
    label: "Async & Scale",
    description:
      "When a job is too heavy for a request cycle, I move it to a queue. BullMQ + Redis is my go-to for reliable background processing.",
  },
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
          description="I'm a Full Stack Developer with 3 years of experience working across the entire development lifecycle — from designing APIs and database schemas to building responsive frontends and shipping to cloud infrastructure."
        />

        <div className="grid lg:grid-cols-[1fr_auto] gap-14 items-start">
          {/* Left: Description */}
          <div className="space-y-6 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;ve spent the last 3 years building production applications
              with the MERN stack — not just writing UI components, but
              architecting systems. I&apos;ve designed REST APIs from scratch,
              optimized slow MongoDB queries under production load, integrated
              multiple AI providers into a unified abstraction, and shipped
              applications to AWS using Docker and CI/CD pipelines.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              When a feature requires heavy background processing, I reach for
              BullMQ and Redis rather than blocking the API. When a dashboard
              gets slow, I investigate query plans, not just the frontend
              rendering. When a payment integration needs to be bulletproof, I
              build idempotent webhooks and handle every edge case.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              My goal in any engineering role is to understand the business
              problem deeply, design the right solution, and deliver software
              that works reliably in production — not just in development.
            </motion.p>

            {/* Traits */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="grid sm:grid-cols-2 gap-4 pt-2"
            >
              {traits.map((trait) => (
                <div
                  key={trait.label}
                  className="card card-hover p-4 rounded-xl"
                >
                  <h3
                    className="font-heading font-semibold text-sm mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {trait.label}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {trait.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Keyword cloud */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-3 min-w-[220px]"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--text-muted)" }}
            >
              Core Competencies
            </p>
            {keywords.map((kw, i) => (
              <motion.div
                key={kw}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
              >
                <span className="tech-badge text-xs">{kw}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
