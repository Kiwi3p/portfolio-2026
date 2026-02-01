import Image from "next/image";

export type ContactRegionItem = {
  name?: string;
  email?: string;
  phone?: string;
};

export type ContactRegion = {
  region: string;
  items: ContactRegionItem[];
};

export function ContactPageContent({
  title = "OUR STOCK LISTS",
  regions,
  backgroundImageSrc,
}: {
  title?: string;
  regions: ContactRegion[];
  backgroundImageSrc?: string | null;
}) {
  return (
    <section className="relative w-full min-h-[50vh] py-16 md:py-24 lg:py-32">
      {/* Optional faded background image */}
      {backgroundImageSrc && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImageSrc}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
        </div>
      )}
      {!backgroundImageSrc && (
        <div className="absolute inset-0 bg-[var(--color-divider-light)]" />
      )}

      <div className="relative mx-auto max-w-2xl px-6 md:px-8">
        <div className="rounded-none bg-[var(--color-bg)] px-8 py-10 shadow-sm md:px-12 md:py-14">
          <h1 className="text-heading-2 mb-10 text-center text-[var(--color-headline)] md:mb-12">
            {title}
          </h1>
          <div className="space-y-0">
            {regions.map(({ region, items }, i) => (
              <div key={region}>
                {i > 0 && (
                  <hr className="my-6 border-t border-[var(--color-divider-light)]" />
                )}
                <h2 className="text-caption-style mb-3 text-[var(--color-black)] uppercase tracking-tight">
                  {region}
                </h2>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="text-body-style flex flex-wrap gap-x-4 gap-y-1 text-[var(--color-body)]"
                    >
                      {item.name && <span>{item.name}</span>}
                      {item.email && (
                        <a
                          href={`mailto:${item.email}`}
                          className="underline underline-offset-2 hover:opacity-80"
                        >
                          {item.email}
                        </a>
                      )}
                      {item.phone && <span>{item.phone}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
