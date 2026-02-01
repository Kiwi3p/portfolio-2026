import Link from "next/link";
import { JaggedDivider } from "./JaggedDivider";

export function Footer({
  useJaggedDivider = false,
}: {
  useJaggedDivider?: boolean;
}) {
  return (
    <footer className="w-full bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12 lg:px-12">
        <Link
          href="/"
          className="text-link-style mb-4 block text-[var(--color-link)]"
        >
          JT
        </Link>
        <p className="text-caption-style text-[var(--color-paragraph2)]">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
      {useJaggedDivider ? (
        <JaggedDivider
          fill="var(--color-black)"
          className="text-[var(--color-black)]"
        />
      ) : (
        <div
          className="h-2 w-full"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#000 0 25%, #fff 0 50%) 50% / 16px 16px",
          }}
        />
      )}
    </footer>
  );
}
