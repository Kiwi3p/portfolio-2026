import Link from "next/link";

type CTAProps = {
  headline?: string;
  body?: string;
  emailLabel?: string;
  emailHref?: string;
  linkedInLabel?: string;
  linkedInHref?: string;
};

const defaults: CTAProps = {
  headline: "LET'S WORK TOGETHER",
  body: "Have a project in mind? Get in touch — I'd love to hear from you.",
  emailLabel: "Email",
  emailHref: "mailto:hello@example.com",
  linkedInLabel: "LinkedIn",
  linkedInHref: "#",
};

export function CTA({
  headline,
  body,
  emailLabel,
  emailHref,
  linkedInLabel,
  linkedInHref,
}: CTAProps = {}) {
  const h = headline ?? defaults.headline;
  const b = body ?? defaults.body;
  const email = emailLabel ?? defaults.emailLabel;
  const emailLink = emailHref ?? defaults.emailHref ?? "#";
  const linkedIn = linkedInLabel ?? defaults.linkedInLabel;
  const linkedInLink = linkedInHref ?? defaults.linkedInHref ?? "#";

  return (
    <section
      id="contact"
      className="grid w-full grid-cols-1 bg-[var(--color-bg2)] lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center gap-6 px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
        <h2 className="text-heading-1 text-[var(--color-headline-on-bg2)]">
          {h}
        </h2>
        <p className="text-body-style max-w-xl text-[var(--color-body-on-bg2)] md:text-[20px]">
          {b}
        </p>
        <div className="flex flex-wrap gap-6">
          <Link
            href={emailLink}
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-divider2)] bg-transparent px-8 py-3 text-link-style text-[18px] uppercase text-[var(--color-headline-on-bg2)] transition-colors hover:bg-[var(--color-divider2)] hover:text-[var(--color-bg2)] md:text-[20px]"
          >
            {email}
          </Link>
          <Link
            href={linkedInLink}
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-divider2)] bg-transparent px-8 py-3 text-link-style text-[18px] uppercase text-[var(--color-headline-on-bg2)] transition-colors hover:bg-[var(--color-divider2)] hover:text-[var(--color-bg2)] md:text-[20px]"
          >
            {linkedIn}
          </Link>
        </div>
      </div>
      <div className="relative min-h-[240px] bg-[var(--color-accent-on-bg2)]/20 md:min-h-[320px] lg:min-h-[480px]">
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-headline-on-bg2)]/30">
          <span className="text-sm uppercase tracking-widest">
            Optional image
          </span>
        </div>
      </div>
    </section>
  );
}
