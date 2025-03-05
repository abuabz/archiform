"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const map = mapRef.current

    if (!map) return

    // Animate map
    gsap.fromTo(
      map,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: map,
          start: "top 70%",
        },
      },
    )
  }, [])

  return (
    <div ref={mapRef} className="bg-white p-4 rounded-lg shadow-lg h-[300px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564562986!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Office Location"
      ></iframe>
    </div>
  )
}

