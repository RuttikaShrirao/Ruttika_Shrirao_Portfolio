"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Eye } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-10">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 blur-3xl opacity-10 pointer-events-none"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />

          <div className="relative">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-4 inline-block"
              style={{ color: "var(--accent-light)" }}
            >
              Resume
            </span>
            <h2
              className="font-heading font-bold text-3xl md:text-4xl mb-4 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Want to know more about my experience?
            </h2>
            <p
              className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Download my resume to explore my experience, projects and
              technical skills in detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={PERSONAL.resumeUrl}
                className="btn-primary text-base px-8 py-3.5"
                download
                id="resume-download"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-3.5"
                id="resume-view"
              >
                <Eye size={18} />
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
