"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-lg">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Built"
          description="3 years of professional engineering experience across full-stack development, analytics platforms, and AI-powered product engineering."
        />

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-[15px] top-8 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent-border) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-8"
              >
                {/* Timeline dot */}
                <div className="relative hidden md:flex flex-col items-center shrink-0">
                  <div
                    className="w-[30px] h-[30px] rounded-full flex items-center justify-center border-2 z-10 shrink-0"
                    style={{
                      backgroundColor: exp.current
                        ? "var(--accent)"
                        : "var(--bg-card)",
                      borderColor: exp.current
                        ? "var(--accent)"
                        : "var(--border)",
                    }}
                  >
                    {exp.current && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="card card-hover p-6 rounded-2xl flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="font-heading font-bold text-lg"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
                            style={{
                              backgroundColor: "rgba(34,197,94,0.1)",
                              color: "#22c55e",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p
                        className="font-medium mt-0.5"
                        style={{ color: "var(--accent-light)" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-sm font-medium shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-[6px] shrink-0"
                          style={{ backgroundColor: "var(--accent)" }}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md font-medium"
                        style={{
                          backgroundColor: "var(--accent-bg)",
                          color: "var(--accent-light)",
                          border: "1px solid var(--accent-border)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
