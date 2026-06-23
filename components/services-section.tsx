import { Snowflake, Wind, Flame, Sun, Check } from 'lucide-react'
import { AnimateIn } from '@/components/animate-in'

const services = [
  {
    icon: Snowflake,
    title: 'Green Cold Storage',
    items: [
      'Solar Powered Cold Storage',
      'Multi Commodity Cold Rooms',
      'Ripening Chambers',
      'Blast Freezers',
    ],
    benefits: [
      'Reduced operating costs',
      'Reduced carbon emissions',
      'Improved product shelf life',
    ],
  },
  {
    icon: Wind,
    title: 'HVAC Solutions',
    items: [
      'Industrial HVAC',
      'Commercial Air Conditioning',
      'Ventilation Systems',
      'Ducting Design & Installation',
    ],
    benefits: [
      'Energy efficiency',
      'Reliable performance',
      'Reduced maintenance costs',
    ],
  },
  {
    icon: Flame,
    title: 'Thermal Energy Storage',
    items: [
      'Heat Pumps',
      'Industrial Chillers',
      'Hot Water Systems',
      'Thermal Storage Systems',
    ],
    benefits: ['Continuous cooling', 'Peak load reduction', 'Energy savings'],
  },
  {
    icon: Sun,
    title: 'Solar EPC',
    items: [
      'Rooftop Solar Plants',
      'Ground Mounted Solar Projects',
      'Hybrid Solar Systems',
      'Solar Monitoring Solutions',
    ],
    benefits: [
      'Lower electricity bills',
      'Sustainable operations',
      'Fast return on investment',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">End-to-End Sustainable Engineering Solutions</h2>
          <p className="section-subtitle">
            From design to commissioning, we engineer integrated cooling and
            renewable energy systems tailored to your operations.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, items, benefits }, i) => (
            <AnimateIn
              key={title}
              animation="fade-up"
              delay={(i % 4) as 0 | 1 | 2 | 3}
            >
              <div className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-[#22aa7d] shadow-sm">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {title}
                  </h3>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Benefits
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {benefits.map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-[#E9FBF5] px-3 py-1 text-xs font-medium text-[#0D7A57] border border-primary/15"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
