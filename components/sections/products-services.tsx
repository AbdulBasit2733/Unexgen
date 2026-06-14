'use client';

import React from 'react';
import { CloudSnow, Wind, Thermometer, Zap } from 'lucide-react';

const offerings = [
  {
    title: 'Green Cold Storage',
    description: 'Solar powered cold rooms and temperature-controlled storage for perishable goods.',
    bullets: ['Multi-commodity cold rooms', 'Ripening chambers', 'Blast freezers', 'High-efficiency refrigeration'],
    icon: CloudSnow,
  },
  {
    title: 'HVAC Solutions',
    description: 'Industrial and commercial air conditioning, ventilation and ducting design.',
    bullets: ['Industrial HVAC', 'Commercial AC', 'Ventilation systems', 'Ducting design & installation'],
    icon: Wind,
  },
  {
    title: 'Thermal Solutions',
    description: 'Heat pumps, chillers and thermal storage for continuous cooling and hot water.',
    bullets: ['Heat pumps', 'Industrial chillers', 'Hot water systems', 'Thermal energy storage'],
    icon: Thermometer,
  },
  {
    title: 'Solar EPC',
    description: 'End-to-end solar engineering, procurement, and construction for rooftops and ground-mounted projects.',
    bullets: ['Rooftop solar plants', 'Ground-mounted projects', 'Hybrid solar systems', 'Solar energy monitoring'],
    icon: Zap,
  },
];

export const ProductsServices: React.FC = () => (
  <section id="solutions" className="section-container bg-secondary">
    <div className="text-center mb-12">
      <h2 className="section-heading mb-4">Products & Services</h2>
      <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
        Unexgen delivers integrated solutions across cooling, power, and energy storage to lower operating cost and improve resilience.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      {offerings.map((offering) => {
        const Icon = offering.icon;
        return (
          <div key={offering.title} className="card-elevated p-8 border border-border bg-card shadow-sm">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{offering.title}</h3>
            <p className="text-muted-foreground mb-6">{offering.description}</p>
            <ul className="space-y-3">
              {offering.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);
