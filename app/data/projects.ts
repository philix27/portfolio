export type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  source?: string;
  cover: string;
};

export const featured = {
  title: "Synchro9ice",
  tagline: "Plan and track work with your team",
  description:
    "A purpose-built workspace for planning and tracking projects, tasks and notes. Fast and focused, it keeps a team's work in one place.",
  live: "https://www.synchro9ice.com",
  points: ["Projects & tasks", "Notes alongside work", "Built for speed"],
};

export const projects: Project[] = [
  {
    title: "Board Masters",
    description: "Chess and checkers where players stake cUSD before a match.",
    tags: ["Next.js", "Express", "Prisma", "Solidity"],
    live: "https://cheskit.vercel.app/",
    source: "https://github.com/Philix27/Board-Masters",
    cover: "/icons/chess.jpeg",
  },
  {
    title: "Rampage",
    description: "Off-ramp platform for swapping crypto to naira.",
    tags: ["Hono", "Postgres", "Ethers.js"],
    live: "https://ramper-web.vercel.app/",
    source: "https://github.com/Philix27/rampage",
    cover: "/icons/offramp.jpeg",
  },
  {
    title: "Xpensa",
    description: "Invoice management built for the MiniPay hackathon.",
    tags: ["Next.js", "Prisma", "Postgres"],
    live: "https://xpensa-rosy.vercel.app/",
    source: "https://github.com/Philix27/Xpensa",
    cover: "/icons/invoice.jpeg",
  },
  {
    title: "SupaSave",
    description: "Lock cUSD for a set period with an on-chain savings dapp.",
    tags: ["Next.js", "Wagmi", "Solidity"],
    live: "https://supa-save.vercel.app/",
    source: "https://github.com/Philix27/SupaSave",
    cover: "/icons/secure-blue.jpeg",
  },
  {
    title: "Stackless",
    description: "Open-source learning platform for Rust and core blockchain topics.",
    tags: ["tRPC", "Prisma"],
    live: "https://rustic-phi.vercel.app/",
    source: "https://github.com/Philix27/Stackless-CMS",
    cover: "/icons/school.jpeg",
  },
  {
    title: "BetaLyf",
    description: "Connects patients with physicians and books consultations.",
    tags: ["Next.js", "Ethers.js"],
    live: "https://peerie.vercel.app/",
    source: "https://github.com/Philix27/betalyf",
    cover: "/icons/blue-plus.jpeg",
  },
];
