"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { fadeIn } from "@/lib/animations/variants";

interface Contributor {
  username: string;
  avatarUrl: string;
  contributions: number;
  profileUrl: string;
}

interface ContributorGridProps {
  contributors: Contributor[];
}

export function ContributorGrid({ contributors }: ContributorGridProps) {
  if (contributors.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 font-mono text-emerald-400">
        // Contributors
      </h3>
      <TooltipProvider>
        <div className="flex flex-wrap gap-3">
          {contributors.map((contributor, index) => (
            <motion.a
              key={contributor.username}
              href={contributor.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Tooltip>
                <TooltipTrigger>
                  <div className="relative">
                    <Image
                      src={contributor.avatarUrl}
                      alt={contributor.username}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-slate-700 group-hover:border-emerald-400 transition-colors"
                    />
                    {contributor.contributions > 10 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {contributor.contributions > 99 ? "99+" : contributor.contributions}
                      </div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{contributor.username}</p>
                  <p className="text-xs text-slate-400">
                    {contributor.contributions} contribution{contributor.contributions !== 1 ? "s" : ""}
                  </p>
                </TooltipContent>
              </Tooltip>
            </motion.a>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
