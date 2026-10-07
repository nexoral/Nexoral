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
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-1 border-t border-border bg-background px-4 py-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-lg font-medium text-foreground/90 hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-3 pt-6">
            <Button render={<a href={SOCIALS.sponsor} target="_blank" rel="noopener noreferrer" />}>
              Support the work
            </Button>
            <Button
              variant="outline"
              render={<a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" />}
            >
              GitHub
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
