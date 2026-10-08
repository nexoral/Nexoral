import type { Metadata } from "next";
import { PageTitle, Section } from "@/components/layout/section";
import { COMPANY, COMPLIANCE, CONTACT, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexoral Systems about the products, contributions, sponsorship or funding, and about privacy and data protection.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "General & support", value: CONTACT.general, href: `mailto:${CONTACT.general}` },
  { label: "Owner", value: CONTACT.founder, href: `mailto:${CONTACT.founder}` },
  { label: "GitHub", value: "github.com/nexoral", href: SOCIALS.github },
  { label: "Sponsorship", value: "github.com/sponsors/nexoral", href: SOCIALS.sponsor },
];

const socials = [
  { label: "X", href: SOCIALS.x },
  { label: "LinkedIn", href: SOCIALS.linkedin },
  { label: "Instagram", href: SOCIALS.instagram },
  { label: "Dev.to", href: SOCIALS.devto },
  { label: "Discord", href: SOCIALS.discord },
];

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-20 lg:pt-24">
      <PageTitle
        title="Get in touch"
        description="Questions about a product, a contribution, sponsorship or a grant. Email is the fastest way to reach the company."
      />

      <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-2">
        <div className="divide-y divide-border border-y border-border">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-6 py-4"
            >
              <span className="text-sm text-muted-foreground">{channel.label}</span>
              <span className="text-sm font-medium transition-colors group-hover:text-primary">
                {channel.value}
              </span>
            </a>
          ))}
        </div>

        <div>
          <dl className="divide-y divide-border border-y border-border">
            {[
              { term: "Company", value: COMPANY.legalName },
              { term: "Owner", value: COMPANY.owner },
              { term: "Based in", value: COMPANY.location },
              { term: "Privacy & grievances", value: COMPLIANCE.email },
            ].map((row) => (
              <div key={row.term} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-muted-foreground">{row.term}</dt>
                <dd className="text-right text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map((social) => (
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

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            For privacy requests and grievances, see{" "}
            <a
              href="/data-protection"
              className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              data protection &amp; grievance
            </a>
            . The company is not affiliated with any other organisation.
          </p>
        </div>
      </div>
    </Section>
  );
}
