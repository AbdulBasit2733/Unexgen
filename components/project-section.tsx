import Image from 'next/image'
import { Sun, Battery, Leaf, Gauge, MonitorSmartphone } from 'lucide-react'
import { AnimateIn } from '@/components/animate-in'

const features = [
  { icon: Sun, label: 'Solar Powered' },
  { icon: Battery, label: 'Thermal Energy Storage' },
  { icon: Leaf, label: 'Low Carbon Footprint' },
  { icon: Gauge, label: 'Energy Efficient' },
  { icon: MonitorSmartphone, label: 'Smart Monitoring' },
]

export function ProjectSection() {
  return (
    <section id="projects" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Featured Project</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            20 MT Green Cold Storage
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <AnimateIn animation="slide-right" delay={100} className="relative overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/project-coldstorage.png"
              alt="20 metric ton solar-powered green cold storage facility"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </AnimateIn>

          <div>
            <AnimateIn animation="fade-up" delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A fully solar-integrated cold storage facility engineered for
                continuous, low-cost cooling. Combining thermal energy storage with
                smart monitoring, the project demonstrates how renewable energy and
                advanced refrigeration can dramatically cut both costs and
                emissions.
              </p>
            </AnimateIn>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, label }, idx) => (
                <AnimateIn
                  key={label}
                  animation="scale-up"
                  delay={300 + idx * 100}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E9FBF5] text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {label}
                  </span>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn animation="fade-up" delay={800} className="mt-6 flex gap-6 rounded-xl bg-brand p-6 text-primary-foreground">
              <div>
                <p className="font-heading text-2xl font-bold text-primary">5–8%</p>
                <p className="text-xs text-primary-foreground/70">
                  Post-Harvest Loss
                </p>
              </div>
              <div className="border-l border-primary-foreground/15 pl-6">
                <p className="font-heading text-2xl font-bold text-primary">
                  20–30%
                </p>
                <p className="text-xs text-primary-foreground/70">
                  Grid Reduction
                </p>
              </div>
              <div className="border-l border-primary-foreground/15 pl-6">
                <p className="font-heading text-2xl font-bold text-primary">
                  24/7
                </p>
                <p className="text-xs text-primary-foreground/70">Cooling</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
