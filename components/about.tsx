"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const skills = [
  {
    name: ".NET",
    desc: "I have used this throughout my entire career, working across many different .NET versions and architectural styles. My experience covers Azure Functions, SOAP services, REST APIs, classic n tier and 2 or 3 tier systems, and modern patterns like Clean Architecture, Onion Architecture, and ports and adapters. I have also led many projects across these stacks, guiding teams through design, implementation, and long term maintenance."
  },
  {
    name: "SQL",
    desc: "Alongside .NET, I have worked extensively with SQL and NoSQL databases including Cosmos DB, MongoDB, MSSQL, MySQL, GIS PostgreSQL and PostgreSQL. I even learned some lessons the hard way — like recovering a production table I once accidentally dropped."
  },
  {
    name: "Angular",
    desc: "I have worked with Angular from the original version 1 through to the latest releases. I have led multiple projects with complex logic and business requirements and also used Ionic to deliver mobile-friendly solutions. I prefer Angular over React because Angular encourages consistent practices, while React allows too many variations. I am detail-oriented, ensuring every component has precise pixel-level padding, margin, and accessibility that meets NZ standards."
  },
  {
    name: "React",
    desc: "I have delivered multiple React projects end-to-end, solving challenges such as complex state management, performance bottlenecks, and large-scale component architecture. I have built reusable component libraries, improved rendering performance through memoization and virtualization, and integrated React apps with REST and GraphQL backends. I also introduced consistent patterns across teams, reducing rework and improving maintainability in fast-moving front-end codebases."
  },
  {
    name: "React Native",
    desc: "I started building React Native apps with Expo and progressed to fully managed builds and native modules. I have successfully released multiple applications to both the Android and iOS app stores, including public apps used across New Zealand. I have also built several private, business-focused applications, handling everything from architecture and state management to performance tuning, deployment pipelines, and long-term maintenance."
  },
  {
    name: "Python",
    desc: "I started with Django to understand full-stack development in Python and appreciated how readable and expressive the language is. I have used Python for data processing, automation, and building simple ML, data science, and analysis pipelines. I have worked on algorithms, data science workflows, and scripting tasks that streamline engineering processes. Python remains one of my favourite languages that can do a variety of tasks, even though its flexibility sometimes makes syntax choices harder to remember."
  },
  {
    name: "Next.js",
    desc: "Next.js is one of the frameworks I enjoy the most because it gives me fine-grained control over how and when pages render. I like understanding the trade-offs between SSR, SSG, and client-side rendering, and choosing the right approach for each route. Working with file-based routing, data-fetching strategies, and server-side performance tuning has been genuinely interesting, especially when pushing for fast, predictable rendering across different environments."
  },
  {
    name: "Node.js",
    desc: "I re-architected Node.js Azure Functions and lightweight APIs to be cleaner, faster, and easier to maintain. Using TypeScript across both backend and frontend made the codebase more reusable and predictable, which helped teams understand and extend the services with less friction. I enjoy how Node.js keeps backend logic simple while still giving me enough flexibility to design clear, modular architectures that scale well."
  },
  {
    name: "PostgreSQL",
    desc: "I first worked with PostgreSQL through its GIS extensions, and I was impressed by how naturally it handles geographical data alongside traditional relational models. The SQL layer feels familiar because most relational databases share common syntax, but Postgres stands out with its power, flexibility, and strong indexing and spatial capabilities."
  },
  {
    name: "Azure",
    desc: "I have migrated many projects from on‑prem servers and databases into Azure, working across core services like Service Bus, Functions, Logic Apps, Key Vault, App Services, Cosmo DB, AI, and API Management. That experience helped me design secure, scalable, event‑driven cloud architectures while modernizing legacy systems along the way."
  },
  {
    name: "Git",
    desc: "Deep experience with Git across large and long-running codebases. I design and maintain branching strategies, enforce clean commit practices, and guide teams through effective code review workflows. Comfortable with rebasing, conflict resolution, release management, and keeping repositories healthy and easy to work with."
  },
  {
    name: "GIS",
    desc: "Around six months of hands-on GIS experience while completing LINZ-focused courses. Worked with line features and other geometric shapes to make mapping data accurate and usable. Used GIS tools to visualize rivers, roads, building footprints, polygons, and mixed geometries, helping to understand spatial relationships and support mapping workflows."
  },
  {
    name: "C++",
    desc: "Learned C++ from scratch and used it extensively in master's-level advanced algorithm courses. Built solutions for robot movement, pathfinding, and OpenCV-based video processing. I enjoyed C++ because it demands a real understanding of memory, performance, and low-level behaviour, which strengthened my ability to design efficient and precise algorithmic solutions."
  },
  {
    name: "Java",
    desc: "About half a year of Java experience while studying advanced algorithms. Used it to compare how different languages approach problem solving compared to .NET and Spring Boot. This work reinforced that most languages share similar fundamentals, and that strong architectural thinking matters more than syntax differences when building backend systems."
  },
  {
    name: "PHP",
    desc: "Used PHP for backend development during my final project, building a Laravel-based system to manage operations for a production company. Worked across REST APIs, data models, and business logic, gaining practical experience with Laravel's framework structure and backend application design."
  },
  {
    name: "Firebase",
    desc: "Used Firebase and Google Cloud services alongside Microsoft Azure to support public mobile applications. Worked with authentication, including Azure B2C integration, as well as cloud storage, real-time data, and offline-first databases. Focused on making mobile apps reliable, secure, and responsive across varying network conditions."
  },
  {
    name: "Tailwind CSS",
    desc: "Used across all my frontend projects for rapid, consistent UI development. I appreciate how it removes the overhead of naming CSS classes and keeps styles co-located with markup. This portfolio is built with Tailwind."
  },
  {
    name: "Docker",
    desc: "Used Docker to containerize applications and ensure consistent environments from development through to production. Wrote Dockerfiles and Compose configs for multi-service setups, reducing environment-specific bugs and simplifying onboarding for other developers."
  },
  {
    name: "Laravel",
    desc: "Used Laravel for my final academic project, building a production management system for a company. Worked across Eloquent ORM, Blade templates, REST APIs, and migrations — gaining hands-on experience with how Laravel structures and scales backend applications."
  },
  {
    name: "OpenCV",
    desc: "Used OpenCV in C++ during master's-level coursework to build computer vision pipelines. Applied image processing techniques for object detection, frame analysis, and video processing as part of algorithm-focused projects."
  }
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 mt-2">
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
