import CategoryCard from "../components/CategoryCard";
import CtaBanner from "../components/CtaBanner";
import LocationCard from "../components/LocationCard";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { equipmentCategories } from "../lib/categories";
import { states } from "../lib/locations";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Construction Equipment Rentals",
  description:
    "Browse construction equipment rentals by category, from excavators and skid steers to lifts, forklifts and generators, and find local providers near you.",
  path: "/equipment",
});

export default function EquipmentHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Browse Equipment"
        title="Construction Equipment Rentals"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Equipment", href: "/equipment" },
        ]}
      >
        <p>
          Find the equipment you need for earthmoving, lifting, material handling, site prep,
          concrete work, power and more. Browse rental categories and connect with local
          providers near you.
        </p>
      </PageHeader>

      <section aria-labelledby="all-categories-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="all-categories-heading" eyebrow="Equipment Categories" title="Choose Your Equipment" />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {equipmentCategories.map((category) => (
              <li key={category.slug}>
                <CategoryCard
                  category={category}
                  detailed
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 23vw, (min-width: 768px) 31vw, 48vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="equipment-locations-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="equipment-locations-heading" eyebrow="Browse by Location" title="Find Equipment Where You Need It" />
          <ul className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {states.map((state) => (
              <li key={state.slug}>
                <LocationCard state={state} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Ready to Find Equipment Near Your Jobsite?"
        text="Browse our launch markets in Colorado, Arizona and Texas to find local rental options."
        buttonLabel="Browse Locations"
        buttonHref="/locations"
      />
    </>
  );
}
