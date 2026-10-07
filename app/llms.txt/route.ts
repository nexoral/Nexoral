import { CATEGORY_LABELS, CATEGORY_ORDER, PROJECT_CATALOG } from "@/lib/projects/catalog";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export function GET() {
  const base = SITE_CONFIG.url;

  const projectsByCategory = CATEGORY_ORDER.map((category) => {
    const entries = PROJECT_CATALOG.filter((entry) => entry.category === category);
    if (entries.length === 0) return "";
    const lines = entries
      .map((entry) => `- [${entry.repo}](${base}/projects/${entry.slug})`)
      .join("\n");
    return `### ${CATEGORY_LABELS[category]}\n${lines}`;
  })
    .filter(Boolean)
    .join("\n\n");

  const body = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.name} is an independent, Udyam-registered software micro-enterprise from West Bengal, India, building free and open-source infrastructure tools — DNS, databases, deployment and packaging — for developers, small businesses, and home networks. Core tools are free, self-hostable, and funded by sponsorship and grants rather than paywalls.

## Core pages
- [Home](${base}/) : Overview of Nexoral Systems and its tools
- [Projects](${base}/projects) : All open-source projects with live repository data
- [About](${base}/about) : Mission, who it serves, and how it is run
- [Support](${base}/support) : How to sponsor or fund the work
- [Founder](${base}/founder) : Ankan Saha, founder and lead maintainer
- [Contact](${base}/contact)

## Projects
${projectsByCategory}

## Optional
- [Licenses](${base}/license)
- [Privacy](${base}/privacy)
- [GitHub organization](${SITE_CONFIG.orgGitHub})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
