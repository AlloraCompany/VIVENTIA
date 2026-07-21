'use client'

import { motion } from 'framer-motion'
import { articles, getAllCategories } from '@/lib/blog-data'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = getAllCategories()

  const filteredArticles = selectedCategory
    ? articles.filter((a) => a.category === selectedCategory)
    : articles

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-card">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Blog
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Informação é parte do cuidado
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Artigos sobre saúde mental, escritos com carinho e embasamento científico
              para ajudar você a entender melhor sua mente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 border-b border-border/50 bg-background sticky top-[64px] z-40">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-secondary'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Artigo em Destaque */}
          {!selectedCategory && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <Link href={`/blog/${articles[0].slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                      {articles[0].category}
                    </span>
                  </div>

                  <div className="lg:py-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {articles[0].readTime}
                      </span>
                      <span>
                        {new Date(articles[0].publishedAt).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {articles[0].title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {articles[0].excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Grid de Artigos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory ? filteredArticles : articles.slice(1)).map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`} className="group block">
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Nenhum artigo encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Ler é bom. Agir é melhor.
            </h2>
            <p className="text-muted-foreground mb-8">
              Se você se identificou com algum conteúdo, considere dar o próximo passo
              no cuidado com sua saúde mental.
            </p>
            <Link
              href="/equipe/dra-isadora-valente#contato"
              className="inline-flex px-8 py-4 btn-vivere-gradient text-white rounded-full font-medium"
            >
              Agendar uma Consulta
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
