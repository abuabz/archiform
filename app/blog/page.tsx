import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogHeader from "@/components/blog-header"
import BlogGrid from "@/components/blog-grid"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <BlogHeader />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}

