export interface SkillItem {
  name: string;
  desc?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      {
        name: "TypeScript",
        desc: "TypeScript became my default when modernising legacy Angular and React codebases. Converting untyped JavaScript to TypeScript forced a rethink of data shapes and contracts, and the type safety caught a surprising number of subtle bugs before they reached production. I now reach for TypeScript on every frontend and Node.js project — the investment in types pays back quickly on anything that outlives a sprint."
      },
      {
        name: "JavaScript",
        desc: "JavaScript underpins most of my frontend and Node.js work, but I predominantly write it through TypeScript. My raw JavaScript experience came from upgrading and migrating older Angular and React projects where the original codebase predated modern tooling. Working through those migrations gave me a solid understanding of the language itself — closures, the event loop, prototype chains — not just the framework layer on top."
      },
      {
        name: "Python",
        desc: "I started with Django to understand full-stack development in Python and appreciated how readable and expressive the language is. I have used Python for data processing, automation, and building simple ML, data science, and analysis pipelines. I have worked on algorithms, data science workflows, and scripting tasks that streamline engineering processes. Python remains one of my favourite languages that can do a variety of tasks, even though its flexibility sometimes makes syntax choices harder to remember."
      },
      {
        name: "SQL",
        desc: "Alongside .NET, I have worked extensively with SQL and NoSQL databases including Cosmos DB, MongoDB, MSSQL, MySQL, GIS PostgreSQL and PostgreSQL. I even learned some lessons the hard way — like recovering a production table I once accidentally dropped."
      },
      {
        name: "HTML",
        desc: "HTML is where user experience starts for me. I care deeply about semantic markup — using the right elements for the right reasons — because it directly affects accessibility, SEO, and how assistive technologies interpret a page. I have gone through dedicated UX and accessibility courses and apply those principles to every interface I build, ensuring structure communicates meaning before a single line of CSS is written."
      },
      {
        name: "CSS",
        desc: "CSS is where design intent becomes reality, and I take it seriously. I have studied UX principles and gone through courses specifically focused on visual design and user experience, which changed how I think about spacing, hierarchy, motion, and responsiveness. I write CSS with intention — every margin, padding, and breakpoint is a deliberate decision, not a guess. This portfolio reflects that attention to detail."
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
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      {
        name: ".NET",
        desc: "I have used this throughout my entire career, working across many different .NET versions and architectural styles. My experience covers Azure Functions, SOAP services, REST APIs, classic n tier and 2 or 3 tier systems, and modern patterns like Clean Architecture, Onion Architecture, and ports and adapters. I have also led many projects across these stacks, guiding teams through design, implementation, and long term maintenance."
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
        name: "Next.js",
        desc: "Next.js is one of the frameworks I enjoy the most because it gives me fine-grained control over how and when pages render. I like understanding the trade-offs between SSR, SSG, and client-side rendering, and choosing the right approach for each route. Working with file-based routing, data-fetching strategies, and server-side performance tuning has been genuinely interesting, especially when pushing for fast, predictable rendering across different environments."
      },
      {
        name: "Node.js",
        desc: "I re-architected Node.js Azure Functions and lightweight APIs to be cleaner, faster, and easier to maintain. Using TypeScript across both backend and frontend made the codebase more reusable and predictable, which helped teams understand and extend the services with less friction. I enjoy how Node.js keeps backend logic simple while still giving me enough flexibility to design clear, modular architectures that scale well."
      },
      { name: "Express" },
      {
        name: "Tailwind CSS",
        desc: "Used across all my frontend projects for rapid, consistent UI development. I appreciate how it removes the overhead of naming CSS classes and keeps styles co-located with markup. This portfolio is built with Tailwind."
      },
      { name: "Framer Motion" },
      {
        name: "Laravel",
        desc: "Used Laravel for my final academic project, building a production management system for a company. Worked across Eloquent ORM, Blade templates, REST APIs, and migrations — gaining hands-on experience with how Laravel structures and scales backend applications."
      },
      {
        name: "OpenCV",
        desc: "Used OpenCV in C++ during master's-level coursework to build computer vision pipelines. Applied image processing techniques for object detection, frame analysis, and video processing as part of algorithm-focused projects."
      },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      {
        name: "Git",
        desc: "Deep experience with Git across large and long-running codebases. I design and maintain branching strategies, enforce clean commit practices, and guide teams through effective code review workflows. Comfortable with rebasing, conflict resolution, release management, and keeping repositories healthy and easy to work with."
      },
      { name: "GitHub" },
      { name: "Vercel" },
      {
        name: "Docker",
        desc: "Used Docker to containerize applications and ensure consistent environments from development through to production. Wrote Dockerfiles and Compose configs for multi-service setups, reducing environment-specific bugs and simplifying onboarding for other developers."
      },
      {
        name: "PostgreSQL",
        desc: "I first worked with PostgreSQL through its GIS extensions, and I was impressed by how naturally it handles geographical data alongside traditional relational models. The SQL layer feels familiar because most relational databases share common syntax, but Postgres stands out with its power, flexibility, and strong indexing and spatial capabilities."
      },
      { name: "Figma" },
      { name: "VS Code" },
      {
        name: "Azure",
        desc: "I have migrated many projects from on-prem servers and databases into Azure, working across core services like Service Bus, Functions, Logic Apps, Key Vault, App Services, Cosmos DB, AI, and API Management. That experience helped me design secure, scalable, event-driven cloud architectures while modernizing legacy systems along the way."
      },
      {
        name: "Firebase",
        desc: "Used Firebase and Google Cloud services alongside Microsoft Azure to support public mobile applications. Worked with authentication, including Azure B2C integration, as well as cloud storage, real-time data, and offline-first databases. Focused on making mobile apps reliable, secure, and responsive across varying network conditions."
      },
      {
        name: "GIS",
        desc: "Around six months of hands-on GIS experience while completing LINZ-focused courses. Worked with line features and other geometric shapes to make mapping data accurate and usable. Used GIS tools to visualize rivers, roads, building footprints, polygons, and mixed geometries, helping to understand spatial relationships and support mapping workflows."
      },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      {
        name: "Technical Writing",
        desc: "I document systems, decisions, and processes clearly so teams can onboard faster and avoid rediscovering known problems. I write ADRs, runbooks, API docs, and post-mortems in a way that is concise and useful rather than comprehensive for its own sake. Good documentation is part of the engineering work, not an afterthought."
      },
      {
        name: "System Design",
        desc: "I enjoy working through system design problems — identifying the right trade-offs between consistency, availability, scalability, and maintainability. I approach design iteratively, starting from the real constraints and working outward rather than over-engineering upfront. I have designed systems across event-driven, REST, and layered architectures in both greenfield and legacy modernisation contexts."
      },
      {
        name: "Code Review",
        desc: "I treat code review as a teaching and quality tool, not a gatekeeping exercise. My reviews focus on correctness, clarity, maintainability, and design intent — not style preferences that tooling should handle. I try to explain the why behind feedback so reviewees grow from the process rather than just fix the diff."
      },
      {
        name: "Mentoring",
        desc: "I have mentored junior and mid-level engineers across multiple teams, focusing on building their ability to reason through problems rather than just giving answers. I pair with people on complex tasks, give structured feedback during code review, and try to model the habits — clear thinking, incremental commits, asking good questions — that compound over a career."
      },
      {
        name: "Agile / Scrum",
        desc: "I have worked in Scrum and Kanban teams across several organisations and understand both the ceremony and the underlying intent. I push for lean processes where the team spends time building rather than managing process overhead. I have led sprint planning, retros, and backlog refinement, and I am comfortable challenging Agile theatre when it gets in the way of actual delivery."
      },
    ],
  },
];
