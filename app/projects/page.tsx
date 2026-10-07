import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout/section";
import { ProjectCard } from "@/components/site/project-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";
import { getProjectViews, getProjectsByCategory } from "@/lib/projects/service";
import { SITE_CONFIG } from "@/lib/constants";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All open-source projects by Nexoral Systems — DNS and network tools, embedded databases, and developer utilities. Live data from GitHub and npm.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Nexoral Systems",
    description:
      "All open-source projects by Nexoral Systems — DNS and network tools, embedded databases, and developer utilities.",
    url: `${SITE_CONFIG.url}/projects`,
  },
};

export default async function ProjectsPage() {
  const [groups, all] = await Promise.all([getProjectsByCategory(), getProjectViews()]);

  return (
    <>
      <JsonLd
        data={[
          itemListSchema(
            all.map((project) => ({
              name: project.name,
              url: `${SITE_CONFIG.url}/projects/${project.slug}`,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Projects", url: `${SITE_CONFIG.url}/projects` },
          ]),
        ]}
      />

      <Section className="pt-20 sm:pt-24">
        <SectionHeading
          eyebrow="Projects"
          title="Open-source tools, grouped by the problem they solve"
          description="Every project below is free to use and open source. Stars, activity and download counts are pulled live from GitHub and npm."
        />
        <p className="text-sm text-muted-foreground">
          {all.length} active projects ·{" "}
          <a
            href={SITE_CONFIG.orgGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2"
          >
            View the organization on GitHub
          </a>
        </p>
      </Section>

      {groups.map((group) => (
        <Section key={group.category} bordered>
          <h2 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">{group.label}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
