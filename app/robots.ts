import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";

// /search is left crawlable on purpose: it carries a noindex meta tag, which
// crawlers can only see if the page isn't blocked here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
