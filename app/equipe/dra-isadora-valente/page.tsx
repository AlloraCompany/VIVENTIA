import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { AboutSection } from '@/components/sections/dra-isadora/about-section'
import { AtendimentoSection } from '@/components/sections/dra-isadora/atendimento-section'
import { SpecialtiesSection } from '@/components/sections/dra-isadora/specialties-section'
import { TestimonialsSection } from '@/components/sections/dra-isadora/testimonials-section'
import { FaqSection } from '@/components/sections/dra-isadora/faq-section'
import { BlogSection } from '@/components/sections/dra-isadora/blog-section'
import { CtaSection } from '@/components/sections/dra-isadora/cta-section'

export const metadata: Metadata = {
  title: 'Dra. Isadora Valente | Psiquiatria Humanizada — Viventia',
  description:
    'Conheça a Dra. Isadora Valente, psiquiatra pela UEL com atendimento humanizado para ansiedade, depressão, TDAH, TOC e outros transtornos. Consultas presenciais e online.',
  keywords: [
    'Dra. Isadora Valente',
    'psiquiatra',
    'psiquiatria humanizada',
    'saúde mental',
    'ansiedade',
    'depressão',
    'TDAH',
    'Viventia',
  ],
}

export default function DraIsadoraPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutSection />
      <AtendimentoSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
