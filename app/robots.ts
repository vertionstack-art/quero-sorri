import type { MetadataRoute } from "next";
import { clinica } from "@/content/clinica";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${clinica.seo.url}/sitemap.xml`,
  };
}
