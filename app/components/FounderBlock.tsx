import Image from "next/image";
import { JaggedDivider } from "./JaggedDivider";

export function FounderBlock({
  name,
  imageSrc,
  imageAlt = "Founder",
}: {
  name: string;
  imageSrc?: string | null;
  imageAlt?: string;
}) {
  return (
    <section className="w-full bg-[var(--color-bg3)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4] lg:aspect-[4/5]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--color-accent)]/80 text-[var(--color-white)]/60">
            <span className="text-caption-style uppercase">Founder image</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 pb-6 pt-16 md:px-8 md:pb-8 lg:px-12">
          <p className="text-caption-style mb-1 text-[var(--color-white)] uppercase">
            FOUNDER
          </p>
          <p className="text-heading-2 text-[var(--color-white)]">{name}</p>
        </div>
      </div>
      <JaggedDivider
        fill="var(--color-white)"
        className="text-[var(--color-white)]"
      />
    </section>
  );
}
