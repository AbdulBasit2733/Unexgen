import Image from 'next/image'
import { AnimateIn } from '@/components/animate-in'

const clients = [
  { name: 'ACG', logo: '/images/clients/acg.png' },
  { name: 'Nath Foils Pvt. Ltd.', logo: '/images/clients/nath-foils.jpg' },
  { name: 'ICEEM College', logo: '/images/clients/iceem.png' },
  { name: 'Utkarsha Auto Parts Pvt. Ltd.', logo: '/images/clients/utkarsha.jpg' },
  { name: 'Sachine Hospital', logo: null },
]

export function ClientsSection() {
  return (
    <section className="border-y border-border bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Our Clients</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            Trusted by Leading Industries &amp; Institutions
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are proud to partner with organizations across manufacturing,
            pharmaceuticals, education and healthcare.
          </p>
        </AnimateIn>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, idx) => (
            <AnimateIn
              key={client.name}
              animation="scale-up"
              delay={idx * 100}
              asChild
            >
              <li className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md">
                <div className="flex h-20 w-full items-center justify-center">
                  {client.logo ? (
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={160}
                      height={80}
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E9FBF5] font-heading text-xl font-bold text-primary">
                      SH
                    </span>
                  )}
                </div>
                <span className="text-center text-xs font-medium text-muted-foreground">
                  {client.name}
                </span>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
