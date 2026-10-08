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

export interface EdgeBalancerTelemetry {
  totalUsers: number;
  totalLoadBalancers: number;
  totalGateways: number;
  originsPool: number;
  activeBalancers: number;
  activeGateways: number;
  aiRuns: number;
  scriptsDeployed: number;
  status: string;
  hasPaidUsers: boolean;
}

export const EDGE_BALANCER_TELEMETRY: EdgeBalancerTelemetry = {
  totalUsers: 110,
  totalLoadBalancers: 10,
  totalGateways: 14,
  originsPool: 20,
  activeBalancers: 7,
  activeGateways: 9,
  aiRuns: 315,
  scriptsDeployed: 60,
  status: "Production Active",
  hasPaidUsers: true,
};

export const PROJECT_CATALOG: ProjectCatalogEntry[] = [
  {
    repo: "EdgeBalancer",
    slug: "edgebalancer",
    category: "network",
    featured: true,
    flagship: true,
    order: 1,
    liveUrl: "https://edge.nexoral.in",
    docsUrl: "https://edge.nexoral.in/stats",
    summary:
      "Enterprise SaaS control plane deploying Cloudflare Worker load balancers in ~90 seconds. 7 routing algorithms, active health checks, AI agent provisioning, and zero server maintenance.",
    distribution: "Cloud SaaS",
  },
  {
    repo: "AxioDB",
    slug: "axiodb",
    category: "data",
    featured: true,
    flagship: true,
    order: 2,
    npmPackage: "axiodb",
    liveUrl: "https://axiodb.in",
    docsUrl: "https://axiodb.in",
    summary:
      "High-performance embedded database for Node.js 20+ and Bun. MongoDB-style query engine, ACID transactions, and encryption with zero native compilation dependencies.",
    distribution: "npm",
  },
  {
    repo: "ContainDB",
    slug: "containdb",
    category: "tooling",
    featured: true,
    order: 3,
    summary:
      "High-velocity Go CLI automating containerized database lifecycle (PostgreSQL, MySQL, Redis, MongoDB, MariaDB) with zero Docker Compose friction.",
    distribution: "Go / Binary",
  },
  {
    repo: "NexoralDNS",
    slug: "nexoraldns",
    category: "network",
    featured: true,
    order: 4,
    docsUrl: "https://dns.nexoral.in",
    liveUrl: "https://dns.nexoral.in",
    summary:
      "Docker-based intelligent LAN DNS management and traffic inspection engine with custom routing, local caching, query filtering, and real-time network telemetry.",
    distribution: "Docker",
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
