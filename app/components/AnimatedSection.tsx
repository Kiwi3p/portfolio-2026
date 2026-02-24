"use client";

import { motion } from "motion/react";

const transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

type AnimatedSectionProps = {
  children: React.ReactNode;
  as?: "section" | "div";
  className?: string;
  id?: string;
};

export function AnimatedSection({
  children,
  as: Component = "section",
  className,
  id,
}: AnimatedSectionProps) {
  const MotionComponent = motion[Component] as typeof motion.section;

  return (
    <MotionComponent
      id={id}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </MotionComponent>
  );
}
