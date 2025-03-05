"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactCta() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    // Create timeline for CTA animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
    })

    tl.fromTo(content.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 })

    // Background animation
    gsap.fromTo(
      section,
      { backgroundPosition: "0% 50%" },
      {
        backgroundPosition: "100% 50%",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      },
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-primary/90 to-primary/70 text-white"
      style={{
        backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to Transform Your Vision Into Reality?</h2>
          <p className="text-white/80 text-lg">
            Let's collaborate to create spaces that inspire, function beautifully, and exceed your expectations. Our
            team is ready to bring your architectural dreams to life.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us Today <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

