import React from 'react';
import { Button } from '@/components/ui/button';
import { LightningIcon } from '@/components/icons/Icons';
import { FloatingEnergyMonitor } from '@/components/ui/FloatingEnergyMonitor';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Solar panels and renewable energy"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Urgency Badge */}
            <div className="flex items-center gap-3 glass-emerald px-6 py-3 rounded-full inline-flex mb-8 animate-float">
              <div className="w-2 h-2 bg-electric-emerald rounded-full animate-pulse-emerald" />
              <span className="text-sm font-medium text-gray-900">
                Federal Incentives Ending Soon
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-6xl md:text-7xl font-black leading-none mb-6 text-gray-900">
              Power Your Future with{' '}
              <span className="text-gradient-emerald">Sustainable</span>
              {' '}Energy
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-8">
              <span className="text-electric-emerald">Hydrogen</span> • Solar •{' '}
              <span className="text-electric-emerald">Autonomous</span> HVAC
            </h2>

            {/* Subtext */}
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Industrial-grade decarbonization infrastructure. Net-zero operations. 
              Powered by AI-driven microgrids and green hydrogen technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <Button variant="primary" icon={<LightningIcon />} className="text-xl px-10 py-6">
                Start Energy Audit
              </Button>
              <Button variant="secondary" className="text-xl px-10 py-6">
                View Case Studies
              </Button>
            </div>

            {/* Floating Monitor */}
            <div className="mt-12">
              <FloatingEnergyMonitor status="OPTIMIZED" />
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                alt="Modern solar panel installation"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 glass-light p-6 rounded-2xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-black text-electric-emerald">500+</div>
                    <div className="text-sm text-gray-600">Installations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-electric-emerald">99.7%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-electric-emerald">$2.4M</div>
                    <div className="text-sm text-gray-600">Avg Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
