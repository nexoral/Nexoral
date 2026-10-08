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

> ${SITE_CONFIG.name} is an independent software company owned and run by Ankan Saha. It builds free, open-source infrastructure and developer tools, led by AxioDB, the embedded database for Node.js. The tools are self-hostable, send no telemetry, and are funded by sponsorship rather than paywalls.

## Core pages
- [Home](${base}/) : What the company is and the full product catalogue
- [Products](${base}/projects) : All open-source products with live repository data
- [Company](${base}/about) : Mission, who it serves, and how it is run
- [Owner](${base}/founder) : Ankan Saha, owner and lead maintainer
- [Support](${base}/support) : How to sponsor or fund the work
- [Contact](${base}/contact)

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
