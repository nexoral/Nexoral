"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations/variants";
import { useReducedMotion } from "@/lib/animations/hooks";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}
