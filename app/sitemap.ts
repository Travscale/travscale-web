import type { MetadataRoute } from "next";
import { placeholderSlugs, toAbsoluteUrl } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: toAbsoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...placeholderSlugs.map((slug) => ({
      url: toAbsoluteUrl(`/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
