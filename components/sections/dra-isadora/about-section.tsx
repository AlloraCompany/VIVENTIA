'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'

const credentials = [
  'Diretora Clínica',
  'CRM SC - 33.278',
  'RQE 32182',
]

const disorders = [
  'Depressão',
  'Ansiedade',
  'TDAH',
  'Transtornos alimentares',
  'TOC',
  'Vícios em álcool, tabaco e drogas',
  'Bipolaridade',
  'Transtornos de Borderline',
  'Entre outros',
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-sand/30 relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-nude-rose/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Moldura decorativa */}
              <div className="absolute -inset-4 bg-gradient-to-br from-taupe/20 to-sage/20 rounded-3xl" />
              <div className="absolute -inset-2 bg-card rounded-3xl" />
              
              <div className="relative h-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctors/dra-isadora.jpg"
                  alt="Dra. Isadora Valente - Retrato profissional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-taupe font-medium tracking-wide uppercase text-sm mb-4">
              Sobre a Médica
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-graphite leading-tight mb-3 text-balance">
              Drª Isadora Valente
            </h2>

            <p className="text-graphite font-medium text-lg mb-4">
              Médica Psiquiatra · Diretora Clínica
            </p>

            {/* Credenciais / Registros */}
            <div className="flex flex-wrap gap-2 mb-8">
              {credentials.map((credential) => (
                <Badge
                  key={credential}
                  variant="secondary"
                  className="bg-mist text-graphite border-none px-4 py-2 text-sm font-normal rounded-full"
                >
                  {credential}
                </Badge>
              ))}
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <span className="font-medium text-graphite">Médica Psiquiatra</span>, graduada em Medicina pela
                Universidade Federal do Ceará e com residência em Psiquiatria pela Universidade Estadual de Londrina,
                possui vasta experiência no tratamento de diversos transtornos como:
              </p>
            </div>
            
            {/* Lista de transtornos tratados - colunas independentes para espaçamento uniforme */}
            <ul className="columns-1 sm:columns-2 gap-x-8">
              {disorders.map((disorder, index) => (
                <motion.li
                  key={disorder}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="flex items-start gap-3 text-graphite leading-relaxed mb-3 break-inside-avoid"
                >
                  <span className="mt-[0.5rem] w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                  <span>{disorder}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
