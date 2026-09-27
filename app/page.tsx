import type { Metadata } from "next";
import Benefits from "./components/Benefits";
import EquipmentCategories from "./components/EquipmentCategories";
import FeaturedLocations from "./components/FeaturedLocations";
import Hero from "./components/Hero";
import RentalCompanyCTA from "./components/RentalCompanyCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <EquipmentCategories />
      <FeaturedLocations />
      <Benefits />
      <RentalCompanyCTA />
    </>
  );
}
