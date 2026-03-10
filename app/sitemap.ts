import type { MetadataRoute } from "next"
import { menuCategories } from "@/lib/menu-data"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls = menuCategories.map((cat) => ({
    url: `${BASE_URL}/menu/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...categoryUrls,
  ]
}