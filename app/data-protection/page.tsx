import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import { PageTitle, Section } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { COMPANY, COMPLIANCE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DPDPA 2023 Statutory Compliance & Grievance Redressal",
  description:
    "Statutory procedures for Data Principals to exercise rights under India's Digital Personal Data Protection Act, 2023 (DPDPA) and DPDP Rules, 2025.",
  alternates: { canonical: "/data-protection" },
};

const rights = [
  {
    section: "Section 11",
    name: "Right to Access Personal Data",
    body: "Obtain confirmation of processing, a summary of digital personal data being processed, and identities of any Data Processors with whom data has been shared.",
    mailtoSubject: "DPDPA%20Section%2011%20Access%20Request",
  },
  {
    section: "Section 12(1)",
    name: "Right to Correction & Completion",
    body: "Request correction of inaccurate personal data, completion of incomplete data, and updating of out-of-date records.",
    mailtoSubject: "DPDPA%20Section%2012%20Correction%20Request",
  },
  {
    section: "Section 12(2)",
    name: "Right to Erasure",
    body: "Demand erasure of personal data that is no longer necessary for the purpose for which it was collected or where consent has been withdrawn, unless retention is legally mandated.",
    mailtoSubject: "DPDPA%20Section%2012%20Erasure%20Request",
  },
  {
    section: "Section 13",
    name: "Right of Grievance Redressal",
    body: "Submit a formal grievance regarding data processing obligations. The Grievance Officer is statutorily bound to respond within 90 days per Rule 14(3).",
    mailtoSubject: "DPDPA%20Section%2013%20Grievance%20Submission",
  },
  {
    section: "Section 14",
    name: "Right to Nominate",
    body: "Nominate an individual to exercise Data Principal rights on your behalf in the event of death or incapacity, per Rule 14(4).",
    mailtoSubject: "DPDPA%20Section%2014%20Nomination%20Request",
  },
];

export default function DataProtectionPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-0.5 text-xs font-mono text-blue-700 mb-5 shadow-sm">
            <ShieldCheck className="size-3.5" />
            <span>Digital Personal Data Protection Act, 2023 · DPDP Rules 2025</span>
          </div>

          <PageTitle
            title="Data Protection &amp; Grievance Redressal"
            description="Formal mechanisms established by Nexoral Systems as a Data Fiduciary under India's Digital Personal Data Protection Act, 2023."
          />
        </div>
      </Section>

      {/* Mechanism and Officer Dossier */}
      <Section divider size="tight">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Exercising Data Principal Rights
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Under DPDPA 2023, you hold statutory rights over your digital personal data. To exercise
              any right or file a formal grievance, transmit an email request directly to our designated
              Grievance Officer.
            </p>

            <div className="mt-6 rounded-xl border border-black/[0.08] bg-slate-50/70 p-5">
              <h3 className="font-mono text-xs uppercase text-primary font-semibold tracking-wider">
                Required Verification Details
              </h3>
              <ol className="mt-4 space-y-2.5 text-xs text-muted-foreground font-mono">
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold">01.</span>
                  <span>The verified email address associated with your communication or account.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold">02.</span>
                  <span>Specific right being invoked (Access, Correction, Erasure, Grievance, Nomination).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold">03.</span>
                  <span>Specific description of personal data subject to request.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold">04.</span>
                  <span>For nomination requests: full legal name and verified contact details of nominee.</span>
                </li>
              </ol>
            </div>

            <p className="mt-5 text-xs text-muted-foreground font-mono">
              Statutory Resolution Window: Guaranteed written response within {COMPLIANCE.responseSlaDays} days (Rule 14(3)).
            </p>
          </div>

          {/* Grievance Officer Card */}
          <div className="glass glass-panel rounded-2xl p-7 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              Designated Grievance Officer
            </h3>

            <dl className="mt-5 divide-y divide-black/[0.06]">
              {[
                { term: "Officer Name", value: COMPLIANCE.officerName },
                { term: "Designation", value: COMPLIANCE.officerRole },
                { term: "Data Fiduciary", value: COMPANY.legalName },
                { term: "Official Email", value: COMPLIANCE.email },
                { term: "Statutory SLA", value: `Within ${COMPLIANCE.responseSlaDays} days (Rule 14(3))` },
                { term: "Regulatory Version", value: `DPDPA Notice v${COMPLIANCE.noticeVersion}` },
                { term: "Effective Date", value: COMPLIANCE.noticeEffective },
              ].map((row) => (
                <div key={row.term} className="flex items-baseline justify-between gap-4 py-3 text-xs">
                  <dt className="text-muted-foreground font-mono">{row.term}</dt>
                  <dd className="text-right font-medium text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 pt-4 border-t border-black/[0.06]">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium shadow-sm"
                render={
                  <a href={`mailto:${COMPLIANCE.email}?subject=DPDPA%20Statutory%20Request`} />
                }
              >
                <Mail className="size-4 mr-2" />
                <span>Submit Grievance to Officer</span>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Statutory Rights Grid with Pre-Filled Mailto Triggers */}
      <Section divider>
        <div className="w-full mb-10">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            DPDPA 2023 Provisions
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Enforceable Data Principal Rights
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Click any right below to initiate a pre-formatted statutory request directly to the Grievance Officer.
          </p>
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rights.map((right, index) => (
            <StaggerItem
              key={right.name}
              index={index}
              className="glass glass-panel flex flex-col justify-between rounded-xl p-6 border border-black/[0.08] hover:border-primary/40 transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-primary">
                  {right.section}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  {right.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {right.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06]">
                <a
                  href={`mailto:${COMPLIANCE.email}?subject=${right.mailtoSubject}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  <span>Transmit {right.section} Request</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Escalation to Data Protection Board */}
      <Section divider tone="panel">
        <div className="w-full max-w-5xl space-y-6">
          <h2 className="text-xl font-bold text-foreground">
            Escalation &amp; Breach Protocol
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Right of Escalation to DPBI:</strong> In accordance
              with Section 13(3) of the DPDP Act, 2023, if you do not receive a resolution from our
              Grievance Officer within 90 days, or if you are dissatisfied with the determination, you have
              the statutory right to lodge an appeal with the{" "}
              <a
                href={COMPLIANCE.ministryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {COMPLIANCE.boardName}
              </a>
              , operating under the {COMPLIANCE.ministryName}.
            </p>

            <p>
              <strong className="text-foreground">Data Breach Notification:</strong> Pursuant to Section 7(d)
              of the DPDPA and Rule 7 of the DPDP Rules 2025, in the event of an identified personal data breach,
              Nexoral Systems shall notify the Data Protection Board of India and each affected Data Principal
              within statutory timelines detailing the nature of the breach, estimated consequences, and immediate remedial measures taken.
            </p>

            <p className="pt-2 text-xs font-mono">
              For complete disclosures on data minimization and lawful processing, review our full{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Notice
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
