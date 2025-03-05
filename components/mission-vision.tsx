"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Compass, Lightbulb, Target } from "lucide-react"

export default function MissionVision() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current

    if (!section || !cards) return

    // Animate section heading
    gsap.fromTo(
      ".mission-heading",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      },
    )

    // Animate cards
    gsap.fromTo(
      ".mission-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cards,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mission-heading text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guided by our core values, we strive to create architecture that makes a positive impact on people and the
            planet.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mission-card bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To create innovative architectural solutions that enhance the way people live, work, and interact with
              their environment, while maintaining the highest standards of design excellence and sustainability.
            </p>
          </div>

          <div className="mission-card bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be recognized globally as a leader in architectural innovation, creating spaces that inspire, function
              beautifully, and contribute positively to communities and the environment for generations to come.
            </p>
          </div>

          <div className="mission-card bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Excellence in design and execution</li>
              <li>• Innovation and creative problem-solving</li>
              <li>• Sustainability and environmental responsibility</li>
              <li>• Collaboration and client-centered approach</li>
              <li>• Integrity and professional ethics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

