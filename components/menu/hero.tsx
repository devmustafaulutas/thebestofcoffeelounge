"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "@/components/gsap-provider"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const titleLine1Ref = useRef<HTMLDivElement>(null)
  const titleLine2Ref = useRef<HTMLDivElement>(null)
  const titleLine3Ref = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const themeRef = useRef<HTMLButtonElement>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set everything invisible
      gsap.set(
        [bgRef.current, logoRef.current, eyebrowRef.current, titleLine1Ref.current,
        titleLine2Ref.current, titleLine3Ref.current, subtitleRef.current,
        dividerRef.current, scrollRef.current, themeRef.current],
        { opacity: 0 }
      )
      gsap.set([titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current], { y: 60, skewY: 3 })
      gsap.set([eyebrowRef.current, subtitleRef.current, dividerRef.current], { y: 24 })
      gsap.set(logoRef.current, { scale: 0.85, y: 20 })

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.to(bgRef.current, { opacity: 1, duration: 1.4 })
        .to(logoRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.9 }, "-=1.0")
        .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6")
        .to(titleLine1Ref.current, { opacity: 1, y: 0, skewY: 0, duration: 0.8 }, "-=0.4")
        .to(titleLine2Ref.current, { opacity: 1, y: 0, skewY: 0, duration: 0.8 }, "-=0.65")
        .to(titleLine3Ref.current, { opacity: 1, y: 0, skewY: 0, duration: 0.8 }, "-=0.65")
        .to(dividerRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        .to(scrollRef.current, { opacity: 1, duration: 0.4 }, "-=0.3")
        .to(themeRef.current, { opacity: 1, duration: 0.4 }, "-=0.4")

      // Logo gentle float
      gsap.to(logoRef.current, {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      })

      // Scroll dot pulse
      gsap.to(".scroll-pulse", {
        scaleY: 0.3,
        transformOrigin: "top center",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Parallax on bg image
      gsap.to(".hero-bg-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="hero-bg-img absolute inset-0 scale-110">
          <Image
            src="/images/coffee-beans-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(42,20,8,0.3),transparent)]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Theme toggle */}
      <button
        ref={themeRef}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-5 right-5 z-50 flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-black/40 backdrop-blur-md px-3.5 py-2 text-white hover:border-[var(--gold)]/60 hover:bg-black/55 transition-all duration-200"
        aria-label="Tema değiştir"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[var(--gold)]" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[var(--gold)]" />
        <span className="text-[10px] uppercase tracking-[0.22em] font-light text-white/70 dark:block hidden">Dark mod</span>
        <span className="text-[10px] uppercase tracking-[0.22em] font-light text-white/70 dark:hidden block">Light mod</span>
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        {/* Logo */}
        <div ref={logoRef} className="relative w-24 h-24 md:w-32 md:h-32 mb-10">
          <div className="absolute inset-0 rounded-full bg-[var(--gold)]/20 blur-2xl scale-125" />
          <div className="absolute inset-0 rounded-full border border-[var(--gold)]/30" />
          <Image
            src="/images/logo.png"
            alt="The Best Of Coffee Lounge"
            fill
            className="object-contain relative z-10 drop-shadow-[0_0_24px_rgba(201,164,110,0.4)]"
            priority
          />
        </div>

        {/* Eyebrow */}
        <div ref={eyebrowRef} className="flex items-center gap-3 mb-7">
          <div className="h-px w-8 bg-[var(--gold)]/60" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)] font-light">
            Kocaeli
          </span>
          <div className="h-px w-8 bg-[var(--gold)]/60" />
        </div>

        {/* Title */}
        <div className="overflow-visible mb-1">
          <div ref={titleLine1Ref} className="font-display text-[8vw] md:text-6xl font-light italic text-white leading-none tracking-tight whitespace-nowrap pr-2">
            the Best Of
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={titleLine2Ref} className="font-display text-[18vw] md:text-9xl font-semibold text-[var(--gold)] leading-none tracking-[-0.03em]">
            COFFEE
          </div>
        </div>
        <div className="overflow-hidden mb-8">
          <div ref={titleLine3Ref} className="font-display text-[6vw] md:text-3xl font-light text-white/80 tracking-[0.25em] uppercase mt-1">
            Lounge
          </div>
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="flex items-center gap-4 mb-6 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--gold)]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--gold)]/50" />
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} className="text-white/55 text-sm leading-7 font-light tracking-wide max-w-xs">
          Premium kahve deneyimi için hazırlanmış{" "}
          <span className="text-[var(--gold-light)] font-normal">özel menümüz</span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-light">
          Menüyü Keşfet
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)]/60 to-transparent overflow-hidden">
          <div className="scroll-pulse w-full h-full bg-[var(--gold)]" />
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[var(--gold)]/60 animate-bounce" />
      </div>
    </section>
  )
}
