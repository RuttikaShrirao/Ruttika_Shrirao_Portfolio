"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/types";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const TAG_COLORS: Record<string, string> = {
  blue: "#60a5fa",
  green: "#34d399",
  purple: "#a78bfa",
  orange: "#fb923c",
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
        />

        {/* Modal */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-2xl"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="sticky top-0 flex items-start justify-between p-6 pb-4 z-10"
            style={{
              backgroundColor: "var(--bg-card)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-wider mb-2 block"
                style={{ color: TAG_COLORS[project.tagColor] || "var(--accent-light)" }}
              >
                {project.tag}
              </span>
              <h2
                className="font-heading font-bold text-xl md:text-2xl"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border flex items-center justify-center ml-4 shrink-0 transition-all hover:scale-105"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-secondary)",
              }}
              aria-label="Close modal"
              id="modal-close"
            >
              <X size={17} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-8">
            {/* Problem */}
            <Section title="The Problem">
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.problem}
              </p>
            </Section>

            {/* Solution */}
            <Section title="The Solution">
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.solution}
              </p>
            </Section>

            {/* Architecture */}
            <Section title="Architecture Overview">
              <div
                className="p-4 rounded-xl text-xs font-mono leading-6"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {project.architecture}
              </div>
            </Section>

            {/* Key Challenges */}
            <Section title="Key Engineering Challenges">
              <ul className="space-y-3">
                {project.keyChallenge.map((ch, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                      style={{
                        backgroundColor: "var(--accent-bg)",
                        color: "var(--accent-light)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {ch}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Impact */}
            <Section title="Impact & Results">
              <ul className="space-y-2">
                {project.impact.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[6px] shrink-0"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                    {imp}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Technologies */}
            <Section title="Technologies Used">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
            </Section>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                  id={`modal-github-${project.id}`}
                >
                  <GithubIcon size={15} />
                  View Code
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  id={`modal-live-${project.id}`}
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="font-heading font-semibold text-sm mb-3 flex items-center gap-2"
        style={{ color: "var(--text-primary)" }}
      >
        <ArrowRight size={14} style={{ color: "var(--accent)" }} />
        {title}
      </h3>
      {children}
    </div>
  );
}
