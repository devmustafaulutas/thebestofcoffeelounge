"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/components/gsap-provider"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.08, ease: "none" })
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      gsap.set(ring, { x: ringX, y: ringY })
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.7, duration: 0.25, ease: "power2.out" })
      gsap.to(dot, { scale: 0.4, duration: 0.2 })
    }
    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 0.5, duration: 0.3, ease: "power2.out" })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    document.addEventListener("mousemove", onMove)
    rafId = requestAnimationFrame(animate)

    const bindHovers = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })
    }

    bindHovers()

    const observer = new MutationObserver(bindHovers)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 99999,
          width: 6, height: 6, borderRadius: "50%", background: "var(--gold)",
          transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 99998,
          width: 36, height: 36, borderRadius: "50%", border: "1.5px solid var(--gold)",
          transform: "translate(-50%, -50%)", opacity: 0.5 }}
      />
    </>
  )
}