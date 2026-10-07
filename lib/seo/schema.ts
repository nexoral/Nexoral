import { CONTACT, ORG_DETAILS, SITE_CONFIG, SOCIALS } from "@/lib/constants";

type SchemaObject = Record<string, unknown>;

export function organizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.jpg`,
    description: SITE_CONFIG.description,
    foundingDate: ORG_DETAILS.incorporationDate,
    identifier: ORG_DETAILS.udyamNumber,
    email: CONTACT.general,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.founder.name,
      url: SITE_CONFIG.founder.url,
      sameAs: SITE_CONFIG.founder.github,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: ORG_DETAILS.address.locality,
      addressRegion: ORG_DETAILS.address.region,
      postalCode: ORG_DETAILS.address.postalCode,
      addressCountry: ORG_DETAILS.address.country,
    },
    sameAs: [SOCIALS.github, SOCIALS.x, SOCIALS.linkedin, SOCIALS.devto],
  };
}

export function websiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  };
}

export interface SoftwareSchemaInput {
  name: string;
  description: string;
  url: string;
  codeRepository: string;
  language?: string | null;
  license?: string | null;
}

export function softwareSourceCodeSchema(project: SoftwareSchemaInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.url,
    codeRepository: project.codeRepository,
    programmingLanguage: project.language ?? undefined,
    license: project.license ? `https://spdx.org/licenses/${project.license}.html` : undefined,
    author: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    isAccessibleForFree: true,
  };
}

export function softwareApplicationSchema(project: SoftwareSchemaInput): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    url: project.url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function itemListSchema(items: Array<{ name: string; url: string }>): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function personSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.founder.name,
    url: SITE_CONFIG.founder.url,
    jobTitle: SITE_CONFIG.founder.role,
    sameAs: [
      SITE_CONFIG.founder.github,
      SOCIALS.x,
      SOCIALS.linkedin,
      SOCIALS.devto,
      SOCIALS.instagram,
    ],
    worksFor: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
  };
}
