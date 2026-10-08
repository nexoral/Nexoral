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
    <div className={cn("flex flex-col p-5 sm:p-6", className)}>
      <dt className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{label}</dt>
      <dd className="order-first font-mono text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-1">
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
        "glass glass-panel grid grid-cols-2 divide-y sm:divide-y-0 divide-x divide-slate-200 sm:grid-cols-4 rounded-2xl border border-black/[0.08] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {facts.map((fact) => (
        <Fact key={fact.label} value={fact.value} label={fact.label} />
      ))}
    </dl>
  );
}
