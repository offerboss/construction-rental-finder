type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  id,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={className}>
      <p
        className={`flex items-center gap-3 font-heading text-xs font-bold tracking-[0.18em] uppercase sm:text-sm ${
          dark ? "text-yellow" : "text-navy"
        }`}
      >
        <span aria-hidden className="h-1 w-8 bg-yellow" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
