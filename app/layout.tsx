import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexoral Systems - Open Source Infrastructure & Developer Tools",
  description: "Nexoral Systems is an open-source technology organization building next-generation infrastructure, developer tools, and scalable platforms. Founded by Ankan Saha, featuring NexoralDNS, AxioDB, ContainDB, and more.",
  keywords: ["open source", "infrastructure", "developer tools", "DNS server", "NoSQL database", "NexoralDNS", "AxioDB", "ContainDB", "Ankan Saha", "Nexoral"],
  authors: [{ name: "Ankan Saha", url: "https://github.com/AnkanSaha" }],
  creator: "Ankan Saha",
  publisher: "Nexoral Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexoral.in",
    title: "Nexoral Systems - Open Source Infrastructure & Developer Tools",
    description: "Open-source organization building robust infrastructure, developer tools, and scalable platforms.",
    siteName: "Nexoral Systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexoral Systems - Open Source Infrastructure & Developer Tools",
    description: "Open-source organization building robust infrastructure, developer tools, and scalable platforms.",
    creator: "@theankansaha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
