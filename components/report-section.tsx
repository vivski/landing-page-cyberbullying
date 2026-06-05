"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Camera, 
  FileText, 
  AlertTriangle, 
  Shield, 
  Phone, 
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Clock,
  Link as LinkIcon
} from "lucide-react"

const flowSteps = [
  {
    number: "01",
    icon: AlertTriangle,
    title: "Mantenha a calma",
    description: "Respire fundo. Não responda ao agressor e não apague nada.",
    color: "bg-warm",
  },
  {
    number: "02",
    icon: Camera,
    title: "Guarde as provas",
    description: "Faça prints com data, hora e URL visíveis. Salve mensagens e vídeos.",
    color: "bg-primary",
  },
  {
    number: "03",
    icon: FileText,
    title: "Denuncie na plataforma",
    description: "Use os canais oficiais de denúncia da rede social ou app.",
    color: "bg-secondary",
  },
  {
    number: "04",
    icon: Shield,
    title: "Registre o B.O.",
    description: "Vá à delegacia ou use a Delegacia Virtual do seu estado.",
    color: "bg-safe",
  },
  {
    number: "05",
    icon: Phone,
    title: "Busque apoio",
    description: "Procure ajuda psicológica e jurídica. Você não está sozinho(a).",
    color: "bg-chart-5",
  },
]

const evidenceItems = [
  { icon: "📱", text: "Número de celular ou @ do agressor" },
  { icon: "🔗", text: "URL do perfil ou publicação" },
  { icon: "📸", text: "Screenshots com data e hora visíveis" },
  { icon: "📧", text: "E-mails e mensagens completas" },
  { icon: "👤", text: "Nomes de testemunhas (se houver)" },
  { icon: "📅", text: "Datas e horários dos incidentes" },
]

const platformDenunciations = [
  {
    platform: "Instagram",
    icon: "📷",
    steps: "Toque nos 3 pontos > Denunciar > Bullying ou assédio",
    link: "https://help.instagram.com/192435014247952"
  },
  {
    platform: "WhatsApp",
    icon: "💬",
    steps: "Abra o chat > Toque no nome > Denunciar contato",
    link: "https://faq.whatsapp.com/1142481766359498"
  },
  {
    platform: "TikTok",
    icon: "🎵",
    steps: "Segure o vídeo > Denunciar > Bullying e assédio",
    link: "https://support.tiktok.com/pt_BR/safety-hc/report-a-problem"
  },
  {
    platform: "Facebook",
    icon: "👥",
    steps: "Clique nos 3 pontos > Denunciar publicação",
    link: "https://www.facebook.com/help/1380418588640631"
  },
  {
    platform: "X (Twitter)",
    icon: "🐦",
    steps: "Clique nos 3 pontos > Denunciar > Comportamento abusivo",
    link: "https://help.x.com/pt/rules-and-policies/abusive-behavior"
  },
  {
    platform: "Discord",
    icon: "🎮",
    steps: "Clique com botão direito > Denunciar mensagem",
    link: "https://support.discord.com/hc/pt-br/articles/360000291932"
  },
]

const profileFlows = [
  {
    id: "vitima-menor",
    title: "Vítima menor de idade",
    steps: [
      "Conte para um adulto de confiança (pai, mãe, professor)",
      "Não apague as provas - peça ajuda para guardar",
      "O responsável deve registrar o B.O. em seu nome",
      "A escola deve ser comunicada (Lei 13.185/2015)",
      "Procure apoio psicológico especializado em adolescentes"
    ]
  },
  {
    id: "vitima-adulta",
    title: "Vítima adulta",
    steps: [
      "Guarde todas as provas (prints, URLs, datas)",
      "Denuncie na plataforma onde ocorreu",
      "Registre B.O. na delegacia ou online",
      "Procure um advogado para ação civil (danos morais)",
      "Busque apoio psicológico se necessário"
    ]
  },
  {
    id: "pai-mae",
    title: "Pai ou Mãe de vítima",
    steps: [
      "Converse com seu filho(a) sem julgamentos",
      "Ajude a guardar as provas corretamente",
      "Registre o B.O. como representante legal",
      "Comunique a escola formalmente por escrito",
      "Acompanhe seu filho(a) em apoio psicológico"
    ]
  },
]

export function ReportSection() {
  const [activeProfile, setActiveProfile] = useState("vitima-adulta")
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null)

  return (
    <section id="denunciar" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Ação</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-outfit)' }}>
            O que fazer?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Siga o passo a passo para denunciar e buscar seus direitos
          </p>
        </motion.div>

        {/* Fluxograma visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative">
            {/* Linha conectora - desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-border" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-card rounded-2xl p-6 border border-border h-full card-hover">
                    <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4 relative z-10`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                    <h3 className="font-semibold text-foreground mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Que provas guardar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Que provas guardar?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {evidenceItems.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 border border-border text-center card-hover"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="text-sm text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fluxo por perfil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Passo a passo por perfil
          </h3>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {profileFlows.map((profile) => (
              <button
                key={profile.id}
                onClick={() => setActiveProfile(profile.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  activeProfile === profile.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary"
                }`}
              >
                {profile.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-6 md:p-8">
            {profileFlows.map((profile) => (
              profile.id === activeProfile && (
                <div key={profile.id} className="space-y-4">
                  {profile.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>
        </motion.div>

        {/* Denúncia nas plataformas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Como denunciar nas plataformas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {platformDenunciations.map((platform) => (
              <div
                key={platform.platform}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPlatform(
                    expandedPlatform === platform.platform ? null : platform.platform
                  )}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="font-medium text-foreground">{platform.platform}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedPlatform === platform.platform ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedPlatform === platform.platform && (
                  <div className="px-4 pb-4 pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">{platform.steps}</p>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Ver tutorial completo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Delegacia Virtual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-safe text-safe-foreground rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium opacity-90">Disponível 24 horas</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Registre o B.O. Online
          </h3>
          <p className="text-safe-foreground/80 max-w-xl mx-auto mb-6">
            A maioria dos estados brasileiros oferece Delegacia Virtual para registrar 
            ocorrências de crimes digitais sem sair de casa.
          </p>
          <a
            href="#contatos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-safe rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Ver delegacias por estado
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
