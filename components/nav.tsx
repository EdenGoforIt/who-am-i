"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
  sectionId?: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Achievements", href: "#achievements", sectionId: "achievements" },
  { label: "Contact", href: "#contact", sectionId: "contact" }
];

export default function Nav(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight nav based on scroll position when on home page
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks.map((l) => l.sectionId).filter(Boolean) as string[];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let active = sectionIds[0];

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) active = id;
      });

      setActiveSection(active);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isActive = (link: NavLink): boolean => {
    if (isHome) return activeSection === link.sectionId;
    return pathname === link.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        scrolled
          ? "h-[70px] bg-[rgba(10,25,47,0.85)] backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
          : "h-[100px] bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="w-full max-w-[1600px] mx-auto px-6 lg:px-[150px] flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-lg font-semibold text-green transition-colors duration-300 hover:opacity-80"
        >
          &lt;Eden Park&gt;
        </Link>

        {/* Desktop links */}
        <ol className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li
              aria-current={isActive(link) ? "page" : undefined}
              key={link.href}
              className="font-mono text-sm"
            >
              <Link
                href={link.href}
                className={`transition-colors duration-300 hover:opacity-80 ${
                  isActive(link) ? "text-green" : "text-slate-lighter"
                }`}
              >
                <span className="text-green mr-1">0{i}.</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ol>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-green"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-green transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-green transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-green transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 md:hidden py-8 px-6 flex flex-col items-center gap-6 bg-navy-light"
        >
          <ol className="list-none flex flex-col items-start gap-4">
            {navLinks.map((link, i) => (
              <li key={link.href} className="font-mono text-sm">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={`transition-colors duration-300 ${
                    isActive(link) ? "text-green" : "text-slate-lighter"
                  }`}
                >
                  <span className="text-green mr-1">0{i}.</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </header>
  );
}
