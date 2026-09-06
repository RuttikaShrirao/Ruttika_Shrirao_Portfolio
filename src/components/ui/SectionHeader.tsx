"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`mb-8 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
          <div
            className="w-5 h-0.5 rounded-full"
            style={{ background: "linear-gradient(90deg, #4F46E5, #7C3AED)" }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
