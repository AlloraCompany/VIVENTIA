'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { articles, getArticleBySlug, getRelatedArticles } from '@/lib/blog-data'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  ArrowLeft, Clock, Calendar, Share2,
  MessageCircle, Link2, Check, Facebook, ArrowRight, ChevronUp,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const article = getArticleBySlug(slug)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!article) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Artigo não encontrado</h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>
        </div>
      </main>
    )
  }

  const relatedArticles = getRelatedArticles(article)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${article.title} — Dra. Isadora Valente`

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    }
    window.open(urls[platform], '_blank', 'width=600,height=400')
    setShowShareMenu(false)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard indisponível — ignora silenciosamente */
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <main className="min-h-screen bg-background">
      {/* Barra de progresso de leitura */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Hero do Artigo */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Voltar ao blog</span>
              </Link>

              {/* Compartilhar */}
              <div className="ml-auto relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-secondary transition-colors text-foreground text-sm font-medium"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Compartilhar</span>
                </button>

                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 py-2 w-48 bg-card rounded-xl shadow-lg border border-border/50 z-10"
                  >
                    {[
                      { key: 'whatsapp', label: 'WhatsApp', Icon: MessageCircle, onClick: () => handleShare('whatsapp') },
                      { key: 'facebook', label: 'Facebook', Icon: Facebook, onClick: () => handleShare('facebook') },
                      {
                        key: 'copy',
                        label: copied ? 'Link copiado!' : 'Copiar link',
                        Icon: copied ? Check : Link2,
                        onClick: handleCopyLink,
                      },
                    ].map(({ key, label, Icon, onClick }) => (
                      <button
                        key={key}
                        onClick={onClick}
                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-muted transition-colors text-sm text-foreground"
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-accent/20 text-primary rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>

            {/* Título */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Autor */}
            <div className="flex items-center gap-4 pb-8 border-b border-border/50">
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">{article.author.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagem de Capa */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pb-12 lg:pb-20"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl lg:rounded-3xl overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Conteúdo do Artigo */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-foreground prose-headings:font-normal
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-6
                prose-blockquote:text-foreground/80 prose-blockquote:bg-secondary/50
                prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl
                prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:not-italic
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-primary
                prose-table:border-collapse
                prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left
                prose-th:text-foreground prose-th:font-medium
                prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:border-border/50
              "
            >
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </motion.article>

            {/* CTA inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 bg-secondary/50 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Esse conteúdo fez sentido para você?
                  </h3>
                  <p className="text-muted-foreground">
                    Agende uma consulta e dê o próximo passo no cuidado com sua saúde mental.
                  </p>
                </div>
                <Link
                  href="/equipe/dra-isadora-valente#contato"
                  className="inline-flex px-8 py-4 btn-vivere-gradient text-white rounded-full font-medium whitespace-nowrap"
                >
                  Agendar Consulta
                </Link>
              </div>
            </motion.div>

            {/* Sobre a autora */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-8 bg-card rounded-2xl border border-border/50"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-accent font-medium uppercase tracking-wide mb-1">
                    Sobre a autora
                  </p>
                  <h4 className="font-serif text-xl text-foreground mb-2">
                    {article.author.name}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Este artigo foi produzido por inteligência artificial, sem autoria humana real,
                    como material de exemplo para demonstração do site.
                  </p>
                  <p className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground/80 italic">
                    Aviso: conteúdo fictício gerado por IA, apenas para fins de demonstração.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artigos Relacionados */}
      {relatedArticles.length > 0 && (
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                Continue lendo
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((related, index) => (
                <motion.article
                  key={related.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${related.slug}`} className="group block">
                    <div className="flex gap-6">
                      <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-sm text-accent mb-2">{related.category}</span>
                        <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {related.title}
                        </h3>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          {related.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                Ver todos os artigos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />

      {/* Botão voltar ao topo */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 btn-vivere-gradient text-white rounded-full shadow-lg flex items-center justify-center z-40"
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </main>
  )
}
