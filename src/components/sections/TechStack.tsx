"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const DOMAINS = [
  {
    number: "01",
    title: "Frontend Engineering",
    description: "Building pixel-perfect, performant UIs with React, Next.js, TypeScript, and modern CSS frameworks.",
    color: "#6366F1",
    bg: "rgba(99, 102, 241, 0.07)",
    border: "rgba(99, 102, 241, 0.2)",
    techs: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Material UI"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Designing scalable REST APIs and microservices with Node.js, Express, and NestJS.",
    color: "#7C3AED",
    bg: "rgba(124, 58, 237, 0.07)",
    border: "rgba(124, 58, 237, 0.2)",
    techs: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    number: "03",
    title: "Database & Caching",
    description: "Data modeling and performance optimization with MongoDB, MySQL, and Redis caching layers.",
    color: "#0EA5E9",
    bg: "rgba(14, 165, 233, 0.07)",
    border: "rgba(14, 165, 233, 0.2)",
    techs: ["MongoDB", "MySQL", "Redis", "Mongoose", "Query Optimization"],
  },
  {
    number: "04",
    title: "AI & LLM Integrations",
    description: "Integrating OpenAI, Gemini, and Replicate APIs into production apps with streaming, RAG, and function calling.",
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.07)",
    border: "rgba(16, 185, 129, 0.2)",
    techs: ["OpenAI GPT-4", "Google Gemini", "Replicate"],
  },
  {
    number: "05",
    title: "Background Jobs & Queues",
    description: "Async processing pipelines with BullMQ and Redis for high-volume, non-blocking task execution.",
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.07)",
    border: "rgba(245, 158, 11, 0.2)",
    techs: ["BullMQ", "SQS", "Worker Threads", "Job Scheduling", "Razorpay"],
  },
  {
    number: "06",
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, containerized deployments, and cloud infrastructure on AWS with Docker.",
    color: "#EF4444",
    bg: "rgba(239, 68, 68, 0.07)",
    border: "rgba(239, 68, 68, 0.2)",
    techs: ["AWS EC2 / S3", "Docker", "GitHub Actions", "Nginx"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-lg">
        <SectionHeader
          eyebrow="Tech Stack"
          title="What I Build With"
          description="Six domains where I bring production-grade expertise — from UI to cloud."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOMAINS.map((domain, i) => (
            <motion.div
              key={domain.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card card-hover rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Watermark number */}
              <span
                className="absolute -top-2 -right-1 watermark-number select-none pointer-events-none"
                aria-hidden="true"
                style={{ WebkitTextStroke: `1.5px ${domain.border}` }}
              >
                {domain.number}
              </span>

              {/* Number badge */}
              <div className="flex items-start justify-between">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-lg tracking-wider"
                  style={{ backgroundColor: domain.bg, color: domain.color, border: `1px solid ${domain.border}` }}
                >
                  {domain.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-heading font-bold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                {domain.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {domain.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {domain.techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md font-medium"
                    style={{
                      backgroundColor: domain.bg,
                      color: domain.color,
                      border: `1px solid ${domain.border}`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
