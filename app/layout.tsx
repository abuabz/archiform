import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import GsapProvider from "@/components/gsap-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Archiform | Modern Architecture Studio",
  description: "Innovative architectural solutions for modern living and working spaces",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <GsapProvider>{children}</GsapProvider>
      </body>
    </html>
  )
}



import './globals.css'