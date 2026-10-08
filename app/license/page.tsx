import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, Section } from "@/components/layout/section";
import { getProjectViews, getOrgStats } from "@/lib/projects/service";
import { SITE_CONFIG } from "@/lib/constants";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Licenses",
  description: "Open-source license summary for every Nexoral Systems product: MIT and GPL-3.0.",
  alternates: { canonical: "/license" },
};

export default async function LicensePage() {
  const [projects, stats] = await Promise.all([getProjectViews(), getOrgStats()]);

  return (
    <Section className="pt-16 sm:pt-20 lg:pt-24">
      <PageTitle
        title="Open source, under real licenses."
        description={`Across ${stats.totalProjects} products, ${stats.mitCount} are MIT-licensed and ${stats.gplCount} are GPL-3.0. Each one links to its source and license.`}
      />

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-3 pr-4 font-medium text-muted-foreground">Product</th>
              <th className="py-3 pr-4 font-medium text-muted-foreground">Language</th>
              <th className="py-3 pr-4 font-medium text-muted-foreground">License</th>
              <th className="py-3 font-medium text-muted-foreground">Source</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug} className="border-b border-border/70">
                <td className="py-3 pr-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                  >
                    {project.name}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-muted-foreground">{project.language ?? "N/A"}</td>
                <td className="py-3 pr-4 font-mono text-[12px] text-muted-foreground">
                  {project.license ?? "N/A"}
                </td>
                <td className="py-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
        License identifiers follow SPDX. MIT-licensed products may be used commercially without
        restriction; GPL-3.0 products may also be used commercially but carry copyleft obligations
        on redistribution. See each repository for the full license text. Learn more about{" "}
        <Link
          href="/projects"
          className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          the products
        </Link>{" "}
        or how {SITE_CONFIG.shortName} is supported.
      </p>
    </Section>
  );
}
