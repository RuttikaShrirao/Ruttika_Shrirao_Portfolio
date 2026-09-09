import { Project, Experience, TechCategory, Highlight, WorkflowStep } from "@/types";

export const PERSONAL = {
  name: "Ruttika Shrirao",
  firstName: "Ruttika",
  role: "Full Stack Developer",
  email: "ruttikashrirao@gmail.com",
  linkedin: "https://www.linkedin.com/in/ruttikashrirao/",
  github: "https://github.com/RuttikaShrirao",
  location: "India",
  resumeUrl: "/Ruttika_Shrirao_SDE.pdf",
  availability: "Open to Full Stack / MERN Opportunities",
};

export const PROJECTS: Project[] = [
  {
    id: "ai-content-platform",
    title: "AI Content Creation Platform",
    tag: "AI · Full Stack",
    tagColor: "blue",
    shortDescription:
      "An AI-powered platform that automates ecommerce product marketing content generation using multiple AI providers.",
    problem:
      "Ecommerce businesses spend enormous time and cost manually creating product descriptions, marketing copy, and promotional images. The client needed an automated, scalable platform capable of generating high-quality content at scale for thousands of SKUs.",
    solution:
      "Built a full-stack SaaS platform that integrates OpenAI, Gemini, and Replicate to generate text and image content through a unified API layer. Implemented background job processing with BullMQ and Redis so users can trigger large batch generations without waiting on HTTP responses. Added an AdminJS-powered back office for operations teams to manage users, content, and billing.",
    architecture:
      "React.js frontend → Express.js REST API layer → BullMQ workers (Redis-backed) → AI Provider APIs (OpenAI / Gemini / Replicate) → MongoDB (primary storage) → Redis (caching + job queues) → AWS (hosting, storage). Payments handled via Razorpay. AdminJS mounted on a protected /admin route.",
    keyChallenge: [
      "Designing a unified AI provider abstraction that could switch between OpenAI, Gemini, and Replicate without changing business logic",
      "Building a reliable BullMQ job pipeline with retry logic, failure handling, and real-time progress updates to the client",
      "Optimizing MongoDB aggregation queries that were timing out under load — reduced query time by 40%+ through proper indexing and query restructuring",
      "Ensuring payment webhooks (Razorpay) were idempotent and resilient to network failures",
    ],
    impact: [
      "40%+ improvement in API response time through MongoDB query optimization and Redis caching",
      "Batch content generation scaled to handle thousands of items asynchronously without timeout issues",
      "Integrated 3 AI providers under a single abstraction layer — OpenAI, Gemini, Replicate",
      "Full payment lifecycle implemented: checkout, webhooks, subscription management via Razorpay",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI",
      "Gemini",
      "Replicate",
      "Redis",
      "BullMQ",
      "AWS",
      "Razorpay",
      "AdminJS",
    ],
    githubUrl: "#",
    liveUrl: "https://www.zikhara.ai/",
    featured: true,
  },
  {
    id: "event-ticketing-platform",
    title: "Event Ticketing & Booking Platform",
    tag: "Full Stack",
    tagColor: "green",
    shortDescription:
      "A production-ready event discovery and ticket booking platform with real-time seat management and user authentication.",
    problem:
      "Event organizers needed a reliable platform where users could discover events, browse availability, and complete ticket purchases — all within a smooth, fast experience on any device.",
    solution:
      "Built a full-stack application using Next.js for SSR/SSG event pages (SEO-critical for discoverability), a Node.js/Express backend for the booking API, and MongoDB for storing events, bookings, and user data. Implemented JWT authentication, seat lock logic to prevent double-booking, and a multi-step checkout workflow.",
    architecture:
      "Next.js (SSR/ISR) → REST API (Node.js / Express) → MongoDB Atlas → JWT Auth. Event pages are statically generated at build time and revalidated on update for maximum SEO performance.",
    keyChallenge: [
      "Implementing optimistic seat locking to prevent race conditions during concurrent bookings",
      "Balancing SSR vs ISR for event pages — popular events needed fresh data, low-traffic events could be cached",
      "Building a responsive multi-step booking flow that maintained state correctly across steps and handled payment edge cases",
    ],
    impact: [
      "End-to-end booking flow from event discovery to confirmation",
      "SSR/ISR pages for SEO-optimized event discoverability",
      "Concurrent booking conflict prevention via seat lock mechanism",
      "Production-deployed with complete authentication and authorization",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "TypeScript",
    ],
    githubUrl: "#",
    liveUrl:"https://www.ezytix.com/",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics & Reporting Dashboard",
    tag: "Frontend · Data",
    tagColor: "purple",
    shortDescription:
      "A centralized analytics dashboard consolidating multi-source data into interactive, filterable reports and visualizations.",
    problem:
      "Business stakeholders were managing data from multiple sources and had no unified view of performance. Generating reports was a manual, error-prone process that consumed hours weekly.",
    solution:
      "Built a React + Redux dashboard that aggregates data from multiple REST API endpoints into a single unified interface. Used Recharts to build interactive, filterable charts and tables. Implemented advanced filtering, date-range selection, CSV export, and role-based data access.",
    architecture:
      "React.js SPA → Redux (global state) → Multiple REST APIs → Recharts (visualization) → Material UI (design system). Redux middleware handles data normalization and caching of fetched reports.",
    keyChallenge: [
      "Managing complex shared state across many dashboard widgets using Redux without prop-drilling or redundant API calls",
      "Rendering large datasets (10k+ rows) in Recharts without performance degradation — solved via data windowing and memoization",
      "Designing a filter system flexible enough to work across charts, tables, and summary cards simultaneously",
    ],
    impact: [
      "Replaced manual reporting process with real-time, self-serve analytics",
      "Interactive data visualization across multiple chart types",
      "Advanced filtering and date-range controls with instant UI response",
      "Significant reduction in time spent on manual report generation",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Material UI",
      "Recharts",
      "TypeScript",
      "REST APIs",
      "TanStack Query",
    ],
    githubUrl: "#",
    featured: true,
  },
  // {
  //   id: "ai-workflow-builder",
  //   title: "AI Workflow Builder",
  //   tag: "AI · Full Stack",
  //   tagColor: "orange",
  //   shortDescription:
  //     "A visual, prompt-based AI workflow tool allowing non-technical users to build, chain, and execute AI-powered automation pipelines.",
  //   problem:
  //     "Teams wanted to automate internal workflows using AI (summarization, classification, content generation) but had no technical capability to prompt-engineer or build integrations themselves.",
  //   solution:
  //     "Built a node-based visual editor (React Flow) where users drag-and-drop workflow steps, configure prompts, and connect AI tasks in a visual graph. The backend executes workflows node-by-node, calling Gemini or OpenAI APIs, storing results in MongoDB, and streaming progress back to the client via SSE.",
  //   architecture:
  //     "React.js + React Flow (visual editor) → Node.js execution engine → Gemini / OpenAI APIs → MongoDB (workflow storage, execution logs) → SSE (real-time progress streaming).",
  //   keyChallenge: [
  //     "Designing a serializable workflow graph format that could represent complex branching logic and be safely executed server-side",
  //     "Streaming partial AI output to the frontend in real-time without overwhelming the UI — implemented debounced SSE updates",
  //     "Ensuring prompt injection safety and input validation before sending user-configured prompts to external AI APIs",
  //   ],
  //   impact: [
  //     "Non-technical users can build and run AI workflows without engineering support",
  //     "Real-time execution feedback via server-sent events",
  //     "Supports multi-step AI chains with conditional branching",
  //     "Gemini and OpenAI provider abstraction for model flexibility",
  //   ],
  //   technologies: [
  //     "React.js",
  //     "React Flow",
  //     "Node.js",
  //     "Express.js",
  //     "Gemini",
  //     "OpenAI",
  //     "MongoDB",
  //     "TypeScript",
  //     "SSE",
  //   ],
  //   githubUrl: "#",
  //   featured: true,
  // },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "digiflux",
    role: "Software Engineer",
    company: "Digiflux Technologies",
    period: "2025 – Present",
    current: true,
    description:
      "Building production-grade full-stack applications across frontend, backend, and managing databases, and also deployed on AWS",
    highlights: [
      "Built an AI-powered media platform for Amazon and other e-commerce platforms to automate marketing content generation using GPT-4, Gemini, and Replicate APIs, with scalable image-processing microservices for AI generated images, Background Removal, Image Upscaling, and Image Cleanup.",
      "Launched a Fashion Video Generation Module using LLMs, prompt engineering, and image-to-video models.",
      "Collaborated closely with Indian and European clients teams, ensuring efficient task delivery and effective communication that led to successful project execution.",
      "Integrated AWS S3 and CDN for scalable file storage and fast content delivery, optimizing the serving of static assets while improving application performance and reducing server load.",
      "Optimized MongoDB queries and backend APIs, improving overall application performance by 40% through handling data on application level. ",
      "Built full-featured admin panels using AdminJS and React.js with role-based access control, real-time analytics dashboards.",
      "Integrated TanStack Query (React Query) for efficient server-state management, enabling optimistic UI updates, background data sync, and elimination of redundant API calls.",
      "Built full-stack applications from scratch using Express.js, Next.js, React, and TypeScript, transforming business requirements into scalable solutions.",
      "Collaborated with cross-functional teams on code reviews, Git merges, conflict resolution, synchronizing branches and production deployments.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "OpenAI",
      "Gemini",
      "Replicate",
      "Razorpay",
      "AdminJS",
      "AWS",
      "Docker",
      "TypeScript",
    ],
  },
  {
    id: "generalist",
    role: "Frontend Engineer",
    company: "The Generalist Company",
    period: "2023 – 2024",
    current: false,
    description:
      "Focused on building data-rich analytics dashboards and reporting interfaces used by business stakeholders.",
    highlights: [
      "Built interactive analytics and reporting dashboards using React.js, Redux, and Material UI",
      "Implemented complex data visualizations using Recharts across multiple chart types",
      "Integrated REST APIs and managed application state with Redux and TanStack Query",
      "Developed reusable component libraries and design system tokens for consistency across products",
      "Optimized dashboard rendering performance for large datasets using memoization and lazy loading",
      "Built responsive, cross-browser-compatible interfaces tested on multiple devices",
      "Collaborated with backend engineers and product managers in an agile environment",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Material UI",
      "Recharts",
      "TanStack Query",
      "REST APIs",
      "JavaScript",
    ],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Frontend",
    techs: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Redux", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Material UI", icon: "mui" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    name: "Database & Caching",
    techs: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    name: "AI & Integrations",
    techs: [
      { name: "OpenAI", icon: "openai" },
      { name: "Gemini", icon: "google" },
      { name: "Replicate", icon: "replicate" },
      { name: "BullMQ", icon: "bullmq" },
      { name: "Razorpay", icon: "razorpay" },
    ],
  },
  {
    name: "DevOps & Cloud",
    techs: [
      { name: "AWS", icon: "amazonaws" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "CI/CD", icon: "githubactions" },
    ],
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    value: "40%+",
    label: "API Performance Improvement",
    description:
      "Reduced API response times through MongoDB query optimization, indexing strategies, and Redis caching layers.",
  },
  {
    value: "3",
    label: "AI Providers Integrated",
    description:
      "OpenAI, Google Gemini, and Replicate integrated under a unified abstraction layer for production AI workloads.",
  },
  {
    value: "Full Stack",
    label: "End-to-End Ownership",
    description:
      "Frontend, backend, database design, DevOps, and production deployment — across every layer of the stack.",
  },
  {
    value: "Async",
    label: "Background Job Systems",
    description:
      "BullMQ + Redis queue architecture for high-volume asynchronous processing without blocking the main API.",
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Understand",
    description:
      "Break down the business requirement, identify the real problem, and define success criteria before writing a line of code.",
    icon: "brain",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Design the API contract, database schema, and system architecture. Identify scaling bottlenecks early.",
    icon: "layout",
  },
  {
    step: 3,
    title: "Build",
    description:
      "Develop the frontend and backend incrementally with clean, typed, maintainable code and thorough API testing.",
    icon: "code",
  },
  {
    step: 4,
    title: "Optimize",
    description:
      "Profile slow queries, introduce caching, move heavy work to background jobs, and cut unnecessary network round-trips.",
    icon: "zap",
  },
  {
    step: 5,
    title: "Deploy",
    description:
      "Ship to production via CI/CD pipelines on AWS. Use Docker for environment consistency and zero-downtime deployments.",
    icon: "rocket",
  },
  {
    step: 6,
    title: "Improve",
    description:
      "Monitor errors and performance in production, act on real user feedback, and iterate continuously.",
    icon: "trending-up",
  },
];
