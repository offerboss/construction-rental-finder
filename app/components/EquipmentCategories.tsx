import { equipmentCategories } from "../lib/categories";
import ArrowLink from "./ArrowLink";
import CategoryCard from "./CategoryCard";
import SectionHeading from "./SectionHeading";

export default function EquipmentCategories() {
  return (
    <section id="categories" aria-labelledby="categories-heading" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="categories-heading"
            eyebrow="Browse Popular Categories"
            title="Construction Equipment Rentals"
          />
          <ArrowLink href="/equipment" className="hidden sm:inline-flex">
            View All Categories
          </ArrowLink>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {equipmentCategories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>

        <ArrowLink href="/equipment" className="mt-8 sm:hidden">
          View All Categories
        </ArrowLink>
      </div>
    </section>
  );
}
