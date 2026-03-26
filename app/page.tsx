/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { getProjectsForHomepage, getOrganizationStats } from "@/lib/github/fetchers";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { HeroTerminal } from "@/components/home/hero-terminal";
import { StatsSection } from "@/components/home/stats-section";
import { ProjectCard } from "@/components/home/project-card";
import { FadeIn } from "@/components/animations/fade-in";

// ISR: Revalidate every 12 hours
export const revalidate = 43200;

export default async function Home() {
  // Fetch top 4 projects from GitHub and organization stats
  const [fetchedProjects, stats] = await Promise.all([
    getProjectsForHomepage(4),
    getOrganizationStats(),
  ]);

  // Transform to UI format
  const projects = fetchedProjects.map(project => ({
    slug: project.slug,
    name: project.name,
    description: project.description,
    tech: project.topics.slice(0, 5), // Use topics as tech stack, limit to 5
    github: project.githubUrl,
    highlight: project.stars >= 100 ? `${project.stars}+ Stars` : (project.language || 'Open Source'),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <PageTransition>
        <header className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Terminal-style header */}
            <HeroTerminal projectCount={stats.totalProjects} starCount={stats.totalStars} />

            <FadeIn delay={0.3}>
              <div className="mb-6 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-mono text-emerald-400">
                &lt;OpenSource /&gt;
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Nexoral Systems
              </h1>
            </FadeIn>

            <FadeIn delay={0.7}>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Building next-generation <span className="text-emerald-400 font-semibold font-mono">infrastructure</span>, <span className="text-blue-400 font-semibold font-mono">developer tools</span>, and <span className="text-purple-400 font-semibold font-mono">scalable platforms</span> that empower developers and solve real-world technical challenges.
              </p>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
            >
              Explore Projects →
            </Link>
            <Link
              href="/founder"
              className="px-6 py-3 border border-slate-600 hover:border-emerald-400 rounded-lg transition-colors"
            >
              About the Founder
            </Link>
            <a
              href="https://github.com/nexoral"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-lg transition-colors flex items-center gap-2"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </FadeIn>
          </div>
        </header>
      </PageTransition>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl">
          <StatsSection
            totalProjects={stats.totalProjects}
            totalStars={stats.totalStars}
            mitLicensedPercentage={stats.mitLicensedPercentage}
          />

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
              <span className="text-emerald-400">//</span> Our Mission
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold mb-2 font-mono">&lt;OpenSource /&gt;</h3>
                <p className="text-slate-400 text-sm">Publishing projects that address real-world problems and streamline development workflows.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="text-xl font-semibold mb-2 font-mono">const tools = []</h3>
                <p className="text-slate-400 text-sm">Building tools that boost productivity, simplify complex tasks, and enable rapid prototyping.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-semibold mb-2 font-mono">scale(∞)</h3>
                <p className="text-slate-400 text-sm">Creating scalable, robust infrastructure for cloud, edge, and on-premises environments.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-emerald-400">//</span> Featured Projects
          </h2>
          <p className="text-slate-400 mb-12 text-lg">Production-ready tools built to solve real development challenges.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                {...project}
                index={index}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 rounded-lg transition-all font-mono"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="container mx-auto px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
            <span className="text-emerald-400">//</span> Founded by Ankan Saha
          </h2>
          <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-slate-600 transition-all">
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              Software Engineer from India specializing in <span className="text-blue-400 font-mono">networking protocols</span>, <span className="text-purple-400 font-mono">distributed systems</span>, and <span className="text-emerald-400 font-mono">backend development</span>.
              Building production-ready infrastructure tools and solving real-world technical challenges.
            </p>
            <p className="text-slate-400 mb-6 font-mono text-sm">
              <span className="text-slate-600">&gt;</span> From debugging DNS configurations at 3 AM to building tools that prevent others from doing the same.
              Nexoral is where experimental projects become production-ready solutions.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/founder"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                Learn More →
              </Link>
              <a
                href="https://github.com/AnkanSaha"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-600 hover:border-slate-500 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
