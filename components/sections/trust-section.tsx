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
    <section className="section-container bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Large Feature Image */}
        <div className="relative">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
              alt="Professional HVAC technician at work"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-8 -right-8 glass-light p-8 rounded-2xl shadow-xl">
            <div className="text-center">
              <div className="text-5xl font-black text-electric-emerald mb-2">45+</div>
              <div className="text-gray-600 font-bold">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-5xl font-black mb-6 text-gray-900">
            Trusted by <span className="text-electric-emerald">500+ Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            At Unexgen, we treat your property like our own. Our expert team has decades of combined experience 
            and receives ongoing training to stay ahead of the latest energy technologies.
          </p>

          <div className="space-y-6">
            {trustItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
