export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
  tech?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Full-stack / Integration / Identity / Cloud / Mobile Developer",
    company: "Sys-Integrate",
    period: "Mar 2024 — Present",
    description: [
      "Architected and led the GHSL mobile app — a cross-platform app with offline-first data access, secure Azure B2C authentication, resource management, and organisation news and event updates.",
      "Developed integration solutions between T2W, AMS, and third-party systems using Azure Service Bus, Functions, Logic Apps, Event Bus, and APIM, bridging REST and SOAP services seamlessly.",
      "Designed and implemented Identity Experience Frameworks and User Flows for B2C identity solutions, including a one-time authentication mechanism for the Fisheries team and the MyMPI login system with RealMe support.",
      "Served as code maintainer and go-to technical resource across Angular, React, React Native, .NET Clean Architecture, Modular-based, and three-tiered architecture projects.",
      "Contributed as a main developer and code reviewer on high-impact projects: CEMS Border Control System, Container Check app for Quarantine Officers, Facility Management System, and the MPI mobile inspection app.",
      "Provided templates and comprehensive guidelines covering front-end and back-end best practices for the entire development team.",
    ],
    tech: [
      ".NET", "Angular", "Ionic", "React", "React Native", "MSSQL",
      "Azure Functions", "Azure Logic Apps", "Azure Service Bus", "APIM",
      "Azure B2C", "SAML", "OIDC", "EF Core", "PowerShell", "AZ CLI",
      "REST", "SOAP", "Open API Spec",
    ],
  },
  {
    role: "Senior Developer",
    company: "Provoke Solutions",
    period: "Aug 2021 — Mar 2024",
    description: [
      "Led multiple front-end projects end-to-end: designed architecture, created reusable components, improved performance, and served as a required code reviewer.",
      "Contributed to designing an optimistic concurrency pattern and partition key strategy for NoSQL (Cosmos DB) databases.",
      "Increased unit test code coverage to 90% across 10 microservices using NUnit and XUnit; introduced robust test design practices.",
      "Mentored developers in .NET, OOP, DDD, solution architecture, back-end challenges, server management, and CI/CD pipelines.",
      "Orchestrated the integration of an external API gateway and managed IIS, Azure Storage, and Azure App Service deployments.",
      "Engaged in microservices, Event Sourcing, Event Relay, and Event Bus projects; conducted significant business logic refactoring using design patterns.",
    ],
    tech: [
      "C#", ".NET Core", "Angular", "RxJS", "NgRx", "NGXS", "React", "Redux",
      "CQRS", "Mediator", "DDD", "Event Sourcing", "WCF", "BizTalk",
      "Azure Functions", "APIM", "Azure Service Bus", "Azure App Service",
      "Cosmos DB", "MSSQL", "EF Core", "Redis", "Cypress", "Azure DevOps", "CI/CD",
    ],
  },
  {
    role: "Software Developer",
    company: "MogoLabs",
    period: "Feb 2020 — Aug 2021",
    description: [
      "Spearheaded the development of a customer portal using .NET Core 3 and Angular 8, translating complex business logic into reusable and maintainable code.",
      "Restructured intricate billing and rate logic into a clean, adaptable codebase, significantly improving system maintainability.",
      "Strategically managed the consolidation of millions of NZ addresses, converting obsolete formats into NZ Post-compatible standards.",
      "Handled PDF and spreadsheet interactions within the codebase, providing a user-friendly interface for XML and PDF data population.",
    ],
    tech: [
      ".NET", ".NET Core", "AngularJS", "Angular 8", "MSSQL",
      "T-SQL", "Stored Procedures", "Triggers", "LLBLGen", "XUnit", "IIS",
    ],
  },
];
