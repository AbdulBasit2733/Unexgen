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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <ProcessSection />
        {/* Efficiency Compare Section */}
        <section className="section-container">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-black mb-4">
              Thermal{" "}
              <span className="text-electric-emerald">Optimization</span>
            </h2>
            <p className="text-slate-500 text-lg">
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
