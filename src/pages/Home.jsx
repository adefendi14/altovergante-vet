import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import {
  AboutPreview,
  CtaBanner,
  HoursPreview,
  PreventionPreview,
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
        <StrengthsSection />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <StaffPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <PreventionPreview />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <HoursPreview />
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
