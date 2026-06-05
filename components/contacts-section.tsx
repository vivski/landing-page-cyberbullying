"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Globe, ExternalLink, Search, ChevronDown } from "lucide-react"

interface DelegaciaData {
  estado: string
  sigla: string
  nome: string
  endereco?: string
  telefone?: string
  delegado?: string
  delegaciaVirtual: string
  observacao?: string
}

const delegacias: DelegaciaData[] = [
  {
    estado: "Alagoas",
    sigla: "AL",
    nome: "Delegacia de Crimes Cibernéticos",
    endereco: "Av. Jorge Montenegro Barros, Santa Amélia, Maceió - AL",
    telefone: "(82) 3315-2629",
    delegado: "Sidney Tenório",
    delegaciaVirtual: "https://delegaciavirtual.sinesp.gov.br/portal/",
    observacao: "Delegacia Virtual DEVIR disponível 24h para BO online"
  },
  {
    estado: "São Paulo",
    sigla: "SP",
    nome: "4ª Delegacia de Delitos Cometidos por Meios Eletrônicos (DIG/DEIC)",
    endereco: "Av. Zaki Narchi, 152 - Carandiru, São Paulo - SP",
    telefone: "(11) 2221-7030",
    delegaciaVirtual: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/",
    observacao: "Atende apenas fraudes financeiras. Outros crimes: delegacia comum"
  },
  {
    estado: "Rio de Janeiro",
    sigla: "RJ",
    nome: "Delegacia de Repressão aos Crimes de Informática (DRCI)",
    endereco: "Rua Professor Clementino Fraga, 77 - Cidade Nova, Rio de Janeiro - RJ",
    telefone: "(21) 2332-8192",
    delegaciaVirtual: "https://dedfrj.pcivil.rj.gov.br/",
  },
  {
    estado: "Minas Gerais",
    sigla: "MG",
    nome: "Delegacia Especializada de Investigação de Crimes Cibernéticos",
    endereco: "Av. Nossa Senhora de Fátima, 2855 - Carlos Prates, Belo Horizonte - MG",
    telefone: "(31) 3212-3002",
    delegaciaVirtual: "https://delegaciavirtual.sids.mg.gov.br/",
  },
  {
    estado: "Bahia",
    sigla: "BA",
    nome: "Grupo Especializado de Repressão aos Crimes por Meios Eletrônicos (GME)",
    endereco: "Rua Conselheiro Spínola, 175 - Barris, Salvador - BA",
    telefone: "(71) 3117-6109",
    delegaciaVirtual: "https://delegaciavirtual.sinesp.gov.br/portal/",
  },
  {
    estado: "Paraná",
    sigla: "PR",
    nome: "Núcleo de Combate aos Cibercrimes (Nuciber)",
    endereco: "Rua José Loureiro, 376 - Centro, Curitiba - PR",
    telefone: "(41) 3321-1900",
    delegaciaVirtual: "https://www.delegaciavirtual.pr.gov.br/",
  },
  {
    estado: "Rio Grande do Sul",
    sigla: "RS",
    nome: "Delegacia de Repressão aos Crimes Informáticos e Defraudações",
    endereco: "Av. Cristiano Fischer, 2024 - Partenon, Porto Alegre - RS",
    telefone: "(51) 3288-9815",
    delegaciaVirtual: "https://www.delegaciaonline.rs.gov.br/",
  },
  {
    estado: "Distrito Federal",
    sigla: "DF",
    nome: "Delegacia Especial de Repressão aos Crimes Cibernéticos (DRCC)",
    endereco: "SPO, Área Especial 4, Quadra 4, Lote 22 - Setor Policial Sul",
    telefone: "(61) 3207-4892",
    delegaciaVirtual: "https://www.pcdf.df.gov.br/servicos/delegacia-eletronica",
  },
  {
    estado: "Pernambuco",
    sigla: "PE",
    nome: "Delegacia de Repressão aos Crimes Cibernéticos",
    endereco: "Rua da Aurora, 487 - Boa Vista, Recife - PE",
    telefone: "(81) 3184-3207",
    delegaciaVirtual: "https://delegaciavirtual.sinesp.gov.br/portal/",
  },
  {
    estado: "Ceará",
    sigla: "CE",
    nome: "Delegacia de Defraudações e Falsificações",
    endereco: "Av. Bezerra de Menezes, 581 - São Gerardo, Fortaleza - CE",
    telefone: "(85) 3101-2525",
    delegaciaVirtual: "https://delegaciavirtual.sinesp.gov.br/portal/",
  },
  {
    estado: "Goiás",
    sigla: "GO",
    nome: "Delegacia Estadual de Investigações Criminais (DEIC) - Crimes Cibernéticos",
    endereco: "Av. Atílio Corrêa Lima, 1223 - Cidade Jardim, Goiânia - GO",
    telefone: "(62) 3201-1150",
    delegaciaVirtual: "https://delegaciavirtual.sinesp.gov.br/portal/",
  },
  {
    estado: "Santa Catarina",
    sigla: "SC",
    nome: "Divisão de Repressão a Crimes de Informática (DRCI)",
    endereco: "Rua Artista Bittencourt, 30 - Centro, Florianópolis - SC",
    telefone: "(48) 3665-6100",
    delegaciaVirtual: "https://delegaciavirtual.sc.gov.br/",
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
  const [expandedState, setExpandedState] = useState<string | null>("AL")

  const filteredDelegacias = delegacias.filter(d => 
    d.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.sigla.toLowerCase().includes(searchTerm.toLowerCase())
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

        {/* Delegacias por estado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-4">
            Delegacias Especializadas por Estado
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Se seu estado não possui delegacia especializada, registre o B.O. na delegacia mais próxima
          </p>

          {/* Busca */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por estado..."
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
                key={delegacia.sigla}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedState(
                    expandedState === delegacia.sigla ? null : delegacia.sigla
                  )}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-safe/10 flex items-center justify-center text-safe font-bold text-sm">
                      {delegacia.sigla}
                    </span>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{delegacia.estado}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{delegacia.nome}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedState === delegacia.sigla ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {expandedState === delegacia.sigla && (
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
