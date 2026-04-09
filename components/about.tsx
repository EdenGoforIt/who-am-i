"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
          <div className="lg:col-span-3 space-y-4 text-slate [&>p]:text-justify">
            <p className="about-intro">
              <span className="text-green font-semibold">I&apos;m Eden</span> &mdash; a software
              engineer who cares deeply about building software that lasts. I approach engineering
              as a craft: clean, thoughtful, and grounded in principles like Clean Code, SOLID, and
              well&ndash;designed OOP. These aren&apos;t buzzwords to me &mdash; they&apos;re the
              habits that shape how I write and structure systems. I believe great code should be
              readable, intentional, and easy to extend without slipping into unnecessary
              complexity. My focus is on clarity, maintainability, and designing solutions that
              evolve gracefully over time &mdash; future&ndash;ready, but never overengineered.
            </p>
            <p className="about-design-patterns">
              <span className="text-green font-semibold">Design patterns</span> are something I
              focus on once the core logic is clear, using them to shape code that communicates
              intent and stays easy to work with. I reach for patterns like Strategy, Factory,
              Observer, and Decorator only when they simplify the design or make the system easier
              to reason about. The goal is always the same: code that is clear, purposeful, and
              structured in a way where every part has a reason to exist.
            </p>
            <p className="about-ddd">
              <span className="text-green font-semibold">Domain-Driven Design</span> is how I bridge
              the gap between business complexity and technical implementation. I think carefully
              about bounded contexts, aggregates, and domain models - designing systems where the
              code expresses the language of the domain, not just the mechanics of the solution.
              When the model is aligned with the real problem, the architecture becomes clearer, the
              code becomes simpler, and the system evolves more naturally.
            </p>
            <p className="about-architecture">
              <span className="text-green font-semibold">At the architectural level,</span> I work
              across a wide range of styles and environments, from on-prem systems to Azure cloud
              platforms. I use patterns like layered architecture, hexagonal (ports-and-adapters),
              Onion Architecture, and Clean Architecture, applying them only when they genuinely
              reduce complexity. I regularly use repository and service patterns to keep business
              logic isolated from infrastructure and data access concerns. I care deeply about
              separation of concerns, dependency inversion, and designing systems that are easy to
              change and extend. I have experience both designing new cloud-native systems and
              modernizing 10-year-old applications into cleaner, more scalable cloud architectures.
              The best systems are the ones where you can change one part without risking the rest,
              and past projects have taught me how important that really is.
            </p>
            <p className="about-engineering">
              <span className="text-green font-semibold">Beyond the code itself,</span> I care
              deeply about the practices that make engineering sustainable: rigorous testing (unit,
              integration, contract), meaningful code review, clear technical documentation, and
              solid DevOps foundations. I document issues, edge cases, and lessons learned so the
              team never has to rediscover the same problems twice. Good engineering is a team sport
              — built on shared ownership, collective standards, and trust earned through
              consistency and clarity.
            </p>
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
