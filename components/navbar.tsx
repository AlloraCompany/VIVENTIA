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
          {/* Logo with gradient */}
          <Link href="/" className="relative z-10">
              <img
                src="/images/logo-escrito-horizontal.svg"
                alt="Viventia"
                className="h-10 w-auto"
              />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
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
            className="hidden md:inline-flex items-center px-6 py-2.5 text-sm tracking-wider uppercase btn-vivere-gradient text-white rounded-full"
          >
            Agendar
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 text-foreground"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-lg md:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-wide text-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappUrl(WHATSAPP_MESSAGES.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 text-sm tracking-wider uppercase btn-vivere-gradient text-white rounded-full"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  )
}
