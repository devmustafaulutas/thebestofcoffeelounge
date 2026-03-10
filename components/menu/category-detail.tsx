"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "@/components/gsap-provider"
import { type MenuCategory, type MenuItem, formatPrice } from "@/lib/menu-data"
import { ArrowLeft, Sparkles, TrendingUp, Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"

interface CategoryDetailProps {
  category: MenuCategory
  onBack: () => void
}

export function CategoryDetail({ category, onBack }: CategoryDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      )

      // Items stagger
      itemsRef.current.forEach((item, index) => {
        if (!item) return

        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.1 + index * 0.05,
            ease: "power3.out",
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [category])

  const handleBack = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: onBack,
    })
  }

  return (
    <div ref={containerRef} className="min-h-screen pb-24">
      {/* Sticky Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50"
      >
        <div className="flex items-center gap-4 px-4 py-4 max-w-2xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="rounded-full flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="min-w-0">
            <h1 className="font-serif text-xl font-bold text-foreground truncate">
              {category.name}
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-48 md:h-64">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Items List */}
      <div className="px-4 -mt-8 relative z-10 max-w-2xl mx-auto">
        <div className="space-y-3">
          {category.items.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              onClick={() => setSelectedItem(item)}
              className="group flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 hover:border-primary/30 cursor-pointer transition-all duration-200 active:scale-[0.99]"
            >
              {/* Item Image */}
              {item.image && (
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>
              )}

              {/* Item Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  {item.isNew && (
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0 text-[10px] px-1.5 py-0">
                      Yeni
                    </Badge>
                  )}
                  {item.isPopular && (
                    <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-0 text-[10px] px-1.5 py-0">
                      Populer
                    </Badge>
                  )}
                  {item.isSignature && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-[10px] px-1.5 py-0">
                      Ozel
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex-shrink-0 text-right">
                <span className="font-serif text-lg font-bold text-primary">
                  {formatPrice(item.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Drawer */}
      <Drawer open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DrawerContent className="max-h-[90dvh]">
          <div className="mx-auto w-full max-w-lg overflow-y-auto">
            {selectedItem && (
              <>
                {/* Drawer Header Image */}
                {selectedItem.image && (
                  <div className="relative h-56 md:h-72 w-full">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <DrawerClose asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </DrawerClose>
                  </div>
                )}

                <DrawerHeader className={!selectedItem.image ? "pt-6" : "-mt-12 relative z-10"}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <DrawerTitle className="font-serif text-2xl text-left">
                        {selectedItem.name}
                      </DrawerTitle>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedItem.isNew && (
                          <Badge className="bg-emerald-500 hover:bg-emerald-600">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Yeni
                          </Badge>
                        )}
                        {selectedItem.isPopular && (
                          <Badge className="bg-amber-500 hover:bg-amber-600">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Populer
                          </Badge>
                        )}
                        {selectedItem.isSignature && (
                          <Badge className="bg-primary hover:bg-primary/90">
                            <Star className="w-3 h-3 mr-1" />
                            Ozel
                          </Badge>
                        )}
                        {selectedItem.tags?.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DrawerHeader>

                <div className="px-4 pb-8">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {/* Price Card */}
                  <div className="mt-6 p-6 bg-muted/50 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Fiyat</span>
                      <span className="font-serif text-3xl font-bold text-primary">
                        {formatPrice(selectedItem.price)}
                      </span>
                    </div>
                  </div>

                  {/* Note */}
                  <p className="mt-6 text-xs text-muted-foreground text-center">
                    Fiyatlara KDV dahildir. Alerjen bilgisi icin personelimize danisabilirsiniz.
                  </p>
                </div>
              </>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
