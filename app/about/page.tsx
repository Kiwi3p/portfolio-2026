import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { AboutPageHero } from "@/app/components/AboutPageHero";
import { Recognition } from "@/app/components/Recognition";
import type { RecognitionItem } from "@/app/components/Recognition";
import { FounderBlock } from "@/app/components/FounderBlock";
import { ContactBlock } from "@/app/components/ContactBlock";
import { AboutMidSection } from "@/app/components/AboutMidSection";
import { getGlobal, getAboutPage } from "@/app/lib/content";

const defaultRecognition: RecognitionItem[] = [
  { year: "2025", label: "BEST PORTFOLIO — AWARD NAME" },
  { year: "2025", label: "GOLD MEDAL — DESIGN CATEGORY" },
  { year: "2024", label: "BEST SUSTAINABLE PACKAGING" },
  { year: "2024", label: "EDITOR'S CHOICE — BEST SITE" },
  { year: "2024", label: "MOST ELEGANT UX" },
  { year: "2024", label: "BEST LOW & NO ALCOHOL BEVERAGE" },
];

export default async function AboutPage() {
  const [global, about] = await Promise.all([getGlobal(), getAboutPage()]);
  const recognitionItems = about?.recognitionItems?.length
    ? about.recognitionItems
    : defaultRecognition;

  return (
    <div className="min-h-screen">
      <Header navItems={global?.navItems} siteName={global?.siteName} />
      <main>
        <AboutPageHero
          statement={
            about?.heroStatement ??
            "JT REPRESENTS A NEW ERA OF CREATIVE DEVELOPMENT, WHERE CRAFT AND FUNCTIONALITY CONVERGE."
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Recognition items={recognitionItems} />
          <div className="flex flex-col">
            <FounderBlock
              name={about?.founderName ?? "MIKE VERA"}
              imageSrc={about?.founderImage ?? null}
            />
            <ContactBlock
              phone={about?.contactPhone}
              email={about?.contactEmail}
              social={about?.contactSocial}
            />
          </div>
        </div>
        <AboutMidSection
          imageSrc={about?.midSectionImage ?? null}
          establishedYear={about?.establishedYear ?? "2005"}
        />
        <Footer useJaggedDivider />
      </main>
    </div>
  );
}
