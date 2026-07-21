import Link from "next/link"
import { Instagram, Linkedin, MapPin, Phone } from "lucide-react"
import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants"

const navigation = {
  main: [
    { name: "Sobre", href: "/#sobre" },
    { name: "Dra. Isadora Valente", href: "/equipe/dra-isadora-valente" },
    { name: "Espaço", href: "/#espaco" },
    { name: "Contato", href: "/#contato" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
  ],
}

const social = [
  { name: "Instagram", href: "https://www.instagram.com/viventia.medical/", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/viventia", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-[#3a3230] text-[#f5ebe3]">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-medium tracking-wide text-vivere-gradient">
                Viventia
              </span>
            </Link>
            <p className="text-[#f5ebe3]/70 leading-relaxed mb-8 max-w-sm">
              Mais do que tratar sintomas, proporcionar vida plena. 
              Cuidado humanizado em saúde.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#f5ebe3]/30 flex items-center justify-center hover:bg-[#f5ebe3]/10 hover:border-[#e2aa80] transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-sm tracking-wider uppercase mb-6 text-[#e2aa80]">
              Navegação
            </h4>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#f5ebe3]/80 hover:text-[#e2aa80] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h4 className="text-sm tracking-wider uppercase mb-6 text-[#e2aa80]">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#e2aa80] mt-0.5 flex-shrink-0" />
                <p className="text-[#f5ebe3]/80">
                  K-Platz Corporate<br />
                  R. Elizeu di Bernardi, 34 - Campinas<br />
                  Grande Florianópolis - SC <br />
                  CEP 88101-050
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#e2aa80] flex-shrink-0" />
                <Link
                  href={`tel:${PHONE_TEL}`}
                  className="text-[#f5ebe3]/80 hover:text-[#e2aa80] transition-colors"
                >
                  {PHONE_DISPLAY}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#f5ebe3]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#f5ebe3]/50">
            &copy; {new Date().getFullYear()} Allora Company. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#f5ebe3]/50">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#e2aa80] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
