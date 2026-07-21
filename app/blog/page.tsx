import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogList } from './blog-list'

export const metadata: Metadata = {
  title: 'Blog | Dra. Isadora Valente — Viventia',
  description:
    'Artigos sobre saúde mental, ansiedade, depressão, TDAH e bem-estar. Informação de qualidade para ajudar você a entender melhor sua mente.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BlogList />
      <Footer />
    </main>
  )
}
