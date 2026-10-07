import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> {
  bordered?: boolean;
  containerClassName?: string;
}

export function Section({
  className,
  containerClassName,
  bordered = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-16",
        bordered && "border-t border-border",
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-[1600px]", containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
