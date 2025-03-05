import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"
import MissionVision from "@/components/mission-vision"
import AboutHero from "@/components/about-hero"
import CompanyHistory from "@/components/company-history"
import ClientsSection from "@/components/clients-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <CompanyHistory />
        <MissionVision />
        <TeamSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  )
}

