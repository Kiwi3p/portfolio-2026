import Image from "next/image";

export function AboutMidSection({
  imageSrc,
  establishedYear = "2005",
}: {
  imageSrc?: string | null;
  establishedYear?: string;
}) {
  return (
    <section className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="relative min-h-[280px] bg-[var(--color-bg2)] md:min-h-[360px] lg:min-h-[420px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[var(--color-accent-on-bg2)]/40">
            <span className="text-caption-style uppercase">Image</span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center bg-[var(--color-bg3)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
        <p className="text-display text-center text-[var(--color-white)] lg:text-left">
          EST.{establishedYear}
        </p>
      </div>
    </section>
  );
}
