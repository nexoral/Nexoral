import { CATEGORY_LABELS, CATEGORY_ORDER, PROJECT_CATALOG } from "@/lib/projects/catalog";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export function GET() {
  const base = SITE_CONFIG.url;

  const projectsByCategory = CATEGORY_ORDER.map((category) => {
    const entries = PROJECT_CATALOG.filter((entry) => entry.category === category);
    if (entries.length === 0) return "";
    const lines = entries
      .map((entry) => `- [${entry.repo}](${base}/projects/${entry.slug}): ${entry.summary}`)
      .join("\n");
    return `### ${CATEGORY_LABELS[category]}\n${lines}`;
  })
    .filter(Boolean)
    .join("\n\n");

  const body = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.name} is a registered systems technology enterprise incorporated in 2025 (Udyam MSME: Government of India), engineering open-core data primitives and managed edge cloud infrastructure, led by EdgeBalancer and AxioDB.

## Core pages
- [Home](${base}/) : What the company is, live EdgeBalancer production telemetry, and curated core systems
- [Products](${base}/projects) : All 4 core infrastructure systems with live repository and download data
- [Company](${base}/about) : Corporate standing, Udyam MSME registration, dual-engine model, and governance
- [Founder](${base}/founder) : Ankan Saha, Founder & Chief Systems Architect
- [Enterprise & Credits](${base}/support) : EdgeBalancer commercial tiers, Claude for Startups alignment, and enterprise support
- [Contact](${base}/contact) : Official enterprise and technical inquiry channels

## Products
${projectsByCategory}

## Optional
- [Licenses](${base}/license)
- [Privacy notice](${base}/privacy)
- [Terms of use](${base}/terms)
- [Data protection & grievance](${base}/data-protection)
- [GitHub organization](${SITE_CONFIG.orgGitHub})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
