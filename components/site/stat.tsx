import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-3xl font-semibold tracking-tight sm:text-4xl">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function StatGrid({
  stats,
  className,
}: {
  stats: Array<{ value: string; label: string }>;
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4",
        className
      )}
    >
      {stats.map((stat) => (
        <Stat key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </dl>
  );
}
