import Link from "next/link";

export default function Home() {
  const projects = [
    {
      slug: "nexoraldns",
      name: "NexoralDNS",
      description: "Docker-based smart DNS server for LANs with custom domain management, traffic monitoring, and security filtering. Web-based management interface.",
      tech: ["Node.js", "TypeScript", "Docker", "Fastify", "Next.js"],
      github: "https://github.com/nexoral/NexoralDNS",
      highlight: "Production-Ready DNS Infrastructure",
    },
    {
      slug: "axiodb",
      name: "AxioDB",
      description: "Lightweight NoSQL database for Node.js with MongoDB-style queries, AES-256 encryption, zero native dependencies. 2000+ NPM downloads.",
      tech: ["Node.js", "TypeScript", "Worker Threads"],
      github: "https://github.com/nexoral/AxioDB",
      highlight: "2000+ NPM Downloads",
    },
    {
      slug: "containdb",
      name: "ContainDB",
      description: "CLI tool for automating containerized database management. One-click setup for MongoDB, Redis, MySQL, PostgreSQL with GUI tools.",
      tech: ["Go", "Docker", "CLI"],
      github: "https://github.com/nexoral/ContainDB",
      highlight: "Database DevOps Automation",
    },
    {
      slug: "xpack",
      name: "xpack",
      description: "Universal Linux package builder converting binaries to .deb, .rpm, tar.gz. Automates native package creation for CI/CD pipelines.",
      tech: ["Go", "Linux Packaging"],
      github: "https://github.com/nexoral/xpack",
      highlight: "CI/CD Ready",
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
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/founder" className="text-slate-400 hover:text-white transition-colors">
                Founder
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Terminal-style header */}
          <div className="font-mono text-sm mb-8">
            <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden max-w-2xl">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-400 text-xs ml-2">bash</span>
              </div>
              <div className="p-4 space-y-1">
                <div className="flex gap-2">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">./nexoral --info</span>
                </div>
                <div className="text-slate-500 pl-4">
                  Nexoral Systems v1.0.0
                </div>
                <div className="text-slate-400 pl-4">
                  Status: <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="text-slate-400 pl-4">
                  Projects: <span className="text-blue-400">10+</span>
                </div>
                <div className="text-slate-400 pl-4">
                  Stars: <span className="text-purple-400">1000+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-mono text-emerald-400">
            &lt;OpenSource /&gt;
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            Nexoral Systems
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Building next-generation <span className="text-emerald-400 font-semibold font-mono">infrastructure</span>, <span className="text-blue-400 font-semibold font-mono">developer tools</span>, and <span className="text-purple-400 font-semibold font-mono">scalable platforms</span> that empower developers and solve real-world technical challenges.
          </p>
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
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700">
              <div className="text-3xl font-bold text-emerald-400 mb-2 font-mono">10+</div>
              <div className="text-sm text-slate-400">Open Source Projects</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">1000+</div>
              <div className="text-sm text-slate-400">GitHub Stars</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2 font-mono">2K+</div>
              <div className="text-sm text-slate-400">NPM Downloads</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2 font-mono">100%</div>
              <div className="text-sm text-slate-400">MIT Licensed</div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
            <span className="text-emerald-400">//</span> Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2 font-mono">&lt;OpenSource /&gt;</h3>
              <p className="text-slate-400 text-sm">Publishing projects that address real-world problems and streamline development workflows.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-xl font-semibold mb-2 font-mono">const tools = []</h3>
              <p className="text-slate-400 text-sm">Building tools that boost productivity, simplify complex tasks, and enable rapid prototyping.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-purple-500/50 transition-all">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2 font-mono">scale(∞)</h3>
              <p className="text-slate-400 text-sm">Creating scalable, robust infrastructure for cloud, edge, and on-premises environments.</p>
            </div>
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
            {projects.map((project) => (
              <Link
                key={project.name}
                href={`/projects/${project.slug}`}
                className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all hover:bg-slate-800/50 relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors font-mono">{project.name}</h3>
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3 font-mono">
                    {project.highlight}
                  </span>
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 font-mono border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
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
      <footer className="container mx-auto px-6 py-12 border-t border-slate-800">
        <div className="max-w-4xl">
          <div className="mb-8 font-mono text-sm">
            <div className="text-slate-600">
              <span className="text-emerald-400">$</span> echo &quot;Made with ❤️ by developers, for developers&quot;
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm font-mono">
              <span className="text-slate-600">©</span> 2026 Nexoral Systems <span className="text-slate-700">|</span> MIT Licensed <span className="text-slate-700">|</span> <span className="text-emerald-400">Open Source</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/projects"
                className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
              >
                Projects
              </Link>
              <Link
                href="/founder"
                className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
              >
                Founder
              </Link>
              <a
                href="https://github.com/nexoral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
              >
                GitHub
              </a>
              <a
                href="mailto:connect@ankan.in"
                className="text-slate-400 hover:text-emerald-400 transition-colors font-mono"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
