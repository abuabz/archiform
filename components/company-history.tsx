"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CompanyHistory() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const timeline = timelineRef.current

    if (!section || !timeline) return

    // Animate section heading
    gsap.fromTo(
      ".history-heading",
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

    // Animate timeline items
    gsap.fromTo(
      ".timeline-item",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
        },
      },
    )
  }, [])

  const historyItems = [
    {
      year: "2005",
      title: "Foundation",
      description:
        "Archiform was founded by a group of visionary architects with a mission to create innovative and sustainable architectural solutions.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2010",
      title: "First Major Project",
      description:
        "Completed our first landmark project, the Azure Tower, which won multiple design awards and established our reputation for excellence.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2015",
      title: "International Expansion",
      description:
        "Opened our first international office in London, expanding our reach and bringing our design philosophy to a global audience.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2020",
      title: "Sustainability Focus",
      description:
        "Launched our sustainability initiative, committing to carbon-neutral designs and environmentally responsible practices.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="history-heading text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From our humble beginnings to becoming a leading architectural firm, our journey has been defined by
            innovation, excellence, and a commitment to transforming spaces.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted transform md:translate-x-[-0.5px]"></div>

          {historyItems.map((item, index) => (
            <div
              key={item.year}
              className={`timeline-item relative mb-16 last:mb-0 md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 md:pr-12 md:pl-0 pl-12 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-primary transform translate-x-[-50%] md:translate-x-[50%] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                <div className={`p-6 bg-muted/30 rounded-lg ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

