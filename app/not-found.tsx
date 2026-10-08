import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="pt-24 sm:pt-32">
      <p className="font-mono text-[12px] text-muted-foreground">404</p>
      <h1 className="mt-4 font-heading text-[2rem] leading-[1.08] font-medium tracking-[-0.02em] sm:text-[2.7rem]">
        Page not found
      </h1>
      <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-2.5">
        <Button size="lg" render={<Link href="/" />}>
          Back to home
        </Button>
        <Button size="lg" variant="outline" render={<Link href="/projects" />}>
          Browse products
        </Button>
      </div>
    </Section>
  );
}
