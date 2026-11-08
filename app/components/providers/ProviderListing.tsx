import { getCategory } from "../../lib/categories";
import type { Provider } from "../../lib/provider-directory";

type HeadingLevel = "h3" | "h4";

/** Imported listings are nofollow; paid/featured placements are marked sponsored. */
export function providerLinkRel(provider: Provider) {
  return provider.featured ? "sponsored noopener noreferrer" : "nofollow noopener noreferrer";
}

/** tel: href in E.164 form for a US number, e.g. "(303) 422-1212" -> "tel:+13034221212". */
function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  return `tel:+1${digits}`;
}

type ProviderListingProps = {
  provider: Provider;
  headingLevel?: HeadingLevel;
};

export default function ProviderListing({ provider, headingLevel = "h4" }: ProviderListingProps) {
  const Heading = headingLevel;

  return (
    <article className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-6">
      <div className="min-w-0 flex-1">
        <Heading className="font-heading text-[0.95rem] leading-snug font-bold break-words text-navy">
          {provider.name}
        </Heading>
        <p className="mt-0.5 text-sm text-steel">
          {provider.city}, {provider.stateCode}
        </p>
        {provider.description && <p className="mt-2 text-sm leading-relaxed text-ink/80">{provider.description}</p>}
        <ul aria-label="Equipment categories" className="mt-2.5 flex flex-wrap gap-1.5">
          {provider.categories.map((slug) => (
            <li key={slug} className="provider-chip">
              {getCategory(slug)?.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-1.5 sm:flex-col sm:items-end">
        {provider.phone && (
          <a href={telHref(provider.phone)} className="provider-link">
            {provider.phone}
          </a>
        )}
        {provider.website && (
          <a href={provider.website} target="_blank" rel={providerLinkRel(provider)} className="provider-link">
            Website <span aria-hidden>↗</span>
            <span className="sr-only">for {provider.name} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
