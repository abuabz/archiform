"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current

    if (!footer) return

    // Animate footer sections
    gsap.fromTo(
      ".footer-section",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
        },
      },
    )
  }, [])

  return (
    <footer ref={footerRef} className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="footer-section">
            <h3 className="text-xl font-serif font-bold mb-4">Archiform</h3>
            <p className="text-slate-300 mb-6">
              Creating innovative architectural solutions for modern living and working spaces.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-primary hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-primary hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-primary hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-primary hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  123 Architecture Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-slate-300">info@archiform.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-slate-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-slate-800 border-slate-700 text-white" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Archiform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

