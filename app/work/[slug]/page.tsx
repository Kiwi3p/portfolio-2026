import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { getProjectBySlug, getAllProjects } from "@/app/lib/content";
import { getGlobal } from "@/app/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

type MarkdownSection = { title?: string; body: string };

function parseMarkdownSections(md: string): MarkdownSection[] {
  if (!md?.trim()) return [];
  const sections: MarkdownSection[] = [];
  const parts = md.trim().split(/\n(?=## )/);
  const first = parts[0]?.trim() ?? "";
  if (first) sections.push({ body: first });
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i]?.trim() ?? "";
    const newline = part.indexOf("\n");
    const title =
      newline >= 0
        ? part
            .slice(0, newline)
            .replace(/^##\s*/, "")
            .trim()
        : part.replace(/^##\s*/, "").trim();
    const body = newline >= 0 ? part.slice(newline + 1).trim() : "";
    sections.push({ title, body });
  }
  return sections;
}

const proseClasses =
  "prose prose-neutral text-body-style max-w-none md:text-[20px] prose-p:mb-4 prose-headings:font-sans";
const proseLight =
  "text-[var(--color-body)] prose-headings:text-[var(--color-headline)]";
const proseOnDark =
  "text-[var(--color-body-on-bg2)] prose-headings:text-[var(--color-headline-on-bg2)] prose-a:text-[var(--color-headline-on-bg2)] prose-a:underline prose-strong:text-[var(--color-headline-on-bg2)]";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const [global, project] = await Promise.all([
    getGlobal(),
    getProjectBySlug(slug),
  ]);
  if (!project) notFound();

  const heroImage = project.heroImage ?? project.image;
  const description = project.longDescription ?? project.shortDescription;
  const isMarkdown = (project.longDescription?.trim().length ?? 0) > 0;
  const sections =
    isMarkdown && project.longDescription
      ? parseMarkdownSections(project.longDescription)
      : [{ body: description ?? "" }];

  const hasMultipleSections = sections.length > 1;
  const overview = sections[0];
  const contentSections = hasMultipleSections ? sections.slice(1) : [];

  return (
    <div className="min-h-screen">
      <Header navItems={global?.navItems} siteName={global?.siteName} />
      <main>
        <section className="relative w-full aspect-[21/9] min-h-[240px] bg-[var(--color-bg3)] md:min-h-[320px] lg:min-h-[400px]">
          {heroImage ? (
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[var(--color-white)]/40">
              <span className="text-caption-style uppercase">
                Project image
              </span>
            </div>
          )}
        </section>

        {/* Overview — project title + intro */}
        <section className="w-full bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-heading-2 mb-8 text-[var(--color-headline)]">
              {project.title}
            </h1>
            {overview.body ? (
              isMarkdown ? (
                <div className={`${proseClasses} ${proseLight}`}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {overview.body}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="text-body-style whitespace-pre-line text-[var(--color-body)] md:text-[20px]">
                  {overview.body}
                </div>
              )
            ) : null}
          </div>
        </section>

        {/* Additional sections from ## headings */}
        {contentSections.map((sec, i) => {
          const isAlt = i % 2 === 0;
          return (
            <section
              key={sec.title ?? i}
              className={
                isAlt
                  ? "w-full bg-[var(--color-bg2)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32"
                  : "w-full bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32"
              }
            >
              <div className="mx-auto max-w-4xl">
                {sec.title && (
                  <h2 className="text-heading-3 mb-8 text-[var(--color-headline)] md:mb-10 first:mt-0">
                    {isAlt ? (
                      <span className="text-[var(--color-headline-on-bg2)]">
                        {sec.title}
                      </span>
                    ) : (
                      sec.title
                    )}
                  </h2>
                )}
                {sec.body ? (
                  <div
                    className={
                      isAlt
                        ? `${proseClasses} ${proseOnDark}`
                        : `${proseClasses} ${proseLight}`
                    }
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {sec.body}
                    </ReactMarkdown>
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}

        {project.videoUrl && (
          <section className="w-full bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-heading-3 mb-8 text-[var(--color-headline)]">
                Video
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded border border-[var(--color-divider-light)] bg-[var(--color-bg3)]">
                {isEmbedUrl(project.videoUrl) ? (
                  <iframe
                    src={project.videoUrl}
                    title="Project video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={project.videoUrl}
                    controls
                    className="h-full w-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </section>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <section className="w-full bg-[var(--color-bg)] px-6 pb-16 md:px-12 md:pb-24 lg:px-16 lg:pb-32">
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-black)] bg-[var(--color-white)] px-8 py-3 text-link-style text-[18px] uppercase text-[var(--color-black)] transition-colors hover:bg-[var(--color-black)] hover:text-[var(--color-white)] md:text-[20px]"
                >
                  View live site
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-black)] bg-transparent px-8 py-3 text-link-style text-[18px] uppercase text-[var(--color-black)] transition-colors hover:bg-[var(--color-black)] hover:text-[var(--color-white)] md:text-[20px]"
                >
                  View on GitHub
                </Link>
              )}
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
}

function isEmbedUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return (
      u.hostname.includes("youtube.com") ||
      u.hostname.includes("youtu.be") ||
      u.hostname.includes("vimeo.com")
    );
  } catch {
    return false;
  }
}
