import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink, Star, GitFork, Users } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/github/fetchers";
import { Navigation } from "@/components/layout/navigation";
import { PageTransition } from "@/components/layout/page-transition";
import { FadeIn } from "@/components/animations/fade-in";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureShowcase } from "@/components/project/feature-showcase";
import { CodeBlock } from "@/components/project/code-block";
import { ContributorGrid } from "@/components/project/contributor-grid";
import { ActivityTimeline } from "@/components/project/activity-timeline";
import { ReadmeViewer } from "@/components/project/readme-viewer";
import {
  extractFeaturesFromReadme,
  getFallbackFeatures,
} from "@/lib/markdown/feature-extractor";
import {
  extractInstallation,
  extractUsage,
  getFallbackInstallation,
  getFallbackUsage,
} from "@/lib/markdown/code-extractor";

// ISR: Revalidate every 12 hours
export const revalidate = 43200;

// Enable dynamic params for new repos added after build
export const dynamicParams = true;

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Nexoral Systems",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.name} - ${project.description.substring(0, 100)} | Nexoral Systems`,
    description: project.longDescription || project.description,
    keywords: [
      project.name,
      ...project.topics,
      project.language || "",
      "open source",
      "Nexoral",
      "GitHub",
    ].filter(Boolean),
    authors: [{ name: "Ankan Saha", url: "https://github.com/AnkanSaha" }],
    openGraph: {
      type: "website",
      url: `https://nexoral.in/projects/${slug}`,
      title: `${project.name} - Nexoral Systems`,
      description: project.description,
      siteName: "Nexoral Systems",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} - Nexoral Systems`,
      description: project.description,
      creator: "@theankansaha",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch project data from GitHub
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Extract features from README
  const extractedFeatures = extractFeaturesFromReadme(project.readme || "");
  const features =
    extractedFeatures.length > 0
      ? extractedFeatures
      : getFallbackFeatures(slug);

  // Extract code examples
  const installation =
    extractInstallation(project.readme || "") ||
    getFallbackInstallation(slug, project.language || undefined);
  const usageExample = extractUsage(project.readme || "") || getFallbackUsage(slug, project.language || undefined);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <PageTransition>
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <FadeIn>
              <div className="mb-6 flex items-center gap-2 text-sm font-mono text-slate-500">
                <Link
                  href="/projects"
                  className="hover:text-emerald-400 transition-colors"
                >
                  projects
                </Link>
                <span>/</span>
                <span className="text-slate-300">{slug}</span>
              </div>
            </FadeIn>

            {/* Hero Header */}
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent animate-gradient font-mono">
                {project.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-2xl text-slate-300 mb-6">
                {project.description}
              </p>
            </FadeIn>

            {/* Status Badges */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-mono">
                  {project.recentReleases[0]?.version || "Latest"}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-sm font-mono">
                  {project.archived
                    ? "Archived"
                    : project.stars >= 100
                    ? "Production Ready"
                    : "Active Development"}
                </span>
                {project.license && (
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-sm font-mono">
                    {project.license}
                  </span>
                )}
                {project.language && (
                  <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600 text-sm font-mono">
                    {project.language}
                  </span>
                )}
              </div>
            </FadeIn>

            {/* Key Metrics */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-emerald-400 mb-1">
                    <Star className="w-5 h-5" />
                    {project.stars}
                  </div>
                  <div className="text-sm text-slate-400">Stars</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-400 mb-1">
                    <GitFork className="w-5 h-5" />
                    {project.forks}
                  </div>
                  <div className="text-sm text-slate-400">Forks</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-purple-400 mb-1">
                    <Users className="w-5 h-5" />
                    {project.contributors.length}
                  </div>
                  <div className="text-sm text-slate-400">Contributors</div>
                </div>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                >
                  View on GitHub →
                </a>
                <a
                  href={`${project.githubUrl}#readme`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-emerald-400 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Documentation
                </a>
              </div>
            </FadeIn>

            {/* Tabbed Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="docs">Documentation</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                {/* Features */}
                {features.length > 0 && <FeatureShowcase features={features} />}

                {/* Tech Stack */}
                {project.topics.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">
                      // Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {project.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-200 border border-slate-700 font-mono text-sm hover:border-emerald-500/50 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Installation */}
                {installation && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">
                      // Installation
                    </h2>
                    <CodeBlock code={installation} language="bash" />
                  </div>
                )}

                {/* Usage Example */}
                {usageExample && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">
                      // Usage Example
                    </h2>
                    <CodeBlock
                      code={usageExample.code}
                      language={usageExample.language}
                    />
                  </div>
                )}
              </TabsContent>

              {/* Documentation Tab */}
              <TabsContent value="docs">
                <ReadmeViewer readme={project.readme || ""} />
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-8">
                <ActivityTimeline
                  commits={project.recentCommits}
                  releases={project.recentReleases}
                />
                <ContributorGrid contributors={project.contributors} />
              </TabsContent>
            </Tabs>

            {/* Footer CTA */}
            <FadeIn>
              <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30">
                <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
                <p className="text-slate-400 mb-4">
                  Check out the full documentation and examples on GitHub
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
                >
                  View on GitHub →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
