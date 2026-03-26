"use client";

import { useEffect, useState, useRef } from "react";
import { useAnimation } from "framer-motion";

/**
 * Hook to detect if user prefers reduced motion
 * Respects system accessibility preferences
 * @returns boolean indicating if reduced motion is preferred
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook to detect when an element is in viewport
 * Triggers animation when element becomes visible
 * @param threshold - Percentage of element that must be visible (0-1)
 * @param triggerOnce - If true, animation only triggers once
 * @returns {ref, controls, inView} - Ref to attach to element, animation controls, and visibility state
 */
export function useInView(
  threshold: number = 0.1,
  triggerOnce: boolean = true
) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        setInView(isInView);

        if (isInView && (!triggerOnce || !hasTriggered)) {
          controls.start("visible");
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!isInView && !triggerOnce) {
          controls.start("hidden");
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, threshold, triggerOnce, hasTriggered]);

  return { ref, controls, inView };
}

/**
 * Hook to track scroll progress as a percentage
 * Useful for progress indicators and parallax effects
 * @returns number - Scroll progress from 0 to 100
 */
export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollProgress;
}

/**
 * Hook to track scroll position
 * @returns {scrollY, scrollDirection} - Current scroll position and direction
 */
export function useScrollPosition(): {
  scrollY: number;
  scrollDirection: "up" | "down" | null;
} {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY, scrollDirection };
}

/**
 * Hook for counter animation
 * Animates a number from 0 to target value
 * @param target - Target number to count to
 * @param duration - Animation duration in milliseconds
 * @returns current counter value
 */
export function useCounter(target: number, duration: number = 2000): number {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (target - startValue) * easeOut);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isInView]);

  // Return both count and setIsInView to allow external trigger
  return count;
}

/**
 * Trigger function to start counter animation
 * Used with useCounter hook
 */
export function useCounterTrigger() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, inView } = useInView(0.3, true);

  useEffect(() => {
    if (inView && !shouldAnimate) {
      setShouldAnimate(true);
    }
  }, [inView, shouldAnimate]);

  return { ref, shouldAnimate };
}

/**
 * Hook to detect device capabilities
 * Used to disable heavy animations on low-end devices
 * @returns boolean indicating if device can handle animations
 */
export function useDeviceCapabilities(): {
  canAnimate: boolean;
  reducedMotion: boolean;
} {
  const [canAnimate, setCanAnimate] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 4;

    // Disable complex animations on devices with fewer than 4 cores
    setCanAnimate(cores >= 4);
  }, []);

  return {
    canAnimate: canAnimate && !reducedMotion,
    reducedMotion,
  };
}
