import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlaceholderContentPage from "@/components/pages/placeholder-content-page";
import {
  placeholderPages,
  placeholderSlugs,
  siteConfig,
  toAbsoluteUrl,
} from "@/lib/site-content";

type PlaceholderRouteProps = {
  params: Promise<{
    page: string;
  }>;
};

export function generateStaticParams() {
  return placeholderSlugs.map((slug) => ({ page: slug }));
}

export async function generateMetadata(
  props: PlaceholderRouteProps,
): Promise<Metadata> {
  const { page } = await props.params;
  const content = placeholderPages[page];

  if (!content) {
    return {
      title: siteConfig.name,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${page}`,
    },
    openGraph: {
      title: `${content.title} | ${siteConfig.name}`,
      description: content.description,
      url: toAbsoluteUrl(`/${page}`),
      type: "article",
      images: [toAbsoluteUrl(siteConfig.ogImage)],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.title} | ${siteConfig.name}`,
      description: content.description,
      images: [toAbsoluteUrl(siteConfig.ogImage)],
    },
  };
}

export default async function PlaceholderPage(props: PlaceholderRouteProps) {
  const { page } = await props.params;
  const content = placeholderPages[page];

  if (!content) {
    notFound();
  }

  return <PlaceholderContentPage content={content} />;
}
