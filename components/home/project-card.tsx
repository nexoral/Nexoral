"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations/variants";
import { useReducedMotion } from "@/lib/animations/hooks";

interface ProjectCardProps {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  highlight: string;
  index: number;
}

export function ProjectCard({
  slug,
  name,
  description,
  tech,
  highlight,
  index,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <StaticCard {...{ slug, name, description, tech, highlight }} />;
  }

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${slug}`}
        className="group block p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all relative overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={false}
        />

        <div className="relative">
          <div className="flex justify-between items-start mb-3">
            <motion.h3
              className="text-2xl font-bold group-hover:text-emerald-400 transition-colors font-mono"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {name}
            </motion.h3>
            <motion.svg
              className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </div>
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3 font-mono">
            {highlight}
          </span>
          <p className="text-slate-300 mb-4 leading-relaxed text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <motion.span
                key={t}
                className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 font-mono border border-slate-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function StaticCard({
  slug,
  name,
  description,
  tech,
  highlight,
}: Omit<ProjectCardProps, "index">) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors font-mono">
            {name}
          </h3>
          <svg
            className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <span className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3 font-mono">
          {highlight}
        </span>
        <p className="text-slate-300 mb-4 leading-relaxed text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 font-mono border border-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
