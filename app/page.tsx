import { Hero } from "@/components/menu/hero"
import { CategoryGrid } from "@/components/menu/category-grid"
import { Footer } from "@/components/menu/footer"
import { getMenuCategorySummaries } from "@/lib/menu-repository"

export const revalidate = 60 * 60

export default async function MenuPage() {
  const categories = getMenuCategorySummaries()

  return (
    <main className="relative min-h-screen" style={{ viewTransitionName: "page" }}>
      <Hero />
      <CategoryGrid categories={categories} />
      <Footer />
    </main>
  )
}