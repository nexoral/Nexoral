import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG, SOCIALS } from "@/lib/constants";
import { GithubIcon } from "@/components/site/icons";
import { NexoralMark, Wordmark } from "@/components/site/mark";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navigation() {
  return (
    <header className="glass glass-strong sticky top-0 z-50 w-full border-b border-black/[0.06] backdrop-blur-xl bg-white/80">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-foreground transition-opacity hover:opacity-90"
          aria-label={`${SITE_CONFIG.name} — home`}
        >
          <NexoralMark className="size-6 text-primary drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:bg-slate-100 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Nexoral Systems on GitHub"
            render={<a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" />}
            className="hidden sm:inline-flex text-muted-foreground hover:text-foreground hover:bg-slate-100"
          >
            <GithubIcon className="size-4" />
          </Button>

          <Button
            size="sm"
            className="hidden sm:inline-flex bg-primary text-white hover:bg-primary/90 shadow-sm"
            render={<Link href="/projects" />}
          >
            Explore Products
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
