export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
  tech?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Acme Corp",
    companyUrl: "https://example.com",
    period: "2023 — Present",
    description: [
      "Lead development of the customer dashboard, cutting page load time by 60% through code splitting and edge caching.",
      "Designed a new REST API layer in Node.js and TypeScript, enabling three key third-party integrations shipped in Q1.",
      "Mentored two junior engineers; introduced weekly code-review rotations and onboarding documentation.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Frontend Developer",
    company: "Startup XYZ",
    companyUrl: "https://example.com",
    period: "2021 — 2023",
    description: [
      "Built and maintained 15+ UI components used across five product areas, with full Storybook documentation.",
      "Partnered with design and product teams to ship pixel-perfect interfaces from Figma specs.",
      "Implemented an A/B testing framework that improved user activation by 25%.",
    ],
    tech: ["React", "JavaScript", "CSS", "Storybook", "Jest"],
  },
  {
    role: "B.S. Computer Science",
    company: "State University",
    period: "2017 — 2021",
    description: [
      "Graduated with honors. Coursework: Data Structures, Algorithms, Web Development, Databases, Operating Systems.",
    ],
  },
];
