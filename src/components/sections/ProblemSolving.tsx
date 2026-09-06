"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  LayoutDashboard,
  Code2,
  Zap,
  Rocket,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { WORKFLOW_STEPS } from "@/lib/data";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  brain: Brain,
  layout: LayoutDashboard,
  code: Code2,
  zap: Zap,
  rocket: Rocket,
  "trending-up": TrendingUp,
};

const STEP_COLORS = [
  { color: "#60a5fa", bg: "rgba(96, 165, 250, 0.1)" },
  { color: "#a78bfa", bg: "rgba(167, 139, 250, 0.1)" },
  { color: "#34d399", bg: "rgba(52, 211, 153, 0.1)" },
  { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
  { color: "#fb923c", bg: "rgba(251, 146, 60, 0.1)" },
  { color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)" },
];

export default function ProblemSolving() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-lg">
        <SectionHeader
          eyebrow="Engineering Process"
          title="How I Solve Problems"
          description="I approach every engineering challenge with a structured process — from understanding the business requirement to monitoring the system in production."
          align="center"
        />

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORKFLOW_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon] || Code2;
            const { color, bg } = STEP_COLORS[i % STEP_COLORS.length];

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="card card-hover p-6 rounded-2xl flex flex-col gap-4"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: bg }}
                  >
                    <span style={{ color }}><Icon size={20} /></span>
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Step {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-heading font-bold text-lg"
                  style={{ color }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-sm mt-10 max-w-xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          I don&apos;t just write UI. I understand systems, design APIs, optimize
          databases, and ship production-grade software end-to-end.
        </motion.p>
      </div>
    </section>
  );
}
