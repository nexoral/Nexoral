import Link from "next/link";
import type { ProjectView } from "@/lib/projects/service";
import { formatCompact } from "@/lib/npm/fetchers";
import { formatNumber } from "@/lib/format";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

/**
 * One line of the product catalogue. Structure carries the information:
 * left is what it is, right is how you get it and how it is doing.
 */
export function ProductRow({ project }: { project: ProjectView }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group -mx-3 grid gap-4 rounded-md border-t border-border px-3 py-7 transition-colors hover:bg-glass lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12"
    >
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-heading text-xl font-medium tracking-tight transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          {project.flagship ? (
            <span className="font-mono text-[11px] text-primary">flagship</span>
          ) : null}
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      </div>

      <dl className="flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-[11.5px] text-muted-foreground lg:flex-col lg:items-end lg:gap-1.5 lg:text-right">
        <div>{project.distribution}</div>
        {project.language ? <div>{project.language}</div> : null}
        {project.license ? <div>{project.license}</div> : null}
        <div>{formatNumber(project.stars)} stars</div>
        {project.npm ? <div>{formatCompact(project.npm.lastMonth)} downloads/mo</div> : null}
      </dl>
    </Link>
  );
}

export function ProductCatalogue({ projects }: { projects: ProjectView[] }) {
  return (
    <Stagger className="border-b border-border">
      {projects.map((project, index) => (
        <StaggerItem key={project.slug} index={index}>
          <ProductRow project={project} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
