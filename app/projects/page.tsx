import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      slug: "nexoraldns",
      name: "NexoralDNS",
      description: "Docker-based smart DNS server for LANs with custom domain management, traffic monitoring, and security filtering. Web-based management interface.",
      tech: ["Node.js", "TypeScript", "Docker", "Fastify", "Next.js"],
      github: "https://github.com/nexoral/NexoralDNS",
      highlight: "Production-Ready DNS Infrastructure",
      status: "Active",
      version: "v1.2.0",
    },
    {
      slug: "axiodb",
      name: "AxioDB",
      description: "Lightweight NoSQL database for Node.js with MongoDB-style queries, AES-256 encryption, zero native dependencies. 2000+ NPM downloads.",
      tech: ["Node.js", "TypeScript", "Worker Threads"],
      github: "https://github.com/nexoral/AxioDB",
      highlight: "2000+ NPM Downloads",
      status: "Active",
      version: "v2.5.1",
    },
    {
      slug: "containdb",
      name: "ContainDB",
      description: "CLI tool for automating containerized database management. One-click setup for MongoDB, Redis, MySQL, PostgreSQL with GUI tools.",
      tech: ["Go", "Docker", "CLI"],
      github: "https://github.com/nexoral/ContainDB",
      highlight: "Database DevOps Automation",
      status: "Active",
      version: "v1.0.3",
    },
    {
      slug: "xpack",
      name: "xpack",
      description: "Universal Linux package builder converting binaries to .deb, .rpm, tar.gz. Automates native package creation for CI/CD pipelines.",
      tech: ["Go", "Linux Packaging"],
      github: "https://github.com/nexoral/xpack",
      highlight: "CI/CD Ready",
      status: "Active",
      version: "v0.9.2",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold font-mono">
              <span className="text-emerald-400">nexoral</span>
              <span className="text-slate-500">$</span>
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-white">
                Projects
              </Link>
              <Link href="/founder" className="text-slate-400 hover:text-white transition-colors">
                Founder
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Terminal Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
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

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            Open-source tools built to solve real-world infrastructure and development challenges
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all hover:bg-slate-800/50 relative overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors font-mono">
                        {project.name}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                          {project.version}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-500 mb-2 font-mono">Tech Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 font-mono border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-700">
                      <span className="text-xs text-emerald-400 font-semibold">
                        {project.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
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
        </div>
      </div>
    </div>
  );
}
