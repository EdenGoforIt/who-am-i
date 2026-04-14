import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
