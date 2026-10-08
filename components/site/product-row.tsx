import Link from "next/link";
import { ArrowUpRight, Star, Download } from "lucide-react";
import type { ProjectView } from "@/lib/projects/service";
import { formatCompact } from "@/lib/npm/fetchers";
import { formatNumber } from "@/lib/format";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function ProductCard({ project }: { project: ProjectView }) {
  const isEdgeBalancer = project.slug === "edgebalancer";
  const isAxioDB = project.slug === "axiodb";

  return (
    <div className="glass glass-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] bg-white/80 p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      {/* Glow highlight */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              {project.categoryLabel}
            </span>
            {project.flagship && (
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-50 px-2 py-0.5 text-[10.5px] font-medium text-blue-700">
                Flagship
              </span>
            )}
            {isEdgeBalancer && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-50 px-2 py-0.5 text-[10.5px] font-medium text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live SaaS
              </span>
            )}
            {isAxioDB && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-50 px-2 py-0.5 text-[10.5px] font-medium text-amber-700">
                27k+ downloads/yr
              </span>
            )}
          </div>

          <span className="font-mono text-xs rounded-md border border-black/[0.06] bg-slate-100/80 px-2.5 py-1 text-slate-600 font-medium">
            {project.distribution}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            {project.name}
          </Link>
        </h3>

        {/* Summary */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.summary}
        </p>
      </div>

      {/* Meta & Actions */}
      <div className="mt-6 pt-5 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
        {/* Quick stats */}
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
          {project.stars > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star className="size-3.5 text-amber-500 fill-amber-500/20" />
              <span>{formatNumber(project.stars)}</span>
            </span>
          )}
          {project.npm && (
            <span className="inline-flex items-center gap-1">
              <Download className="size-3.5 text-blue-600" />
              <span>{formatCompact(project.npm.lastYear)} / yr</span>
            </span>
          )}
          {project.license && (
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-600 border border-black/[0.04]">
              {project.license}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <span>{isEdgeBalancer ? "Open App" : "Live Site"}</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-primary transition-colors"
          >
            <span>Overview</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductCatalogue({ projects }: { projects: ProjectView[] }) {
  return (
    <Stagger className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <StaggerItem key={project.slug} index={index}>
          <ProductCard project={project} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
