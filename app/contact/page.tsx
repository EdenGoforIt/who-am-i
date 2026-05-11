import Contact from "@/components/contact";
import { baseUrl } from "@/lib/site-config";
import React from "react";

export const metadata = {
  title: "Contact — Eden Park | Software Engineer",
  description: "Get in touch with Eden Park — contact information and links.",
  alternates: { canonical: `${baseUrl}/contact` }
};

export default function ContactPage(): React.JSX.Element {
  return (
    <main>
      <Contact />
    </main>
  );
}
