import Link from "next/link";

export default function FounderPage() {
  const skills = [
    { category: "Backend", items: ["Node.js", "Go", "Python", "TypeScript", "Fastify", "Express"] },
    { category: "Infrastructure", items: ["Docker", "Kubernetes", "DNS", "Networking", "Linux"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "NoSQL Design"] },
    { category: "DevOps", items: ["CI/CD", "GitHub Actions", "Automation", "Package Management"] },
  ];

  const timeline = [
    {
      year: "2024-Present",
      title: "Nexoral Systems",
      role: "Founder & Lead Developer",
      description: "Building open-source infrastructure tools and developer platforms. Focus on DNS systems, database engines, and DevOps automation.",
      highlights: ["2000+ NPM downloads", "500+ GitHub stars", "4 production-ready projects"],
    },
    {
      year: "2023-2024",
      title: "Infrastructure Development",
      role: "Independent Developer",
      description: "Deep dive into networking protocols, distributed systems, and low-level infrastructure. Started NexoralDNS project.",
      highlights: ["DNS protocol implementation", "Docker ecosystem", "System programming in Go"],
    },
    {
      year: "2022-2023",
      title: "Backend Engineering",
      role: "Software Engineer",
      description: "Full-stack development with focus on scalable backend systems, API design, and database optimization.",
      highlights: ["Microservices architecture", "REST & GraphQL APIs", "Database performance tuning"],
    },
  ];

  const projects = [
    { name: "NexoralDNS", impact: "Production DNS Infrastructure" },
    { name: "AxioDB", impact: "2000+ NPM Downloads" },
    { name: "ContainDB", impact: "Database DevOps Automation" },
    { name: "xpack", impact: "CI/CD Package Builder" },
  ];

  const interests = [
    "🌐 Networking Protocols & DNS",
    "🗄️ Database Engine Design",
    "🐳 Container Orchestration",
    "⚡ Performance Optimization",
    "🔧 Developer Tooling",
    "🚀 Infrastructure as Code",
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
              <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/founder" className="text-white">
                Founder
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Terminal Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl">
          <div className="font-mono text-sm mb-8">
            <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-400 text-xs ml-2">whoami@nexoral:~</span>
              </div>
              <div className="p-4 space-y-1">
                <div className="flex gap-2">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">cat /etc/founder.json</span>
                </div>
                <div className="text-slate-400 pl-4">
                  <div>&#123;</div>
                  <div className="pl-4">"name": <span className="text-emerald-400">"Ankan Saha"</span>,</div>
                  <div className="pl-4">"role": <span className="text-blue-400">"Software Engineer"</span>,</div>
                  <div className="pl-4">"location": <span className="text-purple-400">"India"</span>,</div>
                  <div className="pl-4">"specialization": [<span className="text-yellow-400">"Infrastructure"</span>, <span className="text-yellow-400">"Backend"</span>, <span className="text-yellow-400">"DevOps"</span>]</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            Ankan Saha
          </h1>
          <p className="text-2xl text-slate-300 mb-6 font-mono">
            Software Engineer • Infrastructure Specialist • Open Source Advocate
          </p>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            Building production-ready infrastructure tools and solving real-world technical challenges.
            From debugging DNS configurations at 3 AM to creating tools that prevent others from doing the same.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 pb-12">
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bio */}
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">// About</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Software Engineer from India with a passion for building robust infrastructure
                  and developer tools that solve real problems.
                </p>
                <p>
                  Specializing in networking protocols, distributed systems, and backend development.
                  Founder of Nexoral Systems, an open-source organization focused on creating
                  production-ready infrastructure tools.
                </p>
                <p>
                  When not coding, I'm likely diving deep into RFCs, optimizing database queries,
                  or experimenting with container orchestration strategies.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">// Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Open Source Projects</span>
                  <span className="text-2xl font-bold text-emerald-400">10+</span>
                </div>
                <div className="h-px bg-slate-700"></div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Total GitHub Stars</span>
                  <span className="text-2xl font-bold text-blue-400">1000+</span>
                </div>
                <div className="h-px bg-slate-700"></div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">NPM Downloads</span>
                  <span className="text-2xl font-bold text-purple-400">2000+</span>
                </div>
                <div className="h-px bg-slate-700"></div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Years of Experience</span>
                  <span className="text-2xl font-bold text-yellow-400">5+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400">// Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="p-5 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400 font-mono">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="text-sm text-slate-300">
                        <span className="text-slate-500">▹</span> {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400">// Career Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-slate-700 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
                  <div className="p-6 rounded-lg bg-slate-800/30 border border-slate-700">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-emerald-400">{item.year}</span>
                      <span className="text-slate-600">•</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <div className="text-blue-400 font-semibold mb-3">{item.role}</div>
                    <p className="text-slate-300 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-400 border border-slate-600"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400">// Notable Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.name}
                  href={`/projects/${project.name.toLowerCase()}`}
                  className="group p-5 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors font-mono">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-400">{project.impact}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-mono text-emerald-400">// Areas of Interest</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-slate-300"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 mb-12">
            <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">// Philosophy</h2>
            <blockquote className="text-lg text-slate-300 italic leading-relaxed">
              "The best infrastructure is invisible infrastructure. Build tools that just work,
              solve real problems, and make developers' lives easier. Open source everything,
              document thoroughly, and never compromise on performance or reliability."
            </blockquote>
          </div>

          {/* Contact */}
          <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700">
            <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">// Connect</h2>
            <p className="text-slate-300 mb-6">
              Open to collaboration on infrastructure projects, technical discussions, and open-source contributions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://github.com/AnkanSaha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/30 border border-slate-600 hover:border-emerald-500/50 transition-all"
              >
                <span className="text-2xl">💻</span>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-slate-400">@AnkanSaha</div>
                </div>
              </a>
              <a
                href="https://twitter.com/theankansaha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/30 border border-slate-600 hover:border-blue-500/50 transition-all"
              >
                <span className="text-2xl">🐦</span>
                <div>
                  <div className="font-semibold">Twitter</div>
                  <div className="text-sm text-slate-400">@theankansaha</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/theankansaha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/30 border border-slate-600 hover:border-blue-500/50 transition-all"
              >
                <span className="text-2xl">💼</span>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-slate-400">theankansaha</div>
                </div>
              </a>
              <a
                href="https://blog.ankan.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/30 border border-slate-600 hover:border-purple-500/50 transition-all"
              >
                <span className="text-2xl">📝</span>
                <div>
                  <div className="font-semibold">Blog</div>
                  <div className="text-sm text-slate-400">blog.ankan.in</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
