import type { Metadata } from "next";
import { Globe, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/site/icons";
import { PageTitle, Section, SectionHeading } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/seo/schema";
import { COMPANY, SITE_CONFIG, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Founder & Chief Systems Architect — Ankan Saha",
  description:
    "Ankan Saha is the Founder & Chief Systems Architect of Nexoral Systems. Systems engineer with proven track record in distributed backends, Cloudflare Workers, and high-concurrency Node.js/Go runtimes.",
  alternates: { canonical: "/founder" },
  openGraph: {
    title: "Ankan Saha — Founder & Chief Systems Architect | Nexoral Systems",
    description: "Systems engineer and founder building high-performance edge and embedded data infrastructure.",
    url: `${SITE_CONFIG.url}/founder`,
  },
};

const experience = [
  {
    period: "Jul 2025 – Mar 2026",
    role: "Full Stack Systems Engineer",
    org: "hoichoi",
    detail:
      "Engineered core infrastructure for Bengal's flagship OTT streaming platform serving 10M+ users. Led migration of Next.js services onto Cloudflare Workers edge runtime and built high-concurrency subscription retention microservices in Go.",
  },
  {
    period: "Sep 2024 – Jul 2025",
    role: "Backend & Systems Engineer",
    org: "Pitangent Analytics",
    detail:
      "Architected backend ingestion and analytics dashboard for AI-powered video surveillance systems: RTSP live streaming ingestion, high-throughput frame processing for computer vision threat detection, and containerized deployment pipelines on AWS.",
  },
  {
    period: "Apr 2024 – Aug 2024",
    role: "Junior Systems Developer",
    org: "Excells IT",
    detail:
      "Developed high-reliability Node.js and MQTT IoT telemetry backend managing 200+ connected smart-lock hardware devices, with automated CI/CD integration.",
  },
];

const competencies = [
  { category: "Edge & Cloud Systems", items: ["Cloudflare Workers", "AWS (ECS, Fargate, S3)", "Docker", "Edge Networking", "Distributed Routing"] },
  { category: "Languages & Runtimes", items: ["Go (Golang)", "TypeScript / JavaScript", "Node.js 20+", "Bun", "SQL"] },
  { category: "Data & Storage Engines", items: ["PostgreSQL", "MongoDB", "Redis", "AxioDB Architecture", "ACID File Systems"] },
  { category: "AI & Autonomous Agents", items: ["Agentic Workflows", "LLM Tool Calling", "LangChain.js", "Model Context Protocol (MCP)"] },
  { category: "Performance & Security", items: ["Sub-ms Edge Latency", "DPDPA 2023 Compliance", "Encryption at Rest/Transit", "Load Testing"] },
];

export default function FounderPage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Founder", url: `${SITE_CONFIG.url}/founder` },
          ]),
        ]}
      />

      {/* Hero Section */}
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-0.5 text-xs font-mono text-blue-700 mb-5 shadow-sm">
              <span>Leadership · Founder &amp; Chief Systems Architect</span>
            </div>

            <PageTitle title="Ankan Saha" className="mt-2">
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-muted-foreground font-normal">
                Systems engineer and software architect based in Kolkata, India. Founder of Nexoral Systems,
                creator of AxioDB (27,000+ npm downloads/year), and architect of EdgeBalancer (multi-origin
                Cloudflare Worker load balancer SaaS).
              </p>
            </PageTitle>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                render={<a href={SITE_CONFIG.founder.github} target="_blank" rel="noopener noreferrer" />}
              >
                <GithubIcon className="size-4 mr-2" />
                GitHub (@AnkanSaha)
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 bg-white text-foreground hover:bg-slate-50"
                render={<a href={SITE_CONFIG.founder.url} target="_blank" rel="noopener noreferrer" />}
              >
                <Globe className="size-4 mr-2" />
                ankan.in
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 bg-white text-foreground hover:bg-slate-50"
                render={<a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" />}
              >
                <LinkedInIcon className="size-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="ghost"
                render={<a href={`mailto:${COMPANY.owner}@nexoral.in`} />}
              >
                <Mail className="size-4 mr-2" />
                Direct Contact
              </Button>
            </div>
          </div>

          {/* Architect Profile Dossier Card */}
          <div className="glass glass-panel rounded-2xl p-7 border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                Architect Dossier
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Verified Identity
              </span>
            </div>

            <dl className="mt-5 divide-y divide-black/[0.06]">
              {[
                { term: "Principal Architect", value: COMPANY.owner },
                { term: "Executive Title", value: COMPANY.ownerRole },
                { term: "Enterprise", value: COMPANY.legalName },
                { term: "Base of Operations", value: COMPANY.location },
                { term: "Primary Systems", value: "AxioDB · EdgeBalancer" },
                { term: "Core Philosophy", value: "Zero Native Overheads & Autonomous Edge" },
              ].map((row) => (
                <div key={row.term} className="flex items-baseline justify-between gap-4 py-2.5 text-xs">
                  <dt className="text-muted-foreground font-mono">{row.term}</dt>
                  <dd className="text-right font-medium text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Personal Site: ankan.in</span>
              <span className="text-primary">@AnkanSaha</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Production Engineering Pedigree - Full-Width 2-Column Balanced Grid */}
      <Section divider>
        <div className="w-full grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Track Record
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Production Systems Experience
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Proven engineering track record across high-throughput backend services, distributed video analytics, and edge runtimes.
            </p>
          </div>

          <div className="w-full space-y-6">
            {experience.map((item) => (
              <div
                key={item.org}
                className="glass glass-panel rounded-2xl p-6 sm:p-7 border border-black/[0.08] hover:border-primary/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {item.role} <span className="text-primary font-normal">@ {item.org}</span>
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Technical Competencies - Full Width Grid */}
      <Section divider tone="panel">
        <div className="w-full">
          <SectionHeading
            title="Technical Competencies &amp; Systems Stack"
            description="Core specializations spanning edge network orchestration, embedded storage engines, and agentic workflows."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 w-full">
            {competencies.map((comp) => (
              <div
                key={comp.category}
                className="glass rounded-xl p-5 border border-black/[0.08] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-mono font-semibold uppercase text-primary tracking-wider">
                    {comp.category}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground font-mono">
                    {comp.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="size-1 rounded-full bg-primary" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy & Venture Vision - Symmetrical 2 Columns */}
      <Section divider>
        <div className="w-full grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          <div className="glass glass-panel rounded-2xl p-7 sm:p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <SectionHeading
                title="Architectural Philosophy &amp; Vision"
                description="Building infrastructure that solves real engineering pain points without vendor lock-in."
              />
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Infrastructure tooling in modern software has become needlessly bloated. Developers spend
                  hours configuring Docker Compose files, debugging C++ build failures in node-gyp, or
                  paying exorbitant monthly fees for idle AWS Application Load Balancers.
                </p>
                <p>
                  Nexoral Systems was established to engineer pragmatic alternatives: zero-dependency
                  embedded databases (AxioDB), instant Go container CLIs (ContainDB), and edge-native
                  serverless balancers (EdgeBalancer) that execute inside Cloudflare&apos;s global network
                  with zero idle server costs.
                </p>
                <p>
                  Every product is designed with institutional discipline, rock-solid security safeguards,
                  and respect for user data privacy under India&apos;s DPDPA 2023.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] text-xs font-mono text-muted-foreground">
              <span>Philosophy: Lightweight · Self-Hostable · Zero Lock-In</span>
            </div>
          </div>

          <div className="glass glass-panel rounded-2xl p-7 sm:p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                Founder Dossier
              </h3>
              <dl className="mt-5 divide-y divide-black/[0.06]">
                {[
                  { term: "Name", value: COMPANY.owner },
                  { term: "Role", value: COMPANY.ownerRole },
                  { term: "Location", value: COMPANY.location },
                  { term: "Engineering Focus", value: "Distributed Edge, Systems & Databases" },
                  { term: "Open Source Traction", value: "27,000+ npm downloads/yr (AxioDB)" },
                  { term: "Production SaaS", value: "EdgeBalancer (Active Paid Traction)" },
                  { term: "Direct Inquiries", value: "connect@ankan.in" },
                ].map((row) => (
                  <div key={row.term} className="flex items-baseline justify-between gap-4 py-2.5 text-xs">
                    <dt className="text-muted-foreground font-mono">{row.term}</dt>
                    <dd className="text-right font-medium text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>Direct Founder Channel</span>
              <a href="mailto:connect@ankan.in" className="text-primary hover:underline">
                connect@ankan.in →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
