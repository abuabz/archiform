"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const image = imageRef.current

    if (!section || !content || !image) return

    // Animate content
    gsap.fromTo(
      content.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      },
    )

    // Animate image
    gsap.fromTo(
      image,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      },
    )

    // Subtle parallax effect on image
    gsap.to(image.querySelector(".about-image"), {
      y: -30,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Innovative Architecture Studio</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </div>

            <p className="text-muted-foreground">
              Founded in 2005, Archiform has grown into a leading architectural practice with a reputation for
              innovative design and exceptional client service. Our team of talented architects and designers brings a
              wealth of experience and creativity to every project.
            </p>

            <p className="text-muted-foreground">
              We believe that great architecture goes beyond aesthetics—it enhances lives, strengthens communities, and
              respects the environment. Our holistic approach considers every aspect of a project, from initial concept
              to final construction.
            </p>

            <div className="pt-4">
              <Button asChild>
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Architectural team working"
              fill
              className="about-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

