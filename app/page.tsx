import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { TechnologySection } from '@/components/technology-section'
import { SustainabilitySection } from '@/components/sustainability-section'
import { IndustriesSection } from '@/components/industries-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { ProjectSection } from '@/components/project-section'
import { ClientsSection } from '@/components/clients-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <SustainabilitySection />
      <IndustriesSection />
      <WhyChooseSection />
      <ProjectSection />
      <ClientsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
