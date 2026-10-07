import { ImageResponse } from "next/og";
import { getProjectDetailBySlug } from "@/lib/projects/service";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "Nexoral Systems project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO = "https://avatars.githubusercontent.com/u/230163045?s=200&v=4";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectDetailBySlug(slug);
  const name = project?.name ?? "Open-source project";
  const description = project?.description ?? SITE_CONFIG.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px",
          color: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "28px" }}>
          <img src={LOGO} width={48} height={48} alt="" style={{ borderRadius: "12px" }} />
          <div style={{ color: "#52525b" }}>{SITE_CONFIG.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "80px", fontWeight: 700, lineHeight: 1.05 }}>{name}</div>
          <div style={{ fontSize: "30px", color: "#52525b", maxWidth: "920px" }}>
            {description.length > 180 ? `${description.slice(0, 177)}...` : description}
          </div>
        </div>

        <div style={{ display: "flex", gap: "24px", fontSize: "24px", color: "#71717a" }}>
          {project?.language ? <span>{project.language}</span> : null}
          {project?.license ? <span>{project.license}</span> : null}
          <span>nexoral.in/projects/{slug}</span>
        </div>
      </div>
    ),
    size
  );
}
