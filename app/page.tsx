import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/hero-section";
import { CompanyOverview } from "@/components/sections/company-overview";
import { MissionVisionValues } from "@/components/sections/mission-vision-values";
import { ProductsServices } from "@/components/sections/products-services";
import { TechnologyAdvantage } from "@/components/sections/technology-advantage";
import { IndustriesShowcase } from "@/components/sections/industries-showcase";
import { CaseStudy } from "@/components/sections/case-study";
import { EnvironmentalImpact } from "@/components/sections/environmental-impact";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import { WhyUnexgen } from "@/components/sections/why-unexgen";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <MissionVisionValues />
        <ProductsServices />
        <TechnologyAdvantage />
        <IndustriesShowcase />
        <CaseStudy />
        <EnvironmentalImpact />
        <PortfolioShowcase />
        <WhyUnexgen />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
