import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, GraduationCap, Stethoscope, Target, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDoctorBySlug, getAllDoctorSlugs } from "@/lib/doctors"
import { whatsappUrl, WHATSAPP_MESSAGES, PHONE_TEL } from "@/lib/constants"
import type { Metadata } from "next"

interface DoctorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllDoctorSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  
  if (!doctor) {
    return { title: "Médico não encontrado - Viventia" }
  }

  return {
    title: `${doctor.name} - ${doctor.specialty} | Viventia`,
    description: doctor.fullBio.slice(0, 160),
  }
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)

  if (!doctor) {
    notFound()
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back link */}
          <Link 
            href="/#equipe"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider uppercase">Voltar para equipe</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative element with accent color */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="lg:py-8">
              <span className="inline-block text-sm tracking-[0.3em] uppercase text-accent mb-4">
                {doctor.specialty}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                {doctor.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {doctor.fullBio}
              </p>

              {/* CTA with gradient */}
              <Link
                href="#contato"
                className="inline-flex items-center gap-3 px-8 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium group"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Filosofia de Atendimento
            </span>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic">
              &ldquo;{doctor.philosophy}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Education */}
            <div className="p-8 bg-background rounded-2xl border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Formação</h2>
              </div>
              <ul className="space-y-4">
                {doctor.education.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div className="p-8 bg-background rounded-2xl border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Especialidades</h2>
              </div>
              <ul className="space-y-4">
                {doctor.specialties.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div className="p-8 bg-background rounded-2xl border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Áreas de Atuação</h2>
              </div>
              <ul className="space-y-4">
                {doctor.areas.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trajectory */}
            <div className="p-8 bg-background rounded-2xl border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-foreground">Trajetória</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {doctor.trajectory}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              <span className="text-foreground">Agende sua consulta com </span>
              <span className="text-vivere-gradient italic">{doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dê o primeiro passo em direção ao seu bem-estar. Entre em contato 
              para agendar uma consulta e conhecer nossa abordagem humanizada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={whatsappUrl(WHATSAPP_MESSAGES.consulta)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium w-full sm:w-auto"
              >
                WhatsApp
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-secondary-outline rounded-full text-sm tracking-wider uppercase font-medium w-full sm:w-auto"
              >
                Ligar Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
