import Skills from "@/components/skills";
import { baseUrl } from "@/lib/site-config";
import React from "react";

export const metadata = {
  title: "Skills — Eden Park | Software Engineer",
  description: "Technical skills and tools used by Eden Park — frontend, backend, devops.",
  alternates: { canonical: `${baseUrl}/skills` }
};

export default function SkillsPage(): React.JSX.Element {
  return (
    <main>
      <Skills />
    </main>
  );
}
