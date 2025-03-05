import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get in Touch</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-12">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

