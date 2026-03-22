export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Collaborative Workspace",
    description:
      "A real-time collaboration platform built for distributed teams. Features live cursor tracking, shared whiteboards, and granular permission controls. Reduced async communication overhead by 35% for pilot teams.",
    tech: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "DevMetrics Dashboard",
    description:
      "An open-source engineering productivity dashboard that surfaces insights from GitHub, Linear, and Vercel in one place. Used by 200+ developers across 15 teams.",
    tech: ["React", "Node.js", "REST APIs", "Recharts", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Scaffold CLI",
    description:
      "A command-line tool that automates project scaffolding, code generation, and deployment pipelines for Node.js applications. Cuts initial project setup from 2 hours to under 5 minutes.",
    tech: ["Node.js", "TypeScript", "Commander.js", "Inquirer"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "UI Component Library",
    description:
      "A design-system-backed component library with 40+ accessible components, full Storybook documentation, and automated visual regression testing.",
    tech: ["React", "TypeScript", "Storybook", "CSS Modules", "Jest"],
    githubUrl: "https://github.com",
    featured: false,
  },
];
