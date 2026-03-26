/**
 * Data fetching layer
 * High-level functions to fetch and transform project data
 */

import type { Project } from '@/types/project';
import {
  fetchOrganizationRepos,
  fetchReadme,
  fetchLanguages,
  fetchCommits,
  fetchReleases,
  fetchContributors,
} from './api';
import {
  shouldIncludeRepo,
  transformRepoToBasicProject,
  transformToFullProject,
  generateSlug,
} from './transformers';
import { sortProjects, getFeaturedProjects } from '@/lib/utils/sorting';
import { projectCache } from '@/lib/utils/cache';
import { GITHUB_ORG } from '@/lib/constants';

/**
 * Fetch all projects from the organization
 * Returns basic project information (without README, commits, etc.)
 */
export async function getAllProjects(): Promise<Project[]> {
  const cacheKey = `all-projects-${GITHUB_ORG}`;

  // Check cache first
  const cached = projectCache.get(cacheKey) as Project[] | null;
  if (cached) {
    console.log('Returning cached projects');
    return cached;
  }

  try {
    console.log(`Fetching repos from organization: ${GITHUB_ORG}`);
    const repos = await fetchOrganizationRepos(GITHUB_ORG);

    // Filter repos
    const filtered = repos.filter(shouldIncludeRepo);
    console.log(`Filtered ${filtered.length} repos from ${repos.length} total`);

    // Transform to basic project data
    const projects = filtered.map(transformRepoToBasicProject);

    // Sort projects
    const sorted = sortProjects(projects);

    // Cache the results
    projectCache.set(cacheKey, sorted);

    return sorted;
  } catch (error) {
    console.error('Error fetching all projects:', error);

    // Return cached data if available, even if stale
    const staleCache = projectCache.get(cacheKey) as Project[] | null;
    if (staleCache) {
      console.warn('Using stale cache due to API error');
      return staleCache;
    }

    // Last resort: return empty array
    return [];
  }
}

/**
 * Fetch detailed project information by slug
 * Includes README, commits, releases, contributors, and language stats
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const cacheKey = `project-${slug}`;

  // Check cache first
  const cached = projectCache.get(cacheKey) as Project | null;
  if (cached) {
    console.log(`Returning cached project: ${slug}`);
    return cached;
  }

  try {
    console.log(`Fetching detailed project data for: ${slug}`);

    // First, get all projects to find the matching repo
    const allProjects = await getAllProjects();
    const basicProject = allProjects.find((p) => p.slug === slug);

    if (!basicProject) {
      console.warn(`Project not found: ${slug}`);
      return null;
    }

    // Fetch detailed data in parallel
    const [readmeData, languages, commits, releases, contributors] = await Promise.all([
      fetchReadme(GITHUB_ORG, basicProject.name),
      fetchLanguages(GITHUB_ORG, basicProject.name),
      fetchCommits(GITHUB_ORG, basicProject.name, 10),
      fetchReleases(GITHUB_ORG, basicProject.name, 5),
      fetchContributors(GITHUB_ORG, basicProject.name, 10),
    ]);

    // Decode README if present
    let readme: string | null = null;
    if (readmeData && readmeData.content) {
      try {
        readme = Buffer.from(readmeData.content, 'base64').toString('utf-8');
      } catch (error) {
        console.error(`Failed to decode README for ${slug}:`, error);
      }
    }

    // Find the original repo from all projects to get full GitHubRepo object
    const repos = await fetchOrganizationRepos(GITHUB_ORG);
    const repo = repos.find((r) => generateSlug(r.name) === slug);

    if (!repo) {
      console.warn(`Repository not found for slug: ${slug}`);
      return basicProject; // Return basic project as fallback
    }

    // Transform to full project
    const fullProject = transformToFullProject(repo, readme, languages, commits, releases, contributors);

    // Cache the result
    projectCache.set(cacheKey, fullProject);

    return fullProject;
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);

    // Return cached data if available, even if stale
    const staleCache = projectCache.get(cacheKey) as Project | null;
    if (staleCache) {
      console.warn(`Using stale cache for ${slug} due to API error`);
      return staleCache;
    }

    // Return null if no cache available
    return null;
  }
}

/**
 * Get top N featured projects
 * Uses the default sorting (featured > stars > recent > alphabetical)
 */
export async function getProjectsForHomepage(count = 4): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return getFeaturedProjects(allProjects, count);
}

/**
 * Get projects for sitemap generation
 * Returns all projects with minimal data needed for sitemap
 */
export async function getProjectsForSitemap(): Promise<
  Array<{ slug: string; updatedAt: string; featured: boolean }>
> {
  const allProjects = await getAllProjects();
  return allProjects.map((p) => ({
    slug: p.slug,
    updatedAt: p.updatedAt,
    featured: p.featured,
  }));
}

/**
 * Get all project slugs for static generation
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const allProjects = await getAllProjects();
  return allProjects.map((p) => p.slug);
}

/**
 * Get organization statistics
 * Calculates total projects, total stars, and MIT license percentage
 */
export async function getOrganizationStats() {
  try {
    const allProjects = await getAllProjects();

    const totalProjects = allProjects.length;
    const totalStars = allProjects.reduce((sum, project) => sum + (project.stars || 0), 0);

    // Count MIT licensed projects
    const mitLicensedCount = allProjects.filter(
      (project) => project.license && project.license.toLowerCase().includes('mit')
    ).length;
    const mitLicensedPercentage =
      totalProjects > 0 ? Math.round((mitLicensedCount / totalProjects) * 100) : 0;

    return {
      totalProjects,
      totalStars,
      mitLicensedPercentage,
    };
  } catch (error) {
    console.error('Error calculating organization stats:', error);
    // Return safe defaults
    return {
      totalProjects: 0,
      totalStars: 0,
      mitLicensedPercentage: 0,
    };
  }
}

/**
 * Prefetch and cache all project data
 * Useful for build time to warm up the cache
 */
export async function prefetchAllProjects(): Promise<void> {
  console.log('Prefetching all project data...');
  const slugs = await getAllProjectSlugs();

  // Fetch detailed data for all projects (in chunks to avoid rate limits)
  const chunkSize = 5;
  for (let i = 0; i < slugs.length; i += chunkSize) {
    const chunk = slugs.slice(i, i + chunkSize);
    await Promise.all(chunk.map((slug) => getProjectBySlug(slug)));
    console.log(`Prefetched ${Math.min(i + chunkSize, slugs.length)}/${slugs.length} projects`);
  }

  console.log('Prefetch complete');
}
