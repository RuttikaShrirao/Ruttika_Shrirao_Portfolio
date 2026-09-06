export interface Project {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  shortDescription: string;
  problem: string;
  solution: string;
  architecture: string;
  keyChallenge: string[];
  impact: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface TechCategory {
  name: string;
  techs: Tech[];
}

export interface Tech {
  name: string;
  icon: string; // SVG path or emoji fallback
}

export interface Highlight {
  value: string;
  label: string;
  description: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
