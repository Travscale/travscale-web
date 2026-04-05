import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
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

  return (
    <main className="min-h-screen bg-[#fdfdfc] text-[#0f172a] pt-28 pb-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <p className="inline-flex items-center border border-[#003399]/20 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.16em] font-semibold text-[#003399]">
          {content.eyebrow} Page
        </p>

        <h1
          className="mt-5 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {content.title}
        </h1>

        <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#0f172a]/72">
          {content.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link className="ts-btn-primary px-5 py-3 text-sm" href="/">
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            className="ts-btn-secondary px-5 py-3 text-sm text-black/80 hover:border-[#003399]/40"
            href="/contact"
          >
            Contact Team
          </Link>
          <span className="text-xs text-black/45">
            This page uses professional placeholder content.
          </span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 mt-11 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {content.sections.map((section) => (
          <article className="ts-panel p-5 sm:p-6" key={section.heading}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#003399]/75 font-semibold mb-3">
              Overview
            </p>
            <h2
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {section.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              {section.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
