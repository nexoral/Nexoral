import { Variants } from "framer-motion";

/**
 * Animation variant for fading in elements from below
 * Usage: Scroll-triggered reveals, page content
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1], // Expo out
    },
  },
};

/**
 * Animation variant for sliding in from the right
 * Usage: Navigation items, list items
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1], // Cubic in-out
    },
  },
};

/**
 * Animation variant for sliding in from the left
 * Usage: Sidebar, modal panels
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

/**
 * Container variant for staggering children animations
 * Usage: Lists, grids, card collections
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between children
      delayChildren: 0.2, // Wait 200ms before starting
    },
  },
};

/**
 * Animation variant for scaling in elements
 * Usage: Modals, tooltips, popovers
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1], // Spring ease
    },
  },
};

/**
 * Hover animation for interactive cards
 * Usage: Project cards, feature cards
 */
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 12px 24px rgba(16, 185, 129, 0.2)",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/**
 * Button hover and press animation
 * Usage: CTA buttons, interactive elements
 */
export const buttonAnimation = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  tap: { scale: 0.98 },
};

/**
 * Fade in and slide up variant with custom delay
 */
export const fadeInUp = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.19, 1, 0.22, 1],
    },
  },
});

/**
 * Animation for page transitions
 * Usage: Route changes, page navigation
 */
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

/**
 * Counter animation for statistics
 * Usage: Stats display, metrics
 */
export const counterAnimation = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

/**
 * Shimmer effect for loading states
 * Usage: Skeleton loaders, loading badges
 */
export const shimmer: Variants = {
  initial: {
    backgroundPosition: "-200% 0",
  },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
