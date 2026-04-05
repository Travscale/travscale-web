import type { MetadataRoute } from "next";
import { placeholderSlugs, toAbsoluteUrl } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const indexablePlaceholderSlugs = placeholderSlugs.filter(
    (slug) => slug !== "terms-of-service",
  );

  return [
    {
      url: toAbsoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toAbsoluteUrl("/terms-and-conditions"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.85,
    },
    ...indexablePlaceholderSlugs.map((slug) => ({
      url: toAbsoluteUrl(`/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
