"use client";

import { motion } from "framer-motion";
import { GitCommit, Tag, Calendar } from "lucide-react";
import { fadeIn } from "@/lib/animations/variants";

interface Commit {
  sha: string;
  message: string;
  author: string;
  date: string;
  url: string;
}

interface Release {
  version: string;
  name: string;
  publishedAt: string;
  url: string;
}

interface ActivityTimelineProps {
  commits: Commit[];
  releases: Release[];
}

export function ActivityTimeline({ commits, releases }: ActivityTimelineProps) {
  // Combine and sort by date
  const activities = [
    ...commits.slice(0, 5).map((commit) => ({
      type: "commit" as const,
      date: new Date(commit.date),
      data: commit,
    })),
    ...releases.slice(0, 3).map((release) => ({
      type: "release" as const,
      date: new Date(release.publishedAt),
      data: release,
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  if (activities.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 font-mono text-emerald-400">
        // Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.slice(0, 8).map((activity, index) => (
          <motion.div
            key={index}
            className="flex gap-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            {/* Timeline Icon */}
            <div className="flex-shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === "commit"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-emerald-500/20 text-emerald-400"
                }`}
              >
                {activity.type === "commit" ? (
                  <GitCommit className="w-4 h-4" />
                ) : (
                  <Tag className="w-4 h-4" />
                )}
              </div>
              {index < activities.length - 1 && (
                <div className="w-px h-8 bg-slate-700 mx-auto mt-1"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              {activity.type === "commit" ? (
                <a
                  href={activity.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {activity.data.message}
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span>{activity.data.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(activity.data.date).toLocaleDateString()}
                    </span>
                  </div>
                </a>
              ) : (
                <a
                  href={activity.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    Release {activity.data.version}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{activity.data.name}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {new Date(activity.data.publishedAt).toLocaleDateString()}
                  </div>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
