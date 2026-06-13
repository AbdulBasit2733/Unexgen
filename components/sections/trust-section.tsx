import React from 'react';
import Image from 'next/image';

const trustItems = [
  {
    id: 1,
    title: 'Certified Technicians',
    description: 'All team members are licensed, insured, and background-checked',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80'
  },
  {
    id: 2,
    title: '10-Year Warranty',
    description: 'Industry-leading warranty on all installations and equipment',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80'
  },
  {
    id: 3,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock support when you need it most',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80'
  }
];

export const TrustSection: React.FC = () => {
  return (
    <section id="why-unexgen" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Large Feature Image */}
        <div className="relative hidden lg:block">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl card-elevated">
            <Image
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
              alt="Professional technician at work"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-8 -right-8 glass-light p-8 rounded-2xl shadow-xl border border-border">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">15+</div>
              <div className="text-foreground font-bold">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="section-heading mb-6">
            Trusted by <span className="text-gradient-emerald">500+ Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Unexgen, we treat your property and sustainability goals with utmost commitment. Our expert team delivers industry-leading expertise and stays ahead of emerging energy technologies.
          </p>

          <div className="space-y-6">
            {trustItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
