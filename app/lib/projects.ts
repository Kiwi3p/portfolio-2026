export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string | null;
  longDescription?: string | null;
  heroImage?: string | null;
  videoUrl?: string | null;
  liveUrl?: string | null;
  githubUrl?: string | null;
  /** Optional image per content section (by index). Shown in orange/tan sections when present. */
  sectionImages?: (string | null)[];
  /** Optional image to show to the right of a section (by index). Layout: text left, image right. */
  sectionRightImages?: (string | null)[];
  /** Optional gallery of images per section (by index). Rendered below section body: row on desktop, column on mobile; click opens lightbox. */
  sectionGalleries?: (string[] | null)[];
};

const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    shortDescription:
      "A focused case study or product — design and development.",
    image: null,
    longDescription:
      "This project combined design and development to deliver a clear, fast experience. We focused on accessibility and performance while keeping the visual identity strong. The result is a product that works well across devices and meets high standards for both users and stakeholders.",
    heroImage: null,
    videoUrl: null,
    liveUrl: null,
  },
  {
    slug: "project-two",
    title: "Project Two",
    shortDescription: "Another strong piece of work with clear impact.",
    image: null,
    longDescription:
      "A collaboration that emphasized clarity and impact. We iterated on the concept with the client to align on goals, then built an experience that highlights the key message and drives measurable outcomes.",
    heroImage: null,
    videoUrl: null,
    liveUrl: "https://example.com",
  },
  {
    slug: "project-three",
    title: "Project Three",
    shortDescription: "Collaboration or side project worth highlighting.",
    image: null,
    longDescription:
      "A side project that grew into a full case study. We explored new tools and patterns while maintaining a consistent design system. The project demonstrates how small experiments can scale into production-ready work.",
    heroImage: null,
    videoUrl: null,
    liveUrl: null,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
