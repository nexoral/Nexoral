import Link from "next/link";
import { COMPANY, COMPLIANCE, CONTACT, FOOTER_LINKS, SITE_CONFIG, SOCIALS } from "@/lib/constants";
import { NexoralMark, Wordmark } from "@/components/site/mark";

const columns = [
  { heading: "Products", links: FOOTER_LINKS.products },
  { heading: "Company", links: FOOTER_LINKS.company },
  { heading: "Legal", links: FOOTER_LINKS.legal },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/[0.08] bg-slate-50/90 text-slate-600 backdrop-blur-md">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_CONFIG.name} — home`}>
              <NexoralMark className="size-6 text-primary drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {COMPANY.legalName} is an enterprise systems technology company incorporated in {COMPANY.foundedLabel} ({COMPANY.incorporationStatus}).
              Engineering high-performance developer primitives and serverless edge control planes.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground/80 font-mono">
              <span>Jurisdiction: {COMPANY.location}</span>
              <span>Model: {COMPANY.businessModel}</span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {[
                { href: SOCIALS.github, label: "GitHub", external: true },
                { href: SOCIALS.edgeBalancer, label: "EdgeBalancer", external: true },
                { href: SOCIALS.sponsor, label: "GitHub Sponsors", external: true },
                { href: `mailto:${CONTACT.general}`, label: CONTACT.general, external: false },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">{column.heading}</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-black/[0.06] bg-slate-100/70">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COMPANY.foundedLabel}–{year} {COMPANY.legalName}. {COMPANY.incorporationStatus}. All rights reserved.
          </p>
          <p className="sm:text-right">
            DPDPA 2023 Statutory Compliance · Grievance Officer:{" "}
            <a href={`mailto:${COMPLIANCE.email}`} className="text-primary hover:underline">
              {COMPLIANCE.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
