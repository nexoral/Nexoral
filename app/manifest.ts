import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f5f2",
    theme_color: "#f4f5f2",
    icons: [{ src: "/logo.jpg", sizes: "200x200", type: "image/jpeg" }],
  };
}
