import { cn } from "@/lib/utils";

export function Fact({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <dt className="text-[13px] leading-snug text-muted-foreground">{label}</dt>
      <dd className="order-first font-heading text-2xl font-medium tracking-tight sm:text-[1.75rem]">
        {value}
      </dd>
    </div>
  );
}

export function FactStrip({
  facts,
  className,
}: {
  facts: Array<{ value: string; label: string }>;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 sm:grid-cols-4",
        className
      )}
    >
      {facts.map((fact) => (
        <Fact key={fact.label} value={fact.value} label={fact.label} />
      ))}
    </dl>
  );
}
