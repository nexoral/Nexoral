"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations/variants";
import { useInView, useReducedMotion } from "@/lib/animations/hooks";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

/**
 * StaggerChildren animation component
 * Animates children with stagger effect when container enters viewport
 * Use with motion.div children for best results
 * Automatically respects user's motion preferences
 */
export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  threshold = 0.1,
}: StaggerChildrenProps) {
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
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
