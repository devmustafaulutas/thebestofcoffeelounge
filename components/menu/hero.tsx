"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "@/components/gsap-provider"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Initial states
      gsap.set([logoRef.current, titleRef.current, subtitleRef.current, scrollRef.current], {
        opacity: 0,
      })

      // Animation sequence
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.2"
        )

      // Continuous logo float
      gsap.to(logoRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      })

      // Scroll indicator bounce
      gsap.to(scrollRef.current?.querySelector(".scroll-dot") || null, {
        y: 8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50 rounded-full bg-card/80 backdrop-blur-sm border border-border/50"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Tema degistir</span>
      </Button>

      {/* Logo */}
      <div ref={logoRef} className="relative w-36 h-36 md:w-44 md:h-44 mb-8">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110" />
        <Image
          src="/images/logo.png"
          alt="The Best Of Coffee Lounge"
          fill
          className="object-contain relative z-10 drop-shadow-lg"
          priority
        />
      </div>

      {/* Title */}
      <div ref={titleRef} className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          <span className="block">the Best Of</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl text-primary mt-1">
            COFFEE
          </span>
          <span className="block text-lg md:text-xl lg:text-2xl font-normal tracking-[0.2em] text-secondary mt-2">
            Lounge
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="mt-8 text-muted-foreground text-center text-sm md:text-base max-w-xs"
      >
        Premium kahve deneyimi icin hazirlanmis{" "}
        <span className="text-foreground font-medium">ozel menumuz</span>
      </p>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          Menu
        </span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="scroll-dot w-1 h-2 bg-primary rounded-full" />
        </div>
        <ChevronDown className="w-4 h-4 text-muted-foreground/50 animate-bounce" />
      </div>
    </section>
  )
}
