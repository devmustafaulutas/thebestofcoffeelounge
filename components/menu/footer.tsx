"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap, ScrollTrigger } from "@/components/gsap-provider"
import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative mt-20 bg-card border-t border-border">
      {/* Decorative top gradient */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div ref={contentRef} className="px-4 py-12 md:py-16 max-w-4xl mx-auto">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/images/logo.png"
              alt="The Best Of Coffee Lounge"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-serif text-xl font-bold">the Best Of Coffee Lounge</h3>
          <p className="text-muted-foreground text-sm mt-2">
            Premium kahve deneyimi
          </p>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Adres</span>
            <span className="text-sm font-medium mt-1">Istanbul, Turkiye</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Calisma Saatleri</span>
            <span className="text-sm font-medium mt-1">09:00 - 23:00</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-muted/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Telefon</span>
            <span className="text-sm font-medium mt-1">+90 xxx xxx xx xx</span>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} The Best Of Coffee Lounge. Tum haklar saklidir.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            QR Menu Sistemi
          </p>
        </div>
      </div>
    </footer>
  )
}
