import type { Metadata } from "next";
import Link from "next/link";
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
import { CONTACT, ORG_DETAILS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Nexoral Systems is run: an independent, Udyam-registered micro-enterprise publishing free and open-source infrastructure tools. Mission, principles, and transparency.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Nexoral Systems",
    description:
      "An independent, Udyam-registered micro-enterprise publishing free and open-source infrastructure tools.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

const faqs = [
  {
    question: "Is Nexoral a nonprofit or an NGO?",
    answer:
      "No. Nexoral Systems is a registered micro-enterprise under Udyam (Govt. of India). It is not a registered charity, trust, or NGO, and we do not claim that status. What we do commit to is giving our core tools away for free under real open-source licenses.",
  },
  {
    question: "Who owns the projects, and how are they licensed?",
    answer:
      "The projects are published by Nexoral Systems on GitHub and released under OSI-approved licenses — MIT for most libraries and GPL-3.0 for the larger tools. You can use, self-host, and modify them under those terms.",
  },
  {
    question: "How is the work funded?",
    answer:
      "The work is currently funded by the maintainer and by sponsorship. The goal is to fund ongoing maintenance through GitHub Sponsors and open-source grants — never by locking core features behind a paywall.",
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
            { name: "About", url: `${SITE_CONFIG.url}/about` },
          ]),
          faqSchema(faqs),
        ]}
      />

      <Section className="pt-20 sm:pt-24">
        <SectionHeading
          eyebrow="About"
          title="An independent studio for free, open-source infrastructure"
          description="Nexoral Systems builds software that people and small teams can run themselves — without a licence fee, a sales call, or a cloud account they cannot leave."
        />
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          We focus on problems that are easy to describe and annoying to solve: taking control of a
          local network&apos;s DNS, embedding a database inside a Node.js app, deploying databases
          and building Linux packages without ceremony. Everything we ship is open source and free
          to use.
        </p>
      </Section>

      <Section bordered>
        <SectionHeading eyebrow="Who it is for" title="Built for people who run their own stack" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Developers", body: "Tools you can drop into a project and reason about." },
            { title: "Small businesses", body: "Self-hosted software without per-seat pricing." },
            { title: "Home networks", body: "Ad blocking and DNS control that stays on your LAN." },
            { title: "Schools & learners", body: "Inclusive tooling, including Bengali-language coding." },
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
              title="How Nexoral is registered and run"
              description="We would rather state the facts plainly than sound bigger than we are."
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nexoral Systems is a micro-enterprise registered under Udyam with the Government of
              India, operating in the services category. It is an independent organisation and is
              not affiliated with any other company. The projects are maintained in public on
              GitHub.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" render={<Link href="/support" />}>
                Funding & support
              </Button>
              <Button variant="outline" render={<Link href="/license" />}>
                Licenses
              </Button>
            </div>
          </div>

          <Card className="bg-card/50">
            <CardContent className="space-y-4 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Legal enterprise</span>
                <span className="text-right font-medium">{ORG_DETAILS.legalName}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Enterprise type</span>
                <span className="text-right font-medium">{ORG_DETAILS.enterpriseType}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Udyam number</span>
                <span className="text-right font-mono text-xs font-medium">
                  {ORG_DETAILS.udyamNumber}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">NIC codes</span>
                <span className="text-right font-medium">{ORG_DETAILS.nic.join(", ")}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Registered</span>
                <span className="text-right font-medium">
                  {ORG_DETAILS.address.locality}, {ORG_DETAILS.address.region}{" "}
                  {ORG_DETAILS.address.postalCode}, {ORG_DETAILS.address.countryName}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Incorporated</span>
                <span className="text-right font-medium">{ORG_DETAILS.incorporationLabel}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Contact</span>
                <span className="text-right font-medium">{CONTACT.general}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section bordered>
        <SectionHeading eyebrow="Roadmap" title="Where the work is going" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            "Harden and document the flagship tools (DNS, database, deployment).",
            "Grow the contributor base and cut the time to first contribution.",
            "Expand Bengali-language programming for regional education.",
            "Reach sustainable funding through sponsorship and grants.",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-card/50 p-4 text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
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
