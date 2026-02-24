import type { Metadata } from "next";
import {
  Staatliches,
  Jaro,
  Figtree,
  Geist,
  Montserrat,
} from "next/font/google";
import { getGlobal } from "@/app/lib/content";
import { PageTransition } from "@/app/components/PageTransition";
import "./globals.css";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches",
});

const jaro = Jaro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jaro",
});

const figtree = Figtree({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-figtree",
});

const geist = Geist({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-geist",
});

/** Body copy — geometric sans, Gotham-like. Easy to read at 20px. */
const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return {
    title: global?.defaultMetaTitle ?? "JT Portfolio 2026",
    description: global?.defaultMetaDescription ?? "Portfolio — JT 2026",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${staatliches.variable} ${jaro.variable} ${figtree.variable} ${geist.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
