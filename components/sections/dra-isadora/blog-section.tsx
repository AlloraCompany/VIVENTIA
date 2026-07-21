'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    slug: 'como-diferenciar-ansiedade-de-esgotamento',
    title: 'Como diferenciar ansiedade de esgotamento?',
    excerpt: 'Entenda os sinais que seu corpo e mente dão quando algo precisa de atenção.',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
  },
  {
    slug: 'sinais-silenciosos-do-burnout',
    title: 'Sinais silenciosos do burnout',
    excerpt: 'O esgotamento profissional nem sempre é óbvio. Conheça os sintomas menos conhecidos.',
    readTime: '7 min de leitura',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop',
  },
  {
    slug: 'tdah-em-adultos-sintomas-alem-da-distracao',
    title: 'TDAH em adultos: sintomas além da distração',
    excerpt: 'O TDAH vai muito além da dificuldade de concentração. Descubra como ele se manifesta na vida adulta.',
    readTime: '6 min de leitura',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <p className="text-taupe font-medium tracking-wide uppercase text-sm mb-4">
              Conteúdo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-graphite leading-tight text-balance">
              Informação é parte do cuidado
            </h2>
          </div>
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-graphite font-medium group"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay no hover */}
                  <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/10 transition-colors duration-500" />
                </div>
                
                <span className="text-sm text-taupe">{article.readTime}</span>
                
                <h3 className="font-serif text-xl text-graphite mt-2 mb-3 group-hover:text-sage transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
