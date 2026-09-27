"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { InputField, TextareaField } from "./fields";
import FormConfirmation from "./FormConfirmation";

// NOTE: Front-end only. Submissions are not sent or stored anywhere yet —
// connect this to a backend (API route, form service or inbox) before launch.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormConfirmation
        title="Message sent"
        message="Thanks — your information has been received. We'll be in touch soon."
        resetLabel="Send another message"
        onReset={() => setSubmitted(false)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-navy/10 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField id="name" label="Name" required autoComplete="name" />
        <InputField id="email" label="Email" type="email" required autoComplete="email" />
        <InputField id="subject" label="Subject" required wrapperClassName="sm:col-span-2" />
        <TextareaField id="message" label="Message" required rows={6} wrapperClassName="sm:col-span-2" />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-yellow px-7 py-3.5 font-heading text-base font-bold text-navy transition-colors hover:bg-yellow-dark focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
      >
        Send Message
      </button>
      <p className="mt-4 text-sm text-steel">
        Fields marked * are required. See our <Link href="/privacy" className="font-semibold text-navy underline-offset-2 hover:underline">privacy policy</Link> for how we handle your information.
      </p>
    </form>
  );
}
