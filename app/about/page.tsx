import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Globe, Cpu, Layers, ArrowUpRight } from "lucide-react";
import { PageTitle, Section, SectionHeading } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { COMPANY, CONTACT, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Company & Corporate Structure",
  description:
    "Nexoral Systems is an independent technology enterprise incorporated in 2025 (Udyam MSME: Government of India), engineering open-core developer primitives and managed cloud infrastructure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Company & Corporate Structure | Nexoral Systems",
    description:
      "Enterprise systems engineering company incorporated in 2025. Open-core primitives and managed edge cloud infrastructure.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

const audiences = [
  {
    title: "Cloud & DevOps Teams",
    body: "Multi-origin load balancing deployed to 330+ Cloudflare edge locations in ~90 seconds via EdgeBalancer, cutting idle server overhead to zero.",
    icon: Globe,
  },
  {
    title: "Backend & Systems Engineers",
    body: "Embed ACID persistence directly into Node.js 20+ and Bun services using AxioDB with zero node-gyp native compilation bottlenecks.",
    icon: Cpu,
  },
  {
    title: "Platform & Container Teams",
    body: "Manage database container lifecycles (Postgres, MySQL, Mongo, Redis) with ContainDB without YAML bloat or fragile environments.",
    icon: Layers,
  },
  {
    title: "Network & Homelab Admins",
    body: "Isolate local network DNS, cache queries, and eliminate tracking on private hardware with NexoralDNS.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What is the legal entity and corporate standing of Nexoral Systems?",
    answer:
      "Nexoral Systems is an Indian technology company incorporated in 2025, operating as a registered enterprise under the Ministry of Micro, Small and Medium Enterprises (MSME / Udyam Registration Certificate, Government of India). It operates as an independent engineering laboratory under the leadership of Founder & Chief Systems Architect Ankan Saha, with an established roadmap for corporate scaling and venture funding.",
  },
  {
    question: "What is the business model?",
    answer:
      "Nexoral Systems operates a dual-engine model: (1) Open-Core Primitives: Foundational libraries and self-hosted tools (AxioDB, ContainDB, NexoralDNS) released under OSI licenses to drive widespread adoption; and (2) Managed Edge Cloud: Commercial SaaS control planes (EdgeBalancer) providing enterprise-grade multi-origin routing, automated health checking, AI agents, and paid subscription tiers.",
  },
  {
    question: "Are you applying for startup accelerators and credit programs?",
    answer:
      "Yes. Nexoral Systems is actively engaging with technology partner programs, including Anthropic Claude for Startups, Cloudflare for Startups, and major cloud provider credit initiatives, to scale global compute infrastructure for our edge orchestration platform.",
  },
  {
    question: "Can organizations license or procure enterprise support?",
    answer:
      "Yes. We offer commercial SLAs, dedicated edge deployment assistance, and priority security support for organizations deploying Nexoral systems in production environments. Contact our partnerships desk at partners@nexoral.in or support@nexoral.in.",
  },
  {
    question: "How does Nexoral ensure compliance with Indian data privacy regulations?",
    answer:
      "Nexoral Systems operates in strict compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and DPDP Rules, 2025. We do not run third-party advertising or covert tracking scripts. Ankan Saha is designated as the statutory Grievance Officer, with guaranteed SLA response within the statutory 90-day window under Rule 14(3).",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Company", url: `${SITE_CONFIG.url}/about` },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero Section */}
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-0.5 text-xs font-mono text-blue-700 mb-5 shadow-sm">
            <span>Corporate Structure · Incorporated 2025 · Udyam MSME</span>
          </div>

          <PageTitle
            title="Systems engineering built on open foundations and commercial execution."
            description={`${SITE_CONFIG.name} engineers production-grade developer primitives and serverless edge control planes designed for high-availability workloads.`}
          />

          <p className="mt-6 max-w-4xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Founded in 2025 by systems engineer Ankan Saha, Nexoral Systems bridges the gap
            between zero-overhead open-source developer tooling and scalable commercial cloud
            infrastructure. Our software is designed from first principles: zero unnecessary
            dependencies, zero covert telemetry, and maximum runtime efficiency.
          </p>
        </div>
      </Section>

      {/* Target Audiences Grid - Spanning Full Width (4 columns) */}
      <Section divider>
        <div className="w-full">
          <SectionHeading
            title="Engineered for Mission-Critical Infrastructure"
            description="Who deploys Nexoral Systems technologies in development and production environments."
          />

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.title}
                  index={index}
                  className="glass glass-panel rounded-2xl p-6 border border-black/[0.08] hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-4">
                      <Icon className="size-5" />
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

      {/* Governance & Corporate Factsheet - Symmetrical 2 Columns */}
      <Section divider tone="panel">
        <div className="w-full grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          <div className="glass glass-panel rounded-2xl p-7 sm:p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <SectionHeading
                title="Corporate Governance &amp; Standing"
                description="A registered entity governed with institutional rigor, transparent accountability, and direct leadership."
              />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Nexoral Systems is formally registered under the Ministry of MSME, Government of India
                ({COMPANY.incorporationStatus}). All architectural decisions, releases, and security
                advisories are directed by the founder, maintaining an unbroken chain of ownership and quality.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-wrap items-center gap-3">
              <Button size="sm" render={<Link href="/founder" />}>
                Founder &amp; Architect Profile
              </Button>
              <Button size="sm" variant="outline" className="border-slate-300 bg-white hover:bg-slate-50 text-foreground" render={<Link href="/support" />}>
                Enterprise Inquiries &amp; Credits
              </Button>
              <Button size="sm" variant="ghost" render={<Link href="/data-protection" />}>
                DPDPA 2023 Compliance →
              </Button>
            </div>
          </div>

          <div className="glass glass-panel rounded-2xl p-7 sm:p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                Corporate Registry Record
              </h3>
              <dl className="mt-5 divide-y divide-black/[0.06]">
                {[
                  { term: "Legal Name", value: COMPANY.legalName },
                  { term: "Entity Classification", value: COMPANY.incorporationStatus },
                  { term: "Registration Document", value: COMPANY.incorporationCert },
                  { term: "Incorporation Year", value: COMPANY.foundedLabel },
                  { term: "Leadership", value: `${COMPANY.owner} (${COMPANY.ownerRole})` },
                  { term: "Business Model", value: COMPANY.businessModel },
                  { term: "Registered Location", value: COMPANY.location },
                  { term: "Corporate Contact", value: CONTACT.general },
                ].map((row) => (
                  <div key={row.term} className="flex items-baseline justify-between gap-4 py-2.5 text-xs">
                    <dt className="text-muted-foreground font-mono">{row.term}</dt>
                    <dd className="text-right font-medium text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>Statutory Compliance: Active</span>
              <Link href="/contact" className="text-primary hover:underline">
                Contact Desk →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Enterprise FAQs - Full-Width 2-Column Balanced Grid */}
      <Section divider>
        <div className="w-full grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Institutional FAQ
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Key operational details for investors, enterprise clients, startup program evaluators, and open-source contributors.
            </p>
            <div className="mt-6">
              <Button size="sm" variant="outline" className="border-slate-300 bg-white hover:bg-slate-50 text-foreground" render={<Link href="/contact" />}>
                <span>Have More Questions?</span>
                <ArrowUpRight className="ml-1 size-3.5" />
              </Button>
            </div>
          </div>

          <div className="w-full">
            <Accordion className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="glass rounded-xl px-5 border border-black/[0.08]"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>
    </>
  );
}
