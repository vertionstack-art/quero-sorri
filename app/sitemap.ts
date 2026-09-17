import type { MetadataRoute } from "next";
import { clinica } from "@/content/clinica";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clinica.seo.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
