"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { Project } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const TAG_PALETTE: Record<string, { color: string; bg: string }> = {
  blue: { color: "#6366F1", bg: "rgba(99,102,241,0.1)" },
  green: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
  purple: { color: "#7C3AED", bg: "rgba(124,58,237,0.1)" },
  orange: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
};

export default function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const { color, bg } = TAG_PALETTE[project.tagColor] || TAG_PALETTE.blue;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => {
          if (project.liveUrl && project.liveUrl !== "#") {
            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
          } else {
            setModalOpen(true);
          }
        }}
        className={`card card-hover rounded-2xl p-6 flex flex-col gap-4 h-full relative ${
          project.liveUrl && project.liveUrl !== "#" ? "cursor-pointer" : ""
        }`}
      >
        {/* Featured badge */}
        {index === 0 && (
          <div
            className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.25)" }}
          >
            <Star size={10} />
            Featured
          </div>
        )}

        {/* Tag row */}
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: bg, color, border: `1px solid ${color}33` }}
          >
            {project.tag}
          </span>
        </div>

        {/* Title & description */}
        <div className="flex-1">
          <h3
            className="font-heading font-bold text-lg mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {project.shortDescription}
          </p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md font-medium"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span
              className="text-xs px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
            className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group"
            style={{ color: "var(--accent)" }}
            aria-label={`View ${project.title} case study`}
            id={`card-details-${project.id}`}
          >
            Case Study
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg border flex items-center justify-center transition-all hover:scale-110"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                onClick={(e) => e.stopPropagation()}
                id={`card-github-${project.id}`}
              >
                <GithubIcon size={13} />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg border flex items-center justify-center transition-all hover:scale-110"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                onClick={(e) => e.stopPropagation()}
                id={`card-live-${project.id}`}
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}
