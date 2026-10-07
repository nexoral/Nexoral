import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Nexoral Systems — Free & open-source infrastructure tools",
    template: "%s | Nexoral Systems",
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  keywords: [
    "Nexoral",
    "Nexoral Systems",
    "open source",
    "infrastructure tools",
    "developer tools",
    "DNS server",
    "self-hosted DNS",
    "embedded database",
    "Node.js database",
    "AxioDB",
    "NexoralDNS",
    "ContainDB",
    "Ankan Saha",
  ],
  authors: [{ name: SITE_CONFIG.founder.name, url: SITE_CONFIG.founder.url }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Nexoral Systems — Free & open-source infrastructure tools",
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexoral Systems — Free & open-source infrastructure tools",
    description: SITE_CONFIG.description,
    creator: "@theankansaha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
