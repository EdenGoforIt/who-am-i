export interface ProjectUrls {
  live?: string;
  github?: string;
  android?: string;
  ios?: string;
  web?: string;
  articles?: string[];
}

export interface ProjectWorkSection {
  title: string;
  description?: string;
  items: string[];
  images?: string[];
  urls?: ProjectUrls;
}

export interface Project {
  title: string;
  companyDescription: string;
  whatIdid: string;
  slug: string;
  description: string;
  highlights: string[];
  workSections?: ProjectWorkSection[];
  tech: string[];
  urls?: ProjectUrls;
  images?: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "MPI (Ministry for Primary Industries)",
    companyDescription:
      "MPI is the lead government agency responsible for the food and fibre sector, encompassing agriculture, forestry, fisheries, biosecurity, and food safety.",
    whatIdid:
      "Delivered software across multiple MPI business units including Food & Biosecurity, Fisheries, and New Zealand Forest Service. Contributed to border control and inspection workflows through the CEMS platform. Replaced legacy vehicle clearance functionality with modern web-based workflows and real-time status visibility. Integrated enterprise and external systems using .NET, Angular, MSSQL, BizTalk, REST, SOAP, and APIM.",
    slug: "mpi",
    description:
      "Worked across many MPI business units including Food & Biosecurity, Fisheries, and New Zealand Forest Service — replacing legacy systems, contributing to border control (CEMS) and vehicle clearance platforms to support regulatory compliance and real-time tracking.",
    highlights: [
      "Delivered software across multiple MPI business units including Food & Biosecurity, Fisheries, and New Zealand Forest Service.",
      "Contributed to border control and inspection workflows through the CEMS platform.",
      "Replaced legacy vehicle clearance functionality with modern web-based workflows and real-time status visibility.",
      "Integrated enterprise and external systems using .NET, Angular, MSSQL, BizTalk, REST, SOAP, and APIM."
    ],
    workSections: [
      {
        title:
          "CEMS / Container Check Portal / Transitional Facilities / Mobile (Development, Integration, Testing)",
        description:
          "Built around micro-services and micro-frontends, each solving different domain problems. This work improved integration, reliability, and user access across a complex operational platform.",
        items: [
          "Served as a main developer and code reviewer for inspection workflow applications.",
          "Integrated systems and data sources to improve information flow and support smoother handoffs.",
          "Designed and implemented a testing strategy with unit, integration, and E2E suites to improve reliability and maintainability.",
          "Delivered reusable .NET and Angular template solutions for other teams to improve consistency and accelerate development.",
          "Helped deliver a field-capable mobile application to support users working outside the office."
        ],
        urls: {
          articles: [
            "https://www.mpi.govt.nz/import/border-clearance/containers-and-cargo-border-clearance/100-sea-container-checks-for-transitional-facilities"
          ]
        }
      },
      {
        title: "Vehicle Clearance Portal (Modernisation)",
        description:
          "Modernized a legacy vehicle clearance system into a full-stack web application, enabling real-time clearance visibility across New Zealand ports.",
        items: [
          "Led the redevelopment of the legacy vehicle clearance platform into a modern full-stack web application.",
          "Preserved existing system behavior while improving overall maintainability, reliability, and operational transparency."
        ],
        urls: {
          web: "https://vehicles.mpi.govt.nz/home"
        }
      },
      {
        title: "New Zealand Forest Service - National Exotic Forest Description (NEFD) Identity",
        description:
          "The survey captures critical data on exotic forests, including species composition, age structure, and regional distribution. It supports sustainable forest management, policy decisions, and conservation planning across New Zealand.",
        items: [
          "Built a secure identity flow using Azure B2C for survey participants, enabling one-time authentication and access before data submission."
        ]
      },
      {
        title: "Online Notification System (Modernisation)",
        description:
          "Modernized a legacy notification platform while preserving existing behavior and user interfaces.",
        items: [
          "Retained current user workflows and screens while moving the platform to modern runtimes and frameworks.",
          "Upgraded various stack across .NET, Python, React, Node.js, and Azure Functions to improve performance and supportability.",
          "Split the monolithic repository into smaller, focused services to improve maintainability, reduce coupling, and accelerate delivery.",
          "Enhanced deployment velocity and developer productivity through a modular architecture.",
          "Migrated critical data flows to an Enterprise Integration Platform (EIP) for stronger security, reliability, and operational support."
        ],
        urls: {
          web: "https://report.mpi.govt.nz/pest/"
        }
      }
    ],
    tech: [
      ".NET",
      "Angular",
      "MSSQL",
      "BizTalk",
      "REST",
      "SOAP",
      "APIM",
      "Azure Function",
      "Azure App Service",
      "Azure Service Bus",
      "Azure Logic App",
      "Azure Cosmodb",
      "Azure B2C"
    ],
    urls: {
      web: "https://www.mpi.govt.nz/"
    },
    images: [
      "/images/cems/mpi-logo.png",
      "/images/cems/mpi-container.jpg",
      "/images/cems/mpi-ship.jpg"
    ],
    featured: true
  },
  {
    title: "GHSL (Government Health & Safety Lead)",
    companyDescription: "GHSL is a government organization focused on health and safety.",
    whatIdid:
      "Architected and led the full delivery of the product from initial concept through release.",
    slug: "ghsl",
    description:
      "Cross-platform mobile app built for GHSL executives and the public, featuring offline-first data access, secure Azure B2C authentication, resource management, and organisation news and event updates. Architected and led the full development cycle from scratch.",
    highlights: [
      "Architected and led the full delivery of the product from initial concept through release.",
      "Built cross-platform mobile experiences with offline-first access to resources, news, and events.",
      "Implemented secure authentication flows using Azure B2C, OIDC, and Firebase-based identity integration.",
      "Connected the app to backend services with Azure Functions and push notifications for timely updates."
    ],
    tech: [
      "React Native",
      "React",
      ".NET",
      "APIM",
      "Azure B2C",
      "Firebase",
      "NoSQL",
      "OIDC",
      "REST",
      "Azure App Service",
      "Azure Notification Hub",
      "Firebase OIDC"
    ],
    workSections: [
      {
        title: "GHSL Mobile App",
        items: [
          "Designed GHSL app branding and shaped the overall user experience.",
          "Built the cross-platform mobile experience for GHSL executives and public audiences.",
          "Delivered offline-first access to resources, news, and event updates.",
          "Implemented secure authentication using Azure B2C and Firebase OIDC.",
          "Developed the admin portal using React and .NET. with right access control and content management"
        ]
      }
    ],
    urls: {
      android:
        "https://play.google.com/store/apps/details?id=nz.govt.healthandsafety.safegov&hl=en_NZ",
      ios: "https://apps.apple.com/nz/app/safe-gov/id6753041067",
      web: "https://www.healthandsafety.govt.nz",
      articles: ["https://www.healthandsafety.govt.nz/a-z-topics/reports/safe-gov"]
    },
    images: [
      "/images/ghsl/ghsl-news.webp",
      "/images/ghsl/ghsl-event.webp",
      "/images/ghsl/ghsl-site-visit.webp"
    ],
    featured: true
  },

  {
    title: "NZQA – Qualifications & Credentials Repository",
    whatIdid:
      "Integrated legacy systems into a unified repository web app and APIs following RESTful best practices and WCAG accessibility standards. Designed an optimistic concurrency solution for NoSQL Cosmos DB and supported the overall back-end solution architecture.",
    companyDescription:
      "NZQA is a government organization focused on qualifications and credentials.",
    slug: "nzqa-credentials-repository",
    description:
      "Integrated legacy systems into a unified repository web app and APIs following RESTful best practices and WCAG accessibility standards. Designed an optimistic concurrency solution for NoSQL Cosmos DB and supported the overall back-end solution architecture.",
    highlights: [
      "Integrated multiple legacy systems into a single repository and API platform.",
      "Applied RESTful API design and WCAG accessibility standards across the solution.",
      "Designed an optimistic concurrency approach for Cosmos DB-backed data flows.",
      "Supported the wider backend architecture and implementation decisions for the platform."
    ],
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
    whatIdid:
      "Developed a WCF wrapper to translate extensive business logic using diverse design patterns, refining REST and SOAP APIs and migrating .NET projects into a Domain-Driven Design architecture. Transformed deeply nested",
    companyDescription: "Partners Life is a New Zealand-based insurance company.",
    slug: "partners-life-ddd-refactor",
    description:
      "Developed a WCF wrapper to translate extensive business logic using diverse design patterns, refining REST and SOAP APIs and migrating .NET projects into a Domain-Driven Design architecture. Transformed deeply nested, unreadable code into clean, well-structured, and easily maintainable solutions with a clear separation of business logic.",
    highlights: [
      "Built a WCF wrapper to translate and preserve complex business logic during system evolution.",
      "Refined REST and SOAP APIs while moving key .NET services toward a DDD-aligned architecture.",
      "Applied design patterns and CQRS-style separation to reduce complexity in heavily nested code.",
      "Restructured business logic into clearer, more maintainable components with better boundaries."
    ],
    tech: ["C#", ".NET", "WCF", "DDD", "CQRS", "REST", "SOAP", "Design Patterns"],
    featured: false
  },
  {
    title: "Customer Portal & Logistics SaaS",
    whatIdid:
      "Designed and built a SaaS client portal for freight companies to create, dispatch, and track orders, alongside an admin panel for managing users and roles. Widely adopted by major NZ logistics companies to streamline order tracking, billing display, and rate management with logistics-specific calculations.",
    companyDescription:
      "A SaaS client portal for freight companies to manage orders and operations.",
    slug: "customer-portal-logistics-saas",
    description:
      "Designed and built a SaaS client portal for freight companies to create, dispatch, and track orders, alongside an admin panel for managing users and roles. Widely adopted by major NZ logistics companies to streamline order tracking, billing display, and rate management with logistics-specific calculations.",
    highlights: [
      "Designed and built the client-facing SaaS portal used to create, dispatch, and track freight orders.",
      "Delivered an internal admin experience for managing users, permissions, and operational workflows.",
      "Implemented logistics-specific calculations for billing, rate management, and status tracking.",
      "Supported adoption by major New Zealand logistics companies through practical, operations-focused features."
    ],
    tech: [".NET Core", "Angular", "MSSQL", "EF Core", "REST", "Azure"],
    featured: false
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
