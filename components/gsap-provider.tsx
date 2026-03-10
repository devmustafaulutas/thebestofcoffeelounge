"use client"

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export function GSAPProvider({ children }: { children: ReactNode }) {
  const main = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        markers: false,
      })
    }, main)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={main}>
      {children}
    </div>
  )
}

export { gsap, ScrollTrigger }
