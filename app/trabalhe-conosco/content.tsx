'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Building2, Users, TrendingUp,
  ArrowRight, ChevronDown, CheckCircle2, Percent, CalendarDays,
} from 'lucide-react'

import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/constants'

const WHATSAPP_PARCERIA = whatsappUrl(WHATSAPP_MESSAGES.parceria)

const diferenciais = [
  {
    Icon: Building2,
    title: 'Estrutura profissional',
    desc: 'Salas equipadas, recepção, identidade visual consolidada e suporte institucional para que você foque no que sabe fazer de melhor.',
  },
  {
    Icon: Users,
    title: 'Equipe multidisciplinar',
    desc: 'Integre-se a uma rede de profissionais complementares, ampliando as possibilidades de encaminhamentos e cuidado integral ao paciente.',
  },
  {
    Icon: TrendingUp,
    title: 'Crescimento de agenda',
    desc: 'A visibilidade da Viventia como clínica de referência ajuda a construir e fortalecer sua agenda de atendimentos com mais fluidez.',
  },
]

const profissoes = [
  'Médicos e médicas',
  'Psicólogos e psicólogas',
  'Nutricionistas',
  'Fisioterapeutas',
  'Terapeutas ocupacionais',
  'Fonoaudiólogos e Fonoaudiólogas',
  'Outros profissionais alinhados à proposta da clínica',
]

const estrutura = [
  'Salas de atendimento equipadas e climatizadas',
  'Ambiente confortável e esteticamente cuidado',
  'Recepção e apoio para agenda e pacientes',
  'Identidade visual e institucional consolidada',
  'Materiais de papelaria, acesso à internet, impressora e demais recursos necessários',
  'Possibilidade de encaminhamentos internos entre profissionais',
]

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function TrabalheConoscoContent() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Imagem de fundo da clínica com blur */}
        <div className="absolute inset-0">
          <Image
            src="/images/office/consultorio.webp"
            alt="Consultório Viventia"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Overlay em paleta Viventia — bege quente cobre o texto, dissolve para a foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e5d7cb] via-[#e5d7cb]/85 to-[#e5d7cb]/10" />
        {/* Véu sutil na base para ancorar visualmente o rodapé do hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#e5d7cb]/60 via-transparent to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Profissionais da saúde
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Faça parte do{' '}
              <span className="text-vivere-gradient italic">corpo clínico</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
            >
              A Viventia está aberta a profissionais da saúde que desejam atender em
              um ambiente estruturado, acolhedor e com identidade de cuidado. Se você
              compartilha dos nossos valores, queremos conhecer você.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={WHATSAPP_PARCERIA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium group"
              >
                Quero fazer parte
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-secondary-outline rounded-full text-sm tracking-wider uppercase font-medium group"
              >
                Entenda como funciona
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── POR QUE ATENDER NA VIVENTIA ────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-card overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Texto + diferenciais */}
            <FadeUp>
              <span className="inline-block text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Diferenciais
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Por que atender{' '}
                <span className="text-vivere-gradient italic">na Viventia</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Mais do que um espaço de atendimento, a Viventia é uma proposta de trabalho
                pensada para valorizar o profissional e o paciente ao mesmo tempo.
              </p>

              <div className="space-y-5">
                {diferenciais.map(({ Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                    className="flex gap-5 p-5 lg:p-6 bg-background rounded-2xl border border-border/50 group hover:border-accent/50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1.5">{title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* Composição orgânica com fotos da clínica */}
            <FadeUp delay={0.15} className="relative">
              {/* Blobs decorativos em paleta Viventia */}
              <div className="absolute -top-10 -right-8 w-64 h-64 bg-nude-rose/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-6 w-72 h-72 bg-sage/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Moldura de acento deslocada */}
                <div className="absolute -bottom-5 -right-5 w-full h-full border border-accent/30 rounded-[2rem] -z-10 hidden lg:block" />

                {/* Imagem principal */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/office/recepcao.webp"
                    alt="Recepção da clínica Viventia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/15 to-transparent" />
                </div>

                {/* Imagem flutuante sobreposta */}
                <div className="absolute -bottom-8 -left-8 w-40 lg:w-48 aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-card animate-float hidden sm:block">
                  <Image
                    src="/images/office/consultorio.webp"
                    alt="Consultório da clínica Viventia"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ──────────────────────────────────────────────────── */}
      <section id="como-funciona" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp className="max-w-2xl mb-16 lg:mb-20">
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Modelos de parceria
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Como funciona
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Entendemos que cada profissional está em um momento diferente da carreira.
              Por isso, trabalhamos com dois modelos de parceria, pensados para se
              adequar à sua realidade.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
            {/* Modelo 1 — Contratação */}
            <FadeUp delay={0.1}>
              <div className="relative p-8 lg:p-10 bg-card rounded-2xl border border-border/50 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Percent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Modelo por contratação
                  </h3>
                  <p className="text-sm tracking-wider uppercase text-accent mb-6">
                    Ideal para quem está começando
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    O profissional integra a equipe da Viventia por meio de contratação
                    CLT.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Remuneração fixa mensal',
                      'Benefícios e segurança da CLT',
                      'Estabilidade para construir sua agenda',
                      'Estrutura completa para os atendimentos',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            {/* Modelo 2 — Aluguel fixo */}
            <FadeUp delay={0.2}>
              <div className="relative p-8 lg:p-10 bg-card rounded-2xl border border-border/50 h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <CalendarDays className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Modelo por aluguel fixo
                  </h3>
                  <p className="text-sm tracking-wider uppercase text-accent mb-6">
                    Ideal para quem já tem agenda
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    O profissional paga um valor fixo pelo uso do espaço,
                    independente do volume de consultas realizadas no período.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Previsibilidade de custos mensais',
                      'Total autonomia sobre os honorários',
                      'Indicado para agendas já consolidadas',
                      'Uso exclusivo da sala nos períodos contratados',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="mt-10 max-w-4xl">
            <p className="text-sm text-muted-foreground bg-secondary/60 border border-border/50 rounded-xl px-6 py-4">
              Os valores e condições específicas de cada modelo são discutidos
              diretamente com a equipe da Viventia. Entre em contato para uma
              conversa sem compromisso.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PARA QUEM É ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Perfil
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                Para quem é essa{' '}
                <span className="text-vivere-gradient italic">oportunidade</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Viventia é uma clínica multidisciplinar. Buscamos profissionais que
                compartilham da nossa visão de cuidado humanizado e querem oferecer
                atendimentos de qualidade num ambiente de excelência.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="space-y-3">
                {profissoes.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="flex items-center gap-4 p-5 bg-background rounded-xl border border-border/50 text-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {p}
                  </motion.li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ESTRUTURA OFERECIDA ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <FadeUp className="max-w-2xl mb-16">
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Infraestrutura
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              O que oferecemos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pensamos em cada detalhe para que o profissional tenha as melhores
              condições de atendimento e o paciente sinta-se em boas mãos desde
              o momento em que entra na clínica.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {estrutura.map((item, i) => (
              <FadeUp key={item} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50 h-full">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeUp className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Próximo passo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Vamos conversar{' '}
              <span className="text-vivere-gradient italic">sem compromisso</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Se a proposta da Viventia faz sentido para o seu momento profissional,
              entre em contato. Queremos entender suas necessidades e apresentar o
              modelo que melhor se encaixa na sua rotina.
            </p>
            <Link
              href={WHATSAPP_PARCERIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium group"
            >
              Tenho interesse em atender na Viventia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
