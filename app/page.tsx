import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { NameOriginSection } from "@/components/sections/name-origin"
import { MedicalTeamSection } from "@/components/sections/medical-team"
import { OfficeExperienceSection } from "@/components/sections/office-experience"
import { FinalCTASection } from "@/components/sections/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NameOriginSection />
      <MedicalTeamSection />
      <OfficeExperienceSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
