import React from 'react';
import Image from 'next/image';
import { CheckIcon } from '@/components/icons/Icons';

const processSteps = [
  {
    id: 1,
    title: 'Free Energy Audit',
    description: 'Our certified technicians assess your property and identify energy waste opportunities.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    features: ['Thermal imaging scan', 'Load calculation', 'ROI projection']
  },
  {
    id: 2,
    title: 'Custom System Design',
    description: 'AI-powered design creates the optimal solar, HVAC, or hydrogen solution for your needs.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    features: ['3D modeling', 'Tax credit analysis', 'Financing options']
  },
  {
    id: 3,
    title: 'Professional Installation',
    description: 'Licensed technicians install your system with minimal disruption and maximum precision.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
    features: ['Clean install', 'Quality materials', 'Safety certified']
  },
  {
    id: 4,
    title: '24/7 Monitoring & Support',
    description: 'Real-time system monitoring with instant alerts and predictive maintenance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    features: ['IoT sensors', 'Mobile app', 'Emergency service']
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-6 text-gray-900">
          How <span className="text-electric-emerald">It Works</span>
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          From consultation to installation, we handle everything to ensure your transition to clean energy is seamless
        </p>
      </div>

      <div className="space-y-20">
        {processSteps.map((step, index) => (
          <div 
            key={step.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                {/* Step Number Badge */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-electric-emerald rounded-full flex items-center justify-center">
                  <span className="text-3xl font-black text-white">{step.id}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <h3 className="text-4xl font-black mb-4 text-gray-900">{step.title}</h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>

              <ul className="space-y-3">
                {step.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-electric-emerald flex-shrink-0" />
                    <span className="text-lg text-gray-900 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
