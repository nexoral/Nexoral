import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

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
        tone === "panel" && "bg-card",
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
    <div className={cn("max-w-3xl", className)}>
      <h1 className="font-heading text-[2rem] leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-[2.7rem]">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </div>
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
    <div className={cn("max-w-2xl", className)}>
      <h2
        className={cn(
          "font-heading text-[1.7rem] leading-[1.15] font-medium tracking-[-0.015em] text-balance sm:text-[2.15rem]",
          headingClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
