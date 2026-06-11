import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="bg-transparent inline-block mb-4">
              <div className="text-gray-900 text-xl font-bold">UNEXGEN</div>
            </div>
            <p className="text-gray-600 text-sm">
              Next-generation sustainable energy infrastructure
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  Solar Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  Green Hydrogen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  Heat Pumps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  HVAC Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-electric-emerald transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white border border-electric-emerald px-3 py-1 rounded text-xs text-electric-emerald font-semibold">
                ISO 9001
              </div>
              <div className="bg-white border border-electric-emerald px-3 py-1 rounded text-xs text-electric-emerald font-semibold">
                ISO 14001
              </div>
              <div className="bg-white border border-electric-emerald px-3 py-1 rounded text-xs text-electric-emerald font-semibold">
                Net Zero
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Unexgen. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a
              href="#"
              className="hover:text-electric-emerald transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-electric-emerald transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
