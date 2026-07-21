'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Video, Clock } from 'lucide-react'
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/constants'

const modalidades = [
  {
    icon: MapPin,
    label: 'Presencial',
    image: '/images/office/k-platz.webp',
    description: 'Atendimento presencial em consultório acolhedor e reservado, no K-Platz Corporate, na Grande Florianópolis:',
    locais: [
      'R. Elizeu di Bernardi, 34 - Campinas',
    ],
    horarios: 'Segunda a sexta, das 8h às 18h',
  },
  {
    icon: Video,
    label: 'Online — Telemedicina',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop',
    description: 'Atendimento online para todo o Brasil através da Telemedicina, com o mesmo cuidado e presença.',
    locais: ['Disponível em todo o Brasil'],
    horarios: 'Segunda a sexta, das 8h às 20h',
  },
]

const whatsappHref = whatsappUrl(WHATSAPP_MESSAGES.consulta)

export function AtendimentoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="atendimento" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-nude-rose/20 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-taupe font-medium tracking-wide uppercase text-sm mb-4">
            Atendimento
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-graphite leading-tight text-balance">
            Como podemos cuidar de você
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Escolha a modalidade que faz mais sentido para o seu momento. Em ambas, você encontra a
            mesma escuta atenta e acompanhamento individualizado.
          </p>
        </motion.div>

        {/* Cards de modalidade */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {modalidades.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col"
            >
              {/* Imagem */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 glass rounded-full px-4 py-2">
                  <item.icon className="w-4 h-4 text-graphite" />
                  <span className="font-serif text-lg text-graphite">{item.label}</span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.locais.map((local) => (
                    <li key={local} className="flex items-center gap-3 text-graphite">
                      <span className="w-1.5 h-1.5 rounded-full bg-taupe" />
                      {local}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
                  <Clock className="w-4 h-4 text-sage" />
                  <span>{item.horarios}</span>
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-sage text-accent-foreground font-medium tracking-wide uppercase text-sm px-8 py-4 transition-colors duration-300 hover:bg-taupe hover:text-white"
                >
                  Agende sua consulta
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
