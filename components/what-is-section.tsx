"use client"

import { motion } from "framer-motion"
import { MessageSquare, Eye, UserX, Camera, Repeat, AlertTriangle } from "lucide-react"

const differences = [
  {
    bullying: "Acontece em ambiente físico (escola, trabalho)",
    cyberbullying: "Acontece 24h por dia, em qualquer lugar com internet",
  },
  {
    bullying: "Geralmente testemunhado por poucas pessoas",
    cyberbullying: "Pode viralizar e atingir milhares de pessoas",
  },
  {
    bullying: "Agressor é identificável",
    cyberbullying: "Agressor pode usar perfis falsos e anonimato",
  },
  {
    bullying: "Evidências podem ser difíceis de comprovar",
    cyberbullying: "Deixa rastros digitais (prints, logs, URLs)",
  },
]

const types = [
  {
    icon: MessageSquare,
    title: "Verbal/Escrito",
    description: "Ofensas, xingamentos e humilhações em comentários, mensagens ou posts",
    platforms: ["WhatsApp", "Instagram", "TikTok"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Camera,
    title: "Exposição",
    description: "Divulgação de fotos, vídeos ou informações íntimas sem autorização",
    platforms: ["WhatsApp", "X", "Telegram"],
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: UserX,
    title: "Exclusão Social",
    description: "Remoção intencional de grupos, bloqueios coordenados, isolamento digital",
    platforms: ["Discord", "WhatsApp", "Games"],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Eye,
    title: "Perseguição (Stalking)",
    description: "Monitoramento obsessivo, mensagens constantes, invasão de privacidade",
    platforms: ["Instagram", "Facebook", "Email"],
    color: "bg-safe/10 text-safe",
  },
  {
    icon: Repeat,
    title: "Perfil Falso",
    description: "Criação de contas falsas para se passar pela vítima ou difamá-la",
    platforms: ["Instagram", "TikTok", "Facebook"],
    color: "bg-warm/10 text-warm",
  },
  {
    icon: AlertTriangle,
    title: "Ameaças",
    description: "Intimidações, chantagens e ameaças de violência ou exposição",
    platforms: ["Todas as plataformas"],
    color: "bg-chart-5/10 text-chart-5",
  },
]

export function WhatIsSection() {
  return (
    <section id="oque-e" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Entenda</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-outfit)' }}>
            O que é Cyberbullying?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            É a prática de intimidação, humilhação, ameaça ou perseguição realizada através 
            de meios digitais como redes sociais, mensagens, jogos online ou qualquer plataforma na internet.
          </p>
        </motion.div>

        {/* Diferenças */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Bullying vs Cyberbullying
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                Bullying Tradicional
              </h4>
              <ul className="space-y-3">
                {differences.map((diff, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                    {diff.bullying}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border-2 border-primary/20">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                Cyberbullying
              </h4>
              <ul className="space-y-3">
                {differences.map((diff, i) => (
                  <li key={i} className="text-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {diff.cyberbullying}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Impactos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Impactos do Cyberbullying
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-6 border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Psicológicos</h4>
              <p className="text-sm text-muted-foreground">
                Ansiedade, depressão, baixa autoestima, isolamento social, 
                pensamentos suicidas, transtornos alimentares.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Sociais</h4>
              <p className="text-sm text-muted-foreground">
                Dificuldade de confiar, medo de exposição, afastamento de amigos, 
                problemas de relacionamento, vergonha pública.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border card-hover">
              <div className="w-12 h-12 rounded-xl bg-safe/10 flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Jurídicos</h4>
              <p className="text-sm text-muted-foreground">
                Cyberbullying é crime com pena de 2 a 4 anos de prisão (Lei 14.811/2024). 
                Agressores respondem civil e criminalmente.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground text-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">
            Dados que alertam
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "37%", label: "dos jovens já sofreu cyberbullying no Brasil" },
              { number: "1 em 3", label: "vítimas não conta para ninguém" },
              { number: "73%", label: "dos casos ocorrem em redes sociais" },
              { number: "2-4 anos", label: "pena de prisão para cyberbullying" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{stat.number}</div>
                <p className="text-sm text-card/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function IdentifySection() {
  return (
    <section id="identificar" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">Reconheça</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-outfit)' }}>
            Tipos de Cyberbullying
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Identificar o tipo de agressão é o primeiro passo para combatê-la
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <type.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
              <div className="flex flex-wrap gap-2">
                {type.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl text-center"
        >
          <p className="text-lg md:text-xl font-medium text-foreground">
            Se você identificou alguma dessas situações,{" "}
            <span className="text-primary font-semibold">isso pode ser crime</span>.
          </p>
          <a
            href="#denunciar"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            Veja como denunciar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
