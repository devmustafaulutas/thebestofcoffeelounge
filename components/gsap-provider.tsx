"use client"

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export function GSAPProvider({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        markers: false,
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return <div ref={mainRef}>{children}</div>
}

export { gsap, ScrollTrigger }