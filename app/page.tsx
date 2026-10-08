import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { FactStrip } from "@/components/site/stat";
import { ProductCatalogue } from "@/components/site/product-row";
import { Button } from "@/components/ui/button";
import { getOrgStats, getProjectViews } from "@/lib/projects/service";
import { COMPANY, CONTACT, SITE_CONFIG, SOCIALS } from "@/lib/constants";
import { formatCompact } from "@/lib/npm/fetchers";
import { formatNumber } from "@/lib/format";

export const revalidate = 43200;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const principles = [
  {
    title: "Open source, not open-washed",
    body: "Every project ships under an OSI license (MIT or GPL-3.0) with the full source on GitHub.",
  },
  {
    title: "Self-hosted first",
    body: "The tools run on your machine or your LAN. No account to create, no cloud you have to depend on.",
  },
  {
    title: "No telemetry",
    body: "The software does not phone home, and this site does not collect anything about you.",
  },
  {
    title: "Documentation is part of the product",
    body: "Install guides, API references and troubleshooting are maintained alongside the code, not after it.",
  },
];

const operatingModel = [
  {
    title: "Independent",
    body: "A software company, not a charity, trust or NGO.",
  },
  {
    title: "Owner-run",
    body: "Owned and run by one person, who answers for every decision.",
  },
  {
    title: "Sponsor-funded",
    body: "Kept free by sponsorship, never by paywalls or advertising.",
  },
  {
    title: "Built in the open",
    body: "Source, issues and decisions live in public on GitHub.",
  },
];

export default async function Home() {
  const [stats, projects] = await Promise.all([getOrgStats(), getProjectViews()]);

  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <Reveal pop>
            <p className="font-mono text-[12px] text-muted-foreground">
              Independent software company · Open source since {COMPANY.foundedLabel}
            </p>
            <h1 className="mt-5 font-heading text-[2.6rem] leading-[1.05] font-medium tracking-[-0.02em] text-balance sm:text-[3.5rem] lg:text-[3.9rem]">
              Software you can run yourself.
            </h1>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              {SITE_CONFIG.name} builds free, open-source infrastructure and developer tools. No
              accounts, no telemetry, no lock-in: just software you install and own.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button size="lg" render={<Link href="/projects" />}>
                Browse products
              </Button>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                View the source on GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass rounded-2xl p-7 sm:p-9">
              <p className="font-mono text-[12px] text-muted-foreground">How the company works</p>
              <h2 className="mt-4 font-heading text-[1.6rem] leading-snug font-medium tracking-tight text-balance sm:text-[1.85rem]">
                Owned, funded, and built in the open.
              </h2>
              <Stagger className="mt-7 space-y-4">
                {operatingModel.map((item, index) => (
                  <StaggerItem key={item.title} index={index} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Link
                href="/about"
                className="mt-7 inline-flex text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              >
                About the company
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 sm:mt-20">
          <FactStrip
            facts={[
              { value: formatNumber(stats.totalProjects), label: "Open-source products" },
              { value: formatNumber(stats.totalStars), label: "GitHub stars" },
              { value: formatCompact(stats.totalNpmYear), label: "npm downloads / year" },
              { value: "MIT · GPL-3.0", label: "Licenses used" },
            ]}
          />
        </Reveal>
      </Section>

      <Section divider>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Products"
            description="Every project below is free to use and open source. The numbers are pulled live from GitHub and npm."
            className="max-w-xl"
          />
          <a
            href={SITE_CONFIG.orgGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            All repositories on GitHub
          </a>
        </div>
        <div className="mt-10">
          <ProductCatalogue projects={projects} />
        </div>
      </Section>

      <Section divider tone="panel">
        <SectionHeading
          title="How these tools are built"
          description="The same four commitments apply to everything published under the Nexoral name."
          className="max-w-xl"
        />
        <Stagger className="mt-10 grid gap-x-16 gap-y-9 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <StaggerItem key={principle.title} index={index}>
              <h3 className="font-heading text-lg font-medium tracking-tight">{principle.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {principle.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              title="One owner, in the open"
              description={`${SITE_CONFIG.name} is owned and run by ${COMPANY.owner}. It is small on purpose: decisions are made in public, the source lives on GitHub, and support goes straight into maintenance.`}
              className="max-w-xl"
            />
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/about"
                className="text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              >
                About the company
              </Link>
              <Link
                href="/founder"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Meet the owner
              </Link>
            </div>
          </div>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-border border-y border-border">
              {[
                { term: "Owner", value: COMPANY.owner },
                { term: "Founded", value: COMPANY.foundedLabel },
                { term: "Based in", value: COMPANY.location },
                { term: "Contact", value: CONTACT.general },
              ].map((row) => (
                <div key={row.term} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-sm text-muted-foreground">{row.term}</dt>
                  <dd className="text-right text-sm font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section divider>
        <Reveal className="glass flex flex-col items-start justify-between gap-6 p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Keep the tools free
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Core tools stay free. Sponsorship pays for maintenance, documentation and the
              infrastructure to build and release, so the work stays independent.
            </p>
          </div>
          <Button
            size="lg"
            render={<a href={SOCIALS.sponsor} target="_blank" rel="noopener noreferrer" />}
          >
            Sponsor on GitHub
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
