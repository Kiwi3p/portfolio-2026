export type RecognitionItem = { year: string; label: string };

export function Recognition({
  items,
  title = "RECOGNITION",
}: {
  items: RecognitionItem[];
  title?: string;
}) {
  return (
    <section className="w-full bg-[var(--color-bg2)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
      <h2 className="text-caption-style mb-8 text-[var(--color-black)] uppercase tracking-tight md:mb-10">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map(({ year, label }, i) => (
          <li
            key={i}
            className="text-body-style flex flex-wrap gap-x-2 text-[var(--color-black)]"
          >
            <span className="shrink-0">{year}</span>
            <span className="shrink-0" aria-hidden>
              •
            </span>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
