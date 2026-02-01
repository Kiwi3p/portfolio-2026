import Link from "next/link";

type HeroProps = {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
};

const defaults: HeroProps = {
  headline: "DESIGN & BUILD",
  subtext: "Creative developer crafting thoughtful digital experiences.",
  ctaText: "View Work",
  ctaHref: "/work",
};

export function Hero({ headline, subtext, ctaText, ctaHref }: HeroProps = {}) {
  const h = headline ?? defaults.headline;
  const s = subtext ?? defaults.subtext;
  const cta = ctaText ?? defaults.ctaText;
  const href = ctaHref ?? defaults.ctaHref ?? "/work";

  return (
    <section className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-8 bg-[var(--color-bg2)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
        <h1 className="text-heading-1 text-[var(--color-headline)]">{h}</h1>
        <p className="text-body-style max-w-xl text-[20px] text-[var(--color-accent-on-bg2)] md:text-[20px]">
          {s}
        </p>
        <Link
          href={href}
          className="inline-flex w-fit items-center justify-center rounded-full border-2 border-[var(--color-accent-on-bg2)] bg-transparent px-8 py-3 text-link-style text-[18px] uppercase text-[var(--color-accent-on-bg2)] transition-colors hover:bg-[var(--color-accent-on-bg2)] hover:text-[var(--color-bg2)] md:text-[20px]"
        >
          {cta}
        </Link>
      </div>
      <div className="relative min-h-[280px] bg-[var(--color-bg3)] md:min-h-[400px] lg:min-h-[520px]">
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-body-on-bg2)]/40">
          <span className="text-sm uppercase tracking-widest">Hero image</span>
        </div>
      </div>
    </section>
  );
}
