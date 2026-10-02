"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants"

const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/equipe/dra-isadora-valente", label: "Dra. Isadora Valente" },
  { href: "/#espaco", label: "Espaço" },
  { href: "/#contato", label: "Contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Com o menu aberto travamos o scroll do documento: o overlay tem rolagem
  // própria (necessária em telas baixas), e sem o lock os dois competem.
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo with gradient. Inside the 1920x574 viewBox the artwork starts at
              x=107 and the wordmark sits above centre (the tagline takes the lower
              third), so box-centring leaves VIVENTIA high and indented. The offsets
              below are percentages of the element, so they hold at any h-* size:
              5.573% = 107/1920, 14.222% = the wordmark's offset from centre. */}
          <Link href="/" className="relative z-10">
              <img
                src="/images/logo-escrito-horizontal.svg"
                alt="Viventia"
                className="h-12 w-auto -translate-x-[5.573%] translate-y-[14.222%]"
              />
          </Link>

          {/* Desktop Navigation. Only from lg: the links, logo and CTA need ~806px,
              but the container is capped at 768px for the whole md range, so at md
              the links used to overflow underneath the CTA. */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button with gradient */}
          <Link
            href={whatsappUrl(WHATSAPP_MESSAGES.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm tracking-wider uppercase btn-vivere-gradient text-white rounded-full"
          >
            Agendar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-foreground"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu. Painel de tela cheia com rolagem própria: em telas baixas
          (celular deitado, ~360px de altura) os links + CTA não cabem centrados
          e antes vazavam por cima da logo e do botão de fechar, sem como rolar.
          100dvh acompanha a barra de endereço do Safari/Chrome mobile; o
          min-h-full interno centraliza quando sobra espaço e cresce quando não. */}
      <div
        className={cn(
          "fixed inset-0 h-[100dvh] overflow-y-auto overscroll-contain bg-background lg:hidden transition-opacity duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* py-24 = a altura do header: mantém o bloco centrado na tela e, quando
            o conteúdo não cabe e o painel rola, o topo nunca encosta na logo.
            Em telas baixas (celular deitado) o espaçamento encolhe para o CTA
            caber sem rolagem — a logo e o X ficam em faixas horizontais livres. */}
        <div className="flex min-h-full flex-col items-center justify-center gap-2 px-6 py-24 [@media(max-height:600px)]:gap-0 [@media(max-height:600px)]:py-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs py-3 text-center text-xl sm:text-2xl font-serif tracking-wide text-balance text-foreground hover:text-primary transition-colors [@media(max-height:600px)]:py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappUrl(WHATSAPP_MESSAGES.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase btn-vivere-gradient text-white rounded-full [@media(max-height:600px)]:mt-4"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  )
}
