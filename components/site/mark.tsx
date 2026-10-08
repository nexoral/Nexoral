import { cn } from "@/lib/utils";

export function NexoralMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      <path
        d="M12 2.6 20.3 7.4v9.2L12 21.4 3.7 16.6V7.4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 8.1 16.1 10.5v4.8L12 17.7 7.9 15.3v-4.8z" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5", className)}>
      <span className="font-heading text-[1.075rem] leading-none font-medium tracking-tight">
        Nexoral
      </span>
      <span className="text-[0.85rem] leading-none font-normal tracking-wide text-muted-foreground">
        Systems
      </span>
    </span>
  );
}
