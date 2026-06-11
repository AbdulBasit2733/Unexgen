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
import { ROICalculator } from "@/components/sections/roi-calculator";
import { WhyUnexgen } from "@/components/sections/why-unexgen";
import { EnvironmentalImpact } from "@/components/sections/environmental-impact";
import { EfficiencyCompareCard } from "@/components/ui/efficiency-compare-card";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <ProcessSection />
        <WhyUnexgen />
        <ROICalculator />
        <EnvironmentalImpact />
        
        {/* Efficiency Compare Section */}
        <section className="section-container section-padding bg-bg-secondary">
          <div className="mb-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
              Thermal{" "}
              <span className="text-gradient-brand">Optimization</span>
            </h2>
            <p className="text-text-secondary text-lg">
              AI-powered thermal imaging reveals energy waste
            </p>
          </div>
          <EfficiencyCompareCard />
        </section>

        <PortfolioShowcase />
        <TrustSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
