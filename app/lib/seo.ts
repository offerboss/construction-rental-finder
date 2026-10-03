import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

export type Crumb = { name: string; href: string };
export type Faq = { question: string; answer: string };

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      ...(image ? { images: [image] } : {}),
    },
  };
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

type ArticleJsonLdInput = {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified: string;
};

export function articleJsonLd({ headline, description, path, image, datePublished, dateModified }: ArticleJsonLdInput) {
  const organization = {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/images/construction-rental-finder-logo.png") },
  };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [absoluteUrl(image)],
    datePublished,
    dateModified,
    author: organization,
    publisher: organization,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
  };
}
