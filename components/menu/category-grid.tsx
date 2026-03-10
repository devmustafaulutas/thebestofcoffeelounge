"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { gsap } from "@/components/gsap-provider"
import { menuCategories, type MenuCategory } from "@/lib/menu-data"

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
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
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
            y: 42,
            scale: 0.965,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardClick = (category: MenuCategory, card: HTMLButtonElement) => {
    gsap.timeline()
      .to(card, {
        scale: 0.982,
        duration: 0.12,
        ease: "power2.out",
      })
      .to(card, {
        scale: 1,
        duration: 0.2,
        ease: "power3.out",
        onComplete: () => onCategorySelect(category),
      })
  }

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-12 md:px-6 md:py-20"
      aria-labelledby="menu-categories-title"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="mb-8 text-center md:mb-12">
          <h2
            id="menu-categories-title"
            className="text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
          >
            Menü Seçkisi
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
            Özenle hazırlanan lezzetleri sade ve zarif bir deneyimle keşfedin.
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
              className="group relative aspect-[0.88/1] overflow-hidden rounded-[1.75rem] border border-black/5 bg-card text-left shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] transition-transform duration-300 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 dark:border-white/10"
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-black/6" />
              <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-black/55 via-black/22 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%)]" />

              <div className="relative flex h-full flex-col justify-between p-3.5 sm:p-4 md:p-5">
                <div className="flex justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white transition-transform duration-300 group-active:scale-95 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </div>
                </div>

                <div className="pr-2">
                  <h3 className="text-lg font-semibold leading-tight tracking-[-0.03em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-xl md:text-[1.7rem]">
                    {category.name}
                  </h3>

                  <div className="mt-3 h-px w-10 bg-white/30" />

                  <p className="mt-3 line-clamp-2 max-w-[90%] text-xs leading-5 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] sm:text-sm md:text-[15px] md:leading-6">
                    {category.description}
                  </p>

                  <div className="mt-5">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/65 sm:text-[12px]">
                      Menüye geç
                    </span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}