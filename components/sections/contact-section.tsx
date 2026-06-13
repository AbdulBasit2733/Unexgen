'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  contact: string;
  action: string;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Chat',
    description: 'Quick responses & instant support',
    icon: <MessageCircle className="w-8 h-8" />,
    contact: '+91-9876543210',
    action: 'Send WhatsApp',
    link: 'https://wa.me/919876543210?text=Hi%20Unexgen%2C%20I%20need%20an%20energy%20audit'
  },
  {
    id: 'email',
    title: 'Email Support',
    description: 'Detailed queries & documentation',
    icon: <Mail className="w-8 h-8" />,
    contact: 'info@unexgen.com',
    action: 'Send Email',
    link: 'mailto:info@unexgen.com?subject=Energy%20Audit%20Request'
  },
  {
    id: 'phone',
    title: 'Call Us',
    description: 'Direct phone support available',
    icon: <Phone className="w-8 h-8" />,
    contact: '1800-UNEXGEN (1800-863-9436)',
    action: 'Call Now',
    link: 'tel:+911800863943'
  },
  {
    id: 'office',
    title: 'Visit Office',
    description: 'Meet our team in person',
    icon: <MapPin className="w-8 h-8" />,
    contact: 'Bangalore, Mumbai, Delhi, Pune',
    action: 'Get Directions',
    link: 'https://maps.google.com/?q=Unexgen+Technology'
  }
];

const serviceTypes = [
  { id: 'residential', label: 'Residential Solar', icon: '🏠' },
  { id: 'commercial', label: 'Commercial Solutions', icon: '🏢' },
  { id: 'industrial', label: 'Industrial Systems', icon: '🏭' },
  { id: 'hydrogen', label: 'Green Hydrogen', icon: '⚡' },
  { id: 'ev', label: 'EV Charging', icon: '🔋' },
  { id: 'audit', label: 'Energy Audit', icon: '📊' }
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 text-balance text-foreground">
          Get in <span className="text-gradient-emerald">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Ready to transform your energy future? Contact our team for a free consultation and personalized quote
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Quick Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer block"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <p className="text-primary font-semibold text-sm">{method.contact}</p>
                  </div>
                  <div className="text-xs font-bold text-primary whitespace-nowrap ml-4">
                    {method.action}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Business Hours */}
          <div className="card-elevated p-6 bg-secondary border border-border">
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday & Holidays</span>
                    <span className="font-semibold text-foreground">Emergency Support Only</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  24/7 emergency support available for existing clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card-elevated p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Thank You!</h4>
              <p className="text-muted-foreground">
                We&apos;ve received your message. Our team will contact you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="+91-98765-43210"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                >
                  <option value="">Select a service...</option>
                  {serviceTypes.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Send Inquiry
              </button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Service Types Grid */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Services We Offer</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceTypes.map((service) => (
            <button
              key={service.id}
              className="card-elevated p-6 text-center hover:shadow-lg transition-all hover:scale-105 group"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import Check icon
import { Check } from 'lucide-react';
