import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url}/sitemap.xml`,
  };
}
