"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const text = textRef.current
    const cta = ctaRef.current

    if (!section || !heading || !text || !cta) return

    // Create timeline for hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        heading.querySelectorAll(".word"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
      )
      .fromTo(text, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
      .fromTo(cta.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.4")

    // Parallax effect on scroll
    gsap.to(".hero-image", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      tl.kill()
    }
  }, [])

  // Split heading text into words for animation
  const headingText = "Crafting Spaces That Inspire"
  const headingWords = headingText.split(" ").map((word, index) => (
    <span key={index} className="word inline-block mr-[0.25em]">
      {word}
    </span>
  ))

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./assets/imgmain.png"
          alt="Modern architectural building"
          fill
          className="hero-image object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            {headingWords}
          </h1>
          <p ref={textRef} className="text-lg md:text-xl mb-8 max-w-xl">
            We design and build innovative architectural solutions that transform how people experience spaces.
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/about">Discover Our Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

