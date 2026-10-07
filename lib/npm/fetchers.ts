import { REVALIDATE_INTERVAL } from "@/lib/constants";

const NPM_DOWNLOADS_API = "https://api.npmjs.org/downloads/point";

export interface NpmDownloads {
  package: string;
  lastMonth: number;
  lastYear: number;
}

interface NpmPointResponse {
  downloads: number;
}

async function fetchPoint(pkg: string, period: "last-month" | "last-year"): Promise<number | null> {
  try {
    const res = await fetch(`${NPM_DOWNLOADS_API}/${period}/${encodeURIComponent(pkg)}`, {
      next: { revalidate: REVALIDATE_INTERVAL },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as NpmPointResponse;
    return typeof data.downloads === "number" ? data.downloads : null;
  } catch {
    return null;
  }
}

export async function fetchNpmDownloads(pkg: string): Promise<NpmDownloads | null> {
  const [lastMonth, lastYear] = await Promise.all([
    fetchPoint(pkg, "last-month"),
    fetchPoint(pkg, "last-year"),
  ]);

  if (lastMonth === null && lastYear === null) return null;

  return { package: pkg, lastMonth: lastMonth ?? 0, lastYear: lastYear ?? 0 };
}

export async function fetchNpmDownloadsMap(packages: string[]): Promise<Record<string, NpmDownloads>> {
  const unique = Array.from(new Set(packages.filter(Boolean)));
  const results = await Promise.all(unique.map((pkg) => fetchNpmDownloads(pkg)));

  const map: Record<string, NpmDownloads> = {};
  results.forEach((result) => {
    if (result) map[result.package] = result;
  });
  return map;
}

export function formatCompact(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "0";
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(value);
}
