"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimationControls } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimationControls();
  const prevPathname = useRef(pathname);
  const isAnimating = useRef(false);

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [controls]);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      controls.set({ opacity: 0, scale: 0.98 });
      controls.start({ opacity: 1, scale: 1 });
      isAnimating.current = false;
    }
  }, [pathname, controls]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        anchor.target === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        href === pathname
      )
        return;

      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      isAnimating.current = true;

      controls
        .start({
          opacity: 0,
          scale: 0.98,
          transition: { duration: 0.3, ease },
        })
        .then(() => {
          router.push(href);
        });
    },
    [controls, router, pathname]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={controls}
      transition={{ duration: 0.4, ease }}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
}
