import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layout/section";
import { FactStrip } from "@/components/site/stat";
import { ProductCatalogue } from "@/components/site/product-row";
import { CodeBlock } from "@/components/site/code-block";
import { Button } from "@/components/ui/button";
import { getFlagshipProject, getOrgStats, getProjectViews } from "@/lib/projects/service";
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

const flagshipCode = `// An embedded database, in-process. No server to run.
import { AxioDB } from "axiodb";

const db = new AxioDB({
  path: "./data",
  encryption: true,
  encryptionKey: process.env.AXIODB_KEY,
});

await db.collection("orders").insert({
  id: "1042",
  total: 2499,
  status: "paid",
});

const paid = await db.collection("orders").find({
  status: "paid",
});`;

export default async function Home() {
  const [stats, projects, flagship] = await Promise.all([
    getOrgStats(),
    getProjectViews(),
    getFlagshipProject(),
  ]);

  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
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
          </div>

          {flagship ? (
            <div>
              <CodeBlock code={flagshipCode} title="app.ts" meta={`${flagship.name} / npm`} />
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 font-mono text-[11.5px] text-muted-foreground">
                <Link
                  href={`/projects/${flagship.slug}`}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {flagship.name}: {flagship.summary.split(".")[0]}.
                </Link>
                {flagship.npm ? <span>{formatCompact(flagship.npm.lastMonth)}/mo</span> : null}
              </div>
            </div>
          ) : null}
        </div>

        <FactStrip
          className="mt-16 sm:mt-20"
          facts={[
            { value: formatNumber(stats.totalProjects), label: "Open-source products" },
            { value: formatNumber(stats.totalStars), label: "GitHub stars" },
            { value: formatCompact(stats.totalNpmYear), label: "npm downloads / year" },
            { value: "MIT · GPL-3.0", label: "Licenses used" },
          ]}
        />
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
        <div className="mt-10 grid gap-x-16 gap-y-9 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title}>
              <h3 className="font-heading text-lg font-medium tracking-tight">{principle.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
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
        </div>
      </Section>

      <Section divider>
        <div className="flex flex-col items-start justify-between gap-6 border border-border bg-card p-8 sm:p-10 lg:flex-row lg:items-center">
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
        </div>
      </Section>
    </>
  );
}
