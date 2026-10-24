export const site = {
  name: "Felix Eligbue",
  role: "Backend Software Engineer",
  email: "philixbob@gmail.com",
  resume: "/Felix-Eligbue-Resume.pdf",
  github: "https://github.com/Philix27",
  linkedin: "https://www.linkedin.com/in/philix/",
  summary:
    "5+ years building fintech, financial services and enterprise applications with Go, .NET, NestJS and TypeScript. I design REST and GraphQL APIs, event-driven systems and the databases behind them.",
};

export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "5", label: "Companies shipped for" },
  { value: "Go · .NET · TS", label: "Core stack" },
];

export const experience = [
  {
    company: "Alert Microfinance",
    role: "Software Engineer",
    period: "Oct 2025 — Present",
    blurb: "Financial services applications.",
    links: [{ label: "Multitenant e-commerce store", href: "https://qa-marketing.alertshop.africa/" }],
    points: [
      "Develop and maintain backend REST APIs on C# / .NET for financial services.",
      "Led a 3-person team on a multitenant e-commerce store platform; own architecture and code reviews.",
      "Automated testing in GitHub Actions CI/CD for fast, consistent feedback.",
      "PostgreSQL, Redis and BullMQ for data, caching and background processing.",
    ],
    tech: ["C#", ".NET Core", "PostgreSQL", "Redis", "BullMQ", "Docker", "Testcontainers"],
  },
  {
    company: "Mobarter Finance",
    role: "Software Engineer",
    period: "Aug 2024 — Oct 2025",
    blurb: "Fintech / Web3 personal finance for digital assets.",
    points: [
      "Built backend services in Go, NestJS and TypeScript for crypto and financial workflows.",
      "Shipped REST and GraphQL APIs behind core transactions.",
      "Implemented crypto swaps with the Mento Protocol SDK on Celo, plus locked savings.",
      "Designed modular services on PostgreSQL, Redis and BullMQ for async processing.",
    ],
    tech: ["Go", "NestJS", "Prisma", "GraphQL", "Redis", "Solidity", "Celo"],
  },
  {
    company: "Doow Finance",
    role: "Software Engineer",
    period: "Jan 2023 — Apr 2024",
    blurb: "Expense management for startups and businesses.",
    links: [{ label: "doow.co", href: "http://doow.co/" }],
    points: [
      "Built APIs and GraphQL endpoints with NestJS, Prisma and PostgreSQL.",
      "Set up and managed CI/CD pipelines with GitHub Actions.",
      "Managed a four-person frontend team; helped plan delivery and evaluate designs.",
    ],
    tech: ["NestJS", "Prisma", "PostgreSQL", "GraphQL", "Jest", "Next.js", "Cypress"],
  },
  {
    company: "Hexelan Consulting",
    role: "Software Engineer",
    period: "Jul 2021 — Mar 2022",
    blurb: "Software for government and private-sector clients.",
    points: [
      "Turned Figma designs and requirements into production web apps.",
      "Managed a MongoDB database with millions of user records.",
      "Used Kafka to absorb high volumes of application requests.",
    ],
    tech: ["Next.js", "Redux", "MongoDB", "Kafka", "Express.js", "TypeORM"],
  },
  {
    company: "Pharmahub",
    role: "Software Developer",
    period: "Nov 2019 — Mar 2021",
    blurb: "Exam-prep mobile app for pharmacists.",
    points: [
      "Built the cross-platform app in Flutter and published to Google Play and the App Store.",
      "Worked in sprints with pair programming and retrospectives.",
    ],
    tech: ["Flutter", "Dart"],
  },
];

export const skills = [
  { group: "Backend", items: ["Go", "Fiber", "C#", ".NET Core", "ASP.NET Core", "NestJS", "TypeScript", "Express.js", "REST", "GraphQL", "Microservices"] },
  { group: "Data", items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Prisma", "TypeORM", "Drizzle", "Sequelize"] },
  { group: "Distributed systems", items: ["Redis", "BullMQ", "RabbitMQ", "Kafka", "Event-driven design"] },
  { group: "DevOps & testing", items: ["Docker", "GitHub Actions", "CI/CD", "Jest", "Supertest", "Testcontainers", "E2E testing"] },
  { group: "Web3", items: ["Celo", "Solidity", "Wagmi", "Mento Protocol"] },
];

export const education = { degree: "Bachelor in Pharmacy (B. Pharm)", period: "2013 — 2019" };
