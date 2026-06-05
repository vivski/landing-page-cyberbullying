import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatIsSection, IdentifySection } from "@/components/what-is-section"
import { QuizSection } from "@/components/quiz-section"
import { ReportSection } from "@/components/report-section"
import { LegislationSection } from "@/components/legislation-section"
import { SupportSection } from "@/components/support-section"
import { ContactsSection } from "@/components/contacts-section"
import { PeaceWallSection } from "@/components/peace-wall-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <IdentifySection />
        <QuizSection />
        <ReportSection />
        <LegislationSection />
        <SupportSection />
        <ContactsSection />
        <PeaceWallSection />
      </main>
      <Footer />
    </>
  )
}
