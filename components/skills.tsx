"use client";

import { skills } from "@/data/skills";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function Skills(): React.JSX.Element {
  const initialSelected = Object.fromEntries(
    skills.map((g) => [g.category, g.items.find((i) => i.desc)?.name ?? null])
  );
  const [selectedByCategory, setSelectedByCategory] =
    useState<Record<string, string | null>>(initialSelected);

  function handleChipClick(category: string, name: string, hasDesc: boolean) {
    if (!hasDesc) return;
    setSelectedByCategory((prev) => ({
      ...prev,
      [category]: prev[category] === name ? null : name
    }));
  }

  return (
    <section
      id="skills"
      className="py-[100px] px-6 lg:px-[150px] max-w-[1600px] mx-auto flex flex-col justify-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-heading">
          <span className="section-number">03.</span> Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, i) => {
            const selectedInGroup = group.items.find(
              (item) => item.name === selectedByCategory[group.category] && item.desc
            );

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: [0.645, 0.045, 0.355, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded p-6 bg-navy-light border border-navy-lightest"
              >
                <h3 className="font-mono text-sm mb-4 font-semibold text-green">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2 list-none p-0">
                  {group.items.map((item) => {
                    const hasDesc = !!item.desc;
                    const isSelected = selectedByCategory[group.category] === item.name;
                    const itemId = item.name.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <li key={item.name}>
                        <button
                          type="button"
                          onClick={() => handleChipClick(group.category, item.name, hasDesc)}
                          aria-pressed={isSelected}
                          aria-expanded={isSelected}
                          aria-controls={hasDesc ? `${group.category}-desc-${itemId}` : undefined}
                          className={[
                            "tech-chip transition-colors",
                            hasDesc ? "cursor-pointer" : "cursor-default",
                            isSelected
                              ? "border-green text-green bg-green/10"
                              : hasDesc
                                ? "border-green/30 hover:border-green/60 hover:text-green/80"
                                : ""
                          ].join(" ")}
                        >
                          {item.name}
                          {hasDesc && (
                            <span className="ml-1 text-green/60 text-[14px]">
                              {isSelected ? "−" : "+"}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <AnimatePresence>
                  {selectedInGroup && (
                    <motion.p
                      id={`${group.category}-desc-${selectedInGroup.name.toLowerCase().replace(/\s+/g, "-")}`}
                      key={selectedInGroup.name}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="text-sm text-slate font-sans leading-snug overflow-hidden text-justify"
                    >
                      {selectedInGroup.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
