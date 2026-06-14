'use client';

'use client';

import React from 'react';
import { FileChartColumn, Factory, Cpu, Building2 } from 'lucide-react';

interface IndustryCard {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: string[];
}

const industries: IndustryCard[] = [
  {
    id: 'agriculture',
    name: 'Agriculture & Horticulture',
    icon: <FileChartColumn className="w-8 h-8" />,
    items: ['Fruits & Vegetables', 'FPOs', 'Farmer Cooperatives', 'Export Houses'],
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    icon: <Cpu className="w-8 h-8" />,
    items: ['Dairy Industry', 'Frozen Foods', 'Beverage Industry', 'Pack Houses'],
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: <Factory className="w-8 h-8" />,
    items: ['Manufacturing Plants', 'Pharmaceutical Facilities', 'Logistics Parks', 'Warehouses'],
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: <Building2 className="w-8 h-8" />,
    items: ['Hotels', 'Hospitals', 'Shopping Complexes', 'Institutions'],
  },
];

export const IndustriesShowcase: React.FC = () => {
  return (
    <section id="industries" className="section-container bg-secondary">
      <div className="text-center mb-16">
        <h2 className="section-heading mb-4">Industries We Serve</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Agriculture, food processing, industrial and commercial facilities can all benefit from our renewable cooling technologies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {industries.map((industry) => (
          <div key={industry.id} className="card-elevated p-8 border border-border bg-card shadow-sm">
            <div className="flex items-center gap-4 mb-6 text-primary">
              {industry.icon}
              <h3 className="text-xl font-bold text-foreground">{industry.name}</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {industry.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
