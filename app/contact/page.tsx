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
    region: "USA",
    items: [
      {
        name: "THE ARTISANAL GROCER",
        email: "HELLO@EXAMPLE.COM",
        phone: "415-123-4567",
      },
    ],
  },
  {
    region: "EUROPE",
    items: [{ name: "LE MARCHE BIO", email: "HELLO@EXAMPLE.COM" }],
  },
  {
    region: "ASIA",
    items: [{ name: "KURASHI & CO.", email: "HELLO@EXAMPLE.COM" }],
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
          title={contact?.title ?? "OUR STOCK LISTS"}
          regions={regions}
          backgroundImageSrc={null}
        />
        <ContactPageMid phone={contact?.midPhone} email={contact?.midEmail} />
        <Footer useJaggedDivider />
      </main>
    </div>
  );
}
