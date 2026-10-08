import type { Metadata } from "next";
import { PageTitle, Section, SectionHeading } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
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
  title: "Support & funding",
  description:
    "How to support Nexoral Systems. Core tools stay free; sponsorship and grants fund maintenance, documentation and infrastructure.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support & funding | Nexoral Systems",
    description:
      "Sponsorship and grants fund the maintenance of free, open-source infrastructure tools.",
    url: `${SITE_CONFIG.url}/support`,
  },
};

const faqs = [
  {
    question: "What does my sponsorship pay for?",
    answer:
      "Ongoing maintenance of existing tools, documentation and install guides, security fixes, and the infrastructure needed to build and release software. It does not pay for locking features behind a paywall.",
  },
  {
    question: "Will the tools stay free?",
    answer:
      "Yes. The core tools are released under OSI-approved open-source licenses and will remain free to use and self-host.",
  },
  {
    question: "Can organisations fund or partner with Nexoral?",
    answer: `Yes. For grants, sponsorship agreements or support contracts, email us and we can provide the company details and an invoice. Write to ${CONTACT.general}.`,
  },
  {
    question: "Do you offer commercial support?",
    answer:
      "Not as a formal product yet. If you depend on a tool and need dedicated help, get in touch and we can discuss an arrangement.",
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

      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <PageTitle
          title="Keep the tools free for everyone."
          description="Nexoral Systems is funded by sponsorship and grants, not by paywalls. Financial support pays for the unglamorous work that keeps software dependable."
        />
        <div className="mt-8 flex flex-wrap gap-2.5">
          <Button
            size="lg"
            render={<a href={SOCIALS.sponsor} target="_blank" rel="noopener noreferrer" />}
          >
            Sponsor on GitHub
          </Button>
          <Button size="lg" variant="outline" render={<a href={`mailto:${CONTACT.general}`} />}>
            Contact about funding
          </Button>
        </div>
      </Section>

      <Section divider>
        <SectionHeading title="Where the money goes" className="max-w-xl" />
        <Stagger className="mt-10 grid gap-x-16 gap-y-9 sm:grid-cols-2">
          {[
            { title: "Maintenance", body: "Bug fixes, security patches, and compatibility with new runtimes." },
            { title: "Documentation", body: "Install guides, API references and troubleshooting that stay current." },
            { title: "Releases & infrastructure", body: "Build pipelines, package publishing and testing." },
            { title: "New work", body: "Time to design and ship tools that people actually need." },
          ].map((item, index) => (
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
          <SectionHeading
            title="Open about how this is funded"
            description="Today the work is largely self-funded, with sponsorship covering the rest. The intent is to reach sustainable funding while keeping every core tool free."
            className="max-w-xl"
          />
          <dl className="divide-y divide-border self-start border-y border-border">
            {[
              { term: "Individual support", value: "Sponsor through GitHub to fund maintenance directly." },
              { term: "Grants & organisations", value: `We can provide company details and an invoice. Write to ${CONTACT.general}.` },
              { term: "Non-financial help", value: "Documentation, testing and bug reports help just as much." },
            ].map((row) => (
              <div key={row.term} className="py-4">
                <dt className="text-sm font-medium">{row.term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section divider>
        <SectionHeading title="Questions about support" className="max-w-xl" />
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
