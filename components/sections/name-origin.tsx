"use client"

export function NameOriginSection() {
  return (
    <section className="py-16 lg:py-24 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Editorial typography composition */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Typography Feature */}
            <div className="lg:col-span-5">
              <div className="relative">
                <span className="block text-8xl md:text-9xl lg:text-[12rem] font-serif italic text-vivere-gradient opacity-20 leading-none select-none">
                  V
                </span>
                <div className="absolute top-1/2 left-12 md:left-16 -translate-y-1/2">
                  <span className="block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Do latim
                  </span>
                  <span className="block font-serif text-4xl md:text-5xl text-foreground italic">
                    Vivere
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                    <span className="text-foreground">Por que </span>
                    <span className="text-vivere-gradient italic">Viventia</span>
                    <span className="text-foreground">?</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    O nome <strong className="text-foreground font-medium">Viventia</strong> tem 
                    origem no latim <em>vivere</em>, que significa &ldquo;viver&rdquo;. É a raiz 
                    de palavras como vivência, experiência e, claro, vida.
                  </p>

                  <p>
                    Escolhemos este nome porque representa exatamente nossa missão: 
                    não apenas tratar, mas ajudar cada pessoa a{" "}
                    <span className="text-foreground font-medium">
                      viver plenamente
                    </span>
                    . Acreditamos que a saúde é a base para uma vida
                    genuinamente vivida.
                  </p>

                  <p>
                    <em>Viventia</em> também evoca a ideia de &ldquo;os que vivem&rdquo; — 
                    uma comunidade de pessoas que escolhem cuidar de si mesmas, 
                    que buscam não apenas existir, mas viver com propósito, 
                    presença e plenitude.
                  </p>
                </div>

                {/* Quote with gradient border */}
                <blockquote className="relative pl-6 border-l-2 border-accent">
                  <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
                    &ldquo;Saúde não é ausência de dificuldades, mas a
                    capacidade de viver com significado, mesmo diante delas.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Bottom decorative text */}
          <div className="mt-20 pt-12 border-t border-border/50">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              <span>Viver</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Vivência</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Experiência</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Plenitude</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-vivere-gradient font-medium">Viventia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
