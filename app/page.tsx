import HeroSection from "@/components/hero-section"
import FeaturedProjects from "@/components/featured-projects"
import AboutPreview from "@/components/about-preview"
import BlogPreview from "@/components/blog-preview"
import ContactCta from "@/components/contact-cta"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProjects />
        <AboutPreview />
        <BlogPreview />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}

