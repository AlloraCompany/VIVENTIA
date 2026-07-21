'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const specialties = [
  {
    title: 'Acolhimento e escuta atenta',
    description:
      'O cuidado começa em um espaço seguro e acolhedor, onde o paciente pode expressar seus sentimentos, dificuldades e sua história de vida. A escuta atenta permite compreender também aspectos como rotina, trabalho, relacionamentos e saúde geral.',
  },
  {
    title: 'Avaliação global e diagnóstico',
    description:
      'A investigação considera os sintomas e os diferentes fatores que podem estar relacionados a eles. A Dra. busca compreender cada paciente de forma integral e explica o diagnóstico com clareza, favorecendo uma participação consciente nas decisões sobre o cuidado.',
  },
  {
    title: 'Exames complementares',
    description:
      'Quando necessário, são solicitados exames para complementar a avaliação e descartar condições físicas que possam apresentar sintomas semelhantes aos de transtornos psiquiátricos. Assim, o diagnóstico se torna mais completo, seguro e preciso.',
  },
  {
    title: 'Tratamento humanizado e colaborativo',
    description:
      'Após a avaliação, o plano de tratamento é construído em conjunto com o paciente. Cada conduta é personalizada, respeitando suas necessidades, limitações, preferências e expectativas ao longo do acompanhamento.',
  },
]

export function SpecialtiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-nude-rose/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <p className="text-taupe font-medium tracking-wide uppercase text-sm mb-4">
            Especialidades
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-graphite leading-tight mb-6 text-balance">
            Cuidado especializado em saúde emocional
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Dra. Isadora Valente é especialista em diagnóstico e tratamento dos transtornos
            psiquiátricos. Com uma abordagem personalizada e atendimento individualizado e
            humanizado, trabalhamos juntos para entender suas dificuldades emocionais e encontrar o
            tratamento mais adequado para você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-stretch">
          {/* Imagem única ilustrando o espaço */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto lg:max-w-none w-full lg:h-full"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[420px] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="/images/office/area-espera.webp"
                alt="Espaço de atendimento da Viventia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/15 to-transparent" />
            </div>
            {/* Moldura de acento deslocada */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-accent/30 rounded-[2rem] -z-10 hidden lg:block" />
          </motion.div>

          {/* Linha do tempo */}
          <div className="relative">
            {specialties.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative pl-12 pb-12 last:pb-0 border-l-2 border-sage/30 last:border-l-transparent"
              >
                {/* Marcador numerado */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-sage flex items-center justify-center ring-4 ring-background shadow-sm">
                  <span className="text-xs font-medium text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-graphite mb-3 uppercase tracking-wide text-balance -mt-1">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
