import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TrabalheConoscoContent } from './content'

export const metadata: Metadata = {
  title: 'Faça parte do corpo clínico | Viventia',
  description:
    'A Viventia está aberta a profissionais da saúde que desejam atender em um ambiente estruturado, acolhedor e com identidade de cuidado. Conheça nossos modelos de parceria.',
  keywords: [
    'trabalhe conosco',
    'clínica psiquiatria',
    'parceria profissionais saúde',
    'aluguel sala',
    'atender na Viventia',
    'Florianópolis',
  ],
}

export default function TrabalheConoscoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TrabalheConoscoContent />
      <Footer />
    </main>
  )
}
