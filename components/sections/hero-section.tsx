import React from 'react';
import { Button } from '@/components/ui/button';
import { LightningIcon } from '@/components/icons/Icons';
import Image from 'next/image';

// KPI Counter Component
const KPICounter: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-black text-primary mb-2">{value}</div>
    <div className="text-sm md:text-base text-muted-foreground font-medium">{label}</div>
  </div>
);

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Urgency Badge */}
            <div className="flex items-center gap-3 glass-light px-6 py-3 rounded-full inline-flex mb-8 animate-float">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-emerald" />
              <span className="text-sm font-semibold text-foreground">
                ₹10+ Crore in Government Incentives
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-balance text-foreground">
              Power Your Future with{' '}
              <span className="text-gradient-emerald">Sustainable</span>
              {' '}Energy
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-bold text-muted-foreground mb-8">
              <span className="text-primary">Hydrogen</span> • <span className="text-primary">Solar</span> • 
              <span className="text-primary"> EV Infrastructure</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg">
              Industrial-grade decarbonization infrastructure. Net-zero operations powered by AI-driven microgrids and green hydrogen technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" icon={<LightningIcon />} className="text-lg px-8 py-4">
                Start Energy Audit
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-4">
                View Case Studies
              </Button>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-3 gap-6">
              <KPICounter value="500+" label="Active Projects" />
              <KPICounter value="99.7%" label="System Uptime" />
              <KPICounter value="₹2.4Cr" label="Avg Savings" />
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl card-elevated">
              <Image
                src="/images/solar-installation.png"
                alt="Modern solar panel installation"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Badge */}
              <div className="absolute top-8 right-8 glass-light px-6 py-3 rounded-full backdrop-blur-lg">
                <span className="text-sm font-bold text-primary">Live Monitoring</span>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 p-8 rounded-2xl shadow-2xl border border-border max-w-xs" style={{ backgroundColor: '#000000' }}>
              <h3 className="font-bold text-white mb-4">Real-time Performance</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Energy Generated </span>
                  <span className="font-bold text-primary">2,450 kWh</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Carbon Saved</span>
                  <span className="font-bold text-primary">1.2 Tons</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">System Health</span>
                  <span className="font-bold text-primary">98.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
