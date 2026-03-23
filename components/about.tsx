"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"];

export default function About(): React.JSX.Element {
  return (
    <section
      id="about"
      className="py-[100px] px-6 lg:px-[150px] max-w-[1600px] mx-auto flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-heading">
          <span className="section-number">01.</span> About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Text */}
          <div className="lg:col-span-3 space-y-4 text-slate">
            <p>
              <span className="text-green font-semibold">I&apos;m Eden</span> — a software engineer who cares deeply about the craft of building
              software that lasts. My work is grounded in Clean Code principles, SOLID design, and
              Object-Oriented Programming — not as buzzwords, but as daily discipline. I believe
              code should be readable, intentional, extensible, and maintainable — honest about what
              it does and built to evolve.
            </p>
            <p>
              <span className="text-green font-semibold">Domain-Driven Design</span> as a way to bridge the gap between business complexity and
              technical implementation. I think carefully about bounded contexts, aggregates, and
              domain models — designing systems where the code reflects the language of the problem,
              not just the mechanics of the solution. When the domain model is right, everything
              else tends to fall into place.
            </p>
            <p>
              <span className="text-green font-semibold">At the architectural level,</span> I apply patterns like layered architecture,
              hexagonal/ports-and-adapters, and CQRS where they genuinely reduce complexity — not
              for their own sake. I care about separation of concerns, dependency inversion, and
              keeping business logic free from infrastructure details. I&apos;ve found that the best
              systems are the ones where you can change one thing without fearing everything else.
            </p>
            <p>
              <span className="text-green font-semibold">Beyond the code itself,</span> I value rigorous testing (unit, integration, contract),
              meaningful code review, and clear technical documentation. Good engineering is a team
              sport — I believe in shared ownership, collective standards, and building trust
              through consistency.
            </p>
            <p><span className="text-green font-semibold">Here are a few technologies</span> I&apos;ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-1 list-none p-0 mt-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-sm flex items-center gap-2 text-slate-light"
                >
                  <span className="text-green">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo placeholder */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 flex-shrink-0">
              <Image
                src="/images/profile.png"
                alt="Eden Park"
                fill
                className="rounded object-cover border-2 border-green"
              />
              {/* offset shadow */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded -z-10 border-2 border-green opacity-30" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
