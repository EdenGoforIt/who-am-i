import Hero from "@/components/hero";
import { baseUrl } from "@/lib/site-config";
import React from "react";

export const metadata = {
  title: "Eden Park | Software Engineer",
  description:
    "Eden Park — software engineer specializing in full-stack web development. Building fast, accessible, and beautiful digital products.",
  alternates: { canonical: `${baseUrl}/` }
};

export default function Home(): React.JSX.Element {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Eden Park",
    url: `${baseUrl}/`,
    jobTitle: "Software Engineer",
    sameAs: ["https://github.com/EdenGoforIt", "https://www.linkedin.com/in/eden-park-3561291a0/"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
    </main>
  );
}
