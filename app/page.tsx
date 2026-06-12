import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { CompanyOverview } from "@/components/sections/company-overview";
import { ServicesGrid } from "@/components/sections/services-grid";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TechnologyTimeline } from "@/components/sections/technology-timeline";
import { EnvironmentalImpact } from "@/components/sections/environmental-impact";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <ServicesGrid />
        <IndustriesSection />
        <TechnologyTimeline />
        <EnvironmentalImpact />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
