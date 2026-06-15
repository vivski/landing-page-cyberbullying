"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Globe, ExternalLink, Search, ChevronDown, Building2 } from "lucide-react"


interface DelegaciaData {
  estado?: string
  sigla?: string
  cidade: string
  nome: string
  endereco?: string
  telefone?: string
  delegado?: string
  delegaciaVirtual?: string
  observacao?: string
}

const delegacias: DelegaciaData[] = [
  {
    estado: "Alagoas",
    cidade: "Maceió",
    nome: "Delegacia de Crimes Cibernéticos",
    endereco: "Av. Jorge Montenegro Barros, Santa Amélia, Maceió - AL",
    telefone: "(82) 3315-2629",
    delegaciaVirtual: "https://delegaciavirtual.sinesp.gov.br/portal/",
    observacao: "Delegacia Virtual disponível 24h para BO online"
  },
  {
    estado: "Alagoas",
    cidade: "Maceió",
    nome: "Delegacia dos Crimes Contra Vulneráveis Yalorixá Tia Marcelina",
    endereco: "Complexo de Delegacias Especializadas (CODE) – Av. Comendador Gustavo Paiva, s/n, Mangabeiras",
    telefone: "(82) 3315-1393",
    observacao: "Foco em cyberbullying motivado por preconceito, homofobia, intolerância religiosa ou contra idosos/PCD",
  },
  {
    estado: "Alagoas",
    cidade: "Maceió",
    nome: "Delegacia dos Crimes Contra Crianças e Adolescentes da Capital (DECCCA)",
    endereco: "Rua Abdon Assis Inojosa Andrade, s/n, Jatiúca",
    telefone: "(82) 3315-9941",
    observacao: "Foco em vítimas menores de 18 anos",
  },
  {
    estado: "Alagoas",
    cidade: "Maceió",
    nome: "1ª Delegacia de Defesa dos Direitos da Mulher (1ª DEAM)",
    endereco: "Complexo de Delegacias Especializadas (CODE) – Av. Comendador Gustavo Paiva, s/n, Mangabeiras",
    telefone: "(82) 3315-4976",
    observacao: "Foco em cyberbullying contra mulheres / vazamento de fotos / perseguição digital",
  },
  {
    estado: "Alagoas",
    cidade: "Arapiraca",
    nome: "Delegacia de Defesa dos Direitos da Mulher e Geral de Arapiraca",
    endereco: "Rua Domingos Correia, nº 443, Centro",
    telefone: "(82) 3521-6318",
  },
  {
    estado: "Alagoas",
    cidade: "Delmiro Golveia",
    nome: "1ª Delegacia Regional de Polícia (CISP Delmiro Gouveia)",
    endereco: "Rodovia AL-145, s/n, Bairro Novo (Complexo CISP)",
    telefone: "(82) 98833-4105",
  },
]

const contatosUteis = [
  {
    nome: "SaferNet Brasil",
    descricao: "Denúncia de crimes e violações de direitos humanos na internet",
    contato: "denuncia.org.br",
    link: "https://new.safernet.org.br/denuncie",
    icon: "🛡️"
  },
  {
    nome: "Disque 100",
    descricao: "Violações de direitos de crianças e adolescentes",
    contato: "Ligue 100",
    link: "https://www.gov.br/mdh/pt-br/acesso-a-informacao/disque-direitos-humanos",
    icon: "📞"
  },
  {
    nome: "Disque 180",
    descricao: "Central de Atendimento à Mulher",
    contato: "Ligue 180",
    link: "https://www.gov.br/mdh/pt-br/navegue-por-temas/politicas-para-mulheres/ligue-180",
    icon: "👩"
  },
  {
    nome: "Canal de Ajuda",
    descricao: "Orientação para vítimas de violência online",
    contato: "canaldeajuda.org.br",
    link: "https://canaldeajuda.org.br",
    icon: "💬"
  },
]

export function ContactsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedState, setExpandedState] = useState<string | null>("Delegacia de Crimes Cibernéticos")

  const filteredDelegacias = delegacias.filter(d => 
    d.cidade.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="contatos" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Contatos</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-outfit)' }}>
            Para onde ligar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Delegacias especializadas em crimes digitais e canais de denúncia em todo o Brasil
          </p>
        </motion.div>

        {/* Contatos úteis nacionais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Canais Nacionais
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contatosUteis.map((contato) => (
              <a
                key={contato.nome}
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl border border-border p-5 card-hover group"
              >
                <span className="text-3xl mb-3 block">{contato.icon}</span>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {contato.nome}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">{contato.descricao}</p>
                <div className="flex items-center gap-1 text-sm text-primary font-medium">
                  {contato.contato}
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Delegacias em Alagoas*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-4">
            Delegacias Especializadas em Alagoas
          </h3>

          {/* Busca */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por cidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* Lista de delegacias */}
          <div className="space-y-3 max-w-4xl mx-auto">
            {filteredDelegacias.map((delegacia) => (
              <div
                key={delegacia.nome}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedState(
                    expandedState === delegacia.nome ? null : delegacia.nome
                  )}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-safe/10 flex items-center justify-center text-safe">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{delegacia.nome}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{delegacia.endereco}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedState === delegacia.nome ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {expandedState === delegacia.nome && (
                  <div className="px-4 pb-4 pt-2 border-t border-border">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        {delegacia.endereco && (
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                            <p className="text-sm text-foreground">{delegacia.endereco}</p>
                          </div>
                        )}
                        {delegacia.telefone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                            <a href={`tel:${delegacia.telefone}`} className="text-sm text-primary hover:underline">
                              {delegacia.telefone}
                            </a>
                          </div>
                        )}
                        {delegacia.delegado && (
                          <p className="text-sm text-muted-foreground">
                            <strong>Delegado(a):</strong> {delegacia.delegado}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3">
                        {delegacia.delegaciaVirtual && (
                          <a
                            href={delegacia.delegaciaVirtual}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-safe text-safe-foreground rounded-lg font-medium text-sm hover:bg-safe/90 transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                            Delegacia Virtual
                            <ExternalLink className="w-3 h-3 ml-auto" />
                          </a>
                        )}
                        {delegacia.observacao && (
                          <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded-lg">
                            ℹ️ {delegacia.observacao}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredDelegacias.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Nenhuma delegacia encontrada para &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-sm text-muted-foreground mt-2">
                Tente buscar por outro estado ou use a Delegacia Virtual federal
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
