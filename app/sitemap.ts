import type { MetadataRoute } from "next";

const SITE_URL = "https://weddingos.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/wedding-planners`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/quintas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
