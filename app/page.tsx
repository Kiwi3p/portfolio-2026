import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Work } from "@/app/components/Work";
import { CTA } from "@/app/components/CTA";
import { Footer } from "@/app/components/Footer";
import { getGlobal, getHomePage, getAllProjects } from "@/app/lib/content";

export default async function Home() {
  const [global, home, projects] = await Promise.all([
    getGlobal(),
    getHomePage(),
    getAllProjects(),
  ]);

  return (
    <div className="min-h-screen">
      <Header navItems={global?.navItems} siteName={global?.siteName} />
      <main>
        <Hero
          headline={home?.heroHeadline}
          subtext={home?.heroSubtext}
          ctaText={home?.heroCtaText}
          ctaHref="/work"
        />
        <About
          heading={home?.aboutHeading}
          body={home?.aboutBody}
          ctaLearnLabel={home?.aboutCtaLearn}
          ctaContactLabel={home?.aboutCtaContact}
        />
        <Work projects={projects} />
        <CTA
          headline={home?.ctaHeadline}
          body={home?.ctaBody}
          emailLabel={home?.ctaEmailLabel}
          emailHref={home?.ctaEmailHref}
          linkedInLabel={home?.ctaLinkedInLabel}
          linkedInHref={home?.ctaLinkedInHref}
        />
        <Footer />
      </main>
    </div>
  );
}
