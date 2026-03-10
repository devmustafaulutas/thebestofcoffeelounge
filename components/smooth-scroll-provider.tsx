"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      syncTouch: false,
    })

    let frameId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}