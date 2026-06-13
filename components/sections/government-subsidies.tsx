'use client';

import React, { useState } from 'react';
import { ChevronDown, Check, IndianRupee } from 'lucide-react';

interface SubsidyProgram {
  id: string;
  name: string;
  description: string;
  subsidy: string;
  coverage: string;
  duration: string;
  eligibility: string[];
}

const subsidyPrograms: SubsidyProgram[] = [
  {
    id: 'pm-kusum',
    name: 'PM-KUSUM Scheme',
    description: 'Prime Minister Kisan Urja Suraksha Utthaan Mahaabhiyaan - Focused on empowering farmers with solar energy',
    subsidy: 'Up to 50% subsidy (₹50 Lakh+)',
    coverage: 'Agricultural applications - Solar pumps, microgrids, grid-connected systems',
    duration: '2019-2024 (Ongoing Extensions)',
    eligibility: [
      'Agricultural land owners and farmers',
      'Individual & group farming',
      'Existing grid-connected irrigation systems',
      'Land above 0.5 hectares'
    ]
  },
  {
    id: 'naan-mudhalvan',
    name: 'National Scheme on Energy Conservation',
    description: 'Energy Conservation Building Code (ECBC) - For industrial and commercial sectors',
    subsidy: '₹15-25 Lakh per project',
    coverage: 'Energy audits, HVAC upgrades, LED systems, renewable integration',
    duration: 'Ongoing',
    eligibility: [
      'Industrial units with <100MW capacity',
      'Commercial buildings >1000 sqm',
      'Government institutions',
      'Educational facilities'
    ]
  },
  {
    id: 'solar-rooftop',
    name: 'Solar Rooftop Subsidy Scheme',
    description: 'Ministry of New and Renewable Energy (MNRE) initiative for residential and commercial rooftop solar',
    subsidy: 'Up to 40% (₹1 Lakh-₹3 Lakh per kW)',
    coverage: 'Residential buildings, offices, factories, schools, hospitals',
    duration: 'Till 2026',
    eligibility: [
      'Residential buildings (Government & Private)',
      'Commercial establishments',
      'Public institutions',
      'Industrial units'
    ]
  },
  {
    id: 'hvac-subsidy',
    name: 'Super-Efficient Equipment Program',
    description: 'Ministry of Power - Incentives for upgrading to high-efficiency HVAC and thermal systems',
    subsidy: '₹20-30K per unit installed',
    coverage: 'Heat pumps, ultra-efficient chillers, smart thermostats',
    duration: '2024-2028',
    eligibility: [
      'Industries and commercial entities',
      'Government buildings',
      'Educational institutions',
      'Healthcare facilities'
    ]
  },
  {
    id: 'hydrogen-mission',
    name: 'National Green Hydrogen Mission',
    description: 'Government of India - Promoting green hydrogen production and utilization',
    subsidy: 'Up to ₹100 Crore for pilot projects',
    coverage: 'Green hydrogen production, fuel cells, industrial applications',
    duration: '2023-2030',
    eligibility: [
      'Established manufacturing units',
      'Research institutions',
      'Consortium of industries',
      'CapEx support up to ₹5 Crore'
    ]
  },
  {
    id: 'ev-charging',
    name: 'EV Charging Infrastructure Subsidy',
    description: 'NITI Aayog - Incentives for EV charging station installation',
    subsidy: 'Up to 50% CapEx support',
    coverage: 'Home, workplace, and public charging stations',
    duration: '2024-2029',
    eligibility: [
      'Residential societies',
      'Corporate offices',
      'Shopping malls & restaurants',
      'Public parking facilities'
    ]
  }
];

const SubsidyAccordion: React.FC<{ program: SubsidyProgram }> = ({ program }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-elevated overflow-hidden border border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-secondary transition-colors text-left"
      >
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">{program.name}</h3>
          <p className="text-sm text-muted-foreground">{program.description}</p>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-primary flex-shrink-0 ml-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-border px-6 py-6 space-y-6 bg-secondary/30">
          {/* Subsidy Amount */}
          <div className="flex items-start gap-4">
            <IndianRupee className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground font-semibold">Subsidy Amount</p>
              <p className="text-lg font-bold text-foreground">{program.subsidy}</p>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <p className="text-sm text-muted-foreground font-semibold mb-2">Coverage</p>
            <p className="text-foreground">{program.coverage}</p>
          </div>

          {/* Duration */}
          <div>
            <p className="text-sm text-muted-foreground font-semibold mb-2">Program Duration</p>
            <p className="text-foreground">{program.duration}</p>
          </div>

          {/* Eligibility */}
          <div>
            <p className="text-sm text-muted-foreground font-semibold mb-3">Eligibility Criteria</p>
            <ul className="space-y-2">
              {program.eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button className="w-full mt-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Learn More About {program.name.split(' ')[0]}
          </button>
        </div>
      )}
    </div>
  );
};

export const GovernmentSubsidies: React.FC = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-heading mb-4">
          Government <span className="text-gradient-emerald">Subsidies & Incentives</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Unlock ₹10+ Crore in government subsidies, tax credits, and incentives available right now for renewable energy projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {subsidyPrograms.map((program) => (
          <SubsidyAccordion key={program.id} program={program} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
        <h3 className="text-2xl font-bold text-foreground mb-3">Not sure which subsidies apply to you?</h3>
        <p className="text-muted-foreground mb-6">
          Our subsidy specialist team will analyze your property, industry, and location to identify every available incentive program. 
        </p>
        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Get Free Subsidy Assessment
        </button>
      </div>
    </section>
  );
};
