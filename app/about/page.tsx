import About from "@/components/about";
import { baseUrl } from "@/lib/site-config";
import React from "react";

export const metadata = {
  title: "About — Eden Park | Software Engineer",
  description: "About Eden Park — software engineer portfolio and background.",
  alternates: { canonical: `${baseUrl}/about` }
};

export default function AboutPage(): React.JSX.Element {
  return (
    <main>
      <About />
    </main>
  );
}
