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
  {
    name: "Angular",
    desc: "I have worked with Angular from the original version 1 through to the latest releases. I have led multiple projects with complex logic and business requirements and also used Ionic to deliver mobile-friendly solutions. I prefer Angular over React because Angular encourages consistent practices, while React allows too many variations. I am detail-oriented, ensuring every component has precise pixel-level padding, margin, and accessibility that meets NZ standards.",
  },
  {
    name: "React",
    desc: "I have delivered multiple React projects end-to-end, solving challenges such as complex state management, performance bottlenecks, and large-scale component architecture. I have built reusable component libraries, improved rendering performance through memoization and virtualization, and integrated React apps with REST and GraphQL backends. I also introduced consistent patterns across teams, reducing rework and improving maintainability in fast-moving front-end codebases.",
  },
  {
    name: "React Native",
    desc: "I started building React Native apps with Expo and progressed to fully managed builds and native modules. I have successfully released multiple applications to both the Android and iOS app stores, including public apps used across New Zealand. I have also built several private, business-focused applications, handling everything from architecture and state management to performance tuning, deployment pipelines, and long-term maintenance.",
  },
  {
    name: "Python",
    desc: "I started with Django to understand full-stack development in Python and appreciated how readable and expressive the language is. I have used Python for data processing, automation, and building simple ML, data science, and analysis pipelines. I have worked on algorithms, data science workflows, and scripting tasks that streamline engineering processes. Python remains one of my favourite languages that can do a variety of tasks, even though its flexibility sometimes makes syntax choices harder to remember.",
  },
  {
    name: "Next.js",
    desc: "Next.js is one of the frameworks I enjoy the most because it gives me fine-grained control over how and when pages render. I like understanding the trade-offs between SSR, SSG, and client-side rendering, and choosing the right approach for each route. Working with file-based routing, data-fetching strategies, and server-side performance tuning has been genuinely interesting, especially when pushing for fast, predictable rendering across different environments.",
  },
  {
    name: "Node.js",
    desc: "I re-architected Node.js Azure Functions and lightweight APIs to be cleaner, faster, and easier to maintain. Using TypeScript across both backend and frontend made the codebase more reusable and predictable, which helped teams understand and extend the services with less friction. I enjoy how Node.js keeps backend logic simple while still giving me enough flexibility to design clear, modular architectures that scale well.",
  },
  {
    name: "PostgreSQL",
    desc: "I first worked with PostgreSQL through its GIS extensions, and I was impressed by how naturally it handles geographical data alongside traditional relational models. The SQL layer feels familiar because most relational databases share common syntax, but Postgres stands out with its power, flexibility, and strong indexing and spatial capabilities.",
  },
  {
    name: "Azure",
    desc: "I have migrated many projects from on‑prem servers and databases into Azure, working across core services like Service Bus, Functions, Logic Apps, Key Vault, App Services, Cosmo DB, AI, and API Management. That experience helped me design secure, scalable, event‑driven cloud architectures while modernizing legacy systems along the way.",
  },
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
                    <p className="text-xs text-slate font-sans mt-0.5 leading-snug text-justify">
                      {skill.desc}
                    </p>
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
