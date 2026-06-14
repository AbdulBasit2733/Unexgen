'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-20">
      <section className="w-full max-w-5xl rounded-[2rem] border border-border bg-card shadow-2xl p-10 sm:p-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">Page not found</p>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6 text-foreground">
              404 — The page you are looking for does not exist.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              The content may have moved, or the link you followed is broken. Return to the homepage or explore our energy solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-8 py-4 text-sm font-semibold text-foreground transition hover:bg-secondary/90">
                Contact Support
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-secondary p-8">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">Need help?</p>
              <p className="text-foreground text-lg leading-relaxed">
                Reach out if you need assistance finding the right renewable energy solution or the correct page.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Office Location</p>
                  <p className="text-sm text-muted-foreground">Central Naka Road, Jaswantpura, Chhatrapati Sambhajinagar</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5">
                <ShieldCheck className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Support Available</p>
                  <p className="text-sm text-muted-foreground">Our team is ready to help with site design, subsidies, and project details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
