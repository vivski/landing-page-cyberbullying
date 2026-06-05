"use client"

import { motion } from "framer-motion"
import { ArrowDown, Shield, Users, BookOpen } from "lucide-react"
import Link from "next/link"

const profiles = [
  {
    icon: Shield,
    label: "Sou Vítima",
    description: "Preciso de ajuda e orientação",
    href: "#denunciar",
    color: "bg-primary",
  },
  {
    icon: Users,
    label: "Sou Pai/Mãe",
    description: "Meu filho está sofrendo ou praticando",
    href: "#apoio",
    color: "bg-secondary",
  },
  {
    icon: BookOpen,
    label: "Sou Educador",
    description: "Quero aprender a prevenir",
    href: "#identificar",
    color: "bg-safe",
  },
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Você não está sozinho(a)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Cyberbullying{" "}
            <span className="text-gradient">machuca</span>,<br />
            mas juntos podemos{" "}
            <span className="relative">
              <span className="text-primary">parar</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 8 Q 25 0, 50 8 T 100 8" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/30" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            Um espaço seguro para entender, denunciar e buscar ajuda. 
            Aqui você encontra informações, apoio jurídico e psicológico, 
            e uma comunidade que se importa com você.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 md:mt-12"
          >
            <p className="text-sm font-medium text-muted-foreground mb-4">Como podemos ajudar você hoje?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {profiles.map((profile, index) => (
                <Link
                  key={profile.label}
                  href={profile.href}
                  className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-6 text-left transition-all hover:border-primary/50 hover:shadow-xl card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl ${profile.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <profile.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{profile.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{profile.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link
            href="#oque-e"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Saiba mais</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
