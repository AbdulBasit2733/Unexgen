'use client';

import React from 'react';
import { Check, Sparkle } from 'lucide-react';

export const CaseStudy: React.FC = () => (
  <section id="case-study" className="section-container bg-secondary">
    <div className="text-center mb-12">
      <h2 className="section-heading mb-4">Case Study</h2>
      <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
        20 MT Green Cold Storage
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-[0.95fr_0.6fr] items-start">
      <div className="card-elevated p-8 border border-border bg-card">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: 'Project Capacity', value: '20 MT' },
            { label: 'Temperature Range', value: '2°C to 8°C' },
            { label: 'Solar Capacity', value: '30-40 kWp' },
            { label: 'Roof Area', value: '4000 sq.ft.' },
            { label: 'Project Cost (Gross)', value: '₹30,50,000' },
            { label: 'Estimated Subsidy', value: '₹10,67,500' },
            { label: 'Net Project Cost', value: '₹19,82,500' },
            { label: 'Annual Savings', value: '₹7,00,000 - 8,00,000' },
            { label: 'Payback Period', value: '3 Years' },
            { label: 'Renewable Contribution', value: '80 - 100%' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-border bg-secondary p-5">
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-2">{item.label}</div>
              <div className="text-xl font-bold text-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Sparkle className="w-8 h-8 text-primary" />
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-primary font-bold">Impact Snapshot</p>
            <h3 className="text-2xl font-black text-foreground">Green Cold Storage Results</h3>
          </div>
        </div>
        <ul className="space-y-4">
          {[
            'Reduced grid draw during storage operations',
            'Improved cold chain reliability',
            'Increased subsidy-backed project viability',
            'Fast payback under 3 years',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-foreground">
              <Check className="w-5 h-5 text-primary mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
