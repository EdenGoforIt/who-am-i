import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import React from "react";
import Nav from "@/components/nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eden Park | Software Engineer",
  description:
    "Software engineer specializing in full-stack web development. Building fast, accessible, and beautiful digital products.",
  openGraph: {
    title: "Eden Park | Software Engineer",
    description: "Software engineer specializing in full-stack web development.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
