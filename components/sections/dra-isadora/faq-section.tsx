'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Psiquiatra é só para casos graves?',
    answer:
      'Não. O psiquiatra pode ajudar em diferentes momentos da vida, desde questões leves como ansiedade pontual até situações mais complexas. A prevenção e o autocuidado são tão importantes quanto o tratamento de condições estabelecidas. Buscar ajuda cedo pode evitar que dificuldades se agravem.',
  },
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é um momento de escuta e acolhimento. Conversamos sobre sua história, suas queixas atuais, seus objetivos e expectativas. É uma conversa sem pressa, onde você pode se sentir à vontade para compartilhar o que está sentindo. A partir daí, construímos juntos um plano de cuidado.',
  },
  {
    question: 'O tratamento é apenas medicamentoso?',
    answer:
      'Não necessariamente. O tratamento é sempre individualizado e pode incluir medicação quando necessário, mas também envolve orientações, mudanças de estilo de vida e, quando indicado, encaminhamento para psicoterapia. O objetivo é sempre o seu bem-estar integral.',
  },
  {
    question: 'Atendimento online funciona?',
    answer:
      'Sim, o atendimento online é tão efetivo quanto o presencial para a maioria dos casos. Você tem a mesma qualidade de escuta e acompanhamento, com a comodidade de estar em um ambiente familiar. As consultas são realizadas por videoconferência segura.',
  },
  {
    question: 'Como funciona o atendimento online?',
    answer:
      'O atendimento online é feito por videochamada, através de um link online exclusivo e seguro, enviado a você antes da consulta. Basta acessá-lo no horário agendado, de onde estiver, com toda a privacidade e o mesmo cuidado do atendimento presencial.',
  },
  {
    question: 'Qual a duração do tratamento?',
    answer:
      'Depende de cada caso. Algumas pessoas precisam de acompanhamento por alguns meses, outras por períodos mais longos. O importante é que o tempo de tratamento é definido de acordo com suas necessidades e evolução, sempre com transparência e diálogo.',
  },
  {
    question: 'Quanto tempo dura a consulta?',
    answer:
      'A consulta tem duração de aproximadamente 50 minutos, um tempo pensado para uma escuta atenta e sem pressa, para que você possa compartilhar o que está sentindo e construirmos juntos o melhor caminho de cuidado.',
  },
  {
    question: 'Vocês atendem por convênio?',
    answer:
      'Não trabalhamos com convênios. O atendimento é particular, mas você recebe o recibo da consulta para solicitar reembolso junto ao seu plano de saúde, conforme as regras de cada operadora.',
  },
]

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section className="py-16 lg:py-24 bg-mist/30">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Título */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-taupe font-medium tracking-wide uppercase text-sm mb-4">
              Dúvidas frequentes
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-graphite leading-tight mb-6 text-balance">
              Perguntas que você pode estar se fazendo
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Se sua dúvida não estiver aqui, entre em contato pelo WhatsApp.
              Ficarei feliz em esclarecer.
            </p>

            {/* Vídeo da Dra. Isadora no Instagram */}
            <div className="mt-8">
              <div className="flex items-center gap-2 text-taupe font-medium tracking-wide uppercase text-sm mb-4">
                <Instagram className="w-4 h-4" />
                Como se preparar para a primeira consulta
              </div>
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-card shadow-sm">
                <iframe
                  src="https://www.instagram.com/p/DGd-d5HhG7Q/embed/"
                  title="Vídeo da Dra. Isadora Valente no Instagram"
                  className="w-full"
                  style={{ height: 620, border: 'none' }}
                  loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4 lg:mt-60">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border-none shadow-sm data-[state=open]:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-serif text-lg text-graphite hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
