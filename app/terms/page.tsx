import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, Section } from "@/components/layout/section";
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
      <PageTitle
        title="Terms of use"
        description={`These terms apply to your use of nexoral.in. Effective ${COMPLIANCE.noticeEffective}.`}
      />

      <div className="prose-legal mt-12">
        <p>
          This website is operated by {COMPANY.legalName}, owned and run by {COMPANY.owner}. By using
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
    </Section>
  );
}
