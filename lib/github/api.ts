/**
 * GitHub API Client
 * Handles all HTTP requests to GitHub's REST API v3
 * Includes rate limiting, error handling, and type safety
 */

import type {
  GitHubRepo,
  GitHubReadme,
  GitHubCommit,
  GitHubRelease,
  GitHubContributor,
  GitHubLanguages,
  GitHubRateLimit,
} from '@/types/github';

export class RateLimitError extends Error {
  constructor(
    message: string,
    public resetAt: Date
  ) {
    super(message);
    this.name = 'RateLimitError';
  }
}

export class GitHubAPIError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string
  ) {
    super(message);
    this.name = 'GitHubAPIError';
  }
}

/**
 * Fetch wrapper with rate limiting and error handling
 */
async function fetchGitHub<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        ...options?.headers,
      },
      next: { revalidate: 43200 }, // 12 hours ISR cache
    });

    // Check rate limit headers
    const remaining = parseInt(response.headers.get('X-RateLimit-Remaining') || '60');
    const resetTime = parseInt(response.headers.get('X-RateLimit-Reset') || '0');

    // Log rate limit status for monitoring
    if (remaining < 10) {
      console.warn(`GitHub API rate limit low: ${remaining} requests remaining`);
    }

    // Handle rate limit exceeded
    if (response.status === 403 && remaining === 0) {
      const resetDate = new Date(resetTime * 1000);
      throw new RateLimitError(`Rate limit exceeded. Resets at ${resetDate.toISOString()}`, resetDate);
    }

    // Handle 404 (not found) - common for missing READMEs
    if (response.status === 404) {
      throw new GitHubAPIError(`Resource not found: ${url}`, 404, 'Not Found');
    }

    // Handle other errors
    if (!response.ok) {
      throw new GitHubAPIError(
        `GitHub API error: ${response.statusText}`,
        response.status,
        response.statusText
      );
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof RateLimitError || error instanceof GitHubAPIError) {
      throw error;
    }

    // Network errors or other exceptions
    throw new Error(`Failed to fetch from GitHub: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Fetch organization repositories
 */
export async function fetchOrganizationRepos(org: string, perPage = 100): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/orgs/${org}/repos?per_page=${perPage}&sort=updated&type=public`;
  return fetchGitHub<GitHubRepo[]>(url);
}

/**
 * Fetch individual repository details
 */
export async function fetchRepository(owner: string, repo: string): Promise<GitHubRepo> {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  return fetchGitHub<GitHubRepo>(url);
}

/**
 * Fetch repository README
 * Returns null if README doesn't exist
 */
export async function fetchReadme(owner: string, repo: string): Promise<GitHubReadme | null> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
    return await fetchGitHub<GitHubReadme>(url);
  } catch (error) {
    if (error instanceof GitHubAPIError && error.status === 404) {
      return null; // README doesn't exist
    }
    throw error;
  }
}

/**
 * Fetch recent commits
 */
export async function fetchCommits(owner: string, repo: string, perPage = 10): Promise<GitHubCommit[]> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}`;
    return await fetchGitHub<GitHubCommit[]>(url);
  } catch (error) {
    console.error(`Failed to fetch commits for ${owner}/${repo}:`, error);
    return []; // Return empty array on error
  }
}

/**
 * Fetch releases
 */
export async function fetchReleases(owner: string, repo: string, perPage = 5): Promise<GitHubRelease[]> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${perPage}`;
    return await fetchGitHub<GitHubRelease[]>(url);
  } catch (error) {
    console.error(`Failed to fetch releases for ${owner}/${repo}:`, error);
    return []; // Return empty array on error
  }
}

/**
 * Fetch contributors
 */
export async function fetchContributors(owner: string, repo: string, perPage = 10): Promise<GitHubContributor[]> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=${perPage}`;
    return await fetchGitHub<GitHubContributor[]>(url);
  } catch (error) {
    console.error(`Failed to fetch contributors for ${owner}/${repo}:`, error);
    return []; // Return empty array on error
  }
}

/**
 * Fetch language statistics
 */
export async function fetchLanguages(owner: string, repo: string): Promise<GitHubLanguages> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/languages`;
    return await fetchGitHub<GitHubLanguages>(url);
  } catch (error) {
    console.error(`Failed to fetch languages for ${owner}/${repo}:`, error);
    return {}; // Return empty object on error
  }
}

/**
 * Check current rate limit status
 */
export async function checkRateLimit(): Promise<GitHubRateLimit> {
  const url = 'https://api.github.com/rate_limit';
  return fetchGitHub<GitHubRateLimit>(url);
}
