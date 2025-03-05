"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    // Set default ease
    gsap.defaults({
      ease: "power2.out",
    })

    // Initialize ScrollTrigger
    ScrollTrigger.defaults({
      markers: false, // Set to true for debugging
    })

    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      ScrollTrigger.clearMatchMedia()
    }
  }, [])

  return <>{children}</>
}

