"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { fadeIn } from "@/lib/animations/variants";
import type { Feature } from "@/lib/markdown/feature-extractor";

interface FeatureShowcaseProps {
  features: Feature[];
}

export function FeatureShowcase({ features }: FeatureShowcaseProps) {
  if (features.length === 0) return null;

  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamic icon access
    const Icon = LucideIcons[iconName] || LucideIcons.Star;
    return Icon;
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 font-mono text-emerald-400">
        // Key Features
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const IconComponent = getIcon(feature.icon);

          return (
            <motion.div
              key={feature.title}
              className="p-5 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 transition-all"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
