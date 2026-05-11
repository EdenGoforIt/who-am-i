import Experience from "@/components/experience";
import { baseUrl } from "@/lib/site-config";
import React from "react";

export const metadata = {
  title: "Experience — Eden Park | Software Engineer",
  description: "Professional experience and roles held by Eden Park.",
  alternates: { canonical: `${baseUrl}/experience` }
};

export default function ExperiencePage(): React.JSX.Element {
  return (
    <main>
      <Experience />
    </main>
  );
}
