"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Shield, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#identificar", label: "Identificar" },
  { href: "#denunciar", label: "Como Denunciar" },
  { href: "#legislacao", label: "Legislação" },
  { href: "#apoio", label: "Rede de Apoio" },
  { href: "#contatos", label: "Contatos" },
  { href: "#mural", label: "Mural da Paz" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <Heart className="w-4 h-4 text-secondary absolute -bottom-1 -right-1 fill-secondary" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">
              Conexão <span className="text-primary">Segura</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#denunciar"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Preciso de Ajuda
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#denunciar"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-center"
              >
                Preciso de Ajuda
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
