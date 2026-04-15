"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function ExternalLinkIcon(): React.JSX.Element {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon(): React.JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function GlobeIcon(): React.JSX.Element {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function AndroidIcon(): React.JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-9.046 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM2.89 7.511l1.961 3.495A9.98 9.98 0 0 0 2 15.5h20a9.98 9.98 0 0 0-2.851-4.494l1.961-3.495a.5.5 0 0 0-.867-.497l-1.94 3.458A9.944 9.944 0 0 0 12 9a9.944 9.944 0 0 0-6.303 1.472L3.757 7.014a.5.5 0 0 0-.867.497z" />
    </svg>
  );
}

function AppleIcon(): React.JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function ArticleIcon(): React.JSX.Element {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ProjectImages({ images, title }: { images: string[]; title: string }): React.JSX.Element {
  const count = images.length;

  if (count === 1) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full h-64 lg:h-80 rounded overflow-hidden">
          <Image src={images[0]} alt={`${title} screenshot`} fill className="object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-start justify-center gap-2 px-2 pt-2">
      {images.map((src, idx) => {
        const widthClass = count <= 3 ? "w-1/3" : count === 4 ? "w-1/4" : "w-1/5";

        return (
          <div
            key={src}
            className={`relative ${widthClass} h-full rounded-xl overflow-hidden border border-navy-lightest shadow-lg flex-shrink-0`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-cover object-top"
            />
          </div>
        );
      })}
    </div>
  );
}

function TechList({
  tech,
  justify = "start"
}: {
  tech: string[];
  justify?: "start" | "end";
}): React.JSX.Element {
  const justifyClass = justify === "end" ? "lg:justify-end" : "lg:justify-start";
  return (
    <ul className={`flex flex-wrap gap-2 mb-4 list-none p-0 ${justifyClass}`}>
      {tech.map((t) => (
        <li
          key={t}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-mono text-xs text-green bg-green/10 border border-green/20"
        >
          <span className="w-1 h-1 rounded-full bg-green opacity-70" />
          {t}
        </li>
      ))}
    </ul>
  );
}

const LINK_PILL =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-navy-lightest text-xs font-mono text-slate-lighter bg-navy-light transition-all duration-200 hover:border-green hover:text-green hover:bg-navy";

function ProjectLinks({
  project,
  justify = "start"
}: {
  project: (typeof projects)[number];
  justify?: "start" | "end";
}): React.JSX.Element {
  const justifyClass = justify === "end" ? "lg:justify-end" : "lg:justify-start";

  return (
    <div className={`flex gap-2 flex-wrap ${justifyClass}`}>
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={LINK_PILL}>
          <GitHubIcon /> GitHub
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={LINK_PILL}>
          <ExternalLinkIcon /> Live Site
        </a>
      )}
      {project.webUrl && (
        <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className={LINK_PILL}>
          <GlobeIcon /> Website
        </a>
      )}
      {project.androidUrl && (
        <a
          href={project.androidUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_PILL}
        >
          <AndroidIcon /> Play Store
        </a>
      )}
      {project.iosUrl && (
        <a href={project.iosUrl} target="_blank" rel="noopener noreferrer" className={LINK_PILL}>
          <AppleIcon /> App Store
        </a>
      )}
      {project.articles?.map((url, idx) => (
        <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={LINK_PILL}>
          <ArticleIcon /> {project.articles!.length > 1 ? `Article ${idx + 1}` : "Article"}
        </a>
      ))}
    </div>
  );
}

export default function Projects(): React.JSX.Element {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[100px] px-6 lg:px-[150px] max-w-[1600px] mx-auto">
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
        {featured.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.645, 0.045, 0.355, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Screenshot area — always left */}
            <div className="h-64 lg:h-80 rounded flex items-start justify-center bg-navy-light border border-navy-lightest overflow-hidden">
              {project.images && project.images.length > 0 ? (
                <ProjectImages images={project.images} title={project.title} />
              ) : (
                <span className="font-mono text-sm text-green">screenshot</span>
              )}
            </div>

            {/* Text content — always right */}
            <div className="z-10">
              <p className="font-mono text-sm mb-1 text-green">Featured Project</p>
              <h3 className="text-2xl font-semibold mb-4 text-slate-lighter">{project.title}</h3>
              <div className="p-6 rounded mb-4 bg-navy-light text-slate-light text-base">
                <div className="mb-4">{project.description}</div>
                <TechList tech={project.tech} />
              </div>
              <ProjectLinks project={project} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects grid */}
      <h3 className="text-center text-xl font-semibold mb-8 text-slate-lighter">
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
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="flex gap-3">
                <ProjectLinks project={project} justify="end" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-green transition-colors text-slate-lighter">
              {project.title}
            </h3>
            <p className="text-sm mb-auto leading-relaxed text-slate text-[15px] text-base">
              <div className="mb-4">{project.description}</div>
              <TechList tech={project.tech} />
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
