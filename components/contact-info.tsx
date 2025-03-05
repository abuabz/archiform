"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactInfo() {
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const info = infoRef.current

    if (!info) return

    // Animate info items
    gsap.fromTo(
      ".info-item",
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: info,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <div ref={infoRef} className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6">Contact Information</h3>

      <div className="space-y-6">
        <div className="info-item flex items-start">
          <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium">Address</h4>
            <p className="text-muted-foreground">
              123 Architecture Avenue
              <br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="info-item flex items-start">
          <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium">Phone</h4>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="info-item flex items-start">
          <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium">Email</h4>
            <p className="text-muted-foreground">info@archiform.com</p>
          </div>
        </div>

        <div className="info-item flex items-start">
          <Clock className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium">Working Hours</h4>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

