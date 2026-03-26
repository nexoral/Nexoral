"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations/variants";
import { useInView, useReducedMotion } from "@/lib/animations/hooks";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

/**
 * FadeIn animation component
 * Fades in and slides up when element enters viewport
 * Automatically respects user's motion preferences
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: FadeInProps) {
  const { ref, controls } = useInView(threshold);
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
