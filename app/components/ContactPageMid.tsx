import Link from "next/link";

export function ContactPageMid({
  findStockistsLabel = "FIND STOCKISTS",
  aboutLabel = "ABOUT",
  phone,
  email,
}: {
  findStockistsLabel?: string;
  aboutLabel?: string;
  phone?: string;
  email?: string;
}) {
  return (
    <section className="w-full border-t border-[var(--color-divider-light)] bg-[var(--color-bg)] px-6 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex flex-wrap gap-6 md:gap-8">
          <Link
            href="/contact"
            className="text-link-style text-[var(--color-link)] uppercase transition-opacity hover:opacity-80"
          >
            {findStockistsLabel}
          </Link>
          <Link
            href="/about"
            className="text-link-style text-[var(--color-link)] uppercase transition-opacity hover:opacity-80"
          >
            {aboutLabel}
          </Link>
        </div>
        <div className="flex flex-col gap-1 text-[var(--color-body)] md:flex-row md:gap-6">
          {phone && (
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="text-body-style hover:underline"
            >
              {phone}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-body-style hover:underline"
            >
              {email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
