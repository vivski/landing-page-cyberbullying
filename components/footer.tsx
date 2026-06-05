import Link from "next/link"
import { Shield, Heart, Instagram, Mail, Github } from "lucide-react"

const links = {
  principal: [
    { href: "#inicio", label: "Início" },
    { href: "#identificar", label: "Identificar" },
    { href: "#denunciar", label: "Como Denunciar" },
    { href: "#legislacao", label: "Legislação" },
  ],
  apoio: [
    { href: "#apoio", label: "Rede de Apoio" },
    { href: "#contatos", label: "Contatos Úteis" },
    { href: "#mural", label: "Mural da Paz" },
    { href: "https://safernet.org.br", label: "SaferNet Brasil", external: true },
  ],
  recursos: [
    { href: "https://canaldeajuda.org.br", label: "Canal de Ajuda", external: true },
    { href: "https://cvv.org.br", label: "CVV - Ligue 188", external: true },
    { href: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L14811.htm", label: "Lei 14.811/2024", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <Heart className="w-4 h-4 text-secondary absolute -bottom-1 -right-1 fill-secondary" />
              </div>
              <span className="font-bold text-lg text-card">
                Conexão <span className="text-primary">Segura</span>
              </span>
            </Link>
            <p className="text-sm text-card/60 mb-4">
              Projeto educativo sobre cyberbullying desenvolvido para a disciplina de Direito Digital.
            </p>
          </div>

          {/* Links principais */}
          <div>
            <h4 className="font-semibold text-card mb-4">Navegação</h4>
            <ul className="space-y-2">
              {links.principal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apoio */}
          <div>
            <h4 className="font-semibold text-card mb-4">Apoio</h4>
            <ul className="space-y-2">
              {links.apoio.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-card/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-card/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold text-card mb-4">Recursos</h4>
            <ul className="space-y-2">
              {links.recursos.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-card/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergência */}
        <div className="bg-card/5 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-card mb-1">Precisa de ajuda urgente?</p>
              <p className="text-sm text-card/60">
                CVV (188), Polícia (190), Disque 100 (crianças/adolescentes)
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:188"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Ligar 188
              </a>
              <a
                href="https://cvv.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-card/10 text-card rounded-full text-sm font-medium hover:bg-card/20 transition-colors"
              >
                Chat CVV
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-card/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-card/40">
            © {new Date().getFullYear()} Conexão Segura. Projeto acadêmico - Direito Digital.
            Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-card/40">Desenvolvido com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>
        </div>
      </div>
    </footer>
  )
}
