/**
 * Normalize README markdown for display.
 *
 * Many project READMEs open with a block of raw HTML — centered logos and
 * shields.io badges. Without a rehype plugin, react-markdown renders that HTML
 * as literal text, which reads as a wall of markup. We convert HTML headings to
 * markdown headings, turn <br> into line breaks, and drop the remaining tags.
 *
 * The leading H1 is removed because the page already shows the product name as
 * its title, and the remaining heading levels are re-sequenced so the rendered
 * outline never skips a level (the page title counts as the h1).
 */
export function normalizeReadme(readme: string): string {
  const withoutHtml = readme
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_match, level: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      return text ? `\n${"#".repeat(Number(level))} ${text}\n` : "";
    })
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?[a-zA-Z][^>]*>/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const withoutTitle = withoutHtml.replace(/^#\s+.*(\n+|$)/, "").trim();

  let previous = 1;
  return withoutTitle
    .replace(/^(#{1,6})\s+(.*)$/gm, (_match, hashes: string, text: string) => {
      const level = Math.min(hashes.length, previous + 1);
      previous = level;
      return `${"#".repeat(level)} ${text}`;
    })
    .trim();
}
