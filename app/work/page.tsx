import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ProjectCard } from "@/app/components/ProjectCard";
import { AnimatedSection } from "@/app/components/AnimatedSection";
import { getAllProjects } from "@/app/lib/content";
import { getGlobal } from "@/app/lib/content";

export default async function WorkPage() {
  const [global, projects] = await Promise.all([getGlobal(), getAllProjects()]);

  return (
    <div className="min-h-screen">
      <Header navItems={global?.navItems} siteName={global?.siteName} />
      <main>
        <AnimatedSection
          as="section"
          className="w-full bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <h1 className="text-heading-2 mb-12 text-[var(--color-headline)] md:mb-16">
              WORK
            </h1>
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
        </AnimatedSection>
        <Footer />
      </main>
    </div>
  );
}
