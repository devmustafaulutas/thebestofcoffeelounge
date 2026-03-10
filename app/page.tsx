"use client"

import { useState, useCallback } from "react"
import { GSAPProvider } from "@/components/gsap-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { Hero } from "@/components/menu/hero"
import { CategoryGrid } from "@/components/menu/category-grid"
import { CategoryDetail } from "@/components/menu/category-detail"
import { Footer } from "@/components/menu/footer"
import { type MenuCategory } from "@/lib/menu-data"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null)

  const handleCategorySelect = useCallback((category: MenuCategory) => {
    setSelectedCategory(category)
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const handleBack = useCallback(() => {
    setSelectedCategory(null)
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <GSAPProvider>
      <SmoothScrollProvider>
        <main className="relative min-h-screen">
          {selectedCategory ? (
            <CategoryDetail category={selectedCategory} onBack={handleBack} />
          ) : (
            <>
              <Hero />
              <CategoryGrid onCategorySelect={handleCategorySelect} />
              <Footer />
            </>
          )}
        </main>
      </SmoothScrollProvider>
    </GSAPProvider>
  )
}
