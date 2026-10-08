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
    <footer className="w-full border-t border-border bg-card">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_CONFIG.name} — home`}>
              <NexoralMark className="size-[1.4rem] text-primary" />
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An independent software company, owned and run by {COMPANY.owner}. It publishes free,
              open-source infrastructure and developer tools.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {[
                { href: SOCIALS.github, label: "GitHub", external: true },
                { href: SOCIALS.sponsor, label: "Sponsor", external: true },
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
              <h2 className="text-sm font-medium text-foreground">{column.heading}</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
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

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_CONFIG.name}. Owned and maintained by {COMPANY.owner}.
          </p>
          <p className="sm:text-right">
            Free and open source — funded by sponsorship, not paywalls. Grievances:{" "}
            <a href={`mailto:${COMPLIANCE.email}`} className="text-foreground/80 hover:text-foreground">
              {COMPLIANCE.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
