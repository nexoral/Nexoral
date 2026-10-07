import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT, ORG_DETAILS, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexoral Systems about the projects, contributions, sponsorship, or grants.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    { label: "General & support", value: CONTACT.general, href: `mailto:${CONTACT.general}` },
    { label: "Founder", value: CONTACT.founder, href: `mailto:${CONTACT.founder}` },
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

  return (
    <Section className="pt-20 sm:pt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about a project, a contribution, sponsorship, or a grant — email is the fastest way to reach us."
      />

      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
        <div className="space-y-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-4 transition-colors hover:border-primary/60"
            >
              <span className="text-sm text-muted-foreground">{channel.label}</span>
              <span className="font-medium">{channel.value}</span>
            </a>
          ))}
        </div>

        <Card className="bg-card/50">
          <CardContent className="space-y-4 pt-6 text-sm">
            <h3 className="font-medium">Registered details</h3>
            <p className="text-muted-foreground">
              {ORG_DETAILS.legalName} · {ORG_DETAILS.enterpriseType}
            </p>
            <p className="text-muted-foreground">Udyam No. {ORG_DETAILS.udyamNumber}</p>
            <p className="text-muted-foreground">
              {ORG_DETAILS.address.locality}, {ORG_DETAILS.address.region}{" "}
              {ORG_DETAILS.address.postalCode}, {ORG_DETAILS.address.countryName}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socials.map((social) => (
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
  );
}
