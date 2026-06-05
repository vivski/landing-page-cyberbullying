"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Send, Calendar, ArrowRight, Quote } from "lucide-react"

const frasesImpacto = [
  {
    frase: "Palavras podem machucar mais do que pedras. Use as suas para construir, não para destruir.",
    autor: "Desconhecido"
  },
  {
    frase: "A internet não apaga. Pense antes de postar.",
    autor: "SaferNet Brasil"
  },
  {
    frase: "Empatia digital: antes de comentar, imagine se fosse com você.",
    autor: "Conexão Segura"
  },
  {
    frase: "Ser forte não é intimidar. É defender quem não consegue se defender.",
    autor: "Desconhecido"
  },
  {
    frase: "Por trás de cada perfil existe uma pessoa real, com sentimentos reais.",
    autor: "Desconhecido"
  },
]

const artigos = [
  {
    id: 1,
    titulo: "5 sinais de que seu filho pode estar sofrendo cyberbullying",
    resumo: "Mudanças de comportamento, isolamento e medo de usar o celular são alguns dos alertas.",
    categoria: "Para Pais",
    cor: "bg-primary"
  },
  {
    id: 2,
    titulo: "Como escolas podem implementar programas de prevenção",
    resumo: "A Lei 13.185/2015 exige que escolas tenham programas de combate ao bullying. Veja como fazer.",
    categoria: "Educadores",
    cor: "bg-secondary"
  },
  {
    id: 3,
    titulo: "Testemunhou cyberbullying? Saiba como agir",
    resumo: "Ser um expectador passivo também tem consequências. Aprenda a ser um aliado.",
    categoria: "Todos",
    cor: "bg-safe"
  },
]

const datasImportantes = [
  { data: "7 de abril", evento: "Dia Nacional de Combate ao Bullying e à Violência na Escola" },
  { data: "2ª terça-feira de fevereiro", evento: "Dia da Internet Segura (Safer Internet Day)" },
  { data: "20 de outubro", evento: "Dia Mundial de Combate ao Bullying" },
]

export function PeaceWallSection() {
  const [currentFrase, setCurrentFrase] = useState(0)
  const [mensagem, setMensagem] = useState("")
  const [mensagemEnviada, setMensagemEnviada] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mensagem.trim()) {
      setMensagemEnviada(true)
      setMensagem("")
      setTimeout(() => setMensagemEnviada(false), 3000)
    }
  }

  const nextFrase = () => {
    setCurrentFrase((prev) => (prev + 1) % frasesImpacto.length)
  }

  return (
    <section id="mural" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-warm font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 fill-warm text-warm" />
            Cultura de Paz
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-outfit)' }}>
            Mural da Paz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Juntos construímos uma internet mais humana e respeitosa
          </p>
        </motion.div>

        {/* Frase de impacto rotativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-foreground text-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-card/10" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.p
                key={currentFrase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium text-card leading-relaxed mb-4"
              >
                &ldquo;{frasesImpacto[currentFrase].frase}&rdquo;
              </motion.p>
              <p className="text-card/60 text-sm">— {frasesImpacto[currentFrase].autor}</p>
              <button
                onClick={nextFrase}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-card/10 hover:bg-card/20 rounded-full text-card text-sm transition-colors"
              >
                Próxima frase
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Artigos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              📚 Artigos e Conteúdos
            </h3>
            <div className="space-y-4">
              {artigos.map((artigo) => (
                <div
                  key={artigo.id}
                  className="bg-card rounded-xl border border-border p-5 card-hover cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-2 h-full min-h-[60px] ${artigo.cor} rounded-full`} />
                    <div className="flex-1">
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${artigo.cor}/10 text-foreground mb-2`}>
                        {artigo.categoria}
                      </span>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {artigo.titulo}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{artigo.resumo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Conteúdo sendo desenvolvido pelo grupo. Em breve mais artigos!
            </p>
          </motion.div>

          {/* Datas importantes + Enviar mensagem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Datas importantes */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Datas Importantes
              </h3>
              <div className="space-y-3">
                {datasImportantes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.data}</p>
                      <p className="text-sm text-muted-foreground">{item.evento}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enviar mensagem positiva */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-secondary fill-secondary" />
                Deixe uma mensagem de apoio
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sua mensagem pode fazer a diferença na vida de alguém. 
                Compartilhe palavras de encorajamento (anônimo e moderado).
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Escreva sua mensagem de apoio..."
                  className="w-full p-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                  rows={3}
                />
                <button
                  type="submit"
                  disabled={!mensagem.trim()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensagem
                </button>
              </form>
              {mensagemEnviada && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-secondary text-center font-medium"
                >
                  ✨ Obrigado! Sua mensagem será revisada e publicada em breve.
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Mensagens da comunidade (exemplo estático) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            💬 Mensagens da Comunidade
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Você é mais forte do que pensa. Não deixe palavras te definirem.",
              "Passei por isso e superei. Se eu consegui, você também consegue.",
              "Denunciar não é fraqueza, é coragem. Você está protegendo a si e a outros.",
              "A internet também pode ser lugar de amor. Vamos espalhar gentileza!",
              "Para quem está sofrendo: isso não é culpa sua. Busque ajuda.",
              "Respeito nas redes é lei. E lei se cumpre."
            ].map((msg, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-4 text-sm text-foreground"
              >
                <p>&ldquo;{msg}&rdquo;</p>
                <p className="text-xs text-muted-foreground mt-2">— Anônimo</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
