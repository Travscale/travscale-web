import type { Metadata } from "next";
import MarketingHomePage from "@/components/pages/marketing-home-page";
import { siteConfig, toAbsoluteUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Travel Operations Platform for Modern Agencies",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Travel Operations Platform for Modern Agencies`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [toAbsoluteUrl(siteConfig.ogImage)],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Travel Operations Platform for Modern Agencies`,
    description: siteConfig.description,
    images: [toAbsoluteUrl(siteConfig.ogImage)],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: siteConfig.founded,
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description: siteConfig.description,
  url: siteConfig.url,
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        type="application/ld+json"
      />
      <MarketingHomePage />
    </>
  );
}
