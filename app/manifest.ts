import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - Travel Operations Platform`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fdfdfc",
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
