export interface ProjectWorkSection {
  title: string;
  items: string[];
}

export interface ProjectUrls {
  live?: string;
  github?: string;
  android?: string;
  ios?: string;
  web?: string;
  articles?: string[];
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
    title: "MPI (Ministry for Primary Industries)",
    companyDescription: "MPI is a government organization focused on primary industries.",
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
        title: "CEMS",
        items: [
          "Contributed as a main developer and code reviewer for border control and inspection workflows.",
          "Supported inspection and clearance processes for imported products and food across multiple project phases."
        ]
      },
      {
        title: "Vehicle Check Portal",
        items: [
          "Replaced the legacy vehicle clearance system with a modern full-stack web application.",
          "Delivered real-time vehicle clearance visibility used across ports in New Zealand."
        ]
      },
      {
        title: "Fisheries and MPI Integrations",
        items: [
          "Worked across MPI business units including Food & Biosecurity, Fisheries, and New Zealand Forest Service.",
          "Integrated enterprise and external systems using .NET, Angular, MSSQL, BizTalk, REST, SOAP, and APIM."
        ]
      }
    ],
    tech: [".NET", "Angular", "MSSQL", "BizTalk", "REST", "SOAP", "APIM"],
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
