"use client"

import { useEffect, useRef, useState, useCallback, useMemo } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, X, Sparkles, TrendingUp, Star, ChevronRight, Sun, Moon } from "lucide-react"
import { gsap } from "@/components/gsap-provider"
import { useTheme } from "next-themes"
import { type MenuCategory, type MenuItem, type MenuSortGroup, formatPrice } from "@/lib/menu-data"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer"

interface CategoryDetailProps {
  category: MenuCategory
}
type DetailGroup = {
  key: string
  label: string
  icon: string
  items: MenuItem[]
}

const SORT_GROUP_META: Record<MenuSortGroup, { label: string; icon: string; order: number }> = {
  espresso: { label: "Espresso Bazlı", icon: "◉", order: 1 },
  filter: { label: "Filtre Bazlı", icon: "◌", order: 2 },
  strong: { label: "Yoğun Kahveler", icon: "✦", order: 3 },
  "milky-classic": { label: "Sütlü Klasikler", icon: "◍", order: 4 },
  "milky-flavored": { label: "Aromalı Sütlüler", icon: "✿", order: 5 },
  traditional: { label: "Geleneksel Kahveler", icon: "◆", order: 6 },
  frappe: { label: "Frappe", icon: "❄", order: 7 },
  "soft-drink": { label: "Soğuk İçecekler", icon: "◈", order: 8 },
  snack: { label: "Atıştırmalıklar", icon: "▣", order: 9 },
  food: { label: "Yiyecekler", icon: "▤", order: 10 },
}

function useLongPress(onLongPress: () => void, onRelease: () => void, delay = 500) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fired = useRef(false)

  const start = useCallback(() => {
    fired.current = false
    timerRef.current = setTimeout(() => {
      fired.current = true
      onLongPress()
    }, delay)
  }, [onLongPress, delay])

  const cancel = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    onRelease()
  }, [onRelease])

  return {
    onTouchStart: start,
    onTouchEnd: cancel,
    onMouseDown: start,
    onMouseUp: cancel,
    onMouseLeave: cancel,
    didFire: () => fired.current,
  }
}

function SkeletonItem() {
  return (
    <div className="flex items-center gap-4 px-5 py-4 md:px-7 md:py-5 border-b border-[var(--gold)]/6">
      <div className="w-[68px] h-[68px] md:w-[84px] md:h-[84px] flex-shrink-0 rounded-xl bg-muted animate-pulse" />
      <div className="flex-1 space-y-2.5">
        <div className="h-4 bg-muted rounded-full animate-pulse w-2/3" />
        <div className="h-3 bg-muted rounded-full animate-pulse w-full" />
        <div className="h-3 bg-muted rounded-full animate-pulse w-1/3" />
      </div>
      <div className="h-7 w-16 bg-muted rounded-full animate-pulse flex-shrink-0" />
    </div>
  )
}

interface ItemRowProps {
  item: MenuItem
  onSelect: (item: MenuItem, el: HTMLButtonElement | null) => void
  onPreviewShow: (item: MenuItem, el: HTMLButtonElement | null) => void
  onPreviewHide: () => void
}

function ItemRow({ item, onSelect, onPreviewShow, onPreviewHide }: ItemRowProps) {
  const btnRef = useRef<HTMLButtonElement>(null)

  const { didFire, ...longPressEvents } = useLongPress(
    () => onPreviewShow(item, btnRef.current),
    onPreviewHide,
    500
  )

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={() => {
        if (!didFire()) onSelect(item, btnRef.current)
      }}
      {...longPressEvents}
      className="group w-full text-left border-b border-[var(--gold)]/6 last:border-0 hover:bg-[var(--gold)]/3 dark:hover:bg-[var(--gold)]/4 transition-colors duration-200 relative select-none"
    >
      <div className="absolute left-0 top-0 w-0.5 h-full bg-[var(--gold)] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

      <div className="flex items-center gap-4 px-5 py-4 md:px-7 md:py-5">
        <div className="relative w-[68px] h-[68px] md:w-[84px] md:h-[84px] flex-shrink-0 rounded-xl overflow-hidden border border-[var(--gold)]/10">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 68px, 84px"
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">Menü</span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                <h3 className="text-[1rem] md:text-[1.1rem] font-medium tracking-tight text-foreground group-hover:text-[var(--gold)] transition-colors duration-200 truncate">
                  {item.name}
                </h3>
                {item.isSignature && (
                  <span className="text-[8px] uppercase tracking-[0.18em] text-[var(--gold)] border border-[var(--gold)]/25 bg-[var(--gold)]/8 rounded-full px-2 py-0.5">
                    Özel
                  </span>
                )}
                {item.isPopular && (
                  <span className="text-[8px] uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400 border border-amber-500/25 bg-amber-500/8 rounded-full px-2 py-0.5">
                    Popüler
                  </span>
                )}
                {item.isNew && (
                  <span className="text-[8px] uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 bg-emerald-500/8 rounded-full px-2 py-0.5">
                    Yeni
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-xs md:text-sm leading-5 text-muted-foreground font-light line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2.5 flex-shrink-0">
              <span className="font-display text-xl md:text-2xl font-semibold text-[var(--gold)] tracking-tight">
                {formatPrice(item.price)}
              </span>
              <div className="hidden md:flex w-8 h-8 rounded-full border border-[var(--gold)]/15 items-center justify-center text-muted-foreground group-hover:border-[var(--gold)]/40 group-hover:text-[var(--gold)] transition-all duration-200">
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}

export function CategoryDetail({ category }: CategoryDetailProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null)
  const [previewPos, setPreviewPos] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [navSticky, setNavSticky] = useState(false)

  const groups = useMemo<DetailGroup[]>(() => {
    const hasSortGroups = category.items.some((item) => item.sortGroup)

    if (!hasSortGroups) {
      return [
        {
          key: "all",
          label: "Tümü",
          icon: "◈",
          items: category.items,
        },
      ]
    }

    const groupedMap = new Map<MenuSortGroup, MenuItem[]>()

    for (const item of category.items) {
      if (!item.sortGroup) continue

      const current = groupedMap.get(item.sortGroup) ?? []
      current.push(item)
      groupedMap.set(item.sortGroup, current)
    }

    const result = Array.from(groupedMap.entries())
      .sort((a, b) => SORT_GROUP_META[a[0]].order - SORT_GROUP_META[b[0]].order)
      .map(([groupKey, items]) => ({
        key: groupKey,
        label: SORT_GROUP_META[groupKey].label,
        icon: SORT_GROUP_META[groupKey].icon,
        items,
      }))

    return result.length
      ? result
      : [
        {
          key: "all",
          label: "Tümü",
          icon: "◈",
          items: category.items,
        },
      ]
  }, [category.items])

  const priceRange = useMemo(() => {
    const prices = category.items.map(i => i.price)
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    return min === max ? formatPrice(min) : `${formatPrice(min)} – ${formatPrice(max)}`
  }, [category.items])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 700)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const top = contentRef.current?.getBoundingClientRect().top ?? 999
      setNavSticky(top <= 64)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (groups.length <= 1) return
    const observers: IntersectionObserver[] = []
    sectionRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(i) },
        { rootMargin: "-30% 0px -60% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [groups.length, loaded])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }
      )
      gsap.fromTo(heroRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" }
      )
      gsap.to(".detail-hero-img", {
        yPercent: 18, ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.12, ease: "power3.out" }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [category.id])

  const handleBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        if (window.history.length > 1) router.back()
        else router.push("/")
      })
    } else {
      if (window.history.length > 1) router.back()
      else router.push("/")
    }
  }

  const handleItemClick = (item: MenuItem, el: HTMLButtonElement | null) => {
    if (!el) { setSelectedItem(item); return }
    gsap.to(el, {
      scale: 0.97, duration: 0.1, ease: "power2.in",
      onComplete:
        () => {
          gsap.to(el, {
            scale: 1, duration: 0.2, ease: "power2.out",
            onComplete: () => setSelectedItem(item),
          })
        },
    })
  }

  const handlePreviewShow = useCallback((item: MenuItem, el: HTMLButtonElement | null) => {
    if (!item.image || !el) return
    const rect = el.getBoundingClientRect()
    setPreviewPos({ x: rect.left + rect.width / 2, y: rect.top })
    setPreviewItem(item)
  }, [])

  const handlePreviewHide = useCallback(() => setPreviewItem(null), [])

  const scrollToTab = (index: number) => {
    setActiveTab(index)
    const el = sectionRefs.current[index]
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 120
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background pb-28 relative">

      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-4 pt-3.5 md:px-5">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between rounded-full border border-[var(--gold)]/15 bg-background/75 px-2.5 py-2 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleBack}
                className="h-10 w-10 rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/5 flex items-center justify-center text-foreground/70 hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-all duration-200"
                aria-label="Geri"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="hidden sm:block">
                <p className="font-display text-sm italic font-medium text-foreground/85 leading-tight">
                  {category.name}
                </p>
                <p className="text-[9px] text-[var(--gold)] font-light tracking-wide">{priceRange}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-2 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 px-3.5 py-1.5 hover:border-[var(--gold)]/40 hover:bg-[var(--gold)]/10 transition-all duration-200"
              aria-label="Tema değiştir"
            >
              <div className="relative w-3.5 h-3.5">
                <Sun className="absolute inset-0 h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[var(--gold)]" />
                <Moon className="absolute inset-0 h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[var(--gold)]" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.22em] font-light text-foreground/60 dark:block hidden">Dark</span>
              <span className="text-[9px] uppercase tracking-[0.22em] font-light text-foreground/60 dark:hidden block">Light</span>
            </button>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="relative h-[46svh] min-h-[300px] w-full overflow-hidden md:h-[55svh] md:min-h-[380px]">
        <div className="detail-hero-img absolute inset-0 scale-110">
          <Image src={category.image} alt={category.name} fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-9 md:pb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-[var(--gold)]/70" />
              <span className="text-[9px] uppercase tracking-[0.32em] text-[var(--gold)] font-light">Seçili kategori</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light italic text-white leading-none tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              {category.name}
            </h1>
            {category.description && (
              <p className="mt-3 text-sm md:text-base text-white/60 font-light max-w-md">{category.description}</p>
            )}
          </div>
        </div>
      </section>

      <section ref={contentRef} className="relative z-10 -mt-2">
        <div className="mx-auto max-w-6xl px-4 md:px-5">
          <div className="rounded-[1.8rem] border border-[var(--gold)]/12 bg-card/90 backdrop-blur-sm shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] overflow-hidden">

            <div className="flex items-end justify-between px-5 pt-7 pb-5 md:px-7 md:pt-8">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-[var(--gold)] font-light">Menü</p>
                <h2 className="font-display text-3xl md:text-4xl font-light italic text-foreground mt-1">
                  Lezzet <span className="font-semibold not-italic">Listesi</span>
                </h2>
              </div>
              <span className="text-xs text-muted-foreground font-light pb-1.5">{category.items.length} ürün</span>
            </div>

            {groups.length > 1 && (
              <div
                ref={navRef}
                className={`transition-all duration-300 ${navSticky
                  ? "sticky top-[60px] z-40 bg-card/95 backdrop-blur-xl border-b border-[var(--gold)]/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)]"
                  : "border-b border-[var(--gold)]/8"
                  }`}
              >
                <div className="flex items-center gap-1.5 px-4 py-3 md:px-6 overflow-x-auto scrollbar-hide">
                  {groups.map((group, i) => (
                    <button
                      key={group.label}
                      type="button"
                      onClick={() => scrollToTab(i)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-all duration-250 flex-shrink-0 ${activeTab === i
                        ? "bg-[var(--gold)] text-background shadow-[0_4px_12px_-2px_rgba(201,164,110,0.4)]"
                        : "text-muted-foreground border border-[var(--gold)]/15 hover:border-[var(--gold)]/30 hover:text-foreground"
                        }`}
                    >
                      <span>{group.icon}</span>
                      {group.label}
                      <span className={`text-[9px] ${activeTab === i ? "opacity-70" : "opacity-40"}`}>
                        {group.items.length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {groups.map((group, gi) => (
              <div
                key={group.label}
                ref={(el) => { sectionRefs.current[gi] = el }}
              >
                {groups.length > 1 && (
                  <div className="flex items-center gap-3 px-5 pt-5 pb-2 md:px-7">
                    <span className="text-[9px] uppercase tracking-[0.28em] text-[var(--gold)]/70 font-light">{group.label}</span>
                    <div className="flex-1 h-px bg-[var(--gold)]/10" />
                  </div>
                )}

                {!loaded
                  ? Array.from({ length: 3 }).map((_, si) => <SkeletonItem key={si} />)
                  : group.items.map((item) => (
                    <ItemRow
                      key={item.id}
                      item={item}
                      onSelect={handleItemClick}
                      onPreviewShow={handlePreviewShow}
                      onPreviewHide={handlePreviewHide}
                    />
                  ))
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {previewItem?.image && (
        <div
          className="long-press-preview"
          style={{
            left: Math.min(
              Math.max(previewPos.x - 110, 16),
              (typeof window !== "undefined" ? window.innerWidth : 400) - 240
            ),
            top: Math.max(previewPos.y - 290, 80),
            width: 220,
          }}
        >
          <div className="relative w-full h-44">
            <Image
              src={previewItem.image}
              alt={previewItem.name}
              fill
              sizes="220px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3">
              <p className="font-display text-base italic text-white font-medium leading-tight">{previewItem.name}</p>
              <p className="font-display text-lg font-semibold text-[var(--gold)] mt-0.5">{formatPrice(previewItem.price)}</p>
            </div>
          </div>
        </div>
      )}

      <Drawer open={!!selectedItem} onOpenChange={(open) => { if (!open) setSelectedItem(null) }}>
        <DrawerContent className="max-h-[92dvh] border-[var(--gold)]/15 bg-background">
          <div className="mx-auto w-full max-w-xl overflow-y-auto">
            {selectedItem && (
              <>
                {selectedItem.image && (
                  <div className="relative h-64 w-full md:h-80 overflow-hidden rounded-t-[inherit]">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    <DrawerClose asChild>
                      <button type="button" className="absolute right-4 top-4 w-10 h-10 rounded-full border border-white/15 bg-black/30 backdrop-blur-lg flex items-center justify-center text-white hover:bg-black/50 transition-colors" aria-label="Kapat">
                        <X className="h-4 w-4" />
                      </button>
                    </DrawerClose>
                  </div>
                )}

                <DrawerHeader className={selectedItem.image ? "relative z-10 -mt-14 px-4 pb-0 md:px-5" : "px-4 pt-6 pb-0 md:px-5"}>
                  <div className="rounded-2xl border border-[var(--gold)]/15 bg-card/95 p-5 md:p-6">
                    <DrawerTitle asChild>
                      <h2 className="font-display text-3xl md:text-4xl font-light italic text-foreground tracking-tight text-left leading-tight">
                        {selectedItem.name}
                      </h2>
                    </DrawerTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedItem.isNew && (
                        <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 bg-emerald-500/8 rounded-full px-3 py-1">
                          <Sparkles className="h-2.5 w-2.5" /> Yeni
                        </span>
                      )}
                      {selectedItem.isPopular && (
                        <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400 border border-amber-500/25 bg-amber-500/8 rounded-full px-3 py-1">
                          <TrendingUp className="h-2.5 w-2.5" /> Popüler
                        </span>
                      )}
                      {selectedItem.isSignature && (
                        <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-[var(--gold)] border border-[var(--gold)]/25 bg-[var(--gold)]/8 rounded-full px-3 py-1">
                          <Star className="h-2.5 w-2.5" /> Özel
                        </span>
                      )}
                      {selectedItem.tags?.map((tag) => (
                        <span key={tag} className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground border border-border/60 rounded-full px-3 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </DrawerHeader>

                <div className="px-4 pb-10 pt-4 md:px-5 md:pb-12">
                  {selectedItem.description && (
                    <p className="text-sm md:text-base leading-7 text-muted-foreground font-light">{selectedItem.description}</p>
                  )}
                  <div className="mt-6 rounded-2xl border border-[var(--gold)]/18 bg-gradient-to-br from-[var(--gold)]/6 to-[var(--gold)]/2 p-5 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-light">Fiyat</p>
                      <p className="text-xs text-muted-foreground/60 mt-0.5">KDV dahil</p>
                    </div>
                    <span className="font-display text-5xl font-semibold text-[var(--gold)] tracking-tight leading-none">
                      {formatPrice(selectedItem.price)}
                    </span>
                  </div>
                  <p className="mt-5 text-center text-[10px] text-muted-foreground/50 font-light leading-6 tracking-wide">
                    Alerjen bilgisi için personelimize danışabilirsiniz.
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