'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Quote, Star, ArrowUpRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Substitua pela URL real do perfil da Dra. no Google (avaliações)
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Dra.+Isadora+Valente+psiquiatra'

const testimonials = [
  {
    initials: 'M.S.',
    text: 'Acho importante deixar aqui o meu depoimento, pois a minha vida mudou completamente depois que eu comecei as consultas com a Doutora Isadora. Dedicada, atenciosa e muito educada desde o primeiro momento. Mudei minha forma de pensar, a forma como eu estabelecia minhas relações, o meu comportamento, passei a controlar meus sentimentos e emoções, entendi diversos aspectos da minha vida e comecei a ter novos objetivos. Hoje eu vejo tudo de outra maneira. Super indico a Doutora Isadora.',
    context: 'Paciente há 2 anos',
  },
  {
    initials: 'C.R.',
    text: 'A Dra. Isadora é maravilhosa! Foi extremamente acolhedora desde a primeira consulta, além de ter acertado o meu tratamento. Indico de olhos fechados.',
    context: 'Paciente há 1 ano',
  },
  {
    initials: 'A.L.',
    text: 'Sou muito grata por ter encontrado a Dra. Isadora. Cada consulta me traz acolhimento, atenção e a sensação de estar em boas mãos. É uma profissional que realmente faz diferença na vida dos pacientes.',
    context: 'Paciente há 8 meses',
  },
  {
    initials: 'P.M.',
    text: 'Minha experiência com a Dra. Isadora tem sido transformadora. Ela é uma profissional de uma sensibilidade rara, sempre muito acolhedora e empática. Desde a primeira consulta, senti que não era apenas "mais uma paciente", mas alguém realmente ouvida. Esse olhar humano e atencioso fez toda a diferença na evolução do meu tratamento. Recomendo de olhos fechados!',
    context: 'Paciente online',
  },
  {
    initials: 'R.F.',
    text: 'Simplesmente uma profissional fora da curva! Escuta ativa, atenciosa, simpática, trazendo tudo que há de mais atual nessa área! Fantástica!',
    context: 'Paciente há 6 meses',
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  
  useEffect(() => {
    if (!emblaApi) return
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])
  
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nude-rose/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-taupe font-medium tracking-wide uppercase text-sm mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-graphite leading-tight mb-6 text-balance">
            O que dizem sobre o atendimento
          </h2>

          {/* Selo de avaliação Google + prova social */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-card rounded-full pl-5 pr-4 py-2.5 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-serif text-lg text-graphite">5,0</span>
              <span className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">no Google</span>
              <ArrowUpRight className="w-4 h-4 text-taupe transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <p className="text-graphite">
              <span className="font-serif text-2xl text-taupe">Mais de 3 mil</span>{' '}
              atendimentos realizados
            </p>
          </div>
        </motion.div>
        
        {/* Carrossel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4"
              >
                <div className="bg-card p-8 lg:p-12 rounded-3xl shadow-lg relative">
                  {/* Ícone de aspas */}
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-taupe/20" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-sand to-mist rounded-full flex items-center justify-center">
                      <span className="font-serif text-lg text-graphite">{testimonial.initials}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{testimonial.context}</span>
                  </div>
                  
                  <p className="font-sans text-lg lg:text-xl font-light text-graphite/80 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-taupe w-8'
                  : 'bg-taupe/30 hover:bg-taupe/50'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
