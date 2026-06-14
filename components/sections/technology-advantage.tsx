'use client';

import React from 'react';
import { BatteryCharging, Monitor, Cpu, Globe, Wind, ShieldCheck } from 'lucide-react';

const features = [
  { title: 'Solar Power Generation', description: 'Use clean solar energy to feed your cooling systems and reduce grid dependency.' },
  { title: 'Energy Management System', description: 'Automatic load balancing and efficiency optimization across site operations.' },
  { title: 'VFD Compressor Technology', description: 'High COP refrigeration with precise temperature control and lower energy use.' },
  { title: 'Thermal Energy Storage', description: 'Store cooling energy for 24/7 continuity and lower peak demand costs.' },
  { title: 'Remote Monitoring', description: 'Track system performance in real time from any device.' },
  { title: 'Intelligent Automation', description: 'Self-learning controls for predictive maintenance and uptime assurance.' },
];

const benefits = [
  '80-90% Grid Reduction',
  'High COP Refrigeration',
  'Lower Operating Cost',
  'Remote Monitoring',
  'Intelligent Automation',
  '24x7 Continuous Cooling',
];

export const TechnologyAdvantage: React.FC = () => (
  <section id="technology" className="section-container">
    <div className="grid gap-12 lg:grid-cols-[0.85fr_0.7fr] items-start">
      <div>
        <div className="text-sm uppercase tracking-[0.28em] text-primary font-bold mb-4">Technology Advantage</div>
        <h2 className="section-heading mb-6">UNEXGEN Smart Cooling Ecosystem</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
          We combine solar, refrigeration, automation and storage into a single smart solution that lowers cost, improves reliability, and keeps products safe around the clock.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-secondary p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card-elevated p-8 border border-border bg-card">
        <div className="text-primary text-sm uppercase tracking-[0.28em] font-bold mb-6">Benefits</div>
        <div className="grid gap-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex gap-3 items-center rounded-2xl border border-border bg-secondary p-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
