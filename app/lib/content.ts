import "server-only";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import type { Project } from "./projects";
import {
  getAllProjects as getFallbackProjects,
  getProjectBySlug as getFallbackProjectBySlug,
} from "./projects";

const CONTENT_DIR = path.join(process.cwd(), "content");

function contentPath(...segments: string[]) {
  return path.join(CONTENT_DIR, ...segments);
}

async function readFileIfExists(filePath: string): Promise<string | null> {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }
}

async function readJsonIfExists<T>(filePath: string): Promise<T | null> {
  const raw = await readFileIfExists(filePath);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export type GlobalData = {
  siteName?: string;
  defaultMetaTitle?: string;
  defaultMetaDescription?: string;
  navItems?: { label: string; href: string }[];
};

export async function getGlobal(): Promise<GlobalData | null> {
  const data = await readJsonIfExists<GlobalData>(contentPath("global.json"));
  return data;
}

export type HomePageData = {
  heroHeadline?: string;
  heroSubtext?: string;
  heroCtaText?: string;
  aboutHeading?: string;
  aboutBody?: string;
  aboutCtaLearn?: string;
  aboutCtaContact?: string;
  ctaHeadline?: string;
  ctaBody?: string;
  ctaEmailLabel?: string;
  ctaEmailHref?: string;
  ctaLinkedInLabel?: string;
  ctaLinkedInHref?: string;
};

export async function getHomePage(): Promise<HomePageData | null> {
  const raw = await readFileIfExists(contentPath("home.md"));
  if (!raw) return null;
  const { data } = matter(raw);
  return data as HomePageData;
}

export type RecognitionItem = { year: string; label: string };

export type AboutPageData = {
  heroStatement?: string;
  recognitionItems?: RecognitionItem[];
  founderName?: string;
  founderImage?: string | null;
  contactPhone?: string;
  contactEmail?: string;
  contactSocial?: string;
  midSectionImage?: string | null;
  establishedYear?: string;
};

export async function getAboutPage(): Promise<AboutPageData | null> {
  const raw = await readFileIfExists(contentPath("about.md"));
  if (!raw) return null;
  const { data } = matter(raw);
  return data as AboutPageData;
}

export type ContactRegionItem = {
  name?: string;
  email?: string;
  phone?: string;
  url?: string;
};
export type ContactRegion = { region: string; items: ContactRegionItem[] };

export type ContactPageData = {
  title?: string;
  regions?: ContactRegion[];
  midPhone?: string;
  midEmail?: string;
};

export async function getContactPage(): Promise<ContactPageData | null> {
  const raw = await readFileIfExists(contentPath("contact.md"));
  if (!raw) return null;
  const { data } = matter(raw);
  return data as ContactPageData;
}

function mapFileToProject(
  slug: string,
  data: Record<string, unknown>,
  body: string
): Project {
  const image = data.image as string | undefined;
  const heroImage = data.heroImage as string | undefined;
  const sectionImages = data.sectionImages as (string | null)[] | undefined;
  return {
    slug,
    title: (data.title as string) ?? "",
    shortDescription: (data.shortDescription as string) ?? "",
    image: image ?? null,
    longDescription:
      (body?.trim() || (data.shortDescription as string)) ?? null,
    heroImage: heroImage ?? null,
    videoUrl: (data.videoUrl as string) ?? null,
    liveUrl: (data.liveUrl as string) ?? null,
    githubUrl: (data.githubUrl as string) ?? null,
    sectionImages: Array.isArray(sectionImages) ? sectionImages : undefined,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const dir = contentPath("projects");
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const mdFiles = entries.filter((e) => e.isFile() && e.name.endsWith(".md"));
    if (mdFiles.length === 0) return getFallbackProjects();

    const projects: Project[] = [];
    for (const entry of mdFiles) {
      const raw = await readFileIfExists(path.join(dir, entry.name));
      if (!raw) continue;
      const { data, content } = matter(raw);
      const slug = (data.slug as string) ?? entry.name.replace(/\.md$/, "");
      projects.push(mapFileToProject(slug, data, content));
    }
    return projects.sort((a, b) => a.slug.localeCompare(b.slug));
  } catch {
    return getFallbackProjects();
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const projects = await getAllProjects();
  return projects.find((p) => p.slug === slug);
}
