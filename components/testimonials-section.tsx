import { Quote, Star } from 'lucide-react'
import { AnimateIn } from '@/components/animate-in'

const testimonials = [
  {
    quote:
      'Unexgen delivered an energy-efficient cooling solution that has run flawlessly. Their engineering team understood our pharmaceutical requirements perfectly.',
    name: 'ACG',
    role: 'Capsule Manufacturing',
  },
  {
    quote:
      'Reliable, well-engineered and on time. The system handled our peak production loads without interruption and reduced our operating costs.',
    name: 'Nath Foils Pvt. Ltd.',
    role: 'Industrial Manufacturing',
  },
  {
    quote:
      'From design to commissioning, their team has been outstanding. The HVAC and cooling installation across our campus has been seamless.',
    name: 'ICEEM College',
    role: 'Education Institution',
  },
  {
    quote:
      'A genuine long-term partner. Their thermal and refrigeration engineering, plus ongoing AMC support, has been exceptional for our plant.',
    name: 'Utkarsha Auto Parts Pvt. Ltd.',
    role: 'CNC Manufacturing',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            Trusted by Owners, Processors &amp; Cooperatives
          </h2>
        </AnimateIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <AnimateIn
              key={t.name}
              animation="scale-up"
              delay={idx * 100}
              className="flex flex-col rounded-2xl border border-border bg-secondary p-8"
            >
              <Quote className="h-8 w-8 text-primary" />
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
