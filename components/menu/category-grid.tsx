"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { gsap, ScrollTrigger } from "@/components/gsap-provider"
import { menuCategories } from "@/lib/menu-data"

export function CategoryGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true },
        }
      )

      const validCards = cardsRef.current.filter(Boolean)
      if (validCards.length) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 60, scale: 0.94 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.9, ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }

      gsap.to(".marquee-inner", {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    e.preventDefault()
    const el = e.currentTarget.parentElement
    if (!el) { window.location.href = `/menu/${slug}`; return }

    gsap.to(el, {
      scale: 0.94,
      duration: 0.12,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            if (document.startViewTransition) {
              document.startViewTransition(() => {
                window.location.href = `/menu/${slug}`
              })
            } else {
              window.location.href = `/menu/${slug}`
            }
          },
        })
      },
    })
  }

  const marqueeItems = ["Sıcak Kahveler", "Soğuk Kahveler", "Tatlılar", "Milkshake", "Frozen", "Yiyecekler", "Sıcak İçecekler", "Soğuk İçecekler"]

  return (
    <section ref={sectionRef} className="relative pb-24">
      <div className="overflow-hidden border-y border-[var(--gold)]/15 bg-[var(--espresso)]/5 dark:bg-[var(--gold)]/3 py-3 mb-16">
        <div className="marquee-inner flex whitespace-nowrap" style={{ width: "200%" }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] font-light opacity-60">
              {item}
              <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-50" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div ref={headerRef} className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)]/50" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)] font-light">Menü</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold)]/50" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light italic text-foreground leading-tight tracking-tight">
            Menü <span className="font-semibold not-italic">Listesi</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base font-light leading-7 max-w-md mx-auto">
            Özenle hazırlanan lezzetleri sade ve zarif bir deneyimle keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {menuCategories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => { cardsRef.current[index] = el }}
              className="relative"
            >
              <a
                href={`/menu/${category.slug}`}
                onClick={(e) => handleCardClick(e, category.slug)}
                className="group relative aspect-[0.82/1] overflow-hidden rounded-2xl block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/50 focus-visible:ring-offset-2 active:scale-[0.97] transition-transform duration-150"
                aria-label={`${category.name} kategorisini aç`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    priority={index < 4}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/8 group-hover:ring-[var(--gold)]/30 transition-all duration-500" />

                <div className="relative h-full flex flex-col justify-between p-4 md:p-5">
                  <div className="flex justify-end">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/50 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 group-hover:border-[var(--gold)]/30 group-hover:text-[var(--gold)] transition-all duration-300">
                      {category.itemCount} ürün
                    </div>
                  </div>
                  <div>
                    <div className="w-0 h-px bg-[var(--gold)] mb-3 group-hover:w-8 transition-all duration-500 ease-out" />
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      {category.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-white/60 font-light line-clamp-2 max-w-[90%]">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 overflow-hidden">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--gold)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        Keşfet
                      </span>
                      <div className="h-px flex-1 bg-[var(--gold)]/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}