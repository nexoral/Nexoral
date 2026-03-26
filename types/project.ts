/**
 * Application Domain Types
 * These are the transformed types used throughout the application
 */

export interface Project {
  // Basic Info
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  githubUrl: string;
  homepage?: string;

  // Metrics
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;

  // Technical Details
  language: string | null;
  languages: LanguageDistribution[];
  topics: string[];
  license: string | null;

  // Timestamps
  createdAt: string;
  updatedAt: string;
  lastPushedAt: string;

  // Content
  readme: string | null;
  readmeHtml?: string;

  // Activity
  recentCommits: Commit[];
  recentReleases: Release[];
  contributors: Contributor[];

  // Flags
  featured: boolean;
  archived: boolean;

  // Additional Metrics
  metrics: ProjectMetrics;
}

export interface LanguageDistribution {
  name: string;
  bytes: number;
  percentage: number;
  color: string;
}

export interface Commit {
  sha: string;
  message: string;
  author: string;
  authorAvatar?: string;
  date: string;
  url: string;
}

export interface Release {
  id: number;
  version: string; // tag_name
  name: string;
  publishedAt: string;
  url: string;
  notes: string; // body
  assets: ReleaseAsset[];
  isPrerelease: boolean;
}

export interface ReleaseAsset {
  name: string;
  size: number;
  downloadCount: number;
  downloadUrl: string;
}

export interface Contributor {
  username: string;
  avatarUrl: string;
  contributions: number;
  profileUrl: string;
}

export interface ProjectMetrics {
  totalCommits?: number;
  openIssues: number;
  codeSize: number; // in bytes
  contributorCount: number;
}

export interface ProjectCardData {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  highlight: string;
  stars?: number;
  language?: string | null;
}
