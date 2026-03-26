import Link from "next/link";
import { getAllProjects } from "@/lib/github/fetchers";
import { Navigation } from "@/components/layout/navigation";
import { PageTransition } from "@/components/layout/page-transition";
import { ProjectCard } from "@/components/home/project-card";
import { FadeIn } from "@/components/animations/fade-in";

// ISR: Revalidate every 12 hours
export const revalidate = 43200;

export default async function ProjectsPage() {
  // Fetch all projects from GitHub
  const fetchedProjects = await getAllProjects();

  // Transform to UI format
  const projects = fetchedProjects.map(project => {
    // Determine status based on recent activity
    const lastUpdated = new Date(project.updatedAt);
    const daysSinceUpdate = Math.floor((Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24));
    const status = daysSinceUpdate < 30 ? "Active" : daysSinceUpdate < 180 ? "Maintained" : "Stable";

    return {
      slug: project.slug,
      name: project.name,
      description: project.description,
      tech: project.topics.length > 0 ? project.topics.slice(0, 5) : [project.language || 'Code'],
      github: project.githubUrl,
      highlight: project.stars >= 100 ? `${project.stars}+ Stars` : (project.language || 'Open Source'),
      status,
      version: project.recentReleases[0]?.version || 'Latest',
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <Navigation />

      <PageTransition>
        {/* Terminal Header */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="font-mono text-sm mb-8">
                <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
                  <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-400 text-xs ml-2">projects@nexoral:~</span>
                  </div>
                  <div className="p-4 space-y-1">
                    <div className="flex gap-2">
                      <span className="text-emerald-400">$</span>
                      <span className="text-slate-300">ls -la projects/</span>
                    </div>
                    <div className="text-slate-500">
                      total {projects.length} repositories
                    </div>
                    {projects.map((project) => (
                      <div key={project.slug} className="text-slate-400">
                        drwxr-xr-x  {project.tech.length}  nexoral  staff  {project.version.padEnd(8)}  {project.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                All Projects
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl text-slate-400 mb-8">
                Open-source tools built to solve real-world infrastructure and development challenges
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  index={index}
                />
              ))}
            </div>

            {/* CTA */}
            <FadeIn>
              <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Explore on GitHub</h3>
                    <p className="text-slate-400 text-sm">
                      View source code, documentation, and contribute to our projects
                    </p>
                  </div>
                  <a
                    href="https://github.com/orgs/nexoral/repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    View All on GitHub →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
