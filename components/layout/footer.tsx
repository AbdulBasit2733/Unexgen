import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">U</span>
              </div>
              <div className="text-foreground text-lg font-bold">UNEXGEN</div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Next-generation sustainable energy infrastructure powering India&apos;s clean energy transition.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary transition-colors"
                >
                  Solar Systems
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary transition-colors"
                >
                  Green Hydrogen
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary transition-colors"
                >
                  Heat Pumps & HVAC
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary transition-colors"
                >
                  EV Charging
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications & Compliance */}
          <div>
            <h4 className="text-foreground font-bold mb-6 text-sm uppercase tracking-wider">Certifications</h4>
            <div className="flex flex-col gap-3">
              <div className="bg-secondary border border-primary px-3 py-2 rounded-lg text-xs text-primary font-semibold">
                ISO 9001:2015
              </div>
              <div className="bg-secondary border border-primary px-3 py-2 rounded-lg text-xs text-primary font-semibold">
                ISO 14001:2015
              </div>
              <div className="bg-secondary border border-primary px-3 py-2 rounded-lg text-xs text-primary font-semibold">
                Net Zero Certified
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Unexgen Technology. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
