import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Zap, Wind, Droplets } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Grid Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=1920&q=80"
          alt="Solar farm and renewable energy infrastructure"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(13, 35, 71, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 35, 71, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-3 glass-green px-4 py-2 rounded-full inline-flex mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green" />
              <span className="text-sm font-600 text-gray-900 uppercase tracking-wide">
                Government Subsidy Available
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-navy-950">
              Powering Sustainable{' '}
              <span className="text-gradient-green-blue">Cooling</span>{' '}Infrastructure
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-600 text-gray-700 mb-8">
              Engineering India&apos;s Future Through Smart Cooling, Renewable Energy & Thermal Storage Solutions
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Complete end-to-end engineering solutions for Green Cold Storage, HVAC Systems, Thermal Energy Storage, and Solar EPC projects. Trusted by agriculture, food processing, industrial, and commercial sectors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" className="text-base px-8 py-3 font-bold">
                Explore Solutions
              </Button>
              <Button variant="secondary" className="text-base px-8 py-3 font-bold">
                Request Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-green-500">500+</div>
                <div className="text-sm text-gray-600 font-500">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">25 MT</div>
                <div className="text-sm text-gray-600 font-500">Avg CO₂ Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-950">15 Yrs</div>
                <div className="text-sm text-gray-600 font-500">Industry Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Hero Image Card */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1497440646356-267b8c5fbffe?w=800&q=80"
                alt="Green Cold Storage facility with solar panels"
                fill
                className="object-cover"
                priority
              />
              
              {/* Feature Cards Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              
              {/* Benefits Cards */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="glass-light p-4 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-700 text-gray-900">80-90% Energy Reduction</div>
                  </div>
                </div>

                <div className="glass-light p-4 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-700 text-gray-900">Complete Engineering Solution</div>
                  </div>
                </div>

                <div className="glass-light p-4 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wind className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-700 text-gray-900">Design to Commissioning</div>
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
