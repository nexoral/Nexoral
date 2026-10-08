export type ProjectCategory = "data" | "network" | "tooling" | "education";

export interface ProjectCatalogEntry {
  repo: string;
  slug: string;
  category: ProjectCategory;
  featured: boolean;
  /** The product the company is best known for. Shown first and in full on the home page. */
  flagship?: boolean;
  order: number;
  npmPackage?: string;
  docsUrl?: string;
  liveUrl?: string;
  /** Short, plain-language description used in the catalogue (GitHub descriptions are longer). */
  summary: string;
  /** How you get it: npm, Docker, Go, GitHub Action, web. */
  distribution: string;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  data: "Databases & storage",
  network: "Network & DNS",
  tooling: "Developer tooling",
  education: "Education & localisation",
};

export const CATEGORY_ORDER: ProjectCategory[] = ["data", "network", "tooling", "education"];

export const PROJECT_CATALOG: ProjectCatalogEntry[] = [
  {
    repo: "AxioDB",
    slug: "axiodb",
    category: "data",
    featured: true,
    flagship: true,
    order: 1,
    npmPackage: "axiodb",
    summary:
      "The embedded database for Node.js. MongoDB-style queries, ACID transactions, encryption — with no native build step and nothing to install.",
    distribution: "npm",
  },
  {
    repo: "NexoralDNS",
    slug: "nexoraldns",
    category: "network",
    featured: true,
    order: 2,
    docsUrl: "https://dns.nexoral.in/docs/getting-started",
    liveUrl: "https://dns.nexoral.in",
    summary:
      "A Docker-based DNS server for office LANs. Monitor, block, reroute and cache queries, with custom domains and analytics.",
    distribution: "Docker",
  },
  {
    repo: "EdgeBalancer",
    slug: "edgebalancer",
    category: "network",
    featured: true,
    order: 3,
    liveUrl: "https://edge.nexoral.in",
    summary:
      "A control plane that builds and deploys Cloudflare Worker load balancers from a dashboard — connect an account, set origins, ship.",
    distribution: "Web",
  },
  {
    repo: "ContainDB",
    slug: "containdb",
    category: "tooling",
    featured: true,
    order: 4,
    summary:
      "A CLI that installs and manages database containers — MongoDB, Redis, MySQL, PostgreSQL, MariaDB — without wrestling with Compose files.",
    distribution: "Go",
  },
  {
    repo: "BanglaCode",
    slug: "banglacode",
    category: "education",
    featured: false,
    order: 5,
    summary:
      "A Bengali-language programming language and platform for teaching logic and problem-solving to students in Bengal.",
    distribution: "Go",
  },
  {
    repo: "xpack",
    slug: "xpack",
    category: "tooling",
    featured: false,
    order: 6,
    summary: "A universal Linux package builder. Turn a compiled binary into .deb, .rpm and more.",
    distribution: "Go",
  },
  {
    repo: "ReviewBuddy",
    slug: "reviewbuddy",
    category: "tooling",
    featured: false,
    order: 7,
    summary: "A GitHub Action that reviews pull requests in your preferred language and tone.",
    distribution: "GitHub Action",
  },
];

const BY_REPO = new Map(PROJECT_CATALOG.map((entry) => [entry.repo, entry]));
const BY_SLUG = new Map(PROJECT_CATALOG.map((entry) => [entry.slug, entry]));

export function getCatalogByRepo(repo: string): ProjectCatalogEntry | undefined {
  return BY_REPO.get(repo);
}

export function getCatalogBySlug(slug: string): ProjectCatalogEntry | undefined {
  return BY_SLUG.get(slug);
}

export function getCatalogOrder(repo: string): number {
  return BY_REPO.get(repo)?.order ?? 999;
}

export function isFeaturedRepo(repo: string): boolean {
  return BY_REPO.get(repo)?.featured ?? false;
}

export function getFlagshipEntry(): ProjectCatalogEntry {
  return PROJECT_CATALOG.find((entry) => entry.flagship) ?? PROJECT_CATALOG[0];
}

export const NPM_PACKAGES = PROJECT_CATALOG.filter((entry) => entry.npmPackage).map((entry) => ({
  repo: entry.repo,
  package: entry.npmPackage as string,
}));
