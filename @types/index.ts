export interface Technology {
  id: string;
  name: string;
  icon: string;
  rating: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  lifetimeSavings: string;
  features: string[];
  isFeatured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  annualKwhSaved: string;
  carbonOffset: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface ComparisonData {
  feature: string;
  traditional: string;
  unexgen: string;
}

export interface ProjectMetrics {
  capacity?: string; // "10 MT", "20 kW", etc
  capex?: number; // Total cost in INR
  subsidyReceived?: number; // In INR
  netInvestment?: number; // In INR
  annualSavings?: number; // In INR
  paybackPeriod?: number; // In months
  carbonReduction?: string; // "2,800 tons CO₂"
  foodWasteReduction?: string; // For cold storage projects
}

export interface CaseStudyDetail extends CaseStudy {
  problemStatement?: string;
  solution?: string;
  technologies?: string[];
  timeline?: {
    phase: string;
    duration: string;
  }[];
  metrics?: ProjectMetrics;
  testimonial?: string;
  images?: string[]; // Additional project images
}

export interface CalculatorInputs {
  monthlyBill: number; // ₹
  roofArea: number; // m²
  storageCapacity: number; // kWh
  location: string;
  industryType: 'manufacturing' | 'residential' | 'commercial' | 'warehouse';
}

export interface CalculatorResults {
  recommendedSolarSize: number; // kW
  estimatedSubsidy: number; // ₹
  annualSavings: number; // ₹
  netInvestment: number; // ₹
  paybackPeriod: number; // months
  carbonOffset: number; // tons CO₂
  savingsOver10Years: number; // ₹
}

export interface TestimonialEnhanced extends Testimonial {
  image?: string; // Client photo URL
  projectType?: string; // Type of project
  location?: string;
  savings?: number; // ₹
}
