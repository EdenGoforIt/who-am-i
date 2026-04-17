export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  webUrl?: string;
  articles?: string[];
  images?: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "GHSL Mobile App",
    description:
      "Cross-platform mobile app built for GHSL executives and the public, featuring offline-first data access, secure Azure B2C authentication, resource management, and organisation news and event updates. Architected and led the full development cycle from scratch.",
    tech: [
      "React Native",
      "Ionic",
      "Azure B2C",
      "OIDC",
      "REST",
      "Azure Functions",
      "Azure Notification Hub",
      "Firebase OIDC"
    ],
    androidUrl:
      "https://play.google.com/store/apps/details?id=nz.govt.healthandsafety.safegov&hl=en_NZ",
    iosUrl: "https://apps.apple.com/nz/app/safe-gov/id6753041067",
    webUrl: "https://www.healthandsafety.govt.nz",
    articles: ["https://www.healthandsafety.govt.nz/a-z-topics/reports/safe-gov"],
    images: [
      "/images/ghsl/ghsl-news.webp",
      "/images/ghsl/ghsl-event.webp",
      "/images/ghsl/ghsl-site-visit.webp"
    ],
    featured: true
  },
  {
    title: "NZ Fisheries Integration Platform",
    description:
      "Integrated multiple APIs to monitor boats and fishing activities across New Zealand waters, including third-party integrations with Rocket Lab and other external systems. Built as part of the MPI ecosystem to support regulatory compliance and real-time tracking.",
    tech: ["Azure Service Bus", "APIM", "Azure Functions", "REST", "SOAP", ".NET", "Angular"],
    featured: true
  },
  {
    title: "CEMS – Border Control System",
    description:
      "Contributed as a main developer and code reviewer to New Zealand's border control system, managing the inspection and clearance of products and food imported into the country. Collaborated closely with the lead developer and practice lead across multiple project phases.",
    tech: [".NET", "Angular", "MSSQL", "Azure", "REST", "Stored Procedures"],
    featured: true
  },
  {
    title: "Vehicle Check Portal",
    description:
      "Replaced a legacy vehicle clearance system with a modern full-stack web application, delivering real-time vehicle clearance status used across all ports in New Zealand. Built solo as the main developer from legacy replacement through production deployment.",
    tech: [".NET", "Angular", "MSSQL", "Azure", "REST"],
    featured: true
  },
  {
    title: "NZQA – Qualifications & Credentials Repository",
    description:
      "Integrated legacy systems into a unified repository web app and APIs following RESTful best practices and WCAG accessibility standards. Designed an optimistic concurrency solution for NoSQL Cosmos DB and supported the overall back-end solution architecture.",
    tech: [
      "Azure Functions",
      "Azure App Service",
      "APIM",
      "Cosmos DB",
      "Azure Service Bus",
      "Azure Identity",
      "C#"
    ],
    featured: false
  },
  {
    title: "Partners Life – DDD Refactor & WCF Wrapper",
    description:
      "Developed a WCF wrapper to translate extensive business logic using diverse design patterns, refining REST and SOAP APIs and migrating .NET projects into a Domain-Driven Design architecture. Transformed deeply nested, unreadable code into clean, well-structured, and easily maintainable solutions with a clear separation of business logic.",
    tech: ["C#", ".NET", "WCF", "DDD", "CQRS", "REST", "SOAP", "Design Patterns"],
    featured: false
  },
  {
    title: "Customer Portal & Logistics SaaS",
    description:
      "Designed and built a SaaS client portal for freight companies to create, dispatch, and track orders, alongside an admin panel for managing users and roles. Widely adopted by major NZ logistics companies to streamline order tracking, billing display, and rate management with logistics-specific calculations.",
    tech: [".NET Core", "Angular", "MSSQL", "EF Core", "REST", "Azure"],
    featured: false
  }
];
