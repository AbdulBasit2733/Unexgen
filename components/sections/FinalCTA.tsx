import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="section-container">
      <div 
        className="rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden bg-card border border-border"
      >

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <Zap className="w-14 h-14 sm:w-16 sm:h-16 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Transform Your Energy Future
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join over 500 facilities across India achieving net-zero emissions and ₹2-3 Crore in annual savings with Unexgen.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              className="text-lg px-8 sm:px-12 py-4 font-bold justify-center"
            >
              Get Free Energy Audit
            </Button>
            <Button 
              variant="secondary"
              className="text-lg px-8 sm:px-12 py-4 font-bold justify-center"
            >
              Explore Partnerships
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {[
              'ISO 9001:2015 Certified',
              '₹10+ Cr Incentives Unlocked',
              'Net Zero Operations'
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-secondary px-4 sm:px-6 py-3 rounded-full text-foreground font-semibold border border-border">
                <CheckCircle className="w-5 h-5" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
