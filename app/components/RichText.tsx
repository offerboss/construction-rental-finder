import Link from "next/link";
import { Fragment } from "react";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Renders guide text with inline links written as [label](/path) or [label](https://...).
 * Internal paths use next/link; external URLs open in a new tab.
 */
export default function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      href.startsWith("/") ? (
        <Link key={index} href={href} className="font-semibold text-navy underline decoration-yellow decoration-2 underline-offset-2 hover:decoration-navy">
          {label}
        </Link>
      ) : (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline decoration-yellow decoration-2 underline-offset-2 hover:decoration-navy">
          {label}
        </a>
      ),
    );
    last = index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  );
}

/** Plain-text version for metadata and structured data. */
export function stripLinks(text: string) {
  return text.replace(LINK, "$1");
}
