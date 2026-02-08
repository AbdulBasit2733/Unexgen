import {
  CaseStudy,
  ComparisonData,
  Service,
  Technology,
  Testimonial,
} from "@/@types";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const technologies: Technology[] = [
  {
    id: "hvac",
    name: "HVAC Systems",
    icon: "hvac",
    rating: "SEER 26+ Rated",
    description: "High-efficiency climate control",
  },
  {
    id: "solar",
    name: "Photovoltaic Solar",
    icon: "solar",
    rating: "99.7% Uptime",
    description: "Commercial-grade solar arrays",
  },
  {
    id: "hydrogen",
    name: "Green Hydrogen",
    icon: "hydrogen",
    rating: "Zero Emissions",
    description: "Industrial energy storage",
  },
  {
    id: "heatpump",
    name: "Heat Pumps",
    icon: "heatpump",
    rating: "COP 4.5+",
    description: "All-season efficiency",
  },
];

export const services: Service[] = [
  {
    id: "industrial-hydrogen",
    title: "Industrial Hydrogen",
    description:
      "Scalable green hydrogen production for manufacturing and heavy industry",
    lifetimeSavings: "$2.4M over 15 years",
    features: [
      "On-site hydrogen generation",
      "Carbon-negative operations",
      "Federal IRA tax credits up to 40%",
      "24/7 monitoring and optimization",
    ],
    isFeatured: true,
  },
  {
    id: "residential-solar",
    title: "Residential Solar",
    description:
      "Complete home solar installations with battery backup systems",
    lifetimeSavings: "$45K over 25 years",
    features: [
      "Net metering integration",
      "25-year warranty",
      "Zero-down financing",
      "Real-time energy tracking",
    ],
  },
  {
    id: "commercial-hvac",
    title: "Commercial HVAC",
    description: "Smart building climate systems with AI-driven efficiency",
    lifetimeSavings: "$180K over 10 years",
    features: [
      "SEER 26+ efficiency",
      "Predictive maintenance",
      "IoT sensor integration",
      "Load balancing automation",
    ],
  },
  {
    id: "heat-pump",
    title: "Heat Pump Systems",
    description:
      "All-electric heating and cooling for residential and light commercial",
    lifetimeSavings: "$32K over 15 years",
    features: [
      "Works down to -15°F",
      "Up to 400% efficiency",
      "Whisper-quiet operation",
      "Smart thermostat included",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "manufacturing-plant",
    title: "Manufacturing Plant",
    location: "Cleveland, OH",
    beforeImage: "/images/before-1.jpg",
    afterImage: "/images/after-1.jpg",
    annualKwhSaved: "4.2M kWh",
    carbonOffset: "2,800 tons CO₂",
  },
  {
    id: "residential-complex",
    title: "Residential Complex",
    location: "Phoenix, AZ",
    beforeImage: "/images/before-2.jpg",
    afterImage: "/images/after-2.jpg",
    annualKwhSaved: "680K kWh",
    carbonOffset: "420 tons CO₂",
  },
  {
    id: "warehouse-facility",
    title: "Warehouse Facility",
    location: "Dallas, TX",
    beforeImage: "/images/before-3.jpg",
    afterImage: "/images/after-3.jpg",
    annualKwhSaved: "1.8M kWh",
    carbonOffset: "1,200 tons CO₂",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Reduced our energy costs by 64% in the first year. The ROI projections were actually conservative.",
    author: "Marcus Chen",
    role: "Facilities Director",
    company: "Apex Manufacturing",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Zero electricity bills for 18 months straight. The tax credits covered 38% of installation costs.",
    author: "Sarah Williams",
    role: "Homeowner",
    company: "Phoenix Residential",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Their hydrogen system powers our entire warehouse. Carbon-negative operations were achieved in Year 2.",
    author: "James Rodriguez",
    role: "Operations Manager",
    company: "LogiCore Warehousing",
    rating: 5,
  },
];

export const comparisonData: ComparisonData[] = [
  {
    feature: "Response Time",
    traditional: "24-72 hours",
    unexgen: "Real-time (AI)",
  },
  {
    feature: "Efficiency Loss",
    traditional: "15-30% annually",
    unexgen: "<2% annually",
  },
  {
    feature: "Carbon Footprint",
    traditional: "Grid-dependent",
    unexgen: "Net-zero certified",
  },
  { feature: "Uptime SLA", traditional: "95%", unexgen: "99.7%" },
];
