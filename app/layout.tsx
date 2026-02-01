import type { Metadata } from "next";
import { Staatliches, Jaro, Figtree, Geist } from "next/font/google";
import { getGlobal } from "@/app/lib/content";
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
      className={`${staatliches.variable} ${jaro.variable} ${figtree.variable} ${geist.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
