import { Clock, HardHat, MapPin, Scale } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/images/construction rental finder hero image.png";
import SectionHeading from "./SectionHeading";

const benefits = [
  { title: "Local Options", text: "Find rental providers in your area.", icon: MapPin },
  { title: "Compare Quickly", text: "See multiple providers and choose what works for you.", icon: Scale },
  { title: "Construction Focused", text: "Machines and equipment for real jobsite work.", icon: HardHat },
  { title: "Save Time", text: "Get in touch faster and keep your project moving.", icon: Clock },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="overflow-hidden bg-sand py-16 sm:py-20 lg:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative lg:pr-6">
          <div aria-hidden className="absolute right-0 -bottom-4 left-6 top-6 bg-hazard lg:-bottom-5 lg:left-10" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-xl lg:aspect-[5/6]">
            <Image
              src={heroImage}
              alt="Close view of a wheel loader's tires and bucket on a dirt jobsite"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="scale-125 object-cover object-[80%_75%]"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            id="benefits-heading"
            eyebrow="Why Use Construction Rental Finder"
            title="The Easier Way to Rent Construction Equipment"
          />
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {benefits.map(({ title, text, icon: Icon }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-yellow">
                  <Icon aria-hidden className="size-6 text-navy" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-1 leading-relaxed text-steel">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
