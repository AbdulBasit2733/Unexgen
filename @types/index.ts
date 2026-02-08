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
