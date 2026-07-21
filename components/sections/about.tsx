"use client"

import Image from "next/image"
import { Clock, Heart, Leaf, Sparkles, Star, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Cuidado Integral",
    description:
      "Abordagem completa que considera corpo, mente e contexto de vida.",
  },
  {
    icon: Sparkles,
    title: "Experiência Premium",
    description:
      "Cada detalhe pensado para proporcionar conforto e acolhimento.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description:
      "Relações genuínas construídas com empatia e respeito.",
  },
  {
    icon: Clock,
    title: "Tempo de Qualidade",
    description:
      "Consultas com duração adequada para um atendimento completo e sem pressa.",
  },
  {
    icon: Leaf,
    title: "Bem-estar Integral",
    description:
      "Abordagem que considera todas as dimensões da sua saúde e qualidade de vida.",
  },
  {
    icon: Star,
    title: "Cuidado Individualizado",
    description:
      "Tratamentos personalizados que respeitam sua história, valores e objetivos.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Sobre a Viventia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="text-foreground">Um novo conceito em </span>
            <span className="text-vivere-gradient italic">saúde</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nascemos da convicção de que o cuidado com a saúde merece uma
            abordagem diferenciada, onde a excelência técnica encontra o acolhimento genuíno.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-clinic.webp"
                alt="Interior acolhedor da Viventia"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative line with accent color */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Nossa Proposta
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Viventia foi criada para oferecer um espaço onde você possa se 
                  sentir verdadeiramente acolhido. Mais do que uma clínica, somos
                  um ambiente de transformação, onde cada consulta é uma jornada
                  de autoconhecimento e cuidado.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Experiência do Paciente
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desde o primeiro contato, você perceberá a diferença. Nosso 
                  ambiente foi projetado para transmitir calma e segurança, com 
                  cada detalhe pensado para sua experiência — da recepção calorosa 
                  ao atendimento personalizado.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  O que entregamos
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experiência médica premium dedicada a promover a vida plena. Especializada inicialmente em Psiquiatria, mas focada na evolução contínua da saúde integral.
                </p>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 text-sm text-primary">
                  <span className="w-8 h-px bg-vivere-gradient" />
                  <span className="tracking-wider uppercase">Atendimento com propósito</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid - White cards on beige background */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 bg-card rounded-xl border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
