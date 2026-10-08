import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/site/icons";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ReadmeViewer } from "@/components/project/readme-viewer";
import { CodeBlock } from "@/components/site/code-block";
import { TelemetryDeck } from "@/components/site/telemetry-deck";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { getProjectDetailBySlug } from "@/lib/projects/service";
import {
  breadcrumbSchema,
  softwareApplicationSchema,
  softwareSourceCodeSchema,
} from "@/lib/seo/schema";
import { extractInstallation, getFallbackInstallation } from "@/lib/markdown/code-extractor";
import { formatCompact } from "@/lib/npm/fetchers";
import { activityStatus, formatDate, formatNumber } from "@/lib/format";
import { SITE_CONFIG } from "@/lib/constants";

export const revalidate = 43200;
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectDetailBySlug(slug);
  if (!project) return { title: "Product not found" };

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.name} — ${SITE_CONFIG.name}`,
      description: project.summary,
      url: `${SITE_CONFIG.url}/projects/${slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectDetailBySlug(slug);
  if (!project) notFound();

  const npmUrl = project.npm ? `https://www.npmjs.com/package/${project.npm.package}` : undefined;
  const install =
    (project.readme ? extractInstallation(project.readme) : null) ??
    getFallbackInstallation(slug, project.language ?? undefined);
  const status = activityStatus(project.lastPushedAt);

  const schemaInput = {
    name: project.name,
    description: project.summary,
    url: `${SITE_CONFIG.url}/projects/${slug}`,
    codeRepository: project.githubUrl,
    language: project.language,
    license: project.license,
  };

  return (
    <>
      <JsonLd
        data={[
          softwareSourceCodeSchema(schemaInput),
          softwareApplicationSchema(schemaInput),
          breadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Products", url: `${SITE_CONFIG.url}/projects` },
            { name: project.name, url: `${SITE_CONFIG.url}/projects/${slug}` },
          ]),
        ]}
      />

      <Section className="pt-12 sm:pt-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <Link href="/projects" className="transition-colors hover:text-foreground">
            Products
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-foreground">{project.name}</span>
        </nav>

        <Reveal pop className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1 max-w-4xl lg:max-w-5xl">
            <p className="font-mono text-[12px] text-muted-foreground">{project.categoryLabel}</p>
            <h1 className="mt-3 font-heading text-[2.2rem] leading-[1.05] font-medium tracking-[-0.02em] text-balance sm:text-[3rem]">
              {project.name}
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Button render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}>
              <GithubIcon className="size-4" /> Source
            </Button>
            {project.docsUrl ? (
              <Button
                variant="outline"
                render={<a href={project.docsUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <ExternalLink /> Docs
              </Button>
            ) : null}
            {project.liveUrl ? (
              <Button
                variant="outline"
                render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <ExternalLink /> Live
              </Button>
            ) : null}
            {npmUrl ? (
              <Button
                variant="outline"
                render={<a href={npmUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <ExternalLink /> npm
              </Button>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="glass glass-panel mt-12 grid grid-cols-2 divide-y sm:divide-y-0 divide-x divide-slate-200 rounded-xl border border-black/[0.08] p-2 sm:grid-cols-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          {[
            { term: "GitHub Stars", value: formatNumber(project.stars) },
            { term: "Forks", value: formatNumber(project.forks) },
            {
              term: project.slug === "edgebalancer" ? "Live Users" : project.npm ? "Downloads / Month" : "Category",
              value: project.slug === "edgebalancer" ? "110 (Paid Live)" : project.npm ? formatCompact(project.npm.lastMonth) : project.distribution,
            },
            { term: "Last Activity", value: formatDate(project.lastPushedAt) },
          ].map((stat) => (
            <div key={stat.term} className="flex flex-col p-4">
              <dt className="text-xs font-mono text-muted-foreground uppercase">{stat.term}</dt>
              <dd className="order-first font-mono text-2xl font-bold tracking-tight text-foreground mb-1">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11.5px] text-muted-foreground">
          <span>{project.language ?? "N/A"}</span>
          <span>{project.license ?? "No license"}</span>
          <span>{status}</span>
          <span>{project.distribution}</span>
        </div>

        {project.slug === "edgebalancer" && (
          <Reveal delay={0.15} className="mt-12">
            <TelemetryDeck />
          </Reveal>
        )}
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <ReadmeViewer readme={project.readme} />
          </div>

          <aside className="space-y-9 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="mb-3 text-sm font-medium">Install</h2>
              <CodeBlock code={install} />
            </div>

            {project.languages.length > 0 ? (
              <div>
                <h2 className="mb-3 text-sm font-medium">Languages</h2>
                <div className="space-y-2.5">
                  {project.languages.slice(0, 6).map((language) => (
                    <div key={language.name} className="text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{language.name}</span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {language.percentage}%
                        </span>
                      </div>
                      <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${language.percentage}%`,
                            backgroundColor: language.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {project.recentReleases.length > 0 ? (
              <div>
                <h2 className="mb-3 text-sm font-medium">Releases</h2>
                <ul className="space-y-3 text-sm">
                  {project.recentReleases.slice(0, 4).map((release) => (
                    <li key={release.id}>
                      <a
                        href={release.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[13px] font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                      >
                        {release.version}
                      </a>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {formatDate(release.publishedAt)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.contributors.length > 0 ? (
              <div>
                <h2 className="mb-3 text-sm font-medium">Contributors</h2>
                <div className="flex flex-wrap gap-2">
                  {project.contributors.slice(0, 10).map((contributor) => (
                    <a
                      key={contributor.username}
                      href={contributor.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${contributor.username} (${contributor.contributions} contributions)`}
                    >
                      <Image
                        src={contributor.avatarUrl}
                        alt={contributor.username}
                        width={32}
                        height={32}
                        className="size-8 rounded-full border border-border"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>
    </>
  );
}
