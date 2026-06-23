import {
  Sun,
  Cpu,
  Settings,
  Battery,
  Snowflake,
  ArrowRight,
  TrendingDown,
  Activity,
  Wallet,
  MonitorSmartphone,
  Bot,
} from 'lucide-react'
import { AnimateIn } from '@/components/animate-in'

const ecosystem = [
  { icon: Sun, label: 'Solar Power Generation' },
  { icon: Cpu, label: 'Energy Management System' },
  { icon: Settings, label: 'VFD Compressor Technology' },
  { icon: Battery, label: 'Thermal Energy Storage' },
  { icon: Snowflake, label: '24/7 Continuous Cooling' },
]

const benefits = [
  { icon: TrendingDown, label: '20–30% Grid Reduction' },
  { icon: Activity, label: 'High COP Refrigeration' },
  { icon: Wallet, label: 'Lower Operating Cost' },
  { icon: MonitorSmartphone, label: 'Remote Monitoring' },
  { icon: Bot, label: 'Intelligent Automation' },
]

export function TechnologySection() {
  return (
    <section id="technology" className="bg-brand py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow" style={{ color: '#27C08D' }}>Technology Advantage</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">
            The Unexgen Smart Cooling Ecosystem
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">
            An intelligent, integrated system where solar energy, smart controls
            and thermal storage work together to deliver reliable, low-cost
            cooling.
          </p>
        </AnimateIn>

        {/* Ecosystem flow */}
        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {ecosystem.map(({ icon: Icon, label }, i) => (
            <AnimateIn
              key={label}
              animation="fade-up"
              delay={(i % 6) as 0 | 1 | 2 | 3 | 4 | 5}
              className="flex flex-1 items-center gap-4 lg:flex-col"
            >
              <div className="flex w-full flex-1 flex-col items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center transition-all duration-300 hover:border-primary/60 hover:bg-primary-foreground/8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </div>
              {i < ecosystem.length - 1 && (
                <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-primary lg:rotate-0" />
              )}
            </AnimateIn>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {benefits.map(({ icon: Icon, label }, i) => (
            <AnimateIn
              key={label}
              animation="scale-up"
              delay={(i % 6) as 0 | 1 | 2 | 3 | 4 | 5}
            >
              <div className="flex flex-col items-center gap-3 rounded-xl border border-primary-foreground/10 p-5 text-center transition-all duration-300 hover:border-primary/40 hover:bg-primary-foreground/5">
                <Icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  {label}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
