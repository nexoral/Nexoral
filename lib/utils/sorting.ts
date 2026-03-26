/**
 * Sorting utilities for projects
 * Multi-criteria sorting: featured > stars > recent > alphabetical
 */

import type { Project } from '@/types/project';

export type SortCriteria = 'stars' | 'updated' | 'created' | 'name' | 'forks';
export type SortOrder = 'asc' | 'desc';

/**
 * Sort projects with multi-criteria logic
 * 1. Featured projects first (stars > threshold)
 * 2. High stars next
 * 3. Recently updated
 * 4. Alphabetical by name
 */
export function sortProjects(projects: Project[], featuredThreshold = 100): Project[] {
  return [...projects].sort((a, b) => {
    // 1. Featured projects first
    const aFeatured = a.featured || a.stars >= featuredThreshold;
    const bFeatured = b.featured || b.stars >= featuredThreshold;

    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;

    // 2. Sort by stars (descending)
    if (a.stars !== b.stars) {
      return b.stars - a.stars;
    }

    // 3. Sort by recent activity (descending)
    const dateA = new Date(a.updatedAt).getTime();
    const dateB = new Date(b.updatedAt).getTime();
    if (dateA !== dateB) {
      return dateB - dateA;
    }

    // 4. Alphabetical (ascending)
    return a.name.localeCompare(b.name);
  });
}

/**
 * Sort projects by a specific criterion
 */
export function sortProjectsBy(projects: Project[], criteria: SortCriteria, order: SortOrder = 'desc'): Project[] {
  const sorted = [...projects].sort((a, b) => {
    let comparison = 0;

    switch (criteria) {
      case 'stars':
        comparison = a.stars - b.stars;
        break;
      case 'forks':
        comparison = a.forks - b.forks;
        break;
      case 'updated':
        comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        break;
      case 'created':
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sorted;
}

/**
 * Filter and sort projects
 */
export function filterAndSortProjects(
  projects: Project[],
  filters: {
    language?: string;
    topic?: string;
    minStars?: number;
    featured?: boolean;
  } = {}
): Project[] {
  let filtered = projects;

  if (filters.language) {
    filtered = filtered.filter((p) => p.language?.toLowerCase() === filters.language?.toLowerCase());
  }

  if (filters.topic) {
    filtered = filtered.filter((p) => p.topics.some((t) => t.toLowerCase() === filters.topic?.toLowerCase()));
  }

  if (filters.minStars !== undefined) {
    filtered = filtered.filter((p) => p.stars >= filters.minStars!);
  }

  if (filters.featured !== undefined) {
    filtered = filtered.filter((p) => p.featured === filters.featured);
  }

  return sortProjects(filtered);
}

/**
 * Get featured projects (top N by stars)
 */
export function getFeaturedProjects(projects: Project[], count = 4): Project[] {
  const sorted = sortProjects(projects);
  return sorted.slice(0, count);
}
