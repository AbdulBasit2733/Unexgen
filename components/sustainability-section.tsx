import { Cloud, Fuel, PackageX, Recycle } from 'lucide-react'
import { AnimatedCounter } from '@/components/animated-counter'
import { AnimateIn } from '@/components/animate-in'

export function SustainabilitySection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Sustainability Impact</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            Measurable Environmental &amp; Economic Results
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Our green cold storage systems deliver verifiable savings every year
            of operation.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          <AnimateIn animation="slide-left" delay={0}>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary p-8 transition-shadow hover:shadow-sm h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9FBF5] text-primary">
                <Cloud className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-4xl font-bold text-foreground">
                  <AnimatedCounter value={25} suffix=" Tons" />
                </p>
                <p className="mt-1 font-semibold text-foreground">
                  Carbon Footprint Reduction
                </p>
                <p className="text-sm text-muted-foreground">
                  CO₂ avoided annually
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn animation="slide-right" delay={0}>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary p-8 transition-shadow hover:shadow-sm h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9FBF5] text-primary">
                <Fuel className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-4xl font-bold text-foreground">
                  <AnimatedCounter value={3000} suffix="–4,000 L" />
                </p>
                <p className="mt-1 font-semibold text-foreground">Diesel Savings</p>
                <p className="text-sm text-muted-foreground">Saved per year</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn animation="slide-left" delay={1}>
            <div className="rounded-2xl border border-border bg-brand p-8 text-primary-foreground h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <PackageX className="h-6 w-6" />
              </span>
              <p className="mt-4 font-semibold">Post-Harvest Loss Reduction</p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-foreground/70">
                      Traditional Storage
                    </span>
                    <span className="font-semibold">20–30%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-primary-foreground/10">
                    <div className="h-2 w-[85%] rounded-full bg-primary-foreground/40" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary">Unexgen Cold Storage</span>
                    <span className="font-semibold text-primary">5–8%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-primary-foreground/10">
                    <div className="h-2 w-[22%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn animation="slide-right" delay={1}>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary p-8 transition-shadow hover:shadow-sm h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9FBF5] text-primary">
                <Recycle className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-4xl font-bold text-foreground">
                  <AnimatedCounter value={75} prefix="Up to " suffix="%" />
                </p>
                <p className="mt-1 font-semibold text-foreground">
                  Food Waste Reduction
                </p>
                <p className="text-sm text-muted-foreground">
                  Across the cold chain
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
