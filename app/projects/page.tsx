import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageTitle, Section } from "@/components/layout/section";
import { ProductCatalogue } from "@/components/site/product-row";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schema";
import { getProjectViews, getProjectsByCategory } from "@/lib/projects/service";
import { SITE_CONFIG } from "@/lib/constants";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Products & Infrastructure Systems",
  description:
    "Core developer infrastructure and cloud edge systems by Nexoral Systems: EdgeBalancer, AxioDB, ContainDB, and NexoralDNS.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Products & Infrastructure Systems | Nexoral Systems",
    description:
      "Production-grade infrastructure systems by Nexoral Systems: EdgeBalancer, AxioDB, ContainDB, and NexoralDNS.",
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
          title="Infrastructure Systems"
          description="Nexoral Systems curates 4 dedicated production technologies engineered for extreme reliability, zero unnecessary dependencies, and edge performance."
        />
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs text-primary font-medium">
            {all.length} Core Systems
          </span>
          <span>·</span>
          <a
            href={SITE_CONFIG.orgGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            <span>GitHub Organization</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </Section>

      {groups.map((group) => (
        <Section key={group.category} divider size="tight">
          <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
            <div className="lg:pt-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Category
              </span>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground">{group.label}</h2>
              <p className="mt-1 text-xs text-muted-foreground font-mono">
                {group.projects.length} system{group.projects.length === 1 ? "" : "s"}
              </p>
            </div>
            <ProductCatalogue projects={group.projects} />
          </div>
        </Section>
      ))}
    </>
  );
}
