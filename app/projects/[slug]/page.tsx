/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { notFound } from "next/navigation";

const projectsData = {
  nexoraldns: {
    name: "NexoralDNS",
    tagline: "Production-Ready DNS Infrastructure for Modern Networks",
    description: "A Docker-based smart DNS server designed for LAN environments with advanced features including custom domain management, real-time traffic monitoring, security filtering, and a comprehensive web-based management interface.",
    version: "v1.2.0",
    status: "Active Development",
    license: "MIT",
    github: "https://github.com/nexoral/NexoralDNS",
    tech: ["Node.js", "TypeScript", "Docker", "Fastify", "Next.js", "DNS Protocol"],
    features: [
      {
        title: "Custom Domain Management",
        description: "Configure and manage custom domains for your local network with ease",
        icon: "🌐",
      },
      {
        title: "Real-time Monitoring",
        description: "Track DNS queries, response times, and traffic patterns in real-time",
        icon: "📊",
      },
      {
        title: "Security Filtering",
        description: "Built-in ad-blocking, malware protection, and content filtering",
        icon: "🛡️",
      },
      {
        title: "Web Interface",
        description: "Modern dashboard for complete DNS server management",
        icon: "💻",
      },
    ],
    installation: `# Pull the Docker image
docker pull nexoral/nexoraldns:latest

# Run the DNS server
docker run -d \\
  --name nexoraldns \\
  -p 53:53/udp \\
  -p 53:53/tcp \\
  -p 3000:3000 \\
  nexoral/nexoraldns:latest

# Access the web interface at http://localhost:3000`,
    usageExample: `# Configure custom domain
curl -X POST http://localhost:3000/api/domains \\
  -H "Content-Type: application/json" \\
  -d '{
    "domain": "myapp.local",
    "ip": "192.168.1.100"
  }'

# Query your DNS server
dig @localhost myapp.local`,
    metrics: [
      { label: "Stars", value: "500+", color: "emerald" },
      { label: "Forks", value: "50+", color: "blue" },
      { label: "Docker Pulls", value: "10K+", color: "purple" },
    ],
  },
  axiodb: {
    name: "AxioDB",
    tagline: "Lightweight NoSQL Database for Node.js",
    description: "A pure JavaScript NoSQL database engine with MongoDB-style query syntax, AES-256 encryption, zero native dependencies, and worker thread support for high performance data operations.",
    version: "v2.5.1",
    status: "Production Ready",
    license: "MIT",
    github: "https://github.com/nexoral/AxioDB",
    tech: ["Node.js", "TypeScript", "Worker Threads", "Crypto", "NPM"],
    features: [
      {
        title: "MongoDB-Style Queries",
        description: "Familiar query syntax with support for complex operations",
        icon: "🔍",
      },
      {
        title: "AES-256 Encryption",
        description: "Built-in encryption for sensitive data at rest",
        icon: "🔐",
      },
      {
        title: "Zero Dependencies",
        description: "No native modules, pure JavaScript implementation",
        icon: "📦",
      },
      {
        title: "Worker Threads",
        description: "Async operations using Node.js worker threads for performance",
        icon: "⚡",
      },
    ],
    installation: `# Install via NPM
npm install axiodb

# Or using Yarn
yarn add axiodb`,
    usageExample: `import { AxioDB } from 'axiodb';

// Initialize database
const db = new AxioDB({
  path: './data',
  encryption: true,
  encryptionKey: 'your-secret-key'
});

// Insert documents
await db.collection('users').insert({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

// Query with MongoDB-style syntax
const users = await db.collection('users').find({
  age: { $gte: 18 }
});

// Update documents
await db.collection('users').update(
  { name: 'John Doe' },
  { $set: { age: 31 } }
);`,
    metrics: [
      { label: "NPM Downloads", value: "2K+", color: "emerald" },
      { label: "Weekly Downloads", value: "150+", color: "blue" },
      { label: "GitHub Stars", value: "300+", color: "purple" },
    ],
  },
  containdb: {
    name: "ContainDB",
    tagline: "Database DevOps Automation Tool",
    description: "A CLI tool that automates the setup and management of containerized databases. One-click deployment for MongoDB, Redis, MySQL, PostgreSQL with integrated GUI management tools.",
    version: "v1.0.3",
    status: "Active Development",
    license: "Apache 2.0",
    github: "https://github.com/nexoral/ContainDB",
    tech: ["Go", "Docker", "CLI", "Cobra", "Docker Compose"],
    features: [
      {
        title: "Multi-Database Support",
        description: "MongoDB, Redis, MySQL, PostgreSQL, and more out of the box",
        icon: "🗄️",
      },
      {
        title: "GUI Tools Included",
        description: "Automatic setup of Mongo Express, phpMyAdmin, Redis Commander",
        icon: "🖥️",
      },
      {
        title: "One Command Deploy",
        description: "Start complete database environments with a single command",
        icon: "🚀",
      },
      {
        title: "Environment Profiles",
        description: "Preconfigured dev, staging, and production profiles",
        icon: "⚙️",
      },
    ],
    installation: `# Install using Go
go install github.com/nexoral/containdb@latest

# Or download binary from releases
curl -L https://github.com/nexoral/containdb/releases/latest/download/containdb-linux-amd64 -o containdb
chmod +x containdb
sudo mv containdb /usr/local/bin/`,
    usageExample: `# Start MongoDB with Mongo Express GUI
containdb start mongodb --with-gui

# Start PostgreSQL with custom configuration
containdb start postgres \\
  --port 5432 \\
  --password mypassword \\
  --database myapp

# List all running database containers
containdb list

# Stop and remove containers
containdb stop mongodb`,
    metrics: [
      { label: "CLI Downloads", value: "1K+", color: "emerald" },
      { label: "GitHub Stars", value: "200+", color: "blue" },
      { label: "Supported DBs", value: "8", color: "purple" },
    ],
  },
  xpack: {
    name: "xpack",
    tagline: "Universal Linux Package Builder",
    description: "A Go-based tool that converts binary executables into distributable Linux packages (.deb, .rpm, tar.gz). Automates native package creation for CI/CD pipelines with minimal configuration.",
    version: "v0.9.2",
    status: "Beta",
    license: "MIT",
    github: "https://github.com/nexoral/xpack",
    tech: ["Go", "Linux Packaging", "Debian", "RPM", "CI/CD"],
    features: [
      {
        title: "Multi-Format Support",
        description: "Build .deb, .rpm, and tar.gz packages from single binary",
        icon: "📦",
      },
      {
        title: "CI/CD Ready",
        description: "Integrate seamlessly with GitHub Actions, GitLab CI, Jenkins",
        icon: "🔄",
      },
      {
        title: "Minimal Config",
        description: "Simple YAML configuration for complex package builds",
        icon: "📝",
      },
      {
        title: "Cross-Platform",
        description: "Build packages for different Linux distributions",
        icon: "🐧",
      },
    ],
    installation: `# Install using Go
go install github.com/nexoral/xpack@latest

# Or download from releases
wget https://github.com/nexoral/xpack/releases/latest/download/xpack-linux-amd64
chmod +x xpack-linux-amd64
sudo mv xpack-linux-amd64 /usr/local/bin/xpack`,
    usageExample: `# Create xpack.yaml configuration
cat > xpack.yaml << EOF
name: myapp
version: 1.0.0
arch: amd64
maintainer: you@example.com
description: My awesome application
binary: ./build/myapp
install_path: /usr/bin
EOF

# Build all package formats
xpack build --all

# Build specific format
xpack build --deb
xpack build --rpm

# Output packages
ls dist/
# myapp_1.0.0_amd64.deb
# myapp-1.0.0-1.x86_64.rpm
# myapp-1.0.0-linux-amd64.tar.gz`,
    metrics: [
      { label: "GitHub Stars", value: "150+", color: "emerald" },
      { label: "Packages Built", value: "5K+", color: "blue" },
      { label: "Distros Supported", value: "12+", color: "purple" },
    ],
  },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

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
              <Link href="/founder" className="text-slate-400 hover:text-white transition-colors">
                Founder
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm font-mono text-slate-500">
            <Link href="/projects" className="hover:text-emerald-400 transition-colors">
              projects
            </Link>
            <span>/</span>
            <span className="text-slate-300">{slug}</span>
          </div>

          {/* Title */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent font-mono">
              {project.name}
            </h1>
            <p className="text-2xl text-slate-300 mb-6">{project.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-mono">
                {project.version}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-sm font-mono">
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-sm font-mono">
                {project.license}
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center"
              >
                <div className={`text-2xl font-bold text-${metric.color}-400 mb-1`}>
                  {metric.value}
                </div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
            >
              View on GitHub →
            </a>
            <a
              href={`${project.github}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 hover:border-emerald-400 rounded-lg transition-colors"
            >
              Documentation
            </a>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">// Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-200 border border-slate-700 font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-mono text-emerald-400">// Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-5 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Installation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">// Installation</h2>
            <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-400 text-xs ml-2">bash</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono">{project.installation}</code>
              </pre>
            </div>
          </div>

          {/* Usage */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-mono text-emerald-400">// Usage Example</h2>
            <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-400 text-xs ml-2">code</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono">{project.usageExample}</code>
              </pre>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30">
            <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
            <p className="text-slate-400 mb-4">
              Check out the full documentation and examples on GitHub
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "nexoraldns" },
    { slug: "axiodb" },
    { slug: "containdb" },
    { slug: "xpack" },
  ];
}
