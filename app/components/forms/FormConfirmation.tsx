"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

type FormConfirmationProps = {
  title: string;
  message: string;
  onReset: () => void;
  resetLabel: string;
};

export default function FormConfirmation({ title, message, onReset, resetLabel }: FormConfirmationProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so screen reader and keyboard users land on it.
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      className="rounded-md border border-navy/10 border-l-4 border-l-yellow bg-white p-6 shadow-sm focus:outline-none sm:p-8"
    >
      <CheckCircle2 aria-hidden className="size-10 text-navy" />
      <h2 className="mt-4 font-heading text-2xl font-extrabold text-navy">{title}</h2>
      <p className="mt-2 text-lg leading-relaxed text-ink/80">{message}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 font-heading text-sm font-bold text-navy underline-offset-4 hover:underline"
      >
        {resetLabel}
      </button>
    </div>
  );
}
