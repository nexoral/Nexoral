/**
 * Data transformation utilities
 * Convert GitHub API responses to application domain types
 */

import type {
  GitHubRepo,
  GitHubCommit,
  GitHubRelease,
  GitHubContributor,
  GitHubLanguages,
} from '@/types/github';
import type {
  Project,
  Commit,
  Release,
  Contributor,
  LanguageDistribution,
  ProjectMetrics,
  ReleaseAsset,
} from '@/types/project';
import { LANGUAGE_COLORS, DEFAULTS, FEATURED_STARS_THRESHOLD, EXCLUDED_REPOS } from '@/lib/constants';

/**
 * Check if a repository should be included
 */
export function shouldIncludeRepo(repo: GitHubRepo): boolean {
  return !EXCLUDED_REPOS.includes(repo.name) && !repo.archived && !repo.private && !repo.fork;
}

/**
 * Generate slug from repository name
 */
export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

/**
 * Get language color for charts
 */
export function getLanguageColor(language: string): string {
  return LANGUAGE_COLORS[language] || LANGUAGE_COLORS.Unknown;
}

/**
 * Transform language statistics to distribution
 */
export function transformLanguages(languages: GitHubLanguages): LanguageDistribution[] {
  const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

  if (total === 0) {
    return [];
  }

  return Object.entries(languages)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: Math.round((bytes / total) * 100 * 10) / 10, // Round to 1 decimal
      color: getLanguageColor(name),
    }))
    .sort((a, b) => b.bytes - a.bytes); // Sort by bytes descending
}

/**
 * Transform GitHub commit to application Commit type
 */
export function transformCommit(commit: GitHubCommit): Commit {
  return {
    sha: commit.sha.substring(0, 7), // Short SHA
    message: commit.commit.message.split('\n')[0], // First line only
    author: commit.commit.author.name,
    authorAvatar: commit.author?.avatar_url,
    date: commit.commit.author.date,
    url: commit.html_url,
  };
}

/**
 * Transform GitHub release to application Release type
 */
export function transformRelease(release: GitHubRelease): Release {
  const assets: ReleaseAsset[] = release.assets.map((asset) => ({
    name: asset.name,
    size: asset.size,
    downloadCount: asset.download_count,
    downloadUrl: asset.browser_download_url,
  }));

  return {
    id: release.id,
    version: release.tag_name,
    name: release.name || release.tag_name,
    publishedAt: release.published_at,
    url: release.html_url,
    notes: release.body || '',
    assets,
    isPrerelease: release.prerelease,
  };
}

/**
 * Transform GitHub contributor to application Contributor type
 */
export function transformContributor(contributor: GitHubContributor): Contributor {
  return {
    username: contributor.login,
    avatarUrl: contributor.avatar_url,
    contributions: contributor.contributions,
    profileUrl: contributor.html_url,
  };
}

/**
 * Extract project description from README content
 * Returns the first paragraph of the README
 */
export function extractDescriptionFromReadme(readmeContent: string): string {
  // Remove markdown headers
  const withoutHeaders = readmeContent.replace(/^#{1,6}\s+.+$/gm, '').trim();

  // Get first non-empty paragraph
  const paragraphs = withoutHeaders.split('\n\n').filter((p) => p.trim().length > 0);

  if (paragraphs.length === 0) {
    return '';
  }

  // Clean up markdown formatting
  let description = paragraphs[0]
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links but keep text
    .replace(/[*_`]/g, '') // Remove emphasis markers
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim();

  // Limit length
  if (description.length > 200) {
    description = description.substring(0, 197) + '...';
  }

  return description;
}

/**
 * Transform GitHub repository to basic Project type
 * This is for the initial list without detailed data
 */
export function transformRepoToBasicProject(repo: GitHubRepo): Project {
  return {
    id: repo.id,
    slug: generateSlug(repo.name),
    name: repo.name,
    description: repo.description || DEFAULTS.description,
    githubUrl: repo.html_url,
    homepage: repo.homepage || undefined,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    watchers: repo.watchers_count,
    openIssues: repo.open_issues_count,
    language: repo.language,
    languages: [], // Will be populated by detailed fetch
    topics: repo.topics || [],
    license: repo.license?.spdx_id || null,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    lastPushedAt: repo.pushed_at,
    readme: null, // Will be populated by detailed fetch
    recentCommits: [], // Will be populated by detailed fetch
    recentReleases: [], // Will be populated by detailed fetch
    contributors: [], // Will be populated by detailed fetch
    featured: repo.stargazers_count >= FEATURED_STARS_THRESHOLD,
    archived: repo.archived,
    metrics: {
      openIssues: repo.open_issues_count,
      codeSize: repo.size,
      contributorCount: 0, // Will be updated by detailed fetch
    },
  };
}

/**
 * Transform complete GitHub data to full Project type
 */
export function transformToFullProject(
  repo: GitHubRepo,
  readme: string | null,
  languages: GitHubLanguages,
  commits: GitHubCommit[],
  releases: GitHubRelease[],
  contributors: GitHubContributor[]
): Project {
  const basicProject = transformRepoToBasicProject(repo);

  return {
    ...basicProject,
    longDescription: readme ? extractDescriptionFromReadme(readme) : undefined,
    readme,
    languages: transformLanguages(languages),
    recentCommits: commits.map(transformCommit),
    recentReleases: releases.map(transformRelease),
    contributors: contributors.map(transformContributor),
    metrics: {
      ...basicProject.metrics,
      contributorCount: contributors.length,
      totalCommits: commits.length > 0 ? undefined : 0, // Approximate, GitHub doesn't provide total
    },
  };
}

/**
 * Create project metrics
 */
export function createProjectMetrics(
  repo: GitHubRepo,
  contributorCount: number,
  commitCount?: number
): ProjectMetrics {
  return {
    openIssues: repo.open_issues_count,
    codeSize: repo.size,
    contributorCount,
    totalCommits: commitCount,
  };
}
