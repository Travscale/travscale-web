import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import { siteConfig, toAbsoluteUrl } from "@/lib/site-content";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Travel Operations Platform`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  category: "Travel Technology",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "travel agency software",
    "travel ERP",
    "travel operations platform",
    "B2B travel automation",
    "travel booking workflow",
    "agency operations software",
    "travel management",
    "travscale",
  ],
  authors: [{ name: "Travscale Team", url: siteConfig.url }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "any" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | Travel Operations Platform`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: siteConfig.locale,
    images: [
      {
        url: toAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} platform overview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Travel Operations Platform`,
    description: siteConfig.description,
    images: [toAbsoluteUrl(siteConfig.ogImage)],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
