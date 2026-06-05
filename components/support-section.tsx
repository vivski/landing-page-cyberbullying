"use client"

import { motion } from "framer-motion"
import { Heart, Scale, GraduationCap, Users, ExternalLink, Phone } from "lucide-react"

const supportCategories = [
  {
    icon: Heart,
    title: "Apoio Psicológico",
    color: "bg-primary",
    resources: [
      {
        name: "CVV - Centro de Valorização da Vida",
        description: "Apoio emocional e prevenção do suicídio, 24h",
        contact: "188 ou chat online",
        link: "https://cvv.org.br"
      },
      {
        name: "SaferNet Helpline",
        description: "Orientação sobre segurança digital para jovens",
        contact: "Canal de Ajuda",
        link: "https://canaldeajuda.org.br"
      },
      {
        name: "CAPS - Centro de Atenção Psicossocial",
        description: "Atendimento gratuito do SUS para saúde mental",
        contact: "Busque a unidade mais próxima",
        link: "https://www.gov.br/saude/pt-br/composicao/saes/desme/raps/caps"
      },
    ]
  },
  {
    icon: Scale,
    title: "Apoio Jurídico",
    color: "bg-safe",
    resources: [
      {
        name: "Defensoria Pública",
        description: "Assistência jurídica gratuita para quem não pode pagar advogado",
        contact: "Procure a Defensoria do seu estado",
        link: "https://www.anadep.org.br/wtool/sitemap.html"
      },
      {
        name: "OAB - Ordem dos Advogados",
        description: "Núcleos de prática jurídica com atendimento gratuito",
        contact: "Contate a OAB do seu estado",
        link: "https://www.oab.org.br/institucionalconselhofederal/seccionais"
      },
      {
        name: "Ministério Público",
        description: "Para casos envolvendo menores ou interesse público",
        contact: "Busque o MP do seu estado",
        link: "https://www.cnmp.mp.br/portal/institucional/membros"
      },
    ]
  },
  {
    icon: GraduationCap,
    title: "Apoio Escolar",
    color: "bg-secondary",
    resources: [
      {
        name: "Programa de Combate ao Bullying",
        description: "Lei 13.185/2015 obriga escolas a ter programa de prevenção",
        contact: "Procure a direção da escola",
        link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13185.htm"
      },
      {
        name: "Conselho Tutelar",
        description: "Proteção de crianças e adolescentes em situação de risco",
        contact: "Busque o Conselho da sua cidade",
        link: "https://www.gov.br/mdh/pt-br/acesso-a-informacao/acoes-e-programas/crianca-e-adolescente"
      },
      {
        name: "Secretaria de Educação",
        description: "Denúncias sobre omissão escolar em casos de bullying",
        contact: "Contate a Secretaria do seu estado/município",
        link: ""
      },
    ]
  },
  {
    icon: Users,
    title: "ONGs e Instituições",
    color: "bg-warm",
    resources: [
      {
        name: "SaferNet Brasil",
        description: "Referência nacional em segurança digital e combate a crimes online",
        contact: "canaldeajuda.org.br",
        link: "https://safernet.org.br"
      },
      {
        name: "Instituto Brasileiro de Direito Digital",
        description: "Pesquisa e orientação sobre direitos digitais",
        contact: "ibddig.com.br",
        link: "https://ibddig.com.br"
      },
      {
        name: "SOS Bullying",
        description: "Apoio e orientação para vítimas de bullying e cyberbullying",
        contact: "sosbullying.org",
        link: "https://sosbullying.org"
      },
    ]
  },
]

export function SupportSection() {
  return (
    <section id="apoio" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">Não está sozinho(a)</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-outfit)' }}>
            Rede de Apoio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pessoas e instituições prontas para te ajudar — gratuitamente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {supportCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className={`${category.color} p-4 flex items-center gap-3`}>
                <category.icon className="w-6 h-6 text-white" />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="p-4 space-y-4">
                {category.resources.map((resource, resourceIndex) => (
                  <div
                    key={resourceIndex}
                    className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{resource.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{resource.contact}</span>
                      {resource.link && (
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-safe hover:text-safe/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergência */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🚨</span>
                <h3 className="text-xl font-bold text-destructive">Em caso de emergência</h3>
              </div>
              <p className="text-muted-foreground">
                Se você ou alguém que conhece está em perigo imediato, pensando em se machucar 
                ou sofrendo ameaças graves, ligue agora:
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:190"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-destructive text-white rounded-full font-semibold hover:bg-destructive/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                190 - Polícia
              </a>
              <a
                href="tel:188"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                188 - CVV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
