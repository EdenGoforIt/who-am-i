"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const skills = [
  {
    name: ".NET",
    desc: "I have used this throughout my entire career, working across many different .NET versions and architectural styles. My experience covers Azure Functions, SOAP services, REST APIs, classic n tier and 2 or 3 tier systems, and modern patterns like Clean Architecture, Onion Architecture, and ports and adapters. I have also led many projects across these stacks, guiding teams through design, implementation, and long term maintenance.",
  },
  {
    name: "SQL",
    desc: "Alongside .NET, I have worked extensively with SQL and NoSQL databases including Cosmos DB, MongoDB, MSSQL, MySQL, GIS PostgreSQL and PostgreSQL. I even learned some lessons the hard way — like recovering a production table I once accidentally dropped.",
  },
  { name: "Angular", desc: "Enterprise frontend apps with component architecture and RxJS" },
  { name: "React", desc: "Interactive SPAs with hooks, context, and component-driven design" },
  { name: "React Native", desc: "Cross-platform mobile apps for iOS and Android" },
  { name: "Python", desc: "Scripting, data processing, automation, and ML pipelines" },
  { name: "Next.js", desc: "Full-stack apps with SSR/SSG, API routes, and this portfolio" },
  { name: "Node.js", desc: "RESTful APIs and lightweight backend services" },
  { name: "PostgreSQL", desc: "Relational DB design, indexing, and query optimization" },
  { name: "Tailwind CSS", desc: "Rapid UI development with utility-first styling" },
  { name: "Azure", desc: "Cloud deployment with App Service, Functions, and Storage" },
  { name: "Docker", desc: "Containerized apps for consistent dev and production environments" },
  { name: "Kubernetes", desc: "Orchestrated containerized microservices in production" },
  { name: "Git", desc: "Version control, branching strategies, and code review workflows" },
  { name: "GIS", desc: "Geospatial data processing and mapping applications" },
  { name: "C++", desc: "Systems programming and performance-critical applications" },
  { name: "Java", desc: "Backend services and enterprise application development" },
  { name: "PHP", desc: "Web backend development and REST APIs" },
  { name: "Laravel", desc: "MVC web apps with Eloquent ORM and Blade templates" },
  { name: "OpenCV", desc: "Computer vision pipelines for image processing and analysis" },
  { name: "Firebase", desc: "Real-time database, auth, and cloud functions for rapid prototyping" },
];

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
            <p className="about-technologies">
              <span className="text-green font-semibold">Here are a few technologies</span>{" "}
              I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 list-none p-0 mt-2">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="font-mono text-sm flex items-start gap-2 text-slate-light"
                >
                  <span className="text-green mt-0.5">▹</span>
                  <div>
                    <span>{skill.name}</span>
                    <p className="text-xs text-slate font-sans mt-0.5 leading-snug">{skill.desc}</p>
                  </div>
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
