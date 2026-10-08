import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG, SOCIALS } from "@/lib/constants";
import { GithubIcon } from "@/components/site/icons";
import { NexoralMark, Wordmark } from "@/components/site/mark";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navigation() {
  return (
    <header className="glass glass-strong sticky top-0 z-50 w-full border-x-0 border-t-0">
      <div className="shell flex h-14 items-center justify-between gap-6 sm:h-16">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-foreground"
          aria-label={`${SITE_CONFIG.name} — home`}
        >
          <NexoralMark className="size-[1.4rem] text-primary" />
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Nexoral Systems on GitHub"
            render={<a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" />}
            className="hidden sm:inline-flex"
          >
            <GithubIcon className="size-4" />
          </Button>
          <Button
            size="lg"
            className="hidden md:inline-flex"
            render={<a href={SOCIALS.sponsor} target="_blank" rel="noopener noreferrer" />}
          >
            Sponsor
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
