import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/seo/schema";
import { SITE_CONFIG, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Ankan Saha is a backend engineer from Kolkata, India, and the founder and lead maintainer of Nexoral Systems.",
  alternates: { canonical: "/founder" },
  openGraph: {
    title: "Ankan Saha — Founder of Nexoral Systems",
    description:
      "Backend engineer and open-source maintainer building free infrastructure tools.",
    url: `${SITE_CONFIG.url}/founder`,
  },
};

const experience = [
  {
    period: "Jul 2025 – Mar 2026",
    role: "Full Stack Developer",
    org: "hoichoi",
    detail:
      "Worked on Bengal's leading OTT streaming platform (10M+ users). Migrated the Next.js frontend to Cloudflare Workers and built subscription retention flows in Go.",
  },
  {
    period: "Sep 2024 – Jul 2025",
    role: "Software Engineer",
    org: "Pitangent Analytics",
    detail:
      "Built the backend and dashboard for an AI CCTV product — RTSP ingestion, frame processing for threat detection, and the deploy path to AWS.",
  },
  {
    period: "Apr 2024 – Aug 2024",
    role: "Junior Software Developer",
    org: "Excellis IT",
    detail:
      "Node.js and MQTT backend for a smart-lock system with 200+ live devices, plus CI improvements.",
  },
];

const skills = [
  { category: "AI & agents", items: ["LangChain.js", "LLM tool calling", "Agentic workflows", "MCP"] },
  { category: "Cloud & DevOps", items: ["AWS (ECS, Fargate, S3, SQS)", "Docker", "Cloudflare Workers", "CI/CD"] },
  { category: "Backend & APIs", items: ["Node.js", "TypeScript", "NestJS", "Fastify", "GraphQL", "REST"] },
  { category: "Databases & messaging", items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ"] },
  { category: "Languages & frontend", items: ["TypeScript", "Go", "SQL", "React", "Next.js"] },
  { category: "Testing & observability", items: ["Jest", "dnsperf", "Middleware.io"] },
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

      <Section className="pt-20 sm:pt-24">
        <p className="text-sm font-medium text-muted-foreground">Founder & lead maintainer</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Ankan Saha</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Backend engineer from Kolkata, India, with production experience in Node.js and Go. I
          build developer tools and infrastructure software under Nexoral Systems — from an embedded
          database to a self-hosted DNS resolver.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button render={<a href={SITE_CONFIG.founder.github} target="_blank" rel="noopener noreferrer" />}>
            GitHub
          </Button>
          <Button variant="outline" render={<a href={SITE_CONFIG.founder.url} target="_blank" rel="noopener noreferrer" />}>
            ankan.in
          </Button>
          <Button variant="outline" render={<Link href="/projects" />}>
            Projects
          </Button>
        </div>
      </Section>

      <Section bordered>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About" title="Why Nexoral exists" />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Most of the tools here started as a fix for a problem I kept running into: taking
                control of DNS on a local network, adding a database to a Node.js app without a
                native build step, deploying databases without a pile of YAML.
              </p>
              <p>
                Nexoral Systems is where those fixes become maintained, documented, open-source
                projects. The goal is simple: software that people and small teams can run
                themselves, for free.
              </p>
              <p>
                I maintain the projects in public and welcome contributions, bug reports, and
                documentation fixes.
              </p>
            </div>
          </div>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>At a glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Based in</span>
                <span className="font-medium">Kolkata, India</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Focus</span>
                <span className="text-right font-medium">
                  Backend, infrastructure, developer tooling
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Role at Nexoral</span>
                <span className="font-medium">{SITE_CONFIG.founder.role}</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "X", href: SOCIALS.x },
                  { label: "LinkedIn", href: SOCIALS.linkedin },
                  { label: "Dev.to", href: SOCIALS.devto },
                  { label: "Discord", href: SOCIALS.discord },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section bordered>
        <SectionHeading eyebrow="Experience" title="Where I have worked" />
        <ol className="space-y-6 border-l border-border pl-6">
          {experience.map((item) => (
            <li key={item.org} className="relative">
              <span className="absolute top-1.5 -left-[1.65rem] size-3 rounded-full border-2 border-background bg-primary" />
              <p className="text-xs font-medium text-muted-foreground">{item.period}</p>
              <h3 className="mt-1 font-medium">
                {item.role} · <span className="text-muted-foreground">{item.org}</span>
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered>
        <SectionHeading eyebrow="Skills" title="Tools and areas I work in" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.category} className="bg-card/50">
              <CardHeader>
                <CardTitle>{group.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
