import { Check, Zap, TrendingDown, ShieldCheck, Expand } from 'lucide-react'
import { AnimateIn } from '@/components/animate-in'

const reasons = [
  'Complete Engineering Solutions',
  'Design to Commissioning',
  'Solar + Cooling Integration',
  'Advanced TES Technology',
  'Government Subsidy Assistance',
  'High Return on Investment',
  'Expert Engineering Team',
  'Long-Term Support & AMC',
]

const advantages = [
  { icon: Zap, label: 'Faster ROI' },
  { icon: TrendingDown, label: 'Lower OPEX' },
  { icon: ShieldCheck, label: 'Reliable Technology' },
  { icon: Expand, label: 'Scalable Solutions' },
]

export function WhyChooseSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimateIn animation="fade-up" delay={0}>
            <span className="section-eyebrow">Why Choose Unexgen</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
              A Single Partner for the Entire Green Cooling Journey
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We combine deep engineering expertise with renewable energy
              integration to deliver dependable systems and lasting value.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((reason, idx) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <div className="grid grid-cols-2 gap-4">
            {advantages.map(({ icon: Icon, label }, idx) => (
              <AnimateIn
                key={label}
                animation="scale-up"
                delay={idx * 100}
                className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-heading text-lg font-bold text-foreground">
                  {label}
                </span>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
