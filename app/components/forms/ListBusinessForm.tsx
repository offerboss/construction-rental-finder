"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { equipmentCategories } from "../../lib/categories";
import { states } from "../../lib/locations";
import { InputField, SelectField, TextareaField } from "./fields";
import FormConfirmation from "./FormConfirmation";

// NOTE: Front-end only. Submissions are not sent or stored anywhere yet —
// connect this to a backend (API route, form service or CRM) before launch.
export default function ListBusinessForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormConfirmation
        title="Thank you"
        message="Thanks — your information has been received. We'll be in touch soon."
        resetLabel="Submit another business"
        onReset={() => setSubmitted(false)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-navy/10 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField id="companyName" label="Company Name" required autoComplete="organization" wrapperClassName="sm:col-span-2" />
        <InputField id="contactName" label="Contact Name" required autoComplete="name" />
        <InputField id="email" label="Email" type="email" required autoComplete="email" />
        <InputField id="phone" label="Phone" type="tel" autoComplete="tel" />
        <InputField id="website" label="Website" type="text" inputMode="url" autoComplete="url" placeholder="www.example.com" />
        <InputField id="city" label="City" required autoComplete="address-level2" />
        <SelectField id="state" label="State" required autoComplete="address-level1" defaultValue="">
          <option value="" disabled>Select a state</option>
          {states.map((state) => (
            <option key={state.slug} value={state.abbreviation}>{state.name}</option>
          ))}
          <option value="other">Other state</option>
        </SelectField>

        <fieldset className="sm:col-span-2">
          <legend className="mb-2 font-heading text-sm font-bold text-navy">
            Equipment Categories <span className="font-sans text-xs font-normal text-steel">(select all that apply)</span>
          </legend>
          <div className="grid grid-cols-1 gap-2 rounded-sm border border-navy/15 bg-sand p-4 sm:grid-cols-2">
            {equipmentCategories.map((category) => (
              <label key={category.slug} className="flex items-center gap-2.5 text-[0.95rem] text-ink">
                <input
                  type="checkbox"
                  name="categories"
                  value={category.slug}
                  className="size-4 shrink-0 accent-navy"
                />
                {category.name}
              </label>
            ))}
          </div>
        </fieldset>

        <TextareaField
          id="message"
          label="Message"
          wrapperClassName="sm:col-span-2"
          placeholder="Tell us about your fleet, service area and anything else we should know."
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-yellow px-7 py-3.5 font-heading text-base font-bold text-navy transition-colors hover:bg-yellow-dark focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
      >
        Submit Your Business
      </button>
      <p className="mt-4 text-sm text-steel">
        Fields marked * are required. See our <Link href="/privacy" className="font-semibold text-navy underline-offset-2 hover:underline">privacy policy</Link> for how we handle your information.
      </p>
    </form>
  );
}
