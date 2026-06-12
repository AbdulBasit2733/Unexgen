import React from "react";
import { Mail, Phone, MapPin, Leaf } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <div className="text-2xl font-bold text-white">UNEXGEN</div>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Powering sustainable cooling infrastructure through innovation, reliability, and engineering excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 hover:bg-green-500 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 hover:bg-green-500 flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 hover:bg-green-500 flex items-center justify-center transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  Green Cold Storage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  HVAC Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  Thermal Storage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  Solar EPC
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Industries</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  Agriculture
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  Food Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  Industrial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919972745051" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  +91 9972745051
                </a>
              </li>
              <li>
                <a href="mailto:office@unexgentechnology.com" className="text-gray-400 hover:text-green-500 transition-colors text-sm font-500">
                  office@unexgen.com
                </a>
              </li>
              <li className="text-gray-400 text-sm font-500">
                Bait Colony, Jaisinghpura<br />
                Chhatrapur, Maharashtra - 431001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Unexgen Technology Private Limited. All rights reserved. <span className="text-green-500">GSTIN: 27AACUB8840GIZ</span>
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
