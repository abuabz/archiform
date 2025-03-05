"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Azure Tower",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "A stunning 40-story commercial tower with a distinctive glass facade.",
  },
  {
    id: 2,
    title: "Harmony Residences",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    description: "Luxury apartment complex with integrated green spaces and sustainable design.",
  },
  {
    id: 3,
    title: "Nexus Cultural Center",
    category: "Cultural",
    image: "/placeholder.svg?height=600&width=800",
    description: "Award-winning cultural center featuring exhibition spaces and an amphitheater.",
  },
]

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const projectsContainer = projectsRef.current

    if (!section || !heading || !projectsContainer) return

    // Animate section heading
    gsap.fromTo(
      heading.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
        },
      },
    )

    // Animate projects
    gsap.fromTo(
      ".project-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsContainer,
          start: "top 70%",
        },
      },
    )

    // Hover animations for project cards
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => {
      const image = card.querySelector(".project-image")
      const content = card.querySelector(".project-content")

      card.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: 1.05, duration: 0.4 })
        gsap.to(content, { y: -10, duration: 0.4 })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.4 })
        gsap.to(content, { y: 0, duration: 0.4 })
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative architectural designs that push boundaries and redefine spaces.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden border-0 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="project-image object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">{project.category}</span>
                </div>
              </div>
              <CardContent className="project-content p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="ghost" size="sm" className="group">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

