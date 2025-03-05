"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const form = formRef.current

    if (!form) return

    // Animate form elements
    gsap.fromTo(
      ".form-element",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: form,
          start: "top 70%",
        },
      },
    )
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Animate success message
      gsap.fromTo(
        ".success-message",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      )
    }, 1500)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {!isSubmitted ? (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="form-element space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" required />
          </div>

          <div className="form-element space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>

          <div className="form-element space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Your phone number" />
          </div>

          <div className="form-element space-y-2">
            <Label htmlFor="service">Service Interested In</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="architectural-design">Architectural Design</SelectItem>
                <SelectItem value="interior-design">Interior Design</SelectItem>
                <SelectItem value="urban-planning">Urban Planning</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="form-element space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us about your project" rows={5} required />
          </div>

          <Button type="submit" className="form-element w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      ) : (
        <div className="success-message text-center py-12 space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold">Thank You!</h3>
          <p className="text-muted-foreground">
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      )}
    </div>
  )
}

