import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Company",
  description:
    "Nexoral Systems is an independent software company owned and run by Ankan Saha, publishing free and open-source infrastructure tools led by AxioDB.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Company | Nexoral Systems",
    description:
      "An independent software company, owned and run by one person, publishing free and open-source infrastructure tools.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

const audiences = [
  { title: "Developers", body: "Tools you can drop into a project and reason about, with the source in front of you." },
  { title: "Small businesses", body: "Self-hosted software without per-seat pricing or a cloud account you cannot leave." },
  { title: "Home networks", body: "DNS control and filtering that stays on your own hardware." },
  { title: "Schools & learners", body: "Inclusive tooling, including a programming language taught in Bengali." },
];

const faqs = [
  {
    question: "Is Nexoral a nonprofit or an NGO?",
    answer:
      "No. Nexoral Systems is an independent software company owned and run by Ankan Saha. It is not a charity, trust or NGO. What it does commit to is releasing its core tools for free under real open-source licenses.",
  },
  {
    question: "Who owns the products, and how are they licensed?",
    answer:
      "The products are published by Nexoral Systems on GitHub and released under OSI-approved licenses (MIT for most libraries, GPL-3.0 for the larger tools). You can use, self-host and modify them under those terms.",
  },
  {
    question: "How is the work funded?",
    answer:
      "The work is currently self-funded and supported by sponsorship. The goal is to cover ongoing maintenance through GitHub Sponsors and open-source grants, never by locking core features behind a paywall.",
  },
  {
    question: "Who maintains the projects?",
    answer:
      "Ankan Saha leads development and maintenance, with contributions from the open-source community. Issues and pull requests are handled in the open on GitHub.",
  },
  {
    question: "Can I use the tools commercially?",
    answer:
      "Yes. MIT-licensed projects can be used commercially without restriction. GPL-3.0 projects can also be used commercially, provided you respect the license terms when redistributing.",
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

      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <PageTitle
          title="An independent company, owned by one person."
          description={`${SITE_CONFIG.name} builds software that people and small teams can run themselves, without a licence fee, a sales call, or a cloud account they cannot leave.`}
        />
        <p className="mt-6 max-w-[30rem] text-[0.95rem] leading-relaxed text-muted-foreground">
          The focus is on problems that are easy to describe and annoying to solve: adding a
          database to a Node.js app without a native build step, taking control of a local
          network&apos;s DNS, deploying databases, and building Linux packages without ceremony.
          Everything published here is open source and free to use.
        </p>
      </Section>

      <Section divider>
        <SectionHeading title="Who it is for" className="max-w-xl" />
        <Stagger className="mt-10 grid gap-x-16 gap-y-9 sm:grid-cols-2">
          {audiences.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <h3 className="font-heading text-lg font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section divider tone="panel">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              title="How the company is run"
              description="Nexoral is deliberately small. One owner makes the decisions, the source is public, and there is no gap between who builds the software and who answers for it."
              className="max-w-xl"
            />
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/founder"
                className="text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              >
                About the owner
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Funding & support
              </Link>
              <Link
                href="/license"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Licenses
              </Link>
            </div>
          </div>

          <dl className="divide-y divide-border border-y border-border">
            {[
              { term: "Company", value: COMPANY.legalName },
              { term: "Owner", value: COMPANY.owner },
              { term: "Founded", value: COMPANY.foundedLabel },
              { term: "Based in", value: COMPANY.location },
              { term: "Contact", value: CONTACT.general },
            ].map((row) => (
              <div key={row.term} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-muted-foreground">{row.term}</dt>
                <dd className="text-right text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section divider>
        <SectionHeading title="Where the work is going" className="max-w-xl" />
        <ul className="mt-8 grid gap-x-16 gap-y-4 sm:grid-cols-2">
          {[
            "Harden and document the flagship tools: database, DNS and deployment.",
            "Grow the contributor base and shorten the path to a first contribution.",
            "Expand Bengali-language programming for regional education.",
            "Reach sustainable funding through sponsorship and grants.",
          ].map((item) => (
            <li key={item} className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section divider>
        <SectionHeading title="Common questions" className="max-w-xl" />
        <Accordion className="mt-8 max-w-3xl">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
