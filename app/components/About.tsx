import Link from "next/link";

type AboutProps = {
  heading?: string;
  body?: string;
  ctaLearnLabel?: string;
  ctaContactLabel?: string;
};

const defaults: AboutProps = {
  heading: "ABOUT",
  body: "I design and build interfaces and experiences that are clear, fast, and accessible. Based wherever you need me — always open to new projects and collaboration.",
  ctaLearnLabel: "Learn more",
  ctaContactLabel: "Get in Touch",
};

export function About({
  heading,
  body,
  ctaLearnLabel,
  ctaContactLabel,
}: AboutProps = {}) {
  const h = heading ?? defaults.heading;
  const b = body ?? defaults.body;
  const learn = ctaLearnLabel ?? defaults.ctaLearnLabel;
  const contact = ctaContactLabel ?? defaults.ctaContactLabel;

  return (
    <section
      id="about"
      className="w-full bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-heading-2 mb-8 text-[var(--color-headline)]">
          {h}
        </h2>
        <p className="text-body-style mb-10 text-[var(--color-body)] md:text-[20px]">
          {b}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-black)] bg-[var(--color-white)] px-8 py-3 text-link-style text-[18px] uppercase text-[var(--color-black)] transition-colors hover:bg-[var(--color-black)] hover:text-[var(--color-white)] md:text-[20px]"
          >
            {learn}
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-black)] bg-transparent px-8 py-3 text-link-style text-[18px] uppercase text-[var(--color-black)] transition-colors hover:bg-[var(--color-black)] hover:text-[var(--color-white)] md:text-[20px]"
          >
            {contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
