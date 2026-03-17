// app/menu/[slug]/page.tsx
import { notFound } from "next/navigation"
import { CategoryDetail } from "@/components/menu/category-detail"
import { getMenuCategoryBySlug, getMenuCategorySlugs } from "@/lib/menu-repository"

export const revalidate = 60 * 60

export function generateStaticParams() {
  return getMenuCategorySlugs().map((slug) => ({ slug }))
}

interface CategoryDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { slug } = await params
  const category = getMenuCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  return (
    <main style={{ viewTransitionName: "page" }}>
      <CategoryDetail category={category} />
    </main>
  )
}