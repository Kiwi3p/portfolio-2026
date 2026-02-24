import Link from "next/link";
import Image from "next/image";

export type ProjectCardProps = {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string | null;
};

export function ProjectCard({
  slug,
  title,
  shortDescription,
  image,
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={`/work/${slug}`} className="block">
        <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded bg-[var(--color-accent)]/5">
          {image ? (
            <Image
              src={image}
              alt=""
              width={600}
              height={450}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[var(--color-paragraph2)]">
              <span className="text-caption-style uppercase">Image</span>
            </div>
          )}
        </div>
        <h3 className="text-heading-3 mb-2 text-[var(--color-headline)]">
          {title}
        </h3>
        <p className="text-body-style mb-4 text-[var(--color-paragraph2)] md:text-[20px]">
          {shortDescription}
        </p>
        <span className="text-link-style text-[18px] text-[var(--color-link)] underline decoration-[var(--color-bg2)] underline-offset-4 transition-colors group-hover:decoration-[var(--color-accent)] md:text-[20px]">
          View project
        </span>
      </Link>
    </article>
  );
}
