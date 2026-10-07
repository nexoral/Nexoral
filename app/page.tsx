import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Database, Languages, Network, ShieldCheck, Terminal } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/section";
import { StatGrid } from "@/components/site/stat";
import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedProjects, getOrgStats, getProjectsByCategory } from "@/lib/projects/service";
import { ORG_DETAILS, SITE_CONFIG, SOCIALS } from "@/lib/constants";
import { formatCompact } from "@/lib/npm/fetchers";
import { formatNumber } from "@/lib/format";

export const revalidate = 43200;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const categoryBlurbs: Record<string, string> = {
  network: "Self-hosted DNS and edge routing you fully control.",
  data: "Embedded storage that runs inside your own process.",
  tooling: "Utilities that remove repetitive setup and release work.",
  education: "Programming made accessible in regional languages.",
};

const principles = [
  {
    icon: Boxes,
    title: "Open source, not open-washed",
    body: "Every project ships under a real OSI license (MIT or GPL-3.0) with the source on GitHub.",
  },
  {
    icon: Terminal,
    title: "Self-hostable by default",
    body: "Run the tools on your own machine or LAN. No mandatory account, no forced cloud.",
  },
  {
    icon: ShieldCheck,
    title: "No tracking, no telemetry",
    body: "The tools and this site do not phone home or sell your data.",
  },
  {
    icon: Database,
    title: "Documentation first",
    body: "Install guides, API references and troubleshooting are treated as part of the product.",
  },
];

export default async function Home() {
  const [stats, featured, groups] = await Promise.all([
    getOrgStats(),
    getFeaturedProjects(4),
    getProjectsByCategory(),
  ]);

  return (
    <>
      <Section className="pt-20 sm:pt-24 lg:pt-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Open source · Free forever
        </p>
        <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Free, open-source tools for real infrastructure problems.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {SITE_CONFIG.name} is an independent, Udyam-registered software micro-enterprise from
          West Bengal, India — building DNS, database, deployment and packaging tools for
          developers, small businesses, and home networks.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" render={<Link href="/projects" />}>
            Explore projects <ArrowRight />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/support" />}>
            Support the work
          </Button>
        </div>
      </Section>

      <Section className="py-0">
        <StatGrid
          stats={[
            { value: formatNumber(stats.totalProjects), label: "Open-source projects" },
            { value: formatNumber(stats.totalStars), label: "GitHub stars" },
            { value: `${formatCompact(stats.totalNpmYear)}`, label: "npm downloads / year" },
            {
              value: "100%",
              label: "Free & open source",
            },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we build"
          title="Four areas, one principle: keep it free and usable"
          description="We group our work by the problem it solves — not by how it sounds in a pitch deck."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const Icon =
              group.category === "network"
                ? Network
                : group.category === "data"
                  ? Database
                  : group.category === "education"
                    ? Languages
                    : Terminal;
            return (
              <Card key={group.category} className="bg-card/50">
                <CardHeader>
                  <Icon className="size-5 text-primary" />
                  <CardTitle>{group.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {categoryBlurbs[group.category]}
                  <span className="mt-3 block text-xs text-muted-foreground/80">
                    {group.projects.length} project{group.projects.length === 1 ? "" : "s"}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Featured"
            title="Flagship projects"
            description="The tools people reach for most, with live data pulled from GitHub and npm."
            className="mb-0"
          />
          <Button variant="ghost" render={<Link href="/projects" />}>
            View all <ArrowRight />
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section bordered>
        <SectionHeading eyebrow="How we work" title="What 'free and open' actually means here" />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="flex gap-4">
              <principle.icon className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">{principle.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bordered>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How Nexoral is run"
              title="Independent, transparent, and accountable"
              description="Nexoral Systems is a registered micro-enterprise, not a closed product company. One maintainer leads the work with help from contributors, and the books stay visible."
            />
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" render={<Link href="/about" />}>
                About Nexoral
              </Button>
              <Button variant="outline" render={<Link href="/support" />}>
                Funding & support
              </Button>
            </div>
          </div>
          <Card className="bg-card/50">
            <CardContent className="space-y-4 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Legal enterprise</span>
                <span className="text-right font-medium">{ORG_DETAILS.legalName}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Type</span>
                <span className="text-right font-medium">{ORG_DETAILS.enterpriseType}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Udyam number</span>
                <span className="text-right font-mono text-xs font-medium">
                  {ORG_DETAILS.udyamNumber}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Registered from</span>
                <span className="text-right font-medium">
                  {ORG_DETAILS.address.locality}, {ORG_DETAILS.address.region},{" "}
                  {ORG_DETAILS.address.countryName}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Incorporated</span>
                <span className="text-right font-medium">{ORG_DETAILS.incorporationLabel}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Keep the tools free
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Core tools will always be free. Sponsorship and grants pay for maintenance,
              documentation, and infrastructure — so the work stays independent.
            </p>
          </div>
          <Button
            size="lg"
            render={<a href={SOCIALS.sponsor} target="_blank" rel="noopener noreferrer" />}
          >
            Sponsor on GitHub
          </Button>
        </div>
      </Section>
    </>
  );
}
