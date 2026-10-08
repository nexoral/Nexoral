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

      <div className="glass glass-panel mt-12 overflow-x-auto rounded-xl border border-black/[0.08] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-black/[0.08] text-left">
              <th className="py-3 pr-4 font-mono text-xs uppercase text-primary font-semibold">Infrastructure System</th>
              <th className="py-3 pr-4 font-mono text-xs uppercase text-muted-foreground font-semibold">Primary Runtime</th>
              <th className="py-3 pr-4 font-mono text-xs uppercase text-muted-foreground font-semibold">OSI License</th>
              <th className="py-3 font-mono text-xs uppercase text-muted-foreground font-semibold">Repository</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug} className="border-b border-black/[0.06] hover:bg-slate-50 transition-colors">
                <td className="py-3.5 pr-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {project.name}
                  </Link>
                </td>
                <td className="py-3.5 pr-4 text-muted-foreground font-mono text-xs">{project.language ?? "N/A"}</td>
                <td className="py-3.5 pr-4 font-mono text-xs text-muted-foreground">
                  <span className="rounded bg-slate-100 px-2 py-0.5 border border-black/[0.04] text-slate-700">
                    {project.license ?? "N/A"}
                  </span>
                </td>
                <td className="py-3.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Source ↗</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 max-w-4xl lg:max-w-5xl text-sm leading-relaxed text-muted-foreground">
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
