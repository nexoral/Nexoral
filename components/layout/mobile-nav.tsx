"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-14 bottom-0 z-40 flex flex-col border-x-0 border-b-0 px-5 py-6 sm:top-16 bg-white/95 backdrop-blur-2xl border-t border-black/[0.06]"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-4 font-heading text-xl font-medium tracking-tight text-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-black/[0.06]">
            <Button
              className="bg-primary hover:bg-primary/90 text-white font-medium"
              render={<Link href="/projects" onClick={() => setOpen(false)} />}
            >
              Explore Products →
            </Button>
            <Button
              variant="outline"
              className="border-slate-200 bg-white hover:bg-slate-50 text-foreground"
              render={<a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" />}
            >
              GitHub Organization
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
