"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture",
    excerpt: "Exploring innovative approaches to creating environmentally responsible buildings.",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "Alex Morgan",
    category: "Sustainability",
  },
  {
    id: 2,
    title: "Biophilic Design: Bringing Nature Indoors",
    excerpt: "How incorporating natural elements improves wellbeing and productivity in interior spaces.",
    date: "April 22, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "Sarah Chen",
    category: "Interior Design",
  },
  {
    id: 3,
    title: "Urban Renewal Through Architectural Innovation",
    excerpt: "Case studies of successful urban regeneration projects and their impact on communities.",
    date: "March 10, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "Michael Torres",
    category: "Urban Planning",
  },
  {
    id: 4,
    title: "The Psychology of Space: How Architecture Affects Mood",
    excerpt: "Understanding the emotional impact of architectural design on human psychology.",
    date: "February 28, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "Emily Johnson",
    category: "Design Theory",
  },
  {
    id: 5,
    title: "Adaptive Reuse: Breathing New Life Into Old Buildings",
    excerpt: "Creative approaches to repurposing historic structures for modern needs.",
    date: "January 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
    author: "John Anderson",
    category: "Preservation",
  },
  {
    id: 6,
    title: "Emerging Materials in Modern Architecture",
    excerpt: "Exploring innovative building materials that are shaping the future of construction.",
    date: "December 5, 2022",
    image: "/placeholder.svg?height=400&width=600",
    author: "Sarah Chen",
    category: "Technology",
  },
]

const categories = [
  "All",
  "Sustainability",
  "Interior Design",
  "Urban Planning",
  "Design Theory",
  "Preservation",
  "Technology",
]

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const sectionRef = useRef<HTMLElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    const section = sectionRef.current
    const posts = postsRef.current

    if (!section || !posts) return

    // Animate blog posts when they come into view
    gsap.fromTo(
      ".blog-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: posts,
          start: "top 70%",
        },
      },
    )

    // Re-run animation when category changes
    const animatePosts = () => {
      gsap.fromTo(".blog-card", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 })
    }

    return () => {
      // Cleanup
    }
  }, [])

  // Re-animate posts when category or search changes
  useEffect(() => {
    gsap.fromTo(".blog-card", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 })
  }, [activeCategory, searchQuery])

  return (
    <section ref={sectionRef} className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="blog-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{post.category}</Badge>
                </div>
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

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

