import type { Metadata } from "next";
import { PageTitle, Section } from "@/components/layout/section";
import { ProductCatalogue } from "@/components/site/product-row";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";
import { getProjectViews, getProjectsByCategory } from "@/lib/projects/service";
import { SITE_CONFIG } from "@/lib/constants";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Products",
  description:
    "Every open-source product from Nexoral Systems: databases, DNS and network tools, and developer utilities. Live data from GitHub and npm.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Products | Nexoral Systems",
    description:
      "Every open-source product from Nexoral Systems: databases, DNS and network tools, and developer utilities.",
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
            { name: "Products", url: `${SITE_CONFIG.url}/projects` },
          ]),
        ]}
      />

      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <PageTitle
          title="Products"
          description="Every project is free to use and open source, grouped by the problem it solves. Stars and download counts are pulled live from GitHub and npm."
        />
        <p className="mt-6 text-sm text-muted-foreground">
          {all.length} products ·{" "}
          <a
            href={SITE_CONFIG.orgGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
          >
            View the organization on GitHub
          </a>
        </p>
      </Section>

      {groups.map((group) => (
        <Section key={group.category} divider size="tight">
          <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
            <div className="lg:pt-7">
              <h2 className="font-heading text-xl font-medium tracking-tight">{group.label}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {group.projects.length} project{group.projects.length === 1 ? "" : "s"}
              </p>
            </div>
            <ProductCatalogue projects={group.projects} />
          </div>
        </Section>
      ))}
    </>
  );
}
