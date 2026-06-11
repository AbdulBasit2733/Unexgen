import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="bg-transparent inline-block mb-4">
              <div className="text-text-primary text-xl font-bold">UNEXGEN</div>
            </div>
            <p className="text-text-secondary text-sm">
              Next-generation sustainable energy infrastructure
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-text-primary font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Solar Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Green Hydrogen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Heat Pumps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  HVAC Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-text-primary font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-text-primary font-bold mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white border border-secondary px-3 py-1 rounded text-xs text-secondary font-semibold">
                ISO 9001
              </div>
              <div className="bg-white border border-secondary px-3 py-1 rounded text-xs text-secondary font-semibold">
                ISO 14001
              </div>
              <div className="bg-white border border-secondary px-3 py-1 rounded text-xs text-secondary font-semibold">
                Net Zero
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © 2026 Unexgen. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a
              href="#"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
