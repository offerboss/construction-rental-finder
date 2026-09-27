const FALLBACK_SITE_URL = "https://www.constructionrentalfinder.com";

/**
 * Base URL for canonicals, structured data, sitemap and robots.
 * Set NEXT_PUBLIC_SITE_URL per environment (e.g. a preview domain); a blank or
 * malformed value falls back to the production domain. Trailing slashes are trimmed.
 */
function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE_URL;

  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return FALLBACK_SITE_URL;
    return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const siteConfig = {
  name: "Construction Rental Finder",
  url: resolveSiteUrl(),
};

export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
