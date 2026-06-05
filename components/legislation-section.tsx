"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Scale, ChevronRight, BookOpen, ExternalLink } from "lucide-react"

const laws = [
  {
    id: "lei-14811",
    name: "Lei 14.811/2024",
    title: "Cyberbullying como Crime",
    article: "Art. 146-A, §1º do Código Penal",
    penalty: "Reclusão de 2 a 4 anos + multa",
    simpleExplanation: "Agora cyberbullying é crime com prisão. Se alguém te humilhar, perseguir ou ameaçar pela internet de forma repetida, pode ser preso.",
    situations: [
      "Me humilham constantemente em grupo de WhatsApp",
      "Criaram perfil fake para me difamar",
      "Recebo ameaças por mensagens"
    ]
  },
  {
    id: "marco-civil",
    name: "Marco Civil da Internet",
    title: "Lei 12.965/2014",
    article: "Arts. 19 a 21",
    penalty: "Responsabilização de provedores e indenização",
    simpleExplanation: "As redes sociais podem ser obrigadas a remover conteúdo ofensivo e revelar dados do agressor mediante ordem judicial.",
    situations: [
      "Pedi para a rede social remover e não removeram",
      "Preciso descobrir quem está me atacando",
      "Quero que a plataforma responda por não agir"
    ]
  },
  {
    id: "lgpd",
    name: "LGPD",
    title: "Lei 13.709/2018",
    article: "Arts. 17 a 22",
    penalty: "Multa de até R$ 50 milhões por infração",
    simpleExplanation: "Seus dados pessoais (fotos, endereço, telefone) não podem ser expostos sem sua autorização. Você pode exigir remoção.",
    situations: [
      "Divulgaram meu número/endereço sem permissão",
      "Usaram minhas fotos sem autorização",
      "Expuseram informações pessoais minhas"
    ]
  },
  {
    id: "eca",
    name: "ECA",
    title: "Estatuto da Criança e Adolescente",
    article: "Arts. 17, 18 e 232",
    penalty: "Medidas socioeducativas + responsabilização dos pais",
    simpleExplanation: "Crianças e adolescentes têm proteção especial. Agressores menores respondem com medidas educativas, e os pais podem ser responsabilizados.",
    situations: [
      "Meu filho menor está sendo vítima",
      "Um menor de idade está me agredindo online",
      "Cyberbullying aconteceu na escola"
    ]
  },
  {
    id: "constituicao",
    name: "Constituição Federal",
    title: "Direitos Fundamentais",
    article: "Art. 5º, X",
    penalty: "Base para todos os outros direitos",
    simpleExplanation: "Sua honra, imagem e privacidade são direitos garantidos pela Constituição. Ninguém pode violá-los impunemente.",
    situations: [
      "Estão destruindo minha reputação",
      "Minha privacidade foi invadida",
      "Minha imagem está sendo usada indevidamente"
    ]
  },
  {
    id: "carolina-dieckmann",
    name: "Lei Carolina Dieckmann",
    title: "Lei 12.737/2012",
    article: "Art. 154-A do Código Penal",
    penalty: "Detenção de 3 meses a 1 ano + multa",
    simpleExplanation: "Invadir dispositivos eletrônicos (celular, computador) ou instalar programas para obter dados é crime.",
    situations: [
      "Invadiram minha conta/celular",
      "Acessaram minhas mensagens sem permissão",
      "Instalaram app espião no meu celular"
    ]
  },
]

export function LegislationSection() {
  const [selectedLaw, setSelectedLaw] = useState(laws[0])

  return (
    <section id="legislacao" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-safe font-medium text-sm tracking-wider uppercase">Seus Direitos</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-outfit)' }}>
            O que a lei diz?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça as leis que te protegem — explicadas de forma simples
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Lista de leis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {laws.map((law) => (
              <button
                key={law.id}
                onClick={() => setSelectedLaw(law)}
                className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${
                  selectedLaw.id === law.id
                    ? "bg-safe text-safe-foreground"
                    : "bg-card border border-border hover:border-safe/50"
                }`}
              >
                <div>
                  <p className={`font-semibold ${selectedLaw.id === law.id ? "text-safe-foreground" : "text-foreground"}`}>
                    {law.name}
                  </p>
                  <p className={`text-sm ${selectedLaw.id === law.id ? "text-safe-foreground/70" : "text-muted-foreground"}`}>
                    {law.title}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${
                  selectedLaw.id === law.id ? "translate-x-1" : "group-hover:translate-x-1"
                }`} />
              </button>
            ))}
          </motion.div>

          {/* Detalhes da lei selecionada */}
          <motion.div
            key={selectedLaw.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-safe/10 flex items-center justify-center shrink-0">
                <Scale className="w-7 h-7 text-safe" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{selectedLaw.name}</h3>
                <p className="text-muted-foreground">{selectedLaw.title}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Artigo</p>
                  <p className="text-foreground font-medium">{selectedLaw.article}</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Penalidade</p>
                  <p className="text-primary font-medium">{selectedLaw.penalty}</p>
                </div>
              </div>

              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-secondary" />
                  <p className="font-semibold text-foreground">Em linguagem simples:</p>
                </div>
                <p className="text-foreground leading-relaxed">{selectedLaw.simpleExplanation}</p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-3">Quando essa lei se aplica:</p>
                <div className="space-y-2">
                  {selectedLaw.situations.map((situation, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <span className="text-lg">💬</span>
                      <p className="text-sm text-foreground">&ldquo;{situation}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card destaque da nova lei */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-safe/10 rounded-3xl p-8 md:p-10 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold mb-3">
                NOVIDADE 2024
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Cyberbullying agora é crime no Brasil
              </h3>
              <p className="text-muted-foreground">
                A Lei 14.811/2024 inseriu o cyberbullying no Código Penal com pena de 
                <strong className="text-primary"> 2 a 4 anos de prisão</strong>. 
                Isso significa que agressores podem ser processados criminalmente.
              </p>
            </div>
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L14811.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Ver lei completa
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
