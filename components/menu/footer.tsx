"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "@/components/gsap-provider"
import { Instagram, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react"

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll(".footer-anim")
      if (items?.length) {
        gsap.fromTo(
          Array.from(items),
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        )
      }
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative border-t border-[var(--gold)]/15">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
      <div className="absolute inset-0 bg-[var(--espresso)]/5 dark:bg-black/30" />
      <div ref={contentRef} className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="footer-anim text-center mb-14">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full bg-[var(--gold)]/10 blur-xl" />
              <Image
                src="/images/logo.png"
                alt="The Best Of Coffee Lounge"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display text-2xl font-light italic text-foreground">
                the Best Of <span className="font-semibold not-italic">COFFEE</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] mt-1 font-light">
                Lounge — Kocaeli
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_1.3fr]">
          <div className="footer-anim">
            <div className="rounded-2xl border border-[var(--gold)]/12 bg-card/60 backdrop-blur-sm p-6 md:p-8 h-full flex flex-col">
              <p className="font-display text-xl md:text-2xl font-light italic text-foreground mb-2">
                Premium kahve<br /><span className="font-semibold not-italic">deneyimi</span>
              </p>
              <p className="text-sm text-muted-foreground font-light leading-7 mb-8 max-w-sm">
                Özenle hazırlanan kahveler, imza içecekler ve sıcak bir lounge atmosferi ile keyifli bir deneyim sunuyoruz.
              </p>

              <div className="mt-auto space-y-2.5">
                {[
                  { icon: MapPin, label: "Adres", value: "The Best of Coffee Lounge", sub: "Kocaeli, Türkiye" },
                  { icon: Clock, label: "Çalışma Saatleri", value: "09:00 – 00:00", sub: "Her gün açık" },
                  { icon: Phone, label: "Telefon", value: "+90 537 705 89 21", sub: null },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-center gap-4 rounded-xl border border-border/50 bg-background/60 px-4 py-3.5">
                    <div className="w-9 h-9 flex-shrink-0 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground leading-5">{value}</p>
                      {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="https://www.instagram.com/thebestofcoffeelounge/?hl=tr"
                  target="_blank"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/5 px-5 py-2.5 text-sm font-light text-foreground hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 transition-all duration-300"
                >
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                    <Instagram className="h-3.5 w-3.5 text-white" />
                  </span>
                  Instagram
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-anim">
            <div className="rounded-2xl border border-[var(--gold)]/12 bg-card/60 backdrop-blur-sm p-3 h-full flex flex-col">
              <div className="px-3 pt-3 pb-4">
                <p className="text-[9px] uppercase tracking-[0.28em] text-[var(--gold)] font-light mb-1">Lokasyon</p>
                <h3 className="font-display text-xl md:text-2xl font-light italic text-foreground">
                  Bizi <span className="font-semibold not-italic">ziyaret edin</span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground font-light">
                  Haritadan yol tarifi alabilirsiniz.
                </p>
              </div>
              <div className="flex-1 overflow-hidden rounded-xl border border-border/40 bg-muted/20 min-h-[280px]">
                <div className="relative w-full h-full" style={{ minHeight: 280 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.875143006607!2d29.93743!3d40.76477080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f0076c61609%3A0x283e46158f51d473!2sThe%20Best%20of%20Coffee%20Lounge!5e0!3m2!1str!2str!4v1773130962388!5m2!1str!2str"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Konum haritası"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-anim mt-10 pt-8 border-t border-[var(--gold)]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-light">
            &copy; {new Date().getFullYear()} The Best Of Coffee Lounge — Tüm haklar saklıdır.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]/50">
            QR Menu
          </p>
        </div>
      </div>
    </footer>
  )
}
