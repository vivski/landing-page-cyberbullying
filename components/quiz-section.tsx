"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react"

interface QuizQuestion {
  id: number
  situation: string
  isCyberbullying: boolean
  explanation: string
  law?: string
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    situation: "Um colega de classe criou um grupo no WhatsApp chamado 'Piores da Turma' e adicionou você sem permissão, onde todos zoam sua aparência.",
    isCyberbullying: true,
    explanation: "Criar grupos para humilhar alguém é cyberbullying. Caracteriza intimidação sistemática virtual, crime previsto no Art. 146-A do Código Penal.",
    law: "Lei 14.811/2024 - Art. 146-A, §1º"
  },
  {
    id: 2,
    situation: "Seu amigo postou uma foto sua engraçada em uma festa (com você de olhos fechados) e marcou você. Você pediu para tirar e ele removeu.",
    isCyberbullying: false,
    explanation: "Não é cyberbullying porque não houve intenção de humilhar, foi um ato isolado e ele respeitou seu pedido de remoção. Cyberbullying requer intencionalidade e/ou repetição."
  },
  {
    id: 3,
    situation: "Alguém criou um perfil fake no Instagram com suas fotos e está mandando mensagens ofensivas para outras pessoas em seu nome.",
    isCyberbullying: true,
    explanation: "Criar perfil falso para difamar ou se passar por outra pessoa é crime. Além de cyberbullying, pode configurar falsidade ideológica e difamação.",
    law: "Lei 14.811/2024 + Art. 307 CP (Falsidade Ideológica)"
  },
  {
    id: 4,
    situation: "Você discutiu com um colega em um jogo online e ele te xingou uma vez durante a partida. Depois não houve mais contato.",
    isCyberbullying: false,
    explanation: "Um xingamento isolado em contexto de discussão, sem repetição ou perseguição, não caracteriza cyberbullying. Porém, não deixa de ser comportamento inadequado."
  },
  {
    id: 5,
    situation: "Uma ex-namorada(o) ameaça divulgar suas fotos íntimas se você não voltar com ela(e), e já mostrou para amigos.",
    isCyberbullying: true,
    explanation: "Isso é crime grave! Além de cyberbullying, configura extorsão e pode ser enquadrado na Lei Carolina Dieckmann (Lei 12.737/2012) ou no crime de Registro não autorizado de intimidade sexual.",
    law: "Lei 13.718/2018 (divulgação de cenas íntimas) + Art. 158 CP (Extorsão)"
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer)
    setShowExplanation(true)
    if (answer === questions[currentQuestion].isCyberbullying) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizComplete(false)
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.isCyberbullying

  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">Teste</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-outfit)' }}>
            Isso é Cyberbullying?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Teste seus conhecimentos e aprenda a identificar situações reais
          </p>
        </motion.div>

        <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!quizComplete ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 md:p-8"
              >
                {/* Progress */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <div className="flex gap-1">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === currentQuestion
                            ? "bg-primary"
                            : i < currentQuestion
                            ? "bg-secondary"
                            : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {question.situation}
                  </p>
                </div>

                {/* Answer buttons */}
                {!showExplanation && (
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleAnswer(true)}
                      className="p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-foreground font-medium"
                    >
                      Sim, é cyberbullying
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className="p-4 rounded-xl border-2 border-border hover:border-secondary hover:bg-secondary/5 transition-all text-foreground font-medium"
                    >
                      Não é cyberbullying
                    </button>
                  </div>
                )}

                {/* Explanation */}
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div
                      className={`p-4 rounded-xl flex items-start gap-3 ${
                        isCorrect
                          ? "bg-secondary/10 border border-secondary/20"
                          : "bg-destructive/10 border border-destructive/20"
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className={`font-semibold ${isCorrect ? "text-secondary" : "text-destructive"}`}>
                          {isCorrect ? "Correto!" : "Não é bem assim..."}
                        </p>
                        <p className="text-sm text-foreground mt-1">{question.explanation}</p>
                        {question.law && (
                          <p className="text-xs text-muted-foreground mt-2 font-medium">
                            📚 {question.law}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={nextQuestion}
                      className="w-full p-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      {currentQuestion < questions.length - 1 ? "Próxima pergunta" : "Ver resultado"}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">
                    {score >= 4 ? "🎉" : score >= 2 ? "📚" : "💪"}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Você acertou {score} de {questions.length}!
                </h3>
                <p className="text-muted-foreground mb-6">
                  {score >= 4
                    ? "Excelente! Você sabe identificar bem o cyberbullying."
                    : score >= 2
                    ? "Bom começo! Continue aprendendo sobre o tema."
                    : "O importante é aprender. Revise as informações e tente novamente!"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={restartQuiz}
                    className="px-6 py-3 rounded-full border-2 border-border hover:border-primary transition-colors font-medium"
                  >
                    Fazer novamente
                  </button>
                  <a
                    href="#denunciar"
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    Saiba como denunciar
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
