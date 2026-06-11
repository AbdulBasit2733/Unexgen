import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { formatINR, formatINRAbbrv } from '@/lib/currency';
import { ArrowRight, TrendingUp, Zap, Leaf } from 'lucide-react';

const caseStudiesData = [
  {
    id: 'automotive-bangalore',
    title: 'Automotive Manufacturing Complex',
    location: 'Bangalore, Karnataka',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    industry: 'Manufacturing',
    systemCapacity: 750,
    annualSavings: 7500000,
    paybackPeriod: 4.5,
    co2Offset: '1,200 tons/year',
    systemType: 'Solar + Battery',
  },
  {
    id: 'textile-tiruppur',
    title: 'Textile Manufacturing Facility',
    location: 'Tiruppur, Tamil Nadu',
    image:
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    industry: 'Textiles',
    systemCapacity: 500,
    annualSavings: 5000000,
    paybackPeriod: 4,
    co2Offset: '800 tons/year',
    systemType: 'Solar',
  },
  {
    id: 'logistics-mumbai',
    title: 'Logistics & Warehouse Hub',
    location: 'Mumbai, Maharashtra',
    image:
      'https://images.unsplash.com/photo-1488034494253-92d77c1c3345?w=800&q=80',
    industry: 'Logistics',
    systemCapacity: 350,
    annualSavings: 3500000,
    paybackPeriod: 5,
    co2Offset: '560 tons/year',
    systemType: 'Solar + HVAC',
  },
  {
    id: 'pharmaceutical-hyderabad',
    title: 'Pharmaceutical Manufacturing Campus',
    location: 'Hyderabad, Telangana',
    image:
      'https://images.unsplash.com/photo-1584622180875-abc5a1b3a64f?w=800&q=80',
    industry: 'Pharmaceuticals',
    systemCapacity: 1000,
    annualSavings: 10000000,
    paybackPeriod: 4,
    co2Offset: '1,600 tons/year',
    systemType: 'Hybrid Microgrid',
  },
  {
    id: 'agricultural-punjab',
    title: 'Agro-Processing & Irrigation',
    location: 'Punjab Region',
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    industry: 'Agriculture',
    systemCapacity: 250,
    annualSavings: 2500000,
    paybackPeriod: 3.5,
    co2Offset: '400 tons/year',
    systemType: 'Agricultural Solar',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="py-24 bg-gradient-to-br from-white via-emerald-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-gray-900">
              Real Results. <span className="text-emerald-600">Real Impact.</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              Explore how Unexgen transformed energy operations across India&apos;s leading
              manufacturers, logistics providers, and agricultural enterprises.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudiesData.map((caseStudy) => (
                <Link
                  key={caseStudy.id}
                  href={`/case-studies/${caseStudy.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Industry Badge */}
                      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {caseStudy.industry}
                      </div>

                      {/* System Type Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                        {caseStudy.systemType}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-6">
                        📍 {caseStudy.location}
                      </p>

                      {/* Metrics */}
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            System Capacity
                          </span>
                          <span className="font-bold text-gray-900">
                            {caseStudy.systemCapacity}kW
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Annual Savings
                          </span>
                          <span className="font-bold text-emerald-600">
                            {formatINRAbbrv(caseStudy.annualSavings)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Payback Period
                          </span>
                          <span className="font-bold text-gray-900">
                            {caseStudy.paybackPeriod} years
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Carbon Offset
                          </span>
                          <span className="font-bold text-green-600">
                            {caseStudy.co2Offset}
                          </span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <button className="mt-6 w-full bg-gray-100 hover:bg-emerald-600 text-gray-900 hover:text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group/btn">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-24 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-center mb-16">
              Collective Impact Across Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-black mb-4">500+</p>
                <p className="text-lg">Installations Deployed</p>
              </div>
              <div>
                <p className="text-5xl font-black mb-4">₹125Cr+</p>
                <p className="text-lg">Total Client Savings</p>
              </div>
              <div>
                <p className="text-5xl font-black mb-4">50K+</p>
                <p className="text-lg">Tons CO₂ Offset</p>
              </div>
              <div>
                <p className="text-5xl font-black mb-4">99.7%</p>
                <p className="text-lg">Average Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-center mb-16 text-gray-900">
              Project Comparison
            </h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Project</th>
                    <th className="px-6 py-4 text-center font-bold">
                      System Capacity
                    </th>
                    <th className="px-6 py-4 text-center font-bold">
                      Annual Savings
                    </th>
                    <th className="px-6 py-4 text-center font-bold">
                      Payback Period
                    </th>
                    <th className="px-6 py-4 text-center font-bold">
                      CO₂ Offset
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {caseStudiesData.map((study, idx) => (
                    <tr
                      key={study.id}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 font-bold text-gray-900">
                        {study.title}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-900">
                        {study.systemCapacity}kW
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-emerald-600">
                        {formatINRAbbrv(study.annualSavings)}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-900">
                        {study.paybackPeriod} yrs
                      </td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold">
                        {study.co2Offset}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-black mb-6 text-gray-900">
              Get Your Own Success Story Started
            </h2>
            <p className="text-2xl text-gray-600 mb-12">
              Every facility is unique. Let&apos;s design a customized renewable energy solution
              that delivers maximum savings and sustainability impact for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" className="text-lg px-8 py-3">
                Schedule Free Audit
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-3">
                Download Sample Report
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
