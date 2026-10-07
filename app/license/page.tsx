import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layout/section";
import { getProjectViews, getOrgStats } from "@/lib/projects/service";
import { SITE_CONFIG } from "@/lib/constants";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Licenses",
  description:
    "Open-source license summary for every Nexoral Systems project — MIT and GPL-3.0.",
  alternates: { canonical: "/license" },
};

export default async function LicensePage() {
  const [projects, stats] = await Promise.all([getProjectViews(), getOrgStats()]);

  return (
    <Section className="pt-20 sm:pt-24">
      <SectionHeading
        eyebrow="Licenses"
        title="Open source, under real licenses"
        description={`Across ${stats.totalProjects} projects, ${stats.mitCount} are MIT-licensed and ${stats.gplCount} are GPL-3.0. Each project links to its source and license.`}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="py-3 pr-4 font-medium">Project</th>
              <th className="py-3 pr-4 font-medium">Language</th>
              <th className="py-3 pr-4 font-medium">License</th>
              <th className="py-3 font-medium">Source</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug} className="border-b border-border/60">
                <td className="py-3 pr-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {project.name}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-muted-foreground">{project.language ?? "—"}</td>
                <td className="py-3 pr-4 text-muted-foreground">{project.license ?? "—"}</td>
                <td className="py-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        License identifiers follow SPDX. MIT-licensed projects may be used commercially without
        restriction; GPL-3.0 projects may also be used commercially but carry copyleft obligations
        on redistribution. See each repository for the full license text. Learn more about{" "}
        <Link href="/projects" className="text-primary hover:underline">
          the projects
        </Link>{" "}
        or how {SITE_CONFIG.shortName} is supported.
      </p>
    </Section>
  );
}
