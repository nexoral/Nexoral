import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionProps extends ComponentProps<"section"> {
  /** Draw a hairline above the section to separate it from the one before. */
  divider?: boolean;
  /** `panel` tints the whole band so a section reads as a distinct surface. */
  tone?: "base" | "panel";
  size?: "default" | "tight";
}

export function Section({
  className,
  divider = false,
  tone = "base",
  size = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full",
        size === "default" ? "py-16 sm:py-20 lg:py-24" : "py-10 sm:py-12",
        divider && "border-t border-border",
        tone === "panel" && "glass border-x-0",
        className
      )}
      {...props}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

export function PageTitle({
  title,
  description,
  className,
  children,
}: {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn("w-full", className)}>
      <h1 className="font-heading text-[2.25rem] leading-[1.08] font-bold tracking-tight text-balance sm:text-[3.25rem] lg:text-[3.75rem]">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-5xl text-[1.1rem] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}

export function SectionHeading({
  title,
  description,
  className,
  headingClassName,
  children,
}: {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  headingClassName?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn("w-full", className)}>
      <h2
        className={cn(
          "font-heading text-[1.85rem] leading-[1.15] font-bold tracking-tight text-balance sm:text-[2.35rem]",
          headingClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-5xl text-[1.02rem] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
