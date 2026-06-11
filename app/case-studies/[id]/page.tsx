import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { formatINR } from '@/lib/currency';
import { TrendingUp, Zap, Leaf, DollarSign, Users, Calendar } from 'lucide-react';

export function generateStaticParams() {
  return [
    { id: 'automotive-bangalore' },
    { id: 'textile-tiruppur' },
    { id: 'logistics-mumbai' },
    { id: 'pharmaceutical-hyderabad' },
    { id: 'agricultural-punjab' },
  ];
}

const caseStudies: { [key: string]: any } = {
  'automotive-bangalore': {
    title: 'Automotive Manufacturing Complex - Bangalore',
    subtitle: 'Industrial-Scale Solar Transformation',
    client: 'Bangalore Automotive Solutions Ltd.',
    location: 'Bangalore, Karnataka',
    installationDate: 'Q3 2022',
    industry: 'Manufacturing',
    backgroundImage:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
    challenge: `Faced with soaring electricity costs due to high HVAC and production loads, 
      Bangalore Automotive Solutions was looking for a way to reduce operational expenses 
      while improving sustainability credentials for their automotive manufacturing facility.`,
    solution: `Unexgen designed and deployed a 750kW rooftop solar system with advanced 
      monitoring and grid integration. The system includes battery backup for peak demand 
      management and a smart inverter system that optimizes power flow.`,
    results: {
      systemCapacity: 750,
      annualProduction: 900000,
      annualSavings: 7500000,
      paybackPeriod: 4.5,
      roi5Year: 125,
      federalSubsidy: 15000000,
      co2Offset: '1,200 tons/year',
      uptime: '99.7%',
    },
    timeline: [
      {
        phase: 'Site Assessment & Design',
        duration: '2 weeks',
        description: 'Thermal imaging, load analysis, and system design',
      },
      {
        phase: 'Permitting & Approvals',
        duration: '1 month',
        description: 'Government approvals and subsidy application',
      },
      {
        phase: 'Installation',
        duration: '6 weeks',
        description: 'Solar panel installation and electrical work',
      },
      {
        phase: 'Testing & Commissioning',
        duration: '2 weeks',
        description: 'System testing and grid connection',
      },
    ],
    financialBreakdown: [
      { category: 'System Cost', amount: 11250000, percentage: 100 },
      { category: 'Federal Subsidy', amount: -15000000, percentage: -133 },
      {
        category: 'Out of Pocket Cost',
        amount: -3750000,
        percentage: -33,
      },
      { category: 'First Year Savings', amount: 7500000, percentage: 67 },
      { category: 'Payback Period', amount: 0.5, period: 'years' },
    ],
    monthlyProduction: [
      { month: 'Jan', production: 65000 },
      { month: 'Feb', production: 58000 },
      { month: 'Mar', production: 75000 },
      { month: 'Apr', production: 82000 },
      { month: 'May', production: 89000 },
      { month: 'Jun', production: 85000 },
      { month: 'Jul', production: 78000 },
      { month: 'Aug', production: 76000 },
      { month: 'Sep', production: 80000 },
      { month: 'Oct', production: 81000 },
      { month: 'Nov', production: 68000 },
      { month: 'Dec', production: 63000 },
    ],
    testimonial: {
      author: 'Rajesh Kumar',
      role: 'Plant Manager',
      quote:
        'The solar system exceeded our expectations in terms of performance and ROI. Our electricity bills have dropped significantly, and we achieved our sustainability targets years ahead of schedule.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    technologies: [
      'Solar Photovoltaic Panels (Tier 1)',
      'Advanced String Inverters',
      'Battery Storage System',
      'IoT Monitoring Dashboard',
      'Grid Integration Software',
    ],
    benefits: [
      {
        title: 'Cost Reduction',
        description:
          'Annual savings of ₹75 lakhs on electricity expenses with predictable energy costs',
      },
      {
        title: 'Energy Independence',
        description:
          'Reduced grid dependence by 80%, providing resilience during peak demand',
      },
      {
        title: 'Carbon Neutrality',
        description:
          'Offset 1,200 tons of CO2 annually, supporting ESG goals',
      },
      {
        title: 'Government Incentives',
        description:
          'Captured federal subsidies of ₹1.5 Crores, significantly reducing capital investment',
      },
      {
        title: 'Asset Value',
        description:
          'Increased property value with long-term renewable energy infrastructure',
      },
      {
        title: 'Competitive Advantage',
        description:
          'Green credentials attract eco-conscious clients and partners',
      },
    ],
    nextSteps: [
      'Consider battery storage expansion for 24/7 energy independence',
      'Integrate EV charging infrastructure for company fleet',
      'Implement hydrogen fuel cells for backup power',
    ],
  },
};

export default function CaseStudyPage({
  params,
}: {
  params: { id: string };
}) {
  const caseStudy = caseStudies[params.id];

  if (!caseStudy) {
    return (
      <>
        <Header />
        <main className="py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-black mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">
              The case study you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button variant="primary">Back to Case Studies</Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <Image
            src={caseStudy.backgroundImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="font-semibold">{caseStudy.industry}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl">
              {caseStudy.subtitle}
            </p>
          </div>
        </section>

        {/* Key Metrics Bar */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-emerald-400">
                {caseStudy.results.systemCapacity}kW
              </p>
              <p className="text-gray-400 mt-2">System Capacity</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-400">
                {formatINR(caseStudy.results.annualSavings)}
              </p>
              <p className="text-gray-400 mt-2">Annual Savings</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-400">
                {caseStudy.results.paybackPeriod}y
              </p>
              <p className="text-gray-400 mt-2">Payback Period</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-400">
                {caseStudy.results.co2Offset}
              </p>
              <p className="text-gray-400 mt-2">Carbon Offset</p>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-6 text-gray-900">
                The Challenge
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6 text-gray-900">
                Our Solution
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black mb-16 text-center text-gray-900">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudy.benefits.map((benefit: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-black text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-gradient-to-r from-emerald-600 to-cyan-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <blockquote className="text-3xl font-bold mb-8">
              &quot;{caseStudy.testimonial.quote}&quot;
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                <Image
                  src={caseStudy.testimonial.image}
                  alt={caseStudy.testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-bold">{caseStudy.testimonial.author}</p>
              <p className="text-white/90">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-black mb-8 text-gray-900">
              Ready for a Similar Transformation?
            </h2>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a customized analysis for your facility with our free energy audit and ROI
              projection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" className="text-lg px-8 py-3">
                Schedule Consultation
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-3">
                View Other Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
