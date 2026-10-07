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
  primary: "#4f83f1",
  secondary: "#31c0c0",
  tertiary: "#8fb339",
  quaternary: "#e0a03a",
  quinary: "#e05a4a",
  senary: "#06b6d4",
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
  tagline: "Free and open-source infrastructure tools",
  description:
    "Nexoral Systems is an independent, Udyam-registered software micro-enterprise from West Bengal, India, building free and open-source infrastructure tools — DNS, databases, deployment and packaging — for developers, small businesses, and home networks.",
  orgGitHub: `https://github.com/${GITHUB_ORG}`,
  founder: {
    name: "Ankan Saha",
    role: "Founder & Lead Maintainer",
    url: "https://ankan.in",
    github: "https://github.com/AnkanSaha",
  },
};

export const ORG_DETAILS = {
  legalName: "Nexoral Systems",
  enterpriseType: "Micro enterprise (Services)",
  udyamNumber: "UDYAM-WB-15-0112388",
  incorporationDate: "2026-02-10",
  incorporationLabel: "10 February 2026",
  nic: ["62011", "62020", "63999"],
  address: {
    locality: "Ranaghat",
    region: "West Bengal",
    postalCode: "741504",
    country: "IN",
    countryName: "India",
  },
};

export const CONTACT = {
  general: "support@nexoral.in",
  founder: "connect@ankan.in",
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
};

export const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/support", label: "Support" },
];
