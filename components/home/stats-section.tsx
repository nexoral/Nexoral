"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/animations/hooks";
import { fadeIn, scaleIn } from "@/lib/animations/variants";
import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  value: string;
  label: string;
  color: string;
  delay: number;
}

function StatCard({ value, label, color, delay }: StatCardProps) {
  const { ref, inView } = useInView(0.3, true);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  // Extract number from value string (e.g., "10+" -> 10)
  const targetNumber = parseInt(value.match(/\d+/)?.[0] || "0");
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    if (!inView || hasAnimated.current || prefersReducedMotion) return;

    hasAnimated.current = true;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(targetNumber * easeOut);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, targetNumber, prefersReducedMotion]);

  const displayValue = prefersReducedMotion ? value : `${count}${suffix}`;

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-slate-600 transition-colors"
      variants={scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      <div className={`text-3xl font-bold text-${color}-400 mb-2 font-mono`}>
        {displayValue}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

interface StatsSectionProps {
  totalProjects: number;
  totalStars: number;
  mitLicensedPercentage: number;
}

export function StatsSection({ totalProjects, totalStars, mitLicensedPercentage }: StatsSectionProps) {
  const stats = [
    { value: `${totalProjects}+`, label: "Open Source Projects", color: "emerald" },
    { value: `${totalStars}+`, label: "GitHub Stars", color: "blue" },
    { value: "2K+", label: "NPM Downloads", color: "purple" },
    { value: `${mitLicensedPercentage}%`, label: "MIT Licensed", color: "yellow" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          color={stat.color}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
