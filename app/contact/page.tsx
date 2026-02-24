import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import {
  ContactPageContent,
  type ContactRegion,
} from "@/app/components/ContactPageContent";
import { ContactPageMid } from "@/app/components/ContactPageMid";
import { getGlobal, getContactPage } from "@/app/lib/content";

const defaultRegions: ContactRegion[] = [
  {
    region: "Connect",
    items: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jack-transue/" },
      { name: "GitHub", url: "https://github.com/Kiwi3p" },
    ],
  },
];

export default async function ContactPage() {
  const [global, contact] = await Promise.all([getGlobal(), getContactPage()]);
  const regions = contact?.regions?.length ? contact.regions : defaultRegions;

  return (
    <div className="min-h-screen">
      <Header navItems={global?.navItems} siteName={global?.siteName} />
      <main>
        <ContactPageContent
          title={contact?.title ?? "GET IN TOUCH"}
          regions={regions}
          backgroundImageSrc={null}
        />
        <ContactPageMid phone={contact?.midPhone} email={contact?.midEmail} />
        <Footer useJaggedDivider />
      </main>
    </div>
  );
}
