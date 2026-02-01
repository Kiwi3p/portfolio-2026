"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const defaultNavItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

type HeaderVariant = "light" | "dark";

type NavItem = { href: string; label: string };

export function Header({
  variant,
  navItems: navItemsProp,
  siteName = "JT",
}: {
  variant?: HeaderVariant;
  navItems?: NavItem[] | null;
  siteName?: string;
}) {
  const pathname = usePathname();
  const isDark =
    variant === "dark" || (pathname && pathname.startsWith("/about"));
  const navItems = navItemsProp?.length ? navItemsProp : defaultNavItems;

  const headerBg = isDark ? "bg-[var(--color-bg3)]" : "bg-[var(--color-bg)]";
  const borderColor = isDark
    ? "border-[var(--color-divider2)]/20"
    : "border-[var(--color-divider-light)]";
  const textColor = isDark
    ? "text-[var(--color-white)]"
    : "text-[var(--color-link)]";
  const linkClass = `text-link-style ${textColor} transition-opacity hover:opacity-80`;

  return (
    <header className={`w-full border-b ${borderColor} ${headerBg}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <Link href="/" className={`${linkClass} md:text-[26px]`}>
          {siteName}
        </Link>
        <nav className="flex flex-wrap items-center gap-6 md:gap-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${linkClass} text-[20px] uppercase md:text-[26px]`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: isDark
            ? "repeating-conic-gradient(#fff 0 25%, #000 0 50%) 50% / 16px 16px"
            : "repeating-conic-gradient(#000 0 25%, #fff 0 50%) 50% / 16px 16px",
        }}
      />
    </header>
  );
}
