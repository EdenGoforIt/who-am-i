'use client';

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

function ExternalLinkIcon(): React.JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GitHubIcon(): React.JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

export default function Projects(): React.JSX.Element {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-[100px] px-6 lg:px-[150px] max-w-[1600px] mx-auto"
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="section-number">02.</span> Some Things I&apos;ve Built
      </motion.h2>

      {/* Featured projects */}
      <div className="space-y-24 mb-20">
        {featured.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.645, 0.045, 0.355, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
          >
            {/* Screenshot placeholder */}
            <div
              className={`lg:col-span-7 h-64 lg:h-80 rounded flex items-center justify-center font-mono text-sm bg-navy-light text-green border border-navy-lightest ${
                i % 2 === 0 ? "lg:col-start-1" : "lg:col-start-6 lg:row-start-1"
              }`}
            >
              screenshot
            </div>

            {/* Text content */}
            <div
              className={`lg:col-span-6 z-10 ${
                i % 2 === 0
                  ? "lg:col-start-7 lg:row-start-1 lg:text-right"
                  : "lg:col-start-1 lg:row-start-1 lg:text-left"
              }`}
            >
              <p className="font-mono text-sm mb-1 text-green">
                Featured Project
              </p>
              <h3
                className="text-2xl font-semibold mb-4 text-slate-lighter"
              >
                {project.title}
              </h3>
              <div
                className="p-6 rounded mb-4 bg-navy-light text-slate-light text-base"
              >
                {project.description}
              </div>
              <ul
                className={`flex flex-wrap gap-2 mb-4 list-none p-0 ${
                  i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                }`}
              >
                {project.tech.map((t) => (
                  <li key={t} className="font-mono text-xs text-slate-light">
                    {t}
                  </li>
                ))}
              </ul>
              <div
                className={`flex gap-4 ${
                  i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                }`}
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-slate-lighter transition-colors duration-300 hover:opacity-80"
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="text-slate-lighter transition-colors duration-300 hover:opacity-80"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects grid */}
      <h3
        className="text-center text-xl font-semibold mb-8 text-slate-lighter"
      >
        Other Noteworthy Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {other.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.645, 0.045, 0.355, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="group rounded p-7 flex flex-col h-full transition-all duration-300 bg-navy-light border border-navy-lightest"
          >
            <div className="flex items-start justify-between mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-light hover:opacity-80 transition-opacity">
                    <GitHubIcon />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="text-slate-light hover:opacity-80 transition-opacity">
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-green transition-colors text-slate-lighter">
              {project.title}
            </h3>
            <p className="text-sm mb-auto leading-relaxed text-slate text-[15px]">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4 list-none p-0">
              {project.tech.map((t) => (
                <li key={t} className="font-mono text-xs text-slate-light">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
