"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Experience(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = experiences[activeIndex];

  return (
    <section
      id="experience"
      className="py-[100px] px-6 lg:px-[150px] max-w-[1600px] mx-auto flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-heading">
          <span className="section-number">04.</span> Where I&apos;ve Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-0">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Work experience tabs"
            className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:min-w-[200px] border-b md:border-b-0 md:border-l border-navy-lightest"
          >
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                type="button"
                id={`experience-tab-${i}`}
                role="tab"
                aria-selected={activeIndex === i}
                aria-controls={`experience-panel-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-200 border-l-2 ${
                  activeIndex === i
                    ? "text-green bg-green-tint border-l-green"
                    : "text-slate bg-transparent border-l-transparent"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <div
            id={`experience-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`experience-tab-${activeIndex}`}
            className="flex-1 px-0 md:px-10 pt-6 md:pt-0"
          >
            <h3 className="text-xl font-semibold mb-1 text-slate-lighter">
              {active.role}{" "}
              {active.companyUrl ? (
                <a
                  href={active.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green hover:opacity-80 transition-opacity"
                >
                  @ {active.company}
                </a>
              ) : (
                <span className="text-green">@ {active.company}</span>
              )}
            </h3>
            <p className="font-mono text-sm mb-5 text-slate">{active.period}</p>
            <ul className="space-y-3 list-none p-0">
              {active.description.map((line, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate">
                  <span className="mt-1 flex-shrink-0 text-green">&#9657;</span>
                  {line}
                </li>
              ))}
            </ul>
            {active.tech && (
              <ul className="flex flex-wrap gap-2 mt-6 list-none p-0">
                {active.tech.map((t) => (
                  <li key={t} className="tech-chip">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
