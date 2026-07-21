'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/constants'

const whatsappHref = whatsappUrl(WHATSAPP_MESSAGES.consulta)

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-sage/10 via-background to-nude-rose/10 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-nude-rose/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-graphite leading-tight mb-4 text-balance">
            Você não precisa esperar chegar no limite para buscar ajuda.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Seu cuidado emocional merece atenção, acolhimento e escuta.
            O primeiro passo é apenas uma mensagem de distância.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium group"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar consulta pelo WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-muted-foreground mt-5"
          >
            Resposta em horário comercial • Atendimento individualizado
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
