/**
 * Application-wide constants
 */

// GitHub Configuration
export const GITHUB_ORG = 'nexoral';
export const GITHUB_API_BASE = 'https://api.github.com';
export const EXCLUDED_REPOS = ['.github', 'Nexoral'];

// Feature Flags
export const FEATURED_STARS_THRESHOLD = 100; // Repos with 100+ stars are featured

// ISR Configuration
export const REVALIDATE_INTERVAL = 43200; // 12 hours in seconds

// Language Colors (for charts)
export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'Node.js': '#68a063',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Scala: '#c22d40',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Vue: '#41b883',
  React: '#61dafb',
  Angular: '#dd0031',
  Docker: '#384d54',
  Markdown: '#083fa1',
  JSON: '#292929',
  YAML: '#cb171e',
  TOML: '#9c4221',
  SQL: '#e38c00',
  Unknown: '#858585',
};

// Chart Colors (for data visualizations)
export const CHART_COLORS = {
  primary: '#10b981', // emerald-500
  secondary: '#3b82f6', // blue-500
  tertiary: '#a855f7', // purple-500
  quaternary: '#f59e0b', // amber-500
  quinary: '#ef4444', // red-500
  senary: '#06b6d4', // cyan-500
};

// Default values for missing data
export const DEFAULTS = {
  description: 'No description available',
  language: 'Unknown',
  license: 'No License',
  readmeNotFound: 'No README available for this project.',
};

// API Endpoints
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

// Site Configuration
export const SITE_CONFIG = {
  name: 'Nexoral Systems',
  url: 'https://nexoral.in',
  description: 'Open Source Infrastructure & Developer Tools',
  author: 'Ankan Saha',
  authorGitHub: 'https://github.com/AnkanSaha',
  orgGitHub: `https://github.com/${GITHUB_ORG}`,
};
