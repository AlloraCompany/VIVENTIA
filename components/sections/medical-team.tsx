"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { doctorsData } from "@/lib/doctors"

export function MedicalTeamSection() {
  return (
    <section id="equipe" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-block text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Equipe Médica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="text-foreground">Profissionais que </span>
            <span className="text-vivere-gradient italic">fazem a diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa equipe é formada por médicos altamente qualificados, unidos pelo
            compromisso com o cuidado humanizado e a excelência clínica.
          </p>
        </div>

        {/* Doctors Grid */}
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
                  <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {doctor.shortBio}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16 text-center">
          <Link
            href="/equipe"
            className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wider uppercase">Ver toda a equipe</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
