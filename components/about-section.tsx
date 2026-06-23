import {
  Leaf,
  ShieldCheck,
  Lightbulb,
  Award,
  Users,
  Cpu,
  Target,
  Eye,
} from 'lucide-react'
import { AnimateIn } from '@/components/animate-in'

const offerings = [
  'Green Cold Storage',
  'Solar Powered Cold Rooms',
  'HVAC Engineering',
  'Industrial Refrigeration',
  'Thermal Energy Storage',
  'Solar EPC Solutions',
  'Smart Cooling Technologies',
]

const values = [
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Leaf, label: 'Sustainability' },
  { icon: ShieldCheck, label: 'Reliability' },
  { icon: Award, label: 'Quality' },
  { icon: Users, label: 'Customer Success' },
  { icon: Cpu, label: 'Engineering Excellence' },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header */}
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">About Unexgen</span>
          <h2 id="about-heading" className="section-title">
            A Sustainable Engineering Company Built on Innovation
          </h2>
          <p className="section-subtitle">
            Unexgen Technology Private Limited specializes in energy-efficient
            engineering solutions that improve profitability while reducing
            environmental impact across the cold chain.
          </p>
        </AnimateIn>

        {/* Offering pills */}
        <AnimateIn animation="fade-up" delay={1} className="mt-12 flex flex-wrap justify-center gap-3">
          {offerings.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/20 bg-[#E9FBF5] px-4 py-2 text-sm font-medium text-[#0D7A57] transition-colors hover:bg-[#D7F8EA]"
            >
              {item}
            </span>
          ))}
        </AnimateIn>

        {/* Mission / Vision cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <AnimateIn animation="slide-left" delay={0}>
            <div className="rounded-2xl border border-border bg-secondary p-8 transition-shadow hover:shadow-md h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To deliver innovative and energy-efficient engineering solutions
                that improve profitability while reducing environmental impact.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn animation="slide-right" delay={1}>
            <div className="rounded-2xl border border-border bg-brand p-8 text-primary-foreground transition-shadow hover:shadow-md h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/80">
                To become India&apos;s most trusted green cooling and renewable
                energy technology company.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <AnimateIn animation="fade-up">
            <h3 className="text-center font-heading text-2xl font-bold text-foreground">
              Our Core Values
            </h3>
          </AnimateIn>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {values.map(({ icon: Icon, label }, i) => (
              <AnimateIn
                key={label}
                animation="scale-up"
                delay={(i % 7) as 0 | 1 | 2 | 3 | 4 | 5 | 6}
              >
                <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all duration-200 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9FBF5] text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {label}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
