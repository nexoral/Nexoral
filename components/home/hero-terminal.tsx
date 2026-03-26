"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/variants";
import { useReducedMotion } from "@/lib/animations/hooks";

interface HeroTerminalProps {
  projectCount: number;
  starCount: number;
}

export function HeroTerminal({ projectCount = 10, starCount = 1000 }: HeroTerminalProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <StaticTerminal projectCount={projectCount} starCount={starCount} />;
  }

  return (
    <motion.div
      className="font-mono text-sm mb-8"
      variants={fadeInUp(0)}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden max-w-2xl">
        <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-1.5">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            />
          </div>
          <span className="text-slate-400 text-xs ml-2">bash</span>
        </div>
        <div className="p-4 space-y-1">
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-emerald-400">$</span>
            <span className="text-slate-300">./nexoral --info</span>
          </motion.div>
          <motion.div
            className="text-slate-500 pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Nexoral Systems v1.0.0
          </motion.div>
          <motion.div
            className="text-slate-400 pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Status: <span className="text-emerald-400">ACTIVE</span>
          </motion.div>
          <motion.div
            className="text-slate-400 pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Projects: <span className="text-blue-400">{projectCount}+</span>
          </motion.div>
          <motion.div
            className="text-slate-400 pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Stars: <span className="text-purple-400">{starCount}+</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function StaticTerminal({ projectCount, starCount }: HeroTerminalProps) {
  return (
    <div className="font-mono text-sm mb-8">
      <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden max-w-2xl">
        <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-slate-400 text-xs ml-2">bash</span>
        </div>
        <div className="p-4 space-y-1">
          <div className="flex gap-2">
            <span className="text-emerald-400">$</span>
            <span className="text-slate-300">./nexoral --info</span>
          </div>
          <div className="text-slate-500 pl-4">Nexoral Systems v1.0.0</div>
          <div className="text-slate-400 pl-4">
            Status: <span className="text-emerald-400">ACTIVE</span>
          </div>
          <div className="text-slate-400 pl-4">
            Projects: <span className="text-blue-400">{projectCount}+</span>
          </div>
          <div className="text-slate-400 pl-4">
            Stars: <span className="text-purple-400">{starCount}+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
