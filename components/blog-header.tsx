"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function BlogHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    const content = contentRef.current

    if (!header || !content) return

    // Animate header content
    gsap.fromTo(
      content.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
      },
    )
  }, [])

  return (
    <section ref={headerRef} className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Blog</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Insights, ideas, and inspiration from the world of architecture and design.
          </p>
        </div>
      </div>
    </section>
  )
}

