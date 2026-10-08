import { cn } from "@/lib/utils";

function CodeLine({ line }: { line: string }) {
  const isComment = /^\s*(\/\/|#)/.test(line);
  return (
    <span className={cn(isComment && "text-muted-foreground/70 italic")}>
      {line.length === 0 ? " " : line}
      {"\n"}
    </span>
  );
}

export function CodeBlock({
  code,
  title,
  meta,
  className,
}: {
  code: string;
  title?: string;
  meta?: string;
  className?: string;
}) {
  const lines = code.replace(/\n$/, "").split("\n");

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-md border border-border bg-card",
        className
      )}
    >
      {title || meta ? (
        <figcaption className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5 font-mono text-[11px] tracking-wide text-muted-foreground">
          <span>{title ?? ""}</span>
          <span>{meta ?? ""}</span>
        </figcaption>
      ) : null}
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.7] text-foreground">
        <code>
          {lines.map((line, index) => (
            <CodeLine key={index} line={line} />
          ))}
        </code>
      </pre>
    </figure>
  );
}
