import React from 'react';
import { Award, Users, Zap, BarChart3, Shield, Clock, Leaf, Lightbulb } from 'lucide-react';

interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const valuePropositions: ValueProp[] = [
  {
    id: 'expertise',
    title: 'Deep Industry Expertise',
    description: 'With 15+ years of renewable energy experience across 500+ projects',
    icon: <Award className="w-8 h-8" />,
    details: [
      'MNRE-approved solar installation',
      'ISO 9001:2015 certified processes',
      'Government subsidy specialists',
      'Industry certifications & compliance'
    ]
  },
  {
    id: 'technology',
    title: 'Advanced AI Technology',
    description: 'Proprietary algorithms for optimization and predictive maintenance',
    icon: <Lightbulb className="w-8 h-8" />,
    details: [
      'Real-time energy optimization',
      'Predictive maintenance systems',
      'IoT-enabled monitoring',
      'ML-powered demand forecasting'
    ]
  },
  {
    id: 'savings',
    title: 'Guaranteed Savings',
    description: 'Average ₹2-3 Crore savings over 10 years for commercial clients',
    icon: <Zap className="w-8 h-8" />,
    details: [
      '35-70% energy cost reduction',
      'ROI within 4-6 years',
      'Performance guarantees',
      'Savings monitoring dashboard'
    ]
  },
  {
    id: 'support',
    title: '24/7 World-Class Support',
    description: 'Dedicated support team available round-the-clock for emergencies',
    icon: <Clock className="w-8 h-8" />,
    details: [
      'Emergency response teams',
      'Live monitoring 24/7/365',
      'Mobile app support access',
      'Free annual maintenance'
    ]
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    description: 'Compatible with existing systems - no major disruptions needed',
    icon: <Users className="w-8 h-8" />,
    details: [
      'Works with current infrastructure',
      'Minimal installation downtime',
      'Grid-connected or standalone',
      'Future-proof scalable design'
    ]
  },
  {
    id: 'compliance',
    title: 'Full Regulatory Compliance',
    description: 'Government-approved solutions with all necessary certifications',
    icon: <Shield className="w-8 h-8" />,
    details: [
      'IEC 61008-1 standards',
      'Grid Interconnection approved',
      'DISCOM coordination',
      'Net metering enabled'
    ]
  },
  {
    id: 'sustainability',
    title: 'True Sustainability Impact',
    description: 'Real environmental impact - verified carbon offset tracking',
    icon: <Leaf className="w-8 h-8" />,
    details: [
      'Annual carbon offset reports',
      'ESG compliance support',
      'CSR impact documentation',
      'UN Sustainable Goals aligned'
    ]
  },
  {
    id: 'returns',
    title: 'Exceptional ROI',
    description: 'Best-in-class return on investment with multiple benefit streams',
    icon: <BarChart3 className="w-8 h-8" />,
    details: [
      'Direct energy savings',
      'Government subsidies (35-40%)',
      'Tax benefits & depreciation',
      'Net metering credits'
    ]
  }
];

export const WhyUnexgen: React.FC = () => {
  return (
    <section id="why-unexgen-full" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 text-balance text-foreground">
          Why Choose <span className="text-gradient-emerald">Unexgen</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We&apos;re not just an energy company - we&apos;re your partner in building a sustainable, profitable future
        </p>
      </div>

      {/* Value Propositions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {valuePropositions.map((prop) => (
          <div key={prop.id} className="group card-elevated p-8 hover:shadow-lg transition-all duration-300">
            {/* Icon */}
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
              {prop.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-foreground mb-2">{prop.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{prop.description}</p>

            {/* Details List */}
            <ul className="space-y-2">
              {prop.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-foreground/80">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Comparison Highlight */}
      <div className="mt-20 bg-primary/10 border border-primary/20 rounded-3xl p-12">
        <h3 className="text-3xl font-black text-foreground mb-8 text-center">
          Unexgen vs. Others
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Traditional Solar Companies',
              cons: [
                'No long-term support',
                'Limited warranty (5-7 years)',
                'High maintenance costs',
                'No AI optimization',
                'Generic designs'
              ]
            },
            {
              title: 'Unexgen Advantage',
              pros: [
                '24/7 lifetime support',
                '10-year performance warranty',
                'Free annual maintenance',
                'AI-powered optimization',
                'Customized solutions'
              ],
              isHighlight: true
            },
            {
              title: 'Generic Energy Consultants',
              cons: [
                'No installation capability',
                'Expensive consulting fees',
                'No subsidy expertise',
                'Multiple contractors needed',
                'Fragmented service'
              ]
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${
                item.isHighlight
                  ? 'bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl scale-105'
                  : 'bg-secondary p-8 rounded-2xl border border-border'
              }`}
            >
              <h4 className={`text-xl font-bold mb-6 ${item.isHighlight ? '' : 'text-foreground'}`}>
                {item.title}
              </h4>
              <ul className="space-y-3">
                {(item.pros || item.cons)?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {item.isHighlight ? (
                      <>
                        <span className="text-lg mt-0.5">✓</span>
                        <span>{point}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-lg text-muted-foreground mt-0.5">✗</span>
                        <span className="text-muted-foreground">{point}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { stat: '500+', label: 'Active Projects', color: 'from-blue-500 to-cyan-500' },
          { stat: '98%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
          { stat: '₹500Cr', label: 'Savings Generated', color: 'from-purple-500 to-pink-500' },
          { stat: '₹100Cr', label: 'Subsidies Unlocked', color: 'from-orange-500 to-red-500' }
        ].map((item, idx) => (
          <div key={idx} className="card-elevated p-8 text-center">
            <div className={`text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>
              {item.stat}
            </div>
            <p className="text-muted-foreground font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
