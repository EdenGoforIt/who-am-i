"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

function ThemeIcon({ theme }: { theme: "dark" | "light" }): React.JSX.Element {
  if (theme === "dark") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0 0 0 0 0A7 7 0 0 0 21 12.79z" />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Article", href: "/articles" },
  { label: "Contact", href: "/contact" }
];

export default function Nav(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const initialTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = (): void => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  const isActive = (link: NavLink): boolean => pathname === link.href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "h-[70px] bg-[rgba(10,25,47,0.85)] backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
            : "h-[70px] bg-[rgba(255,255,255,0.9)] backdrop-blur-md shadow-[0_10px_24px_-14px_rgba(15,23,42,0.4)]"
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

        <div className="hidden md:flex items-center gap-6">
          {/* Desktop links */}
          <ol className="flex items-center gap-8 list-none m-0 p-0">
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

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-lightest text-slate-lighter transition-colors hover:border-green hover:text-green"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>

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

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-lightest text-slate-lighter transition-colors hover:border-green hover:text-green"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      )}
    </header>
  );
}
