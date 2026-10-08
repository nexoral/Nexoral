import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, Section, SectionHeading } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/seo/schema";
import { COMPANY, SITE_CONFIG, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Owner",
  description:
    "Ankan Saha is a backend engineer from Kolkata, India, and the owner and lead maintainer of Nexoral Systems.",
  alternates: { canonical: "/founder" },
  openGraph: {
    title: "Ankan Saha, owner of Nexoral Systems",
    description: "Backend engineer and open-source maintainer building free infrastructure tools.",
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
      "Built the backend and dashboard for an AI CCTV product: RTSP ingestion, frame processing for threat detection, and the deploy path to AWS.",
  },
  {
    period: "Apr 2024 – Aug 2024",
    role: "Junior Software Developer",
    org: "Excells IT",
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
            { name: "Owner", url: `${SITE_CONFIG.url}/founder` },
          ]),
        ]}
      />

      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <p className="font-mono text-[12px] text-muted-foreground">{COMPANY.ownerRole}</p>
        <PageTitle title="Ankan Saha" className="mt-4">
          <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-muted-foreground">
            Backend engineer from Kolkata, India, with production experience in Node.js and Go. Ankan
            owns Nexoral Systems and builds everything published under it, from an embedded
            database to a self-hosted DNS resolver.
          </p>
        </PageTitle>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Button
            render={
              <a href={SITE_CONFIG.founder.github} target="_blank" rel="noopener noreferrer" />
            }
          >
            GitHub
          </Button>
          <Button
            variant="outline"
            render={<a href={SITE_CONFIG.founder.url} target="_blank" rel="noopener noreferrer" />}
          >
            ankan.in
          </Button>
          <Button variant="outline" render={<Link href="/projects" />}>
            Products
          </Button>
        </div>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading title="Why Nexoral exists" className="max-w-xl" />
            <div className="mt-5 max-w-[30rem] space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                Most of these tools started as a fix for a problem that kept coming back: adding a
                database to a Node.js app without a native build step, taking control of DNS on a
                local network, deploying databases without a pile of YAML.
              </p>
              <p>
                Nexoral Systems is where those fixes become maintained, documented, open-source
                products. The goal is simple: software that people and small teams can run
                themselves, for free.
              </p>
              <p>
                The projects are maintained in public, and contributions, bug reports and
                documentation fixes are welcome.
              </p>
            </div>
          </div>

          <dl className="divide-y divide-border self-start border-y border-border">
            {[
              { term: "Based in", value: "Kolkata, India" },
              { term: "Focus", value: "Backend, infrastructure, developer tooling" },
              { term: "Role at Nexoral", value: COMPANY.ownerRole },
              { term: "Contact", value: "connect@ankan.in" },
            ].map((row) => (
              <div key={row.term} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-muted-foreground">{row.term}</dt>
                <dd className="text-right text-sm font-medium">{row.value}</dd>
              </div>
            ))}
            <div className="flex flex-wrap gap-x-5 gap-y-2 py-4 text-sm">
              {[
                { label: "X", href: SOCIALS.x },
                { label: "LinkedIn", href: SOCIALS.linkedin },
                { label: "Dev.to", href: SOCIALS.devto },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </dl>
        </div>
      </Section>

      <Section divider>
        <SectionHeading title="Experience" className="max-w-xl" />
        <ol className="mt-10 space-y-10">
          {experience.map((item) => (
            <li key={item.org} className="grid gap-2 border-t border-border pt-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
              <p className="font-mono text-[11.5px] text-muted-foreground">{item.period}</p>
              <div>
                <h3 className="font-heading text-lg font-medium tracking-tight">
                  {item.role} <span className="text-muted-foreground">at {item.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section divider>
        <SectionHeading title="Tools and areas" className="max-w-xl" />
        <Stagger className="mt-10 grid gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <StaggerItem key={group.category} index={index}>
              <h3 className="text-sm font-medium">{group.category}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
