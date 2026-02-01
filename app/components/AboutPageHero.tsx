export function AboutPageHero({ statement }: { statement: string }) {
  return (
    <section className="w-full bg-[var(--color-bg3)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-heading-2 text-[var(--color-white)] md:text-heading-1">
          {statement}
        </p>
      </div>
    </section>
  );
}
