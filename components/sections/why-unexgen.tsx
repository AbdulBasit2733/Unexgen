import React from 'react';
import { CheckCircle, ShieldCheck, Sparkle, ArrowRight } from 'lucide-react';

const reasons = [
  'Complete Engineering Solution',
  'Design to Commissioning',
  'Solar + Cooling Integration',
  'Advanced TES Technology',
  'Government Subsidy Assistance',
  'High Return on Investment',
  'Expert Engineering Team',
  'Long-Term Support & AMC',
];

const advantages = [
  'Faster ROI',
  'Lower OPEX',
  'Reliable Technology',
  'Scalable Solutions',
];

export const WhyUnexgen: React.FC = () => {
  return (
    <section id="why-unexgen" className="section-container bg-secondary">
      <div className="text-center mb-16">
        <h2 className="section-heading mb-4">Why Unexgen?</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          We combine complete engineering, subsidy support, and proven cooling technology to deliver projects that save money and reduce emissions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-3 rounded-3xl border border-border bg-card p-6">
              <CheckCircle className="w-6 h-6 text-primary mt-1" />
              <p className="text-foreground font-semibold">{reason}</p>
            </div>
          ))}
        </div>

        <div className="card-elevated p-8 border border-border bg-card">
          <div className="flex items-center gap-3 mb-8 text-primary">
            <ShieldCheck className="w-8 h-8" />
            <h3 className="text-2xl font-black">Competitive Advantages</h3>
          </div>
          <div className="grid gap-4">
            {advantages.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-secondary p-5">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
