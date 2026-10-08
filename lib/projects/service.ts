import { getAllProjects, getProjectBySlug } from "@/lib/github/fetchers";
import { fetchNpmDownloads, fetchNpmDownloadsMap, type NpmDownloads } from "@/lib/npm/fetchers";
import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  NPM_PACKAGES,
  PROJECT_CATALOG,
  getCatalogByRepo,
  getCatalogBySlug,
  type ProjectCategory,
} from "@/lib/projects/catalog";
import type { Project } from "@/types/project";

export interface ProjectView {
  slug: string;
  name: string;
  description: string;
  githubUrl: string;
  homepage?: string;
  stars: number;
  forks: number;
  openIssues: number;
  language: string | null;
  license: string | null;
  topics: string[];
  updatedAt: string;
  lastPushedAt: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured: boolean;
  flagship: boolean;
  order: number;
  summary: string;
  distribution: string;
  docsUrl?: string;
  liveUrl?: string;
  npm: NpmDownloads | null;
}

export interface ProjectDetailView extends ProjectView {
  readme: string | null;
  recentReleases: Project["recentReleases"];
  recentCommits: Project["recentCommits"];
  contributors: Project["contributors"];
  languages: Project["languages"];
  metrics: Project["metrics"];
}

function withCatalog(project: Project, npm: NpmDownloads | null): ProjectView {
  const entry = getCatalogByRepo(project.name);
  const category = entry?.category ?? "tooling";
  return {
    slug: project.slug,
    name: project.name,
    description: project.description,
    githubUrl: project.githubUrl,
    homepage: project.homepage,
    stars: project.stars,
    forks: project.forks,
    openIssues: project.openIssues,
    language: project.language,
    license: project.license,
    topics: project.topics,
    updatedAt: project.updatedAt,
    lastPushedAt: project.lastPushedAt,
    category,
    categoryLabel: CATEGORY_LABELS[category],
    featured: entry?.featured ?? false,
    flagship: entry?.flagship ?? false,
    order: entry?.order ?? 999,
    summary: entry?.summary ?? project.description,
    distribution: entry?.distribution ?? "Source",
    docsUrl: entry?.docsUrl,
    liveUrl: entry?.liveUrl,
    npm,
  };
}

export async function getProjectViews(): Promise<ProjectView[]> {
  const projects = await getAllProjects();
  const downloads = await fetchNpmDownloadsMap(NPM_PACKAGES.map((p) => p.package));
  return projects
    .filter((project) => getCatalogByRepo(project.name) !== undefined)
    .map((project) => {
      const pkg = getCatalogByRepo(project.name)?.npmPackage;
      return withCatalog(project, pkg ? downloads[pkg] ?? null : null);
    })
    .sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(count = 4): Promise<ProjectView[]> {
  const projects = await getProjectViews();
  const featured = projects.filter((project) => project.featured);
  return (featured.length > 0 ? featured : projects).slice(0, count);
}

export async function getProjectsByCategory(): Promise<
  Array<{ category: ProjectCategory; label: string; projects: ProjectView[] }>
> {
  const projects = await getProjectViews();
  return CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    projects: projects.filter((project) => project.category === category),
  })).filter((group) => group.projects.length > 0);
}

export async function getFlagshipProject(): Promise<ProjectView | null> {
  const projects = await getProjectViews();
  return projects.find((project) => project.flagship) ?? projects[0] ?? null;
}

export async function getProjectDetailBySlug(slug: string): Promise<ProjectDetailView | null> {
  const entry = getCatalogBySlug(slug);
  if (!entry) return null;
  const project = await getProjectBySlug(slug);
  if (!project) return null;
  const npm = entry.npmPackage ? await fetchNpmDownloads(entry.npmPackage) : null;
  return {
    ...withCatalog(project, npm),
    readme: project.readme,
    recentReleases: project.recentReleases,
    recentCommits: project.recentCommits,
    contributors: project.contributors,
    languages: project.languages,
    metrics: project.metrics,
  };
}

export async function getProjectSlugs(): Promise<string[]> {
  return PROJECT_CATALOG.map((entry) => entry.slug);
}

export interface OrgStats {
  totalProjects: number;
  totalStars: number;
  totalForks: number;
  totalNpmYear: number;
  totalNpmMonth: number;
  mitCount: number;
  gplCount: number;
}

export async function getOrgStats(): Promise<OrgStats> {
  const projects = await getProjectViews();
  const downloads = await fetchNpmDownloadsMap(NPM_PACKAGES.map((p) => p.package));
  const downloadList = Object.values(downloads);

  return {
    totalProjects: projects.length,
    totalStars: projects.reduce((sum, project) => sum + project.stars, 0),
    totalForks: projects.reduce((sum, project) => sum + project.forks, 0),
    totalNpmYear: downloadList.reduce((sum, item) => sum + item.lastYear, 0),
    totalNpmMonth: downloadList.reduce((sum, item) => sum + item.lastMonth, 0),
    mitCount: projects.filter((project) => project.license?.toLowerCase().includes("mit")).length,
    gplCount: projects.filter((project) => project.license?.toLowerCase().includes("gpl")).length,
  };
}
