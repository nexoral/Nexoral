import Link from "next/link";
import Image from "next/image";
import { CONTACT, ORG_DETAILS, SITE_CONFIG, SOCIALS } from "@/lib/constants";

const resourceLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support & funding" },
  { href: "/contact", label: "Contact" },
  { href: "/license", label: "Licenses" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border px-4 py-14 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1600px] gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-lg object-cover"
            />
            <span className="text-base font-semibold tracking-tight">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {SITE_CONFIG.description}
          </p>
          <dl className="mt-6 space-y-1 text-xs text-muted-foreground">
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-medium text-foreground/80">Enterprise</dt>
              <dd>
                {ORG_DETAILS.legalName} · {ORG_DETAILS.enterpriseType}
              </dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-medium text-foreground/80">Udyam No.</dt>
              <dd>{ORG_DETAILS.udyamNumber}</dd>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-medium text-foreground/80">Registered</dt>
              <dd>
                {ORG_DETAILS.address.locality}, {ORG_DETAILS.address.region}{" "}
                {ORG_DETAILS.address.postalCode}, {ORG_DETAILS.address.countryName}
              </dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <h2 className="mb-4 font-medium text-foreground">Explore</h2>
          <ul className="space-y-3">
            {resourceLinks.map((link) => (
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

        <div className="text-sm">
          <h2 className="mb-4 font-medium text-foreground">Connect</h2>
          <ul className="space-y-3">
            <li>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.sponsor}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Sponsor
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.general}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {CONTACT.general}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.founder}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {CONTACT.founder}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1600px] flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {SITE_CONFIG.name}. Independent and not affiliated with any other company.
        </p>
        <p>
          Core tools are free and open source — supported by sponsorship and grants, not paywalls.
        </p>
      </div>
    </footer>
  );
}
