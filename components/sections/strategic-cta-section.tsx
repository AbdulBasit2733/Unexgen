'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Zap,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  roofAreaSqft?: string;
  systemType?: string;
}

export const StrategicCTASection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      console.log('Form submitted:', formData);

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowForm(false);
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', phone: '', company: '' });
      }, 3000);
    }, 800);
  };

  return (
    <>
      {/* Primary CTA Banner - After ROI Calculator */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-700 dark:to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Transform Your Energy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a personalized energy audit and ROI analysis for your facility. Free
            consultation with our expert engineers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="primary"
              className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => setShowForm(true)}
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button
              variant="secondary"
              className="bg-white/20 text-white border border-white hover:bg-white/30 text-lg px-8 py-3"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91-XXXX-XXXX
            </Button>
          </div>
        </div>
      </section>

      {/* Secondary CTA - Mid-page Card */}
      <section className="py-12 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1: Free Audit */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                Free Energy Audit
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Thermal imaging analysis of your facility to identify energy waste
              </p>
              <Button variant="secondary" className="w-full">
                Request Audit
              </Button>
            </div>

            {/* Option 2: Consultation Call */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                Expert Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                30-minute call with our engineering team to discuss your needs
              </p>
              <Button variant="secondary" className="w-full">
                Schedule Call
              </Button>
            </div>

            {/* Option 3: Case Studies */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                View Case Studies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Download detailed ROI reports from similar facilities in your industry
              </p>
              <Button variant="secondary" className="w-full">
                View Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {submitSuccess ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We&apos;ve received your request. Our team will contact you within 24
                  hours to schedule your consultation.
                </p>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setShowForm(false)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-8 text-white">
                  <h2 className="text-2xl font-black mb-2">
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-white/90">
                    Our energy experts will create a customized plan for your facility
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Your company"
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      System Type Interest
                    </label>
                    <select
                      name="systemType"
                      value={formData.systemType || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    >
                      <option value="">Select system type...</option>
                      <option value="solar">Solar Power</option>
                      <option value="hybrid">Solar + Battery Hybrid</option>
                      <option value="hydrogen">Green Hydrogen</option>
                      <option value="hvac">Smart HVAC</option>
                      <option value="all">Interested in all</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Scheduling...
                      </>
                    ) : (
                      <>
                        Request Consultation
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold py-2"
                  >
                    Cancel
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
