import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Globe, Building2, MessageSquare } from "lucide-react";
import { PageTitle, Section } from "@/components/layout/section";
import { COMPANY, COMPLIANCE, CONTACT, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Corporate Inquiries",
  description:
    "Contact Nexoral Systems for enterprise solutions, accelerator partnerships, technical support, or statutory DPDPA compliance inquiries.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Enterprise Solutions & Partnerships",
    value: CONTACT.partnerships,
    href: `mailto:${CONTACT.partnerships}`,
    description: "SaaS licensing, enterprise SLAs, startup accelerator programs, and cloud credit initiatives.",
    icon: Building2,
  },
  {
    label: "Technical Support & General Inquiries",
    value: CONTACT.general,
    href: `mailto:${CONTACT.general}`,
    description: "EdgeBalancer questions, AxioDB developer feedback, bug reports, and package releases.",
    icon: MessageSquare,
  },
  {
    label: "Founder & Lead Architect",
    value: CONTACT.founder,
    href: `mailto:${CONTACT.founder}`,
    description: "Direct channel to Ankan Saha for systems architecture consultations and investor conversations.",
    icon: Globe,
  },
  {
    label: "DPDPA 2023 Statutory Grievances",
    value: COMPLIANCE.email,
    href: `mailto:${COMPLIANCE.email}?subject=DPDPA%20Data%20Principal%20Request`,
    description: "Exercise statutory Data Principal rights: access, correction, erasure, grievance, or nomination.",
    icon: ShieldCheck,
  },
];

const socials = [
  { label: "GitHub (@nexoral)", href: SOCIALS.github },
  { label: "Founder GitHub (@AnkanSaha)", href: SOCIALS.founderGithub },
  { label: "X / Twitter", href: SOCIALS.x },
  { label: "LinkedIn", href: SOCIALS.linkedin },
  { label: "Discord Community", href: SOCIALS.discord },
];

export default function ContactPage() {
  return (
    <Section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="w-full">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-0.5 text-xs font-mono text-blue-700 mb-5 shadow-sm">
          <span>Official Corporate Channels</span>
        </div>

        <PageTitle
          title="Direct Corporate &amp; Technical Channels"
          description="Whether you are deploying EdgeBalancer at scale, exploring enterprise support, or submitting statutory DPDPA privacy inquiries."
        />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Contact Cards */}
        <div className="space-y-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                className="glass glass-panel group flex flex-col justify-between rounded-xl p-5 border border-black/[0.08] hover:border-primary/40 transition-all block"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="size-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {channel.label}
                    </span>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {channel.description}
                </p>

                <div className="mt-4 pt-3 border-t border-black/[0.06] font-mono text-xs text-primary font-medium">
                  {channel.value}
                </div>
              </a>
            );
          })}
        </div>

        {/* Corporate Registry Sidecar */}
        <div className="space-y-6">
          <div className="glass glass-panel rounded-2xl p-7 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Corporate Headquarters &amp; Registration
            </h3>

            <dl className="mt-5 divide-y divide-black/[0.06]">
              {[
                { term: "Legal Entity", value: COMPANY.legalName },
                { term: "Classification", value: COMPANY.incorporationStatus },
                { term: "Registration Document", value: COMPANY.incorporationCert },
                { term: "Incorporated", value: COMPANY.foundedLabel },
                { term: "Headquarters", value: COMPANY.location },
                { term: "Lead Officer", value: `${COMPANY.owner} (${COMPANY.ownerRole})` },
                { term: "DPDPA Grievance SLA", value: `Within ${COMPLIANCE.responseSlaDays} days (Statutory)` },
              ].map((row) => (
                <div key={row.term} className="flex items-baseline justify-between gap-4 py-3 text-xs">
                  <dt className="text-muted-foreground font-mono">{row.term}</dt>
                  <dd className="text-right font-medium text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Social and Community Grid */}
          <div className="glass rounded-xl p-6 border border-black/[0.08]">
            <h4 className="text-xs font-mono uppercase text-muted-foreground font-semibold">
              Verified Social &amp; Code Repositories
            </h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-black/[0.08] bg-slate-100/70 px-3 py-1.5 text-xs font-mono text-slate-700 hover:bg-slate-200/80 hover:text-foreground transition-all"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground/80 leading-relaxed">
              For complete details on personal data handling, see our statutory{" "}
              <Link href="/data-protection" className="text-primary hover:underline">
                DPDPA 2023 Data Protection Notice
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
