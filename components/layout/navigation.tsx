import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG, SOCIALS } from "@/lib/constants";
import { GithubIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:px-16">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_CONFIG.name} home`}>
          <Image
            src="/logo.jpg"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-lg object-cover"
            priority
          />
          <span className="text-base font-semibold tracking-tight">{SITE_CONFIG.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
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
            Support
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
