"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture",
    excerpt: "Exploring innovative approaches to creating environmentally responsible buildings.",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "Alex Morgan",
  },
  {
    id: 2,
    title: "Biophilic Design: Bringing Nature Indoors",
    excerpt: "How incorporating natural elements improves wellbeing and productivity in interior spaces.",
    date: "April 22, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "Sarah Chen",
  },
  {
    id: 3,
    title: "Urban Renewal Through Architectural Innovation",
    excerpt: "Case studies of successful urban regeneration projects and their impact on communities.",
    date: "March 10, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "Michael Torres",
  },
]

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const posts = postsRef.current

    if (!section || !heading || !posts) return

    // Animate heading
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
          start: "top 80%",
        },
      },
    )

    // Animate blog posts
    gsap.fromTo(
      ".blog-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: posts,
          start: "top 70%",
        },
      },
    )

    // Hover animations for blog cards
    const blogCards = document.querySelectorAll(".blog-card")
    blogCards.forEach((card) => {
      const image = card.querySelector(".blog-image")

      card.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: 1.05, duration: 0.4 })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.4 })
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughts on architecture, design trends, and industry innovations.
          </p>
        </div>

        <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="blog-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="blog-image object-cover transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {post.date} • By {post.author}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="ghost" size="sm" className="group p-0">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

