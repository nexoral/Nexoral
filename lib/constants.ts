export const GITHUB_ORG = "nexoral";
export const GITHUB_API_BASE = "https://api.github.com";
export const EXCLUDED_REPOS = [".github", "Nexoral"];

export const FEATURED_STARS_THRESHOLD = 100;
export const REVALIDATE_INTERVAL = 43200;

export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  "Node.js": "#68a063",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Scala: "#c22d40",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Vue: "#41b883",
  React: "#61dafb",
  Angular: "#dd0031",
  Docker: "#384d54",
  Markdown: "#083fa1",
  JSON: "#292929",
  YAML: "#cb171e",
  TOML: "#9c4221",
  SQL: "#e38c00",
  Unknown: "#858585",
};

export const CHART_COLORS = {
  primary: "#2450d6",
  secondary: "#1f6f66",
  tertiary: "#7d6a1f",
  quaternary: "#8a4a24",
  quinary: "#5b3f8f",
  senary: "#0f6f8a",
};

export const DEFAULTS = {
  description: "No description available",
  language: "Unknown",
  license: "No License",
  readmeNotFound: "No README available for this project.",
};

export const API_ENDPOINTS = {
  orgRepos: (org: string) => `${GITHUB_API_BASE}/orgs/${org}/repos`,
  repo: (owner: string, repo: string) => `${GITHUB_API_BASE}/repos/${owner}/${repo}`,
  readme: (owner: string, repo: string) => `${GITHUB_API_BASE}/repos/${owner}/${repo}/readme`,
  commits: (owner: string, repo: string, perPage = 10) =>
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/commits?per_page=${perPage}`,
  releases: (owner: string, repo: string, perPage = 5) =>
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/releases?per_page=${perPage}`,
  contributors: (owner: string, repo: string, perPage = 10) =>
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors?per_page=${perPage}`,
  languages: (owner: string, repo: string) => `${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`,
  rateLimit: `${GITHUB_API_BASE}/rate_limit`,
};

export const SITE_CONFIG = {
  name: "Nexoral Systems",
  shortName: "Nexoral",
  url: "https://nexoral.in",
  tagline: "Software Tools & Cloud Infrastructure Built for Developers",
  description:
    "Nexoral Systems is an independent technology company building open-source databases, developer tools, and cloud edge infrastructure without vendor lock-in.",
  orgGitHub: `https://github.com/${GITHUB_ORG}`,
  founder: {
    name: "Ankan Saha",
    role: "Founder & Chief Systems Architect",
    url: "https://ankan.in",
    github: "https://github.com/AnkanSaha",
  },
  flagshipSaaS: "https://edge.nexoral.in",
};

export const COMPANY = {
  legalName: "Nexoral Systems",
  incorporationStatus: "Registered Enterprise (Udyam MSME, Government of India)",
  incorporationCert: "Udyam Registration Certificate",
  owner: "Ankan Saha",
  ownerRole: "Founder & Chief Systems Architect",
  foundedDate: "2025-09-03",
  foundedLabel: "2025",
  location: "Kolkata, West Bengal, India",
  country: "India",
  countryCode: "IN",
  businessModel: "Dual-Engine: Open-Core Primitives + Managed Edge Cloud",
  orgDescription:
    "Nexoral Systems is an Indian systems engineering company incorporated in 2025. It develops production-grade developer infrastructure, embedded data stores, and serverless edge control planes for high-availability cloud workloads.",
};

export const CONTACT = {
  general: "support@nexoral.in",
  founder: "connect@ankan.in",
  partnerships: "partners@nexoral.in",
};

/**
 * DPDPA (Digital Personal Data Protection Act, 2023) compliance details.
 * These are published so Data Principals can exercise their rights and raise
 * grievances under Sections 11–14 and Rule 14 of the DPDP Rules, 2025.
 */
export const COMPLIANCE = {
  noticeVersion: "2.0",
  noticeEffective: "8 October 2026",
  officerName: "Ankan Saha",
  officerRole: "Grievance Officer & Data Protection Contact",
  email: CONTACT.general,
  responseSlaDays: 90,
  boardName: "Data Protection Board of India",
  ministryName: "Ministry of Electronics and Information Technology, Government of India",
  ministryUrl: "https://www.meity.gov.in/",
};

export const SOCIALS = {
  github: `https://github.com/${GITHUB_ORG}`,
  founderGithub: "https://github.com/AnkanSaha",
  x: "https://x.com/theankansaha",
  linkedin: "https://linkedin.com/in/theankansaha",
  instagram: "https://instagram.com/theankansaha",
  devto: "https://dev.to/theankansaha",
  discord: "https://discord.gg/theankansaha",
  sponsor: `https://github.com/sponsors/${GITHUB_ORG}`,
  edgeBalancer: "https://edge.nexoral.in",
};

export const NAV_LINKS = [
  { href: "/projects", label: "Products" },
  { href: "/about", label: "Company" },
  { href: "/founder", label: "Founder" },
  { href: "/support", label: "Enterprise & Credits" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS = {
  products: [
    { href: "/projects/edgebalancer", label: "EdgeBalancer (SaaS)" },
    { href: "/projects/axiodb", label: "AxioDB (Embedded)" },
    { href: "/projects/containdb", label: "ContainDB (Go CLI)" },
    { href: "/projects/nexoraldns", label: "NexoralDNS (LAN DNS)" },
    { href: "/projects", label: "All Products" },
  ],
  company: [
    { href: "/about", label: "About Nexoral" },
    { href: "/founder", label: "Founder Profile" },
    { href: "/support", label: "Enterprise & Credits" },
    { href: "/contact", label: "Inquiries & Contact" },
    { href: "/license", label: "Open-Source Licenses" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Notice" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/data-protection", label: "DPDPA 2023 & Grievance" },
  ],
};
