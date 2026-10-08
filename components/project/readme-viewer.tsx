import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { normalizeReadme } from "@/lib/markdown/normalize";

const components: Components = {
  h1: ({ children }) => (
    <h2 className="mt-10 mb-4 border-b border-border pb-2 font-heading text-2xl font-medium tracking-tight first:mt-0">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 border-b border-border pb-2 font-heading text-2xl font-medium tracking-tight first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-9 mb-3 font-heading text-xl font-medium tracking-tight first:mt-0">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-7 mb-2 font-heading text-lg font-medium first:mt-0">{children}</h4>
  ),
  h5: ({ children }) => <h5 className="mt-6 mb-2 font-medium first:mt-0">{children}</h5>,
  h6: ({ children }) => <h6 className="mt-6 mb-2 font-medium first:mt-0">{children}</h6>,
  p: ({ children }) => (
    <p className="my-4 text-[0.95rem] leading-relaxed text-muted-foreground first:mt-0">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-2 pl-5 text-[0.95rem] text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pl-5 text-[0.95rem] text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-2 border-primary/60 pl-4 text-sm text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-xs leading-relaxed">
      {children}
    </pre>
  ),
  code: ({ className, children }) =>
    className?.startsWith("language-") ? (
      <code className={cn("font-mono", className)}>{children}</code>
    ) : (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-primary">
        {children}
      </code>
    ),
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse border border-border text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/50">{children}</thead>,
  th: ({ children }) => (
    <th className="border border-border px-3 py-2 text-left font-semibold">{children}</th>
  ),
  td: ({ children }) => <td className="border border-border px-3 py-2 text-muted-foreground">{children}</td>,
  hr: () => <hr className="my-8 border-border" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} className="my-4 rounded-lg border border-border" />
  ),
};

export function ReadmeViewer({ readme }: { readme: string | null }) {
  if (!readme) {
    return <p className="text-sm text-muted-foreground">No README available for this project.</p>;
  }

  return (
    <div className="max-w-[30rem]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {normalizeReadme(readme)}
      </ReactMarkdown>
    </div>
  );
}
