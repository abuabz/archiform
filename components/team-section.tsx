"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "John Anderson",
    position: "Principal Architect & Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 20 years of experience, John leads our team with a passion for innovative design and sustainable architecture.",
  },
  {
    name: "Sarah Chen",
    position: "Senior Architect",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah specializes in residential architecture and has led some of our most acclaimed housing and mixed-use projects.",
  },
  {
    name: "Michael Torres",
    position: "Design Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael brings a unique creative vision to every project, with expertise in cultural and public space design.",
  },
  {
    name: "Emily Johnson",
    position: "Sustainability Lead",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily ensures our projects meet the highest standards of environmental responsibility and sustainable design.",
  },
]

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const team = teamRef.current

    if (!section || !heading || !team) return

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
          start: "top 70%",
        },
      },
    )

    // Animate team members
    gsap.fromTo(
      ".team-member",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: team,
          start: "top 70%",
        },
      },
    )

    // Hover animations for team members
    const teamCards = document.querySelectorAll(".team-member")
    teamCards.forEach((card) => {
      const overlay = card.querySelector(".team-overlay")
      const content = card.querySelector(".team-content")

      card.addEventListener("mouseenter", () => {
        gsap.to(overlay, { opacity: 0.9, duration: 0.3 })
        gsap.to(content, { y: 0, opacity: 1, duration: 0.3 })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(overlay, { opacity: 0, duration: 0.3 })
        gsap.to(content, { y: 20, opacity: 0, duration: 0.3 })
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of architects and designers brings creativity, expertise, and passion to every project.
          </p>
        </div>

        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member relative rounded-lg overflow-hidden group">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <div className="team-overlay absolute inset-0 bg-primary opacity-0 transition-opacity"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/80">{member.position}</p>
                </div>
                <div className="team-content transform translate-y-20 opacity-0 transition-all">
                  <p className="text-white/90 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

