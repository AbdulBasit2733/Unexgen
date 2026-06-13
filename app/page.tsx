import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";
import { TrustSection } from "@/components/sections/trust-section";
import { EfficiencyCompareCard } from "@/components/ui/efficiency-compare-card";
import { IndustriesShowcase } from "@/components/sections/industries-showcase";
import { TechnologyEcosystem } from "@/components/sections/technology-ecosystem";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { GovernmentSubsidies } from "@/components/sections/government-subsidies";
import { WhyUnexgen } from "@/components/sections/why-unexgen";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <ProcessSection />

        <TechnologyEcosystem />
        <IndustriesShowcase />
        <WhyUnexgen />
        <ROICalculator />
        <GovernmentSubsidies />
        <PortfolioShowcase />
        <TrustSection />
        <Testimonials />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
