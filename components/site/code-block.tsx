export function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-muted/40">
      {title ? (
        <div className="border-b border-border px-4 py-2 text-xs font-medium text-muted-foreground">
          {title}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}
