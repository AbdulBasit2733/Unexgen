import Image from 'next/image'
import { AnimateIn } from '@/components/animate-in'

const industries = [
  {
    title: 'Agriculture & Horticulture',
    image: '/images/industry-agriculture.png',
    items: ['Fruits', 'Vegetables', 'Farmer Cooperatives', 'Export Houses'],
  },
  {
    title: 'Food Processing',
    image: '/images/industry-food.png',
    items: ['Dairy Industry', 'Frozen Foods', 'Beverage Industry', 'Packaging Houses'],
  },
  {
    title: 'Industrial Sector',
    image: '/images/industry-industrial.png',
    items: ['Manufacturing Plants', 'Pharmaceutical Facilities', 'Logistics Parks', 'Warehouses'],
  },
  {
    title: 'Commercial Sector',
    image: '/images/industry-commercial.png',
    items: ['Hotels', 'Hospitals', 'Shopping Complexes', 'Institutions'],
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            Trusted Across Sectors That Depend on Cooling
          </h2>
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <AnimateIn
              key={industry.title}
              animation="fade-up"
              delay={(i % 5) as 0 | 1 | 2 | 3 | 4}
            >
              <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={industry.image || '/placeholder.svg'}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/70 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-heading text-lg font-bold text-primary-foreground">
                    {industry.title}
                  </h3>
                </div>
                <ul className="space-y-2 p-5">
                  {industry.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
