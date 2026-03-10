import { Hero } from "@/components/menu/hero"
import { CategoryGrid } from "@/components/menu/category-grid"
import { Footer } from "@/components/menu/footer"

export default function MenuPage() {
  return (
    <main className="relative min-h-screen" style={{ viewTransitionName: "page" }}>
      <Hero />
      <CategoryGrid />
      <Footer />
    </main>
  )
}