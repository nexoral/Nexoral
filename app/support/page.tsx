import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageTitle, Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { CONTACT, SITE_CONFIG, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enterprise Solutions, Startup Credits & Funding",
  description:
    "Partner with Nexoral Systems. Commercial tiers for EdgeBalancer, enterprise SLAs, startup program engagement (Claude for Startups), and open-source sponsorship.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Enterprise Solutions & Startup Programs | Nexoral Systems",
    description:
      "Enterprise support, accelerator partnerships, and open-source sponsorship for Nexoral Systems infrastructure.",
    url: `${SITE_CONFIG.url}/support`,
  },
};

const engagementModels = [
  {
    title: "EdgeBalancer Commercial SaaS",
    description: "Paid tiers for growing organizations deploying multi-origin load balancers on Cloudflare Workers with automated failover and AI agents.",
    features: [
      "Unlimited active origins and custom domains",
      "Sub-millisecond global health probing",
      "Autonomous AI load balancer architect",
      "Priority deployment queue and zero cold starts",
    ],
    ctaText: "Launch EdgeBalancer",
    ctaHref: "https://edge.nexoral.in",
    isExternal: true,
    highlight: true,
  },
  {
    title: "Startup & Accelerator Programs",
    description: "Active engagement with technology accelerator programs, institutional credits, and infrastructure grant partners.",
    features: [
      "Anthropic Claude for Startups alignment",
      "Cloudflare for Startups worker integration",
      "AWS Activate & cloud compute partnerships",
      "Venture & institutional seed grant evaluation",
    ],
    ctaText: "Inquire for Programs",
    ctaHref: `mailto:${CONTACT.partnerships}`,
    isExternal: false,
    highlight: false,
  },
  {
    title: "Enterprise Support & SLAs",
    description: "Dedicated architectural consulting, custom AxioDB engine builds, and guaranteed response SLAs for production teams.",
    features: [
      "Custom on-premise AxioDB storage extensions",
      "Private LAN NexoralDNS topology consulting",
      "Guaranteed 24/7 security patch SLA",
      "Formal corporate invoicing & compliance sign-off",
    ],
    ctaText: "Contact Enterprise",
    ctaHref: `mailto:${CONTACT.general}`,
    isExternal: false,
    highlight: false,
  },
  {
    title: "Open-Source Foundation Sponsorship",
    description: "Community sponsorship backing the maintenance and continuous documentation of our public GitHub repositories.",
    features: [
      "Directly funds package releases & CI infrastructure",
      "Public backer recognition on GitHub READMEs",
      "Early preview of upcoming system primitives",
      "Tax-deductible GitHub Sponsors receipts",
    ],
    ctaText: "Sponsor on GitHub",
    ctaHref: SOCIALS.sponsor,
    isExternal: true,
    highlight: false,
  },
];

const faqs = [
  {
    question: "How do startup credit programs (like Claude for Startups) support Nexoral?",
    answer:
      "Credits from programs like Anthropic Claude for Startups power the intelligent agent layer in EdgeBalancer (which autonomously generates, validates, and provisions Cloudflare Worker load balancing code based on natural language specifications) and support our internal research on autonomous systems infrastructure.",
  },
  {
    question: "Is EdgeBalancer self-hosted or SaaS?",
    answer:
      "EdgeBalancer operates as a zero-friction SaaS control plane at edge.nexoral.in. It provisions and deploys load balancer Workers directly into YOUR Cloudflare account. Your traffic never proxies through our servers, ensuring 100% data sovereignty and zero latency penalty.",
  },
  {
    question: "Can companies sign commercial support contracts with Nexoral Systems?",
    answer:
      "Yes. Nexoral Systems is a registered Indian technology enterprise (Udyam MSME, Government of India). We provide commercial services agreements, custom enterprise invoices (GST compliant), and structured SLAs for enterprise deployments.",
  },
  {
    question: "Will the open-source libraries (AxioDB, ContainDB) remain free?",
    answer:
      "Yes, permanently. AxioDB, ContainDB, and NexoralDNS are licensed under OSI-approved open-source licenses (MIT and GPL-3.0) and will always be free to inspect, modify, and self-host.",
  },
];

export default function SupportPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE_CONFIG.url },
            { name: "Support", url: `${SITE_CONFIG.url}/support` },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero Section */}
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-0.5 text-xs font-mono text-blue-700 mb-5 shadow-sm">
            <span>Commercial Models &amp; Institutional Partnerships</span>
          </div>

          <PageTitle
            title="Enterprise Solutions &amp; Institutional Programs"
            description="From commercial SaaS tiers on EdgeBalancer to startup accelerator partnerships (Claude for Startups) and open-source sponsorship."
          />
        </div>
      </Section>

      {/* 4 Cards Grid - Spanning Full Width (4 columns) */}
      <Section divider>
        <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className={`glass glass-panel relative flex flex-col justify-between rounded-2xl p-6 border ${
                model.highlight
                  ? "border-blue-500/30 shadow-[0_4px_24px_rgba(37,99,235,0.08)]"
                  : "border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">{model.title}</h3>
                  {model.highlight && (
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-mono text-blue-700 font-semibold">
                      Live
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {model.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-black/[0.06] pt-4 text-xs text-muted-foreground font-mono">
                  {model.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3">
                <Button
                  className={`w-full ${
                    model.highlight
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border-slate-300 bg-white text-foreground hover:bg-slate-50"
                  }`}
                  variant={model.highlight ? "default" : "outline"}
                  render={
                    <a
                      href={model.ctaHref}
                      {...(model.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    />
                  }
                >
                  <span>{model.ctaText}</span>
                  {model.isExternal && <ArrowUpRight className="size-3.5 ml-1.5" />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Program FAQs - Full-Width 2-Column Balanced Grid */}
      <Section divider tone="panel">
        <div className="w-full grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Partnership Details
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Commercial &amp; Grant Inquiries
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Clear guidelines for enterprise teams, grant evaluators, accelerator programs, and cloud credit initiatives.
            </p>
            <div className="mt-6">
              <Button size="sm" variant="outline" className="border-slate-300 bg-white hover:bg-slate-50 text-foreground" render={<Link href="/contact" />}>
                <span>Contact Enterprise Desk</span>
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
