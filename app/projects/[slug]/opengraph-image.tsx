import { ImageResponse } from "next/og";
import { getProjectDetailBySlug } from "@/lib/projects/service";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "Nexoral Systems product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#17191c";
const MUTED = "#575d64";
const PAPER = "#f4f5f2";
const ACCENT = "#2450d6";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectDetailBySlug(slug);
  const name = project?.name ?? "Open-source product";
  const summary = project?.summary ?? SITE_CONFIG.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "76px",
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 28 }}>
          <div style={{ width: 22, height: 22, background: ACCENT, borderRadius: 6 }} />
          <div style={{ color: MUTED }}>{SITE_CONFIG.name} / Products</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.025em" }}>
            {name}
          </div>
          <div style={{ fontSize: 30, color: MUTED, maxWidth: "940px" }}>
            {summary.length > 190 ? `${summary.slice(0, 187)}...` : summary}
          </div>
        </div>

        <div style={{ display: "flex", gap: "28px", fontSize: 24, color: MUTED }}>
          {project?.language ? <span>{project.language}</span> : null}
          {project?.license ? <span>{project.license}</span> : null}
          <span>nexoral.in/projects/{slug}</span>
        </div>
      </div>
    ),
    size
  );
}
