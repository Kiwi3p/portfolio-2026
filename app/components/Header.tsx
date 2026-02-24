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
  subhead,
  largeTitle = false,
}: {
  variant?: HeaderVariant;
  navItems?: NavItem[] | null;
  siteName?: string;
  subhead?: string | null;
  largeTitle?: boolean;
}) {
  const pathname = usePathname();
  const isDark =
    variant === "dark" || (pathname && pathname.startsWith("/about"));
  const navItems = navItemsProp?.length ? navItemsProp : defaultNavItems;
  const showTwoColumn = subhead != null && subhead.trim() !== "";

  const headerBg = isDark ? "bg-[var(--color-bg3)]" : "bg-[var(--color-bg)]";
  const borderColor = isDark
    ? "border-[var(--color-divider2)]/20"
    : "border-[var(--color-divider-light)]";
  const textColor = isDark
    ? "text-[var(--color-white)]"
    : "text-[var(--color-link)]";
  const linkClass = `text-link-style ${textColor} transition-opacity hover:opacity-80`;
  const isLargeTitle = largeTitle || showTwoColumn;
  const homeLinkClass = `${linkClass} block w-fit ${
    isLargeTitle
      ? "text-logo-display-size text-[var(--color-headline)]"
      : "text-2xl md:text-[26px]"
  }`;

  return (
    <header className={`w-full ${headerBg}`}>
      <div
        className={`mx-auto max-w-7xl px-6 py-6 md:px-8 lg:px-12 ${
          showTwoColumn
            ? "grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-12"
            : "flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        }`}
      >
        <Link href="/" className={homeLinkClass}>
          {siteName}
        </Link>
        {showTwoColumn ? (
          <div className="flex flex-col gap-4 border-t border-[var(--color-divider)] pt-4 lg:border-t-0 lg:pt-0">
            <p
              className={`text-body-style text-[18px] uppercase leading-tight md:text-[20px] ${textColor}`}
            >
              {subhead}
            </p>
            <hr className="border-t border-[var(--color-divider)]" />
            <nav className="flex flex-wrap items-center gap-6 pt-2 md:gap-8">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${linkClass} text-[18px] uppercase md:text-[22px] lg:text-[26px]`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        ) : (
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
        )}
      </div>
      {/* Checkerboard pattern — full-width separator (reference image one) */}
      <div
        className="h-6 w-full shrink-0 md:h-8"
        style={{
          backgroundColor: isDark ? "#000" : "#fff",
          backgroundImage: [
            `linear-gradient(45deg, ${
              isDark ? "#fff" : "#000"
            } 25%, transparent 25%)`,
            `linear-gradient(-45deg, ${
              isDark ? "#fff" : "#000"
            } 25%, transparent 25%)`,
            `linear-gradient(45deg, transparent 75%, ${
              isDark ? "#fff" : "#000"
            } 75%)`,
            `linear-gradient(-45deg, transparent 75%, ${
              isDark ? "#fff" : "#000"
            } 75%)`,
          ].join(", "),
          backgroundSize: "16px 16px",
          backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0",
        }}
      />
    </header>
  );
}
