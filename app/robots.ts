import type { MetadataRoute } from "next";
import { siteConfig, toAbsoluteUrl } from "@/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
      },
    ],
    sitemap: toAbsoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
