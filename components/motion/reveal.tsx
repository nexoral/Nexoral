"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** A single block that fades and rises into view once. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  pop = false,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Hero treatment: a gentle overshoot instead of a plain fade-up. */
  pop?: boolean;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={pop ? { opacity: 0, y, scale: 0.975 } : { opacity: 0, y }}
      whileInView={
        pop
          ? { opacity: 1, y: 0, scale: [0.975, 1.015, 1] }
          : { opacity: 1, y: 0 }
      }
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: pop ? 0.7 : 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {},
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
      // Slight jitter so the cascade never reads as mechanical.
      delay: index * 0.06 + (((index * 7) % 5) - 2) * 0.01,
    },
  }),
};

/** Container that cascades its `StaggerItem` children into view. */
export function Stagger({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} custom={index} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
