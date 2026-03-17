// lib/menu-repository.ts
import "server-only"
import { menuCategories, type MenuCategory } from "@/lib/menu-data"

export type MenuCategorySummary = Pick<
  MenuCategory,
  "id" | "name" | "slug" | "description" | "image" | "itemCount"
>

export function getMenuCategorySummaries(): MenuCategorySummary[] {
  return menuCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    image: category.image,
    itemCount: category.itemCount,
  }))
}

export function getMenuCategoryBySlug(slug: string): MenuCategory | null {
  return (
    menuCategories.find((item) => item.slug === slug) ??
    menuCategories.find((item) => item.id === slug) ??
    null
  )
}

export function getMenuCategorySlugs(): string[] {
  return menuCategories.map((item) => item.slug)
}