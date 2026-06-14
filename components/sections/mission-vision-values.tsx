'use client';

import React from 'react';
import { CheckCircle, Compass, Target, Sparkle, Shield, Layers } from 'lucide-react';

const values = [
  'Innovation',
  'Reliability',
  'Sustainability',
  'Customer Success',
  'Quality',
  'Engineering Excellence',
];

export const MissionVisionValues: React.FC = () => (
  <section id="mission" className="section-container">
    <div className="grid gap-12 lg:grid-cols-[0.8fr_0.9fr] items-start">
      <div>
        <div className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">Mission, Vision & Values</div>
       <h2 className="section-heading mb-6">
  Engineering Profitable, Green Cooling Solutions.
</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card-elevated p-8 border border-border bg-secondary">
            <div className="inline-flex items-center gap-3 text-primary mb-4">
              <Target className="w-5 h-5" />
              <span className="text-sm uppercase tracking-[0.2em] font-semibold">Mission</span>
            </div>
            <p className="text-foreground leading-relaxed">
              To deliver innovative and energy-efficient engineering solutions that improve profitability while reducing environmental impact.
            </p>
          </div>
          <div className="card-elevated p-8 border border-border bg-secondary">
            <div className="inline-flex items-center gap-3 text-primary mb-4">
              <Compass className="w-5 h-5" />
              <span className="text-sm uppercase tracking-[0.2em] font-semibold">Vision</span>
            </div>
            <p className="text-foreground leading-relaxed">
              To become India’s most trusted green cooling and renewable energy technology company.
            </p>
          </div>
        </div>
      </div>

      <div className="card-elevated p-8 border border-border bg-card">
        <div className="text-primary text-sm uppercase tracking-[0.28em] font-bold mb-6">Core Values</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value) => (
            <div key={value} className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-primary mt-1" />
              <span className="text-foreground font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
