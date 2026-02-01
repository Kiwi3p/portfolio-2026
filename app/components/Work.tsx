import Link from "next/link";
import { ProjectCard } from "@/app/components/ProjectCard";
import { getAllProjects } from "@/app/lib/projects";
import type { Project } from "@/app/lib/projects";

type WorkProps = {
  projects?: Project[] | null;
};

export function Work({ projects: projectsProp }: WorkProps = {}) {
  const projects = projectsProp?.length ? projectsProp : getAllProjects();

  return (
    <section
      id="work"
      className="w-full bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-center md:justify-between">
          <h2 className="text-heading-2 text-[var(--color-headline)]">WORK</h2>
          <Link
            href="/work"
            className="text-link-style w-fit text-[18px] text-[var(--color-link)] underline decoration-[var(--color-bg2)] underline-offset-4 transition-colors hover:decoration-[var(--color-accent)] md:text-[20px]"
          >
            View all work
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              shortDescription={project.shortDescription}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
