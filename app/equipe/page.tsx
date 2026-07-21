import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { doctorsData } from "@/lib/doctors"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipe Médica | Viventia",
  description: "Conheça nossa equipe de psiquiatras altamente qualificados, comprometidos com o cuidado humanizado e a excelência clínica.",
}

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider uppercase">Voltar para início</span>
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Equipe Médica
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="text-foreground">Profissionais que </span>
              <span className="text-vivere-gradient italic">fazem a diferença</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa equipe é formada por médicos altamente qualificados, unidos pelo 
              compromisso com o cuidado humanizado e a excelência clínica.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {doctorsData.map((doctor, index) => (
              <article
                key={doctor.id}
                className="group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link href={`/equipe/${doctor.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover overlay with CTA */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-card/90 backdrop-blur-sm text-foreground rounded-full text-sm tracking-wider">
                        Conhecer 
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <span className="block text-sm font-light tracking-wider uppercase text-accent mb-2">
                      {doctor.specialty}
                    </span>
                    <h2 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {doctor.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {doctor.shortBio}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Pronto para dar o primeiro passo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato para agendar sua consulta e descobrir 
              como podemos ajudar você a viver com mais plenitude.
            </p>
            <Link
              href={whatsappUrl(WHATSAPP_MESSAGES.consulta)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium"
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
