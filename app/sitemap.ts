import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/about", "/contact"].map((path, i) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.8,
  }));
}
