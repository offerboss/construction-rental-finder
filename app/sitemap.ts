import type { MetadataRoute } from "next";
import { equipmentCategories } from "./lib/categories";
import { states } from "./lib/locations";
import { guides } from "./lib/resources";
import { absoluteUrl } from "./lib/site";

type Entry = MetadataRoute.Sitemap[number];

function entry(path: string, changeFrequency: Entry["changeFrequency"], priority: number): Entry {
  return { url: absoluteUrl(path), changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", "weekly", 1),
    entry("/equipment", "weekly", 0.9),
    ...equipmentCategories.map((category) => entry(`/equipment/${category.slug}`, "monthly", 0.8)),
    entry("/locations", "weekly", 0.9),
    ...states.map((state) => entry(`/locations/${state.slug}`, "monthly", 0.8)),
    ...states.flatMap((state) =>
      state.cities.map((city) => entry(`/locations/${state.slug}/${city.slug}`, "monthly", 0.7)),
    ),
    entry("/resources", "weekly", 0.6),
    ...guides.map((guide) => entry(`/resources/${guide.slug}`, "monthly", 0.6)),
    entry("/providers", "monthly", 0.6),
    entry("/list-your-business", "monthly", 0.5),
    entry("/contact", "yearly", 0.3),
    entry("/privacy", "yearly", 0.2),
    entry("/terms", "yearly", 0.2),
  ];
}
