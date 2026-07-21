"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowDown } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const opacity = Math.max(0, 1 - scrollY / 600)
        const translateY = scrollY * 0.3
        heroRef.current.style.setProperty("--scroll-opacity", opacity.toString())
        heroRef.current.style.setProperty("--scroll-translate", `${translateY}px`)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        ["--scroll-opacity" as string]: 1,
        ["--scroll-translate" as string]: "0px",
      }}
    >
      {/* Background - Ethereal Hush base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle decorative gradient overlay */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/50 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32">
          {/* Content */}
          <div 
            className="max-w-2xl"
            style={{
              opacity: "var(--scroll-opacity)",
              transform: "translateY(var(--scroll-translate))",
            }}
          >
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-up opacity-0">
              Clínica Médica
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-8 animate-fade-up opacity-0 delay-100">
              <span className="block text-foreground text-balance">Mais do que</span>
              <span className="block text-foreground text-balance">tratar sintomas,</span>
              <span className="block text-vivere-gradient italic">vida plena</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl animate-fade-up opacity-0 delay-200">
              Na Viventia, acreditamos que o cuidado com a saúde vai além do consultório.
              Proporcionamos uma experiência acolhedora, humanizada e transformadora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-vivere-gradient text-white rounded-full text-sm tracking-wider uppercase font-medium group"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#sobre"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-secondary-outline rounded-full text-sm tracking-wider uppercase font-medium"
              >
                Conheça a Viventia
              </Link>
            </div>
          </div>

          {/* Image - Editorial asymmetric composition */}
          <div 
            className="relative hidden lg:block"
            style={{
              opacity: "var(--scroll-opacity)",
              transform: "translateY(var(--scroll-translate))",
            }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-scale-in opacity-0 delay-200">
                <Image
                  src="/images/hero.webp"
                  alt="Ambiente acolhedor da Viventia"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating accent card - white card on beige background */}
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-lg border border-border/50 max-w-xs animate-fade-up opacity-0 delay-400">
                <p className="font-serif text-lg text-foreground italic leading-relaxed">
                  &ldquo;O cuidado verdadeiro começa com empatia e presença.&rdquo;
                </p>
                <span className="block mt-3 text-sm text-muted-foreground tracking-wider uppercase">
                  Filosofia Viventia
                </span>
              </div>

              {/* Decorative element with gradient */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link 
          href="#sobre" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs tracking-wider uppercase">Explorar</span>
          <ArrowDown className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
