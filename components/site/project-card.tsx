import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { ProjectView } from "@/lib/projects/service";
import { formatCompact } from "@/lib/npm/fetchers";
import { formatNumber, activityStatus } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: ProjectView }) {
  const status = activityStatus(project.lastPushedAt);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.name}
        </h3>
        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.language ? <Badge variant="secondary">{project.language}</Badge> : null}
        {project.license ? <Badge variant="outline">{project.license}</Badge> : null}
        <Badge variant="ghost">{status}</Badge>
      </div>

      <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Star className="size-3.5" /> {formatNumber(project.stars)}
        </span>
        {project.npm ? (
          <span>{formatCompact(project.npm.lastMonth)} downloads/mo</span>
        ) : (
          <span>{formatNumber(project.forks)} forks</span>
        )}
      </div>
    </Link>
  );
}
