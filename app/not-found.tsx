import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="pt-24 sm:pt-32">
      <p className="text-sm font-medium text-muted-foreground">Error 404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button size="lg" render={<Link href="/" />}>
          Back to home
        </Button>
        <Button size="lg" variant="outline" render={<Link href="/projects" />}>
          Explore projects
        </Button>
      </div>
    </Section>
  );
}
