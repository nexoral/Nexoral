import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/site/icons";
import { Section } from "@/components/layout/section";
import { ReadmeViewer } from "@/components/project/readme-viewer";
import { CodeBlock } from "@/components/site/code-block";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
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
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.name} | ${SITE_CONFIG.name}`,
      description: project.description,
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
    description: project.description,
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
            { name: "Projects", url: `${SITE_CONFIG.url}/projects` },
            { name: project.name, url: `${SITE_CONFIG.url}/projects/${slug}` },
          ]),
        ]}
      />

      <Section className="pt-12 sm:pt-16">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link href="/projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          <span aria-hidden>/</span>
          <span className="text-foreground">{project.name}</span>
        </nav>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{project.categoryLabel}</Badge>
              {project.language ? <Badge variant="outline">{project.language}</Badge> : null}
              {project.license ? <Badge variant="outline">{project.license}</Badge> : null}
              <Badge variant="ghost">{status}</Badge>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
          <div>
            <dt className="text-sm text-muted-foreground">Stars</dt>
            <dd className="mt-1 inline-flex items-center gap-1.5 text-xl font-semibold">
              <Star className="size-4" /> {formatNumber(project.stars)}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Forks</dt>
            <dd className="mt-1 text-xl font-semibold">{formatNumber(project.forks)}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Downloads / month</dt>
            <dd className="mt-1 text-xl font-semibold">
              {project.npm ? formatCompact(project.npm.lastMonth) : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Last pushed</dt>
            <dd className="mt-1 text-xl font-semibold">{formatDate(project.lastPushedAt)}</dd>
          </div>
        </dl>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <ReadmeViewer readme={project.readme} />
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="mb-3 text-sm font-semibold">Install</h2>
              <CodeBlock code={install} />
            </div>

            {project.languages.length > 0 ? (
              <div>
                <h2 className="mb-3 text-sm font-semibold">Languages</h2>
                <div className="space-y-2">
                  {project.languages.slice(0, 6).map((language) => (
                    <div key={language.name} className="text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{language.name}</span>
                        <span className="text-xs text-muted-foreground">{language.percentage}%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
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
                <h2 className="mb-3 text-sm font-semibold">Releases</h2>
                <ul className="space-y-3 text-sm">
                  {project.recentReleases.slice(0, 4).map((release) => (
                    <li key={release.id}>
                      <a
                        href={release.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        {release.version}
                      </a>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(release.publishedAt)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.contributors.length > 0 ? (
              <div>
                <h2 className="mb-3 text-sm font-semibold">Contributors</h2>
                <div className="flex flex-wrap gap-2">
                  {project.contributors.slice(0, 10).map((contributor) => (
                    <a
                      key={contributor.username}
                      href={contributor.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${contributor.username} · ${contributor.contributions} contributions`}
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
