import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, Terminal, Lock, Globe, Server, Cpu } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { FactStrip } from "@/components/site/stat";
import { ProductCatalogue } from "@/components/site/product-row";
import { Button } from "@/components/ui/button";
import { getOrgStats, getProjectViews } from "@/lib/projects/service";
import { COMPANY, SITE_CONFIG, SOCIALS } from "@/lib/constants";
import { formatCompact } from "@/lib/npm/fetchers";

export const revalidate = 43200;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const aims = [
  {
    title: "Self-Hosted by Default",
    body: "You should own your infrastructure. We build software that runs cleanly on your own servers, local machines, or edge networks — with zero mandatory cloud accounts or vendor lock-in.",
    icon: Server,
  },
  {
    title: "Zero Dependency Headaches",
    body: "No complicated C++ native build tools (node-gyp), fragile bindings, or giant runtime overhead. Everything we ship is designed to install in seconds and stay fast.",
    icon: Zap,
  },
  {
    title: "Fast & Lightweight",
    body: "Every tool is built from first principles for minimal memory footprints, instant startup times, and zero idle compute costs under real production workloads.",
    icon: Cpu,
  },
  {
    title: "Honest Software & Privacy",
    body: "Zero telemetry tracking in our self-hosted software, minimal attack surfaces, and strict adherence to India's DPDPA 2023 data protection standards.",
    icon: ShieldCheck,
  },
];

const pillars = [
  {
    title: "Zero Native Dependencies",
    body: "Eliminate node-gyp and native build friction entirely. AxioDB runs on pure TypeScript across Node.js 20+ and Bun with zero native overhead.",
    icon: Terminal,
  },
  {
    title: "Serverless Edge Routing",
    body: "Deploy multi-origin load balancers directly to Cloudflare's 330+ edge locations in ~90 seconds via EdgeBalancer. Zero idle compute costs.",
    icon: Zap,
  },
  {
    title: "Self-Hosted LAN Privacy",
    body: "ContainDB and NexoralDNS provide complete local network autonomy: zero telemetry, zero mandatory cloud accounts, and full internal DNS control.",
    icon: ShieldCheck,
  },
  {
    title: "Strict DPDPA 2023 Compliance",
    body: "Engineered under India's Digital Personal Data Protection Act, 2023. Zero third-party tracking, explicit consent, and guaranteed Data Principal rights.",
    icon: Lock,
  },
];

export default async function Home() {
  const [stats, projects] = await Promise.all([getOrgStats(), getProjectViews()]);

  return (
    <>
      {/* Expansive Full-Width Hero Section */}
      <Section className="pt-16 sm:pt-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12 xl:gap-16 items-center">
          <Reveal pop>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-mono text-blue-700 mb-6 shadow-sm">
              <span className="size-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Independent Systems Engineering Laboratory</span>
            </div>

            <h1 className="font-heading text-[2.75rem] sm:text-[3.75rem] lg:text-[4.25rem] leading-[1.06] font-bold tracking-tight text-foreground text-balance">
              Software Tools &amp;{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Cloud Infrastructure
              </span>{" "}
              Built for Developers.
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground font-normal">
              {SITE_CONFIG.name} is an independent technology company. We build open-source
              databases, developer tools, and cloud edge infrastructure. Our aim is to make
              tools you can run yourself — simple, fast, and without vendor lock-in.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium shadow-sm"
                render={<Link href="/projects" />}
              >
                <span>Explore 4 Core Products</span>
                <ArrowUpRight className="ml-1 size-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 bg-white hover:bg-slate-50 text-foreground"
                render={<Link href="/about" />}
              >
                About Nexoral
              </Button>

              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-muted-foreground transition-colors hover:text-foreground pl-1"
              >
                github.com/{SITE_CONFIG.shortName.toLowerCase()} ↗
              </a>
            </div>
          </Reveal>

          {/* Symmetrical Systems Topology Panel */}
          <Reveal delay={0.15}>
            <div className="glass glass-panel relative overflow-hidden rounded-2xl border border-black/[0.08] p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    Active Architecture
                  </span>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  4 Core Primitives
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  {
                    name: "AxioDB",
                    tag: "Pure TypeScript ACID",
                    desc: "Embedded document database with zero C++ native overhead.",
                    badge: "27k+ dl/yr",
                    href: "/projects/axiodb",
                  },
                  {
                    name: "EdgeBalancer",
                    tag: "Cloudflare Edge Router",
                    desc: "Autonomous multi-origin worker load balancer in ~90 seconds.",
                    badge: "Paid SaaS",
                    href: "/projects/edgebalancer",
                  },
                  {
                    name: "ContainDB",
                    tag: "Isolated DB Containers",
                    desc: "Self-hosted local containerized databases for rapid testing.",
                    badge: "MIT Engine",
                    href: "/projects/containdb",
                  },
                  {
                    name: "NexoralDNS",
                    tag: "LAN DNS Resolution",
                    desc: "Private local network DNS authority with zero external telemetry.",
                    badge: "GPL-3.0",
                    href: "/projects/nexoraldns",
                  },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group block rounded-xl border border-black/[0.05] bg-white/70 p-3 transition-all hover:border-primary/40 hover:bg-white hover:shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground">
                          · {item.tag}
                        </span>
                      </div>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-[10.5px] font-mono font-medium text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="text-emerald-700 flex items-center gap-1.5 font-medium">
                  <span className="size-1.5 rounded-full bg-emerald-600" />
                  Dual-Engine Architecture
                </span>
                <span className="text-slate-500">$ npm i axiodb</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Fact Strip Spanning Full Width */}
        <Reveal className="mt-12 sm:mt-16">
          <FactStrip
            facts={[
              { value: `${projects.length}`, label: "Core Infrastructure Systems" },
              { value: `${formatCompact(stats.totalNpmYear)}+`, label: "AxioDB Downloads / Year" },
              { value: "110+", label: "Edge Platform Accounts" },
              { value: "100%", label: "Self-Hostable Foundations" },
            ]}
          />
        </Reveal>
      </Section>

      {/* Our Aim Section - Full-Width Symmetrical Grid */}
      <Section divider tone="panel">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Our Aim
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Software Built for Ownership &amp; Speed
              </h2>
              <p className="mt-2 max-w-4xl text-sm text-muted-foreground">
                We believe developers should have full control over their stack: tools that install in seconds, run fast in production, and never force you into vendor lock-in.
              </p>
            </div>
            <Link
              href="/about"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Read Our Full Story</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aims.map((aim, index) => {
              const Icon = aim.icon;
              return (
                <StaggerItem
                  key={aim.title}
                  index={index}
                  className="glass glass-panel rounded-2xl p-6 border border-black/[0.08] hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground tracking-tight">
                      {aim.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {aim.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Section>

      {/* 4 Core Products Showcase - Symmetrical 2x2 Full Width Grid */}
      <Section divider>
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Core Systems
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Production Infrastructure
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                Nexoral Systems curates 4 purpose-built technologies spanning embedded databases, edge load balancing, container tooling, and local DNS.
              </p>
            </div>

            <a
              href={SITE_CONFIG.orgGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              <span>View GitHub Organization</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <ProductCatalogue projects={projects} />
        </div>
      </Section>

      {/* Engineering Architecture & Pillars */}
      <Section divider tone="panel">
        <div className="w-full">
          <div className="mb-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Engineering Principles
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Built for Extreme Reliability
            </h2>
            <p className="mt-2 max-w-4xl text-sm text-muted-foreground">
              Architectural standards applied across all Nexoral platforms to guarantee security, performance, and vendor independence.
            </p>
          </div>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.title}
                  index={index}
                  className="glass rounded-xl p-6 border border-black/[0.08] hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 mb-3.5">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Section>

      {/* Corporate Overview & Registry - Balanced 2-Column Full Width Grid */}
      <Section divider>
        <div className="w-full grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          <div className="glass glass-panel rounded-2xl p-7 sm:p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Company &amp; Governance
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Engineering Organization
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {SITE_CONFIG.name} operates as an independent systems technology enterprise. Founded and
                directed by systems architect {COMPANY.owner}, the company combines the speed of solo
                systems engineering with the durability of open-source libraries and commercial cloud
                platforms.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We are actively expanding compute capacity through technology partnerships and
                startup accelerator initiatives (including Anthropic Claude for Startups and cloud
                infrastructure credits) to power distributed developer tools.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-wrap items-center gap-3">
              <Button size="sm" render={<Link href="/about" />}>
                About Company
              </Button>
              <Button size="sm" variant="outline" className="border-slate-300 bg-white hover:bg-slate-50 text-foreground" render={<Link href="/founder" />}>
                Founder Profile
              </Button>
              <Button size="sm" variant="ghost" render={<Link href="/support" />}>
                Enterprise &amp; Credits →
              </Button>
            </div>
          </div>

          <div className="glass glass-panel rounded-2xl p-7 sm:p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                Corporate Registry Record
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Operating Structure
              </h3>
              <dl className="mt-5 divide-y divide-black/[0.06]">
                {[
                  { term: "Legal Entity", value: COMPANY.legalName },
                  { term: "Status", value: COMPANY.incorporationStatus },
                  { term: "Incorporated", value: COMPANY.foundedLabel },
                  { term: "Leadership", value: `${COMPANY.owner} (${COMPANY.ownerRole})` },
                  { term: "Business Model", value: COMPANY.businessModel },
                  { term: "Core Products", value: "4 (AxioDB, EdgeBalancer, ContainDB, NexoralDNS)" },
                  { term: "Compliance", value: "DPDPA 2023 Statutory Adherence" },
                  { term: "Headquarters", value: COMPANY.location },
                ].map((row) => (
                  <div key={row.term} className="flex items-baseline justify-between gap-4 py-2.5 text-xs">
                    <dt className="text-muted-foreground font-mono">{row.term}</dt>
                    <dd className="text-right font-medium text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>Government of India Registered</span>
              <Link href="/about" className="text-primary hover:underline">
                View Full Dossier →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Enterprise & Claude for Startups Banner */}
      <Section divider>
        <Reveal className="glass glass-panel relative overflow-hidden rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-[0_10px_36px_rgba(0,0,0,0.05)] w-full">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1 max-w-4xl lg:max-w-5xl">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold uppercase">
                <Globe className="size-3.5" />
                <span>Enterprise Inquiries &amp; Startup Programs</span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Partner with Nexoral Systems
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We work directly with engineering organizations needing custom EdgeBalancer deployments,
                high-availability SLAs, or on-premise AxioDB integrations. We actively engage with
                accelerator programs including Anthropic Claude for Startups and cloud partners.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium"
                render={<Link href="/contact" />}
              >
                Contact Enterprise Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 bg-white text-foreground hover:bg-slate-50"
                render={<a href={SOCIALS.sponsor} target="_blank" rel="noopener noreferrer" />}
              >
                Sponsor on GitHub
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
