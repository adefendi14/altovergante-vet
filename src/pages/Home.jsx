import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import {
  AboutPreview,
  AdoptionsPreview,
  ArticlesPreview,
  CtaBanner,
  HoursPreview,
  ServicesPreview,
  SpecialtiesPreview,
  StaffPreview,
  StrengthsSection,
  TestimonialsSection,
} from '../components/Sections'

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <AboutPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <SpecialtiesPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <ServicesPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <StaffPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <StrengthsSection />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <HoursPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <ArticlesPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <AdoptionsPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
