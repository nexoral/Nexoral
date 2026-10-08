import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, Section } from "@/components/layout/section";
import { COMPANY, COMPLIANCE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Data protection & grievance",
  description:
    "How to exercise your rights as a Data Principal under the DPDPA (access, correction, erasure, grievance and nomination) and how to reach the Grievance Officer.",
  alternates: { canonical: "/data-protection" },
};

const rights = [
  {
    name: "Right to access",
    body: "Ask for confirmation that we process your data, a summary of it, and a note of who it has been shared with.",
  },
  {
    name: "Right to correction",
    body: "Ask us to fix personal data that is inaccurate, incomplete or out of date.",
  },
  {
    name: "Right to erasure",
    body: "Ask us to delete your data, where we are not required by law to keep it.",
  },
  {
    name: "Right to grievance redressal",
    body: "Raise a complaint about how we have handled your data, and receive a response within the statutory period.",
  },
  {
    name: "Right to nominate",
    body: "Name one or more people to exercise your rights on your behalf in the event of your death or incapacity.",
  },
];

export default function DataProtectionPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <PageTitle
          title="Data protection & grievance"
          description="How to exercise your rights as a Data Principal, and how to reach the person responsible for data protection at Nexoral Systems."
        />
      </Section>

      <Section divider size="tight">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-heading text-xl font-medium tracking-tight">How to make a request</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              Email the Grievance Officer with the right you want to exercise. To help us find your
              data and verify the request, include:
            </p>
            <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                "The email address you used to contact us.",
                "Which right you want to exercise: access, correction, erasure, grievance or nomination.",
                "Any detail that helps us locate the data in question.",
                "For a nomination, the name and contact details of your nominee.",
              ].map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-[11px] text-foreground">{index + 1}</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We may ask for reasonable additional information to confirm your identity before
              acting on a request. We respond within {COMPLIANCE.responseSlaDays} days.
            </p>
          </div>

          <dl className="self-start divide-y divide-border border-y border-border">
            {[
              { term: "Grievance Officer", value: COMPLIANCE.officerName },
              { term: "Role", value: COMPLIANCE.officerRole },
              { term: "Email", value: COMPLIANCE.email },
              { term: "Company", value: COMPANY.legalName },
              { term: "Response time", value: `Within ${COMPLIANCE.responseSlaDays} days` },
              { term: "Notice version", value: COMPLIANCE.noticeVersion },
            ].map((row) => (
              <div key={row.term} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-muted-foreground">{row.term}</dt>
                <dd className="text-right text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section divider>
        <h2 className="font-heading text-xl font-medium tracking-tight">Your rights</h2>
        <div className="mt-8 grid gap-x-16 gap-y-8 sm:grid-cols-2">
          {rights.map((right) => (
            <div key={right.name} className="border-t border-border pt-4">
              <h3 className="text-sm font-medium">{right.name}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {right.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section divider>
        <div className="max-w-[30rem] space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-heading text-xl font-medium tracking-tight text-foreground">
              Withdrawing consent
            </h2>
            <p className="mt-3">
              Where we rely on your consent, you can withdraw it at any time by emailing the
              Grievance Officer. Withdrawing consent is as easy as giving it, and does not affect
              processing already carried out.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium tracking-tight text-foreground">
              If there is a data breach
            </h2>
            <p className="mt-3">
              If a personal data breach occurs that affects you, we will notify you and the{" "}
              {COMPLIANCE.boardName} as required under Section 7 of the DPDPA, describing what
              happened, the likely consequences, and the steps we have taken.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-medium tracking-tight text-foreground">
              Complaint to the Board
            </h2>
            <p className="mt-3">
              If you are not satisfied with our response, you can complain to the{" "}
              {COMPLIANCE.boardName}, under the{" "}
              <a
                href={COMPLIANCE.ministryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                {COMPLIANCE.ministryName}
              </a>
              .
            </p>
          </div>
          <p className="text-sm">
            See the full <Link href="/privacy">privacy notice</Link> for what we collect and why.
          </p>
        </div>
      </Section>
    </>
  );
}
