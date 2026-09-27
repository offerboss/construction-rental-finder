import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export const controlClasses =
  "w-full rounded-sm border border-navy/20 bg-white px-3.5 py-3 text-base text-ink placeholder:text-steel/80 focus:border-navy focus:ring-2 focus:ring-yellow focus:outline-none";

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: React.ReactNode;
};

function FieldShell({ id, label, required, hint, className = "", children }: FieldShellProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block font-heading text-sm font-bold text-navy">
        {label}
        {required ? (
          <span className="text-steel" aria-hidden> *</span>
        ) : (
          <span className="font-sans text-xs font-normal text-steel"> (optional)</span>
        )}
      </label>
      {children}
      {hint && <p id={`${id}-hint`} className="mt-1.5 text-sm text-steel">{hint}</p>}
    </div>
  );
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  hint?: string;
  wrapperClassName?: string;
};

export function InputField({ id, label, hint, required, wrapperClassName, ...props }: InputFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} hint={hint} className={wrapperClassName}>
      <input
        id={id}
        name={id}
        required={required}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={controlClasses}
        {...props}
      />
    </FieldShell>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
};

export function TextareaField({ id, label, required, wrapperClassName, rows = 5, ...props }: TextareaFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} className={wrapperClassName}>
      <textarea id={id} name={id} required={required} rows={rows} className={controlClasses} {...props} />
    </FieldShell>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  label: string;
  wrapperClassName?: string;
  children: React.ReactNode;
};

export function SelectField({ id, label, required, wrapperClassName, children, ...props }: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} className={wrapperClassName}>
      <select id={id} name={id} required={required} className={controlClasses} {...props}>
        {children}
      </select>
    </FieldShell>
  );
}
