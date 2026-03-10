import { notFound } from "next/navigation"
import { CategoryDetail } from "@/components/menu/category-detail"
import { menuCategories } from "@/lib/menu-data"

interface CategoryDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPageProps) {
  const { slug } = await params

  const category =
    menuCategories.find((item) => item.slug === slug) ??
    menuCategories.find((item) => item.id === slug)

  if (!category) {
    notFound()
  }

  return (
    <main style={{ viewTransitionName: "page" }}>
      <CategoryDetail category={category} />
    </main>
  )
}