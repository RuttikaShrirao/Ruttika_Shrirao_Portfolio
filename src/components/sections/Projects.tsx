"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["All", "Full Stack", "AI", "Backend"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState("All");

  const filtered = PROJECTS.filter((p) => {
    if (active === "All") return p.featured;
    if (active === "AI") return p.technologies.some((t) => ["OpenAI", "Gemini", "Replicate", "LLM", "AI"].some((ai) => t.includes(ai)));
    if (active === "Backend") return p.technologies.some((t) => ["Node.js", "Express", "NestJS", "MongoDB"].includes(t));
    return p.featured;
  });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-lg">
        <SectionHeader
          eyebrow="Featured Projects"
          title="What I've Built"
          description="Production applications demonstrating end-to-end engineering. Click any project for the full case study."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                active === f
                  ? {
                      background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                      color: "white",
                      boxShadow: "0 4px 14px rgba(79, 70, 229, 0.3)",
                    }
                  : {
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }
              }
              id={`projects-filter-${f.toLowerCase().replace(" ", "-")}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
