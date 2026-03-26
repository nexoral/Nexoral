"use client";

import { motion } from "framer-motion";
import {
  slideInRight,
  slideInLeft,
} from "@/lib/animations/variants";
import { useInView, useReducedMotion } from "@/lib/animations/hooks";

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
  threshold?: number;
}

/**
 * SlideIn animation component
 * Slides in from left or right when element enters viewport
 * Automatically respects user's motion preferences
 */
export function SlideIn({
  children,
  className,
  direction = "right",
  delay = 0,
  threshold = 0.1,
}: SlideInProps) {
  const { ref, controls } = useInView(threshold);
  const prefersReducedMotion = useReducedMotion();

  const variants = direction === "right" ? slideInRight : slideInLeft;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
