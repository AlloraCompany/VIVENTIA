"use client"

import Image from "next/image"

const images = [
  {
    src: "/images/office/recepcao.webp",
    alt: "Recepção da Viventia",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/office/area-espera.webp",
    alt: "Área de espera confortável",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/office/consultorio.webp",
    alt: "Consultório",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/office/detalhes.webp",
    alt: "Detalhes do ambiente",
    className: "col-span-2 row-span-1",
  },
]

export function OfficeExperienceSection() {
  return (
    <section id="espaco" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div>
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Nosso Espaço
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="text-foreground">Um ambiente pensado para </span>
              <span className="text-vivere-gradient italic">seu bem-estar</span>
            </h2>
          </div>
          
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada detalhe do nosso espaço foi cuidadosamente projetado para 
              proporcionar uma experiência sensorial de calma e acolhimento. 
              Da iluminação natural aos aromas sutis, tudo convida você a relaxar.
            </p>
          </div>
        </div>

        {/* Image Grid - Editorial composition */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative rounded-2xl overflow-hidden group ${image.className}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
          {[
            { label: "Conforto Total", value: "Arquitetura acolhedora" },
            { label: "Sons Relaxantes", value: "Ambiente calmo" },
            { label: "Recepção com Menu de Bebidas", value: "Experiência do paciente" },
          ].map((feature) => (
            <div key={feature.label} className="text-center">
              <span className="block text-2xl md:text-3xl font-serif text-vivere-gradient mb-2">
                {feature.value}
              </span>
              <span className="text-sm tracking-wider uppercase text-muted-foreground">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
