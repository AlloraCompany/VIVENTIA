"use client"

import Link from "next/link"
import { ArrowRight, Phone, MessageCircle, Instagram } from "lucide-react"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants"

export function FinalCTASection() {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/40 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emotional headline */}
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Comece sua jornada
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            <span className="text-foreground">O primeiro passo para uma </span>
            <span className="text-vivere-gradient italic">vida plena</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Agende uma consulta e descubra 
            como o cuidado pode transformar sua relação com a
            saúde.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href={whatsappUrl(WHATSAPP_MESSAGES.agendamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium group w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="https://www.instagram.com/viventia.medical/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-secondary-outline rounded-full text-sm tracking-wider uppercase font-medium w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5" />
              Conhecer a clínica
            </Link>
          </div>

          {/* Trust indicators - white card
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100%", label: "Sigilo garantido" },
                { value: "24h", label: "Resposta rápida" },
                { value: "1h", label: "de consulta atenciosa" },
                { value: "Online", label: "Atendimento versátil" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block text-3xl md:text-4xl font-serif text-vivere-gradient mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>*/}
        </div> 
      </div>
    </section>
  )
}
