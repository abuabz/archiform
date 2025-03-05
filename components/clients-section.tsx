"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const clients = clientsRef.current

    if (!section || !heading || !clients) return

    // Animate section heading
    gsap.fromTo(
      heading.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: heading,
          start: "top 70%",
        },
      },
    )

    // Animate clients logos
    gsap.fromTo(
      ".client-logo",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: clients,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've had the privilege of working with leading organizations across various industries.
          </p>
        </div>

        <div ref={clientsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="client-logo flex items-center justify-center p-4">
              <Image
                src="/placeholder-logo.svg"
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

