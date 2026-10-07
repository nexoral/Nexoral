export type ProjectCategory = "network" | "data" | "tooling" | "education";

export interface ProjectCatalogEntry {
  repo: string;
  slug: string;
  category: ProjectCategory;
  featured: boolean;
  order: number;
  npmPackage?: string;
  docsUrl?: string;
  liveUrl?: string;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  network: "Network & DNS infrastructure",
  data: "Data & storage",
  tooling: "Developer tooling",
  education: "Education & localisation",
};

export const CATEGORY_ORDER: ProjectCategory[] = ["network", "data", "tooling", "education"];

export const PROJECT_CATALOG: ProjectCatalogEntry[] = [
  {
    repo: "AxioDB",
    slug: "axiodb",
    category: "data",
    featured: true,
    order: 1,
    npmPackage: "axiodb",
  },
  {
    repo: "NexoralDNS",
    slug: "nexoraldns",
    category: "network",
    featured: true,
    order: 2,
    docsUrl: "https://dns.nexoral.in/docs/getting-started",
    liveUrl: "https://dns.nexoral.in",
  },
  {
    repo: "EdgeBalancer",
    slug: "edgebalancer",
    category: "network",
    featured: true,
    order: 3,
    liveUrl: "https://edge.nexoral.in",
  },
  {
    repo: "ContainDB",
    slug: "containdb",
    category: "tooling",
    featured: true,
    order: 4,
  },
  {
    repo: "BanglaCode",
    slug: "banglacode",
    category: "education",
    featured: false,
    order: 5,
  },
  {
    repo: "xpack",
    slug: "xpack",
    category: "tooling",
    featured: false,
    order: 6,
  },
  {
    repo: "ReviewBuddy",
    slug: "reviewbuddy",
    category: "tooling",
    featured: false,
    order: 7,
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

export const NPM_PACKAGES = PROJECT_CATALOG.filter((entry) => entry.npmPackage).map((entry) => ({
  repo: entry.repo,
  package: entry.npmPackage as string,
}));
