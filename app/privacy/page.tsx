import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/layout/section";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How nexoral.in handles data: no tracking, no advertising, and no sale of data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-20 sm:pt-24">
      <SectionHeading eyebrow="Privacy" title="Privacy" />

      <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          This site is a static, read-only marketing and documentation site. We do not run
          advertising, and we do not sell or share personal data.
        </p>

        <div>
          <h2 className="mb-2 text-base font-medium text-foreground">What we collect</h2>
          <p>
            We do not use analytics, tracking pixels, or advertising cookies. The site does not ask
            you to create an account.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-medium text-foreground">Third-party data shown</h2>
          <p>
            Project information on this site is fetched from public sources — the GitHub REST API
            and the npm downloads API. Those requests are made from our servers, not your browser,
            so your visit is not shared with them.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-medium text-foreground">Your requests</h2>
          <p>
            If you email us, we keep the message only to reply to you. We do not add you to any
            mailing list.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-medium text-foreground">Contact</h2>
          <p>
            For any privacy question, email{" "}
            <a href={`mailto:${CONTACT.general}`} className="text-primary hover:underline">
              {CONTACT.general}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
