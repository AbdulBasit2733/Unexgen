'use client';

import React from 'react';
import { Leaf, Droplet, BarChart3, ShieldCheck } from 'lucide-react';

const impactCards = [
  { title: 'Carbon Footprint Reduction', value: '25 tons CO₂ avoided annually', icon: Leaf },
  { title: 'Diesel Fuel Saved', value: '3,000 - 4,000 liters per year', icon: Droplet },
  { title: 'Post-Harvest Loss', value: '5-8% with green storage vs 20-30%', icon: BarChart3 },
  { title: 'Food Waste Reduction', value: 'Up to 75%', icon: ShieldCheck },
];

export const EnvironmentalImpact: React.FC = () => (
  <section id="impact" className="section-container">
    <div className="text-center mb-12">
      <h2 className="section-heading mb-4">Environmental Impact</h2>
      <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
        Every project reduces emissions, saves fuel, and protects food value across the cold chain.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {impactCards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.title} className="card-elevated p-8 border border-border bg-secondary text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.value}</p>
          </div>
        );
      })}
    </div>
  </section>
);
