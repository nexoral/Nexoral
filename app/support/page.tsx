import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
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
    "How to support Nexoral Systems. Core tools stay free — sponsorship and grants fund maintenance, documentation, and infrastructure.",
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
    answer:
      "Yes. For grants, sponsorship agreements, or support contracts, email us and we can provide the registration details and an invoice. Write to " +
      CONTACT.general +
      ".",
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

      <Section className="pt-20 sm:pt-24">
        <SectionHeading
          eyebrow="Support & funding"
          title="Keep the tools free for everyone"
          description="Nexoral Systems is funded by sponsorship and grants, not by paywalls. Financial support pays for the unglamorous work that keeps software dependable."
        />
        <div className="flex flex-wrap gap-3">
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

      <Section bordered>
        <SectionHeading eyebrow="What funding supports" title="Where the money goes" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Maintenance", body: "Bug fixes, security patches, and compatibility with new runtimes." },
            { title: "Documentation", body: "Install guides, API references, and troubleshooting that stay current." },
            { title: "Releases & infra", body: "Build pipelines, package publishing, and testing." },
            { title: "New work", body: "Time to design and ship tools that people actually need." },
          ].map((item) => (
            <Card key={item.title} className="bg-card/50">
              <CardContent className="pt-6">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section bordered>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Transparency"
              title="Open about how this is funded"
              description="Today the work is largely self-funded, with sponsorship covering the rest. The intent is to reach sustainable funding while keeping every core tool free."
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you would like more detail before committing, email us and we will share the
              current state of the project and how support is used.
            </p>
          </div>
          <Card className="bg-card/50">
            <CardContent className="space-y-4 pt-6 text-sm">
              <div>
                <h3 className="font-medium">Individual support</h3>
                <p className="mt-1 text-muted-foreground">
                  Sponsor through GitHub to fund maintenance directly.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Grants & organisations</h3>
                <p className="mt-1 text-muted-foreground">
                  We can provide registration details and an invoice. Write to {CONTACT.general}.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Non-financial help</h3>
                <p className="mt-1 text-muted-foreground">
                  Documentation, testing, and bug reports help just as much.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section bordered>
        <SectionHeading eyebrow="FAQ" title="Questions about support" />
        <Accordion className="max-w-3xl">
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
