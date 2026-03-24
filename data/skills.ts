export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Docker", "PostgreSQL", "Figma", "VS Code"],
  },
  {
    category: "Soft Skills",
    items: ["Technical Writing", "System Design", "Code Review", "Mentoring", "Agile / Scrum"],
  },
];
