"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) return

    // Create timeline for hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 }).fromTo(
      content.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      "-=0.5",
    )

    // Parallax effect on scroll
    gsap.to(".about-hero-image", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[70vh] flex items-center">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern architectural office"
          fill
          className="about-hero-image object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div ref={contentRef} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">About Archiform</h1>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            We are a team of passionate architects and designers dedicated to creating innovative spaces that inspire
            and transform.
          </p>
        </div>
      </div>
    </section>
  )
}

