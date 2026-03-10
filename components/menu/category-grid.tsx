"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { gsap } from "@/components/gsap-provider"
import { menuCategories, type MenuCategory } from "@/lib/menu-data"
import { cn } from "@/lib/utils"

interface CategoryGridProps {
  onCategorySelect: (category: MenuCategory) => void
}

export function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        )
      }

      const validCards = cardsRef.current.filter(Boolean)

      if (validCards.length) {
        gsap.fromTo(
          validCards,
          {
            opacity: 0,
            y: 36,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardClick = (category: MenuCategory, card: HTMLButtonElement) => {
    gsap.to(card, {
      scale: 0.97,
      duration: 0.12,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.18,
          ease: "power3.out",
          onComplete: () => onCategorySelect(category),
        })
      },
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-12 md:px-6 md:py-20"
      aria-labelledby="menu-categories-title"
    >
      <div className="mx-auto max-w-6xl">
        <div ref={headerRef} className="mb-8 md:mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-primary/80 backdrop-blur-sm md:text-xs">
            Menü
          </span>

          <h2
            id="menu-categories-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
          >
            Kategoriler
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
            Lezzetleri kategori bazlı keşfedin. Hızlı, net ve mobil kullanım için optimize edildi.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {menuCategories.map((category, index) => (
            <button
              key={category.id}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              type="button"
              onClick={(e) => handleCardClick(category, e.currentTarget)}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border/60 bg-card text-left",
                "aspect-[0.92/1] min-h-[210px] w-full",
                "shadow-[0_10px_30px_-16px_rgba(0,0,0,0.35)]",
                "transition-[transform,border-color,box-shadow,background-color] duration-300",
                "active:scale-[0.985] active:border-primary/40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              )}
              aria-label={`${category.name} kategorisini aç`}
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  priority={index < 4}
                  className="object-cover transition-transform duration-700 ease-out group-active:scale-[1.03] md:group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_38%)] opacity-80" />

              <div className="relative flex h-full flex-col justify-between p-3.5 sm:p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-md sm:text-[11px]">
                    Kategori
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90 backdrop-blur-md transition-transform duration-300 group-active:scale-95 md:group-hover:translate-x-0.5">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur-md sm:p-3.5">
                    <h3 className="line-clamp-2 text-base font-semibold leading-tight text-white sm:text-lg md:text-xl">
                      {category.name}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-white/75 sm:text-sm">
                      {category.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/85">
                        {category.itemCount} ürün
                      </span>

                      <span className="text-[11px] font-medium tracking-wide text-white/70">
                        Görüntüle
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}