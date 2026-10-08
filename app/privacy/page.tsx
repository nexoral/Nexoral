import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, Section } from "@/components/layout/section";
import { COMPANY, COMPLIANCE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Nexoral Systems handles personal data under the Digital Personal Data Protection Act, 2023: no tracking, no advertising, no sale of data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-16 sm:pt-20 lg:pt-24">
      <PageTitle
        title="Privacy notice"
        description={`How ${COMPANY.legalName} handles personal data when you use nexoral.in. Effective ${COMPLIANCE.noticeEffective} · Version ${COMPLIANCE.noticeVersion}.`}
      />

      <div className="prose-legal mt-12">
        <p>
          This notice is given under Section 5 of the Digital Personal Data Protection Act, 2023
          (&ldquo;DPDPA&rdquo;). It explains what personal data {COMPANY.legalName} collects, why,
          how long it is kept, and how you can exercise your rights.
        </p>

        <h2>In short</h2>
        <ul>
          <li>No analytics, no advertising, and no tracking cookies.</li>
          <li>No account to create, and no data sold or shared for marketing.</li>
          <li>We hold only what you choose to send us by email, plus the standard request logs
            kept by our hosting provider for security.</li>
          <li>The open-source software we publish does not send telemetry or &ldquo;phone home&rdquo;.</li>
        </ul>

        <h2>Who is responsible</h2>
        <p>
          {COMPANY.legalName}, owned and run by {COMPANY.owner}, is the Data Fiduciary for any
          personal data processed through this website. Questions and requests go to the contact
          listed at the end of this notice.
        </p>

        <h2>What we collect and why</h2>
        <h3>Data you send us</h3>
        <p>
          If you email us, we receive your email address, any name you include, and the contents of
          your message. We use it only to read, answer, and follow up on your query. The basis for
          this processing is your consent, given by choosing to write to us.
        </p>
        <h3>Technical request data</h3>
        <p>
          Like any website, the server that hosts nexoral.in may record standard request data such
          as your IP address, browser type, the page requested, and a timestamp. This is used only
          to keep the site available and secure, and is not used to build a profile of you.
        </p>
        <h3>Public data shown on the site</h3>
        <p>
          Product information such as stars, releases and download counts is fetched from the
          GitHub and npm public APIs. Those requests are made from our servers, not from your
          browser, so your visit is not shared with them.
        </p>

        <h2>Cookies and local storage</h2>
        <p>
          This site sets no advertising or analytics cookies and does not track you across other
          websites. Any cookie or local-storage entry that exists is strictly necessary to serve the
          page.
        </p>

        <h2>Sharing and third parties</h2>
        <p>
          We do not sell personal data and do not share it for advertising. Two categories of
          service providers may process data as Data Processors on our behalf:
        </p>
        <ul>
          <li>Our website hosting provider, which serves the pages and keeps security logs.</li>
          <li>Our email provider, which delivers and stores messages you send to us.</li>
        </ul>
        <p>
          Both are only permitted to process data to provide their service to us, under terms that
          require appropriate security safeguards.
        </p>

        <h2>How long we keep data</h2>
        <p>
          Emails are kept only for as long as needed to resolve your query and then deleted, unless
          a longer period is required by law. Standard request logs are retained by our hosting
          provider for a limited security window.
        </p>

        <h2>Your rights</h2>
        <p>As a Data Principal under the DPDPA, you can ask us to:</p>
        <ul>
          <li><strong>Access.</strong> Confirm whether we process your data, and receive a summary of
            it and a note of who it has been shared with.</li>
          <li><strong>Correct.</strong> Fix inaccurate or incomplete data.</li>
          <li><strong>Erase.</strong> Delete your data where we are not required to keep it.</li>
          <li><strong>Grievance.</strong> Raise a complaint about how we handle your data.</li>
          <li><strong>Nominate.</strong> Name someone to exercise these rights on your behalf in the
            event of death or incapacity.</li>
        </ul>
        <p>
          To make a request, email the Grievance Officer below. See{" "}
          <Link href="/data-protection">data protection &amp; grievance</Link> for how a request is
          handled and what we need from you to verify it.
        </p>

        <h2>Grievance Officer</h2>
        <p>
          {COMPLIANCE.officerName}, {COMPLIANCE.officerRole}. Email{" "}
          <a href={`mailto:${COMPLIANCE.email}`}>{COMPLIANCE.email}</a>. We aim to respond to every
          grievance within the statutory maximum of {COMPLIANCE.responseSlaDays} days.
        </p>

        <h2>Complaints to the Data Protection Board</h2>
        <p>
          If you are not satisfied with our response, you may lodge a complaint with the{" "}
          {COMPLIANCE.boardName}, under the {COMPLIANCE.ministryName}.
        </p>

        <h2>Children</h2>
        <p>
          This website and the software we publish are not directed at children, and we do not
          knowingly process the personal data of children.
        </p>

        <h2>International transfers</h2>
        <p>
          Our hosting and email providers may process data in locations outside India. We do not
          transfer personal data to any territory that the Government of India restricts under
          Section 16 of the DPDPA.
        </p>

        <h2>Security</h2>
        <p>
          The site is served over TLS. We keep only the minimum data needed, limit who can access it,
          and review our providers&rsquo; safeguards.
        </p>

        <h2>Changes to this notice</h2>
        <p>
          We may update this notice from time to time. When we do, we will change the version and
          date at the top of the page.
        </p>

        <h2>Contact</h2>
        <p>
          For any privacy question, email{" "}
          <a href={`mailto:${CONTACT.general}`}>{CONTACT.general}</a>.
        </p>
      </div>
    </Section>
  );
}
