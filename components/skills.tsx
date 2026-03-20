'use client';

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills(): React.JSX.Element {
  return (
    <section
      id="skills"
      className="py-[100px] px-6 lg:px-[150px] max-w-[1600px] mx-auto flex flex-col justify-center"
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
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.645, 0.045, 0.355, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded p-6 bg-navy-light border border-navy-lightest"
            >
              <h3
                className="font-mono text-sm mb-4 font-semibold text-green"
              >
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2 list-none p-0">
                {group.items.map((item) => (
                  <li key={item} className="tech-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
