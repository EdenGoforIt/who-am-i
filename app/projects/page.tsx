import Projects from "@/components/projects";
import { baseUrl } from "@/lib/site-config";
import React from "react";

export const metadata = {
  title: "Projects — Eden Park | Software Engineer",
  description: "Selected projects by Eden Park — full-stack web applications and case studies.",
  alternates: { canonical: `${baseUrl}/projects` }
};

export default function ProjectsPage(): React.JSX.Element {
  return (
    <main>
      <Projects />
    </main>
  );
}
