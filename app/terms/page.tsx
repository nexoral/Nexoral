import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";
import { PageTitle, Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { COMPANY, COMPLIANCE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The terms that apply to using nexoral.in. The software published by Nexoral Systems is governed by its own open-source licenses.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="w-full">
        <PageTitle
          title="Terms of use"
          description={`These terms apply to your use of nexoral.in. Effective ${COMPLIANCE.noticeEffective}.`}
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14 items-start">
        <div className="prose-legal">
          <p>
            This website is operated by {COMPANY.legalName} ({COMPANY.incorporationStatus}), directed by {COMPANY.owner} ({COMPANY.ownerRole}). By using
            the site you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <h2>Using the site</h2>
          <p>
            You may browse, read and link to this site freely. You agree not to attempt to disrupt it,
            to gain unauthorised access to it, or to use it in a way that breaks the law or the rights
            of others.
          </p>

          <h2>Website content and brand</h2>
          <p>
            The text, layout and brand of this website belong to {COMPANY.legalName}. You may quote or
            share it with attribution. This does not apply to the software, which is covered below.
          </p>

          <h2>Software licenses</h2>
          <p>
            The software published by {COMPANY.legalName} is not covered by these terms. Each product
            is released under its own open-source license (MIT or GPL-3.0), and your use of that
            software is governed by that license. See{" "}
            <Link href="/license">licenses</Link> for the full list.
          </p>

          <h2>Third-party links</h2>
          <p>
            The site links to services we do not control, such as GitHub, npm and product
            documentation. We are not responsible for their content or their terms.
          </p>

          <h2>No warranty</h2>
          <p>
            This website is provided &ldquo;as is&rdquo;, without warranties of any kind. The software
            is provided under the warranty terms stated in its license.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, {COMPANY.legalName} is not liable for any indirect or
            consequential loss arising from your use of this website.
          </p>

          <h2>Privacy</h2>
          <p>
            Our handling of personal data is described in the{" "}
            <Link href="/privacy">privacy notice</Link> and{" "}
            <Link href="/data-protection">data protection &amp; grievance</Link> page.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India, with jurisdiction in West Bengal, India.</p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. The effective date at the top of the page
            will change when we do.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${CONTACT.general}`}>{CONTACT.general}</a>.
          </p>
        </div>

        {/* Sticky Terms & Governance Summary Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="glass glass-panel rounded-2xl p-6 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold uppercase tracking-wider">
              <FileText className="size-4" />
              <span>Governance Dossier</span>
            </div>

            <dl className="mt-4 divide-y divide-black/[0.06] text-xs">
              {[
                { term: "Operating Entity", value: COMPANY.legalName },
                { term: "Classification", value: COMPANY.incorporationStatus },
                { term: "Jurisdiction", value: COMPANY.location },
                { term: "Governing Law", value: "Laws of India (West Bengal)" },
                { term: "Open Source Code", value: "MIT & GPL-3.0 (Independent)" },
                { term: "Corporate Contact", value: CONTACT.general },
              ].map((item) => (
                <div key={item.term} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-muted-foreground font-mono">{item.term}</dt>
                  <dd className="text-right font-medium text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 pt-4 border-t border-black/[0.06]">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium shadow-sm"
                size="sm"
                render={<Link href="/license" />}
              >
                <span>View Software Licenses</span>
                <ArrowUpRight className="size-3.5 ml-1" />
              </Button>
            </div>
          </div>

          <div className="glass rounded-xl p-5 border border-black/[0.08]">
            <h3 className="text-xs font-mono font-semibold text-muted-foreground uppercase">
              Corporate Trust Center
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="text-primary hover:underline flex items-center justify-between">
                  <span>Privacy Notice</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="text-primary hover:underline flex items-center justify-between">
                  <span>DPDPA Grievance Protocol</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary hover:underline flex items-center justify-between">
                  <span>Corporate Factsheet</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
