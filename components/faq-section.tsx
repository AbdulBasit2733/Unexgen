import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimateIn } from '@/components/animate-in'

const faqs = [
  {
    q: 'What is Green Cold Storage?',
    a: 'Green Cold Storage uses renewable energy such as solar power combined with thermal energy storage and energy-efficient refrigeration to keep produce cold while drastically reducing grid electricity use and carbon emissions.',
  },
  {
    q: 'How much energy can be saved?',
    a: 'Our integrated solar and smart cooling systems typically reduce grid consumption by 20–30%, with significant diesel savings of 3,000–4,000 liters per year for facilities that previously relied on backup generators.',
  },
  {
    q: 'What is Thermal Energy Storage?',
    a: 'Thermal Energy Storage (TES) stores cooling energy during off-peak or high solar generation periods and releases it when needed, enabling continuous 24/7 cooling, peak load reduction and lower operating costs.',
  },
  {
    q: 'Do you provide Solar EPC services?',
    a: 'Yes. We offer complete Solar EPC including rooftop solar plants, ground-mounted projects, hybrid solar systems and solar monitoring solutions, fully integrated with your cooling infrastructure.',
  },
  {
    q: 'Do you handle complete project execution?',
    a: 'Absolutely. We manage everything from design and engineering to installation, commissioning and ongoing support, so you have a single accountable partner throughout.',
  },
  {
    q: 'Is government subsidy support available?',
    a: 'Yes. Our team provides government subsidy assistance, helping you identify and apply for applicable schemes for cold storage and renewable energy projects.',
  },
  {
    q: 'Which industries do you serve?',
    a: 'We serve agriculture and horticulture, food processing, industrial sectors such as manufacturing and pharmaceuticals, and commercial sectors including hotels, hospitals and institutions.',
  },
  {
    q: 'Do you offer AMC and maintenance?',
    a: 'Yes. We provide long-term support and Annual Maintenance Contracts (AMC) to ensure your systems run reliably and efficiently for their full lifespan.',
  },
]

export function FaqSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <section className="bg-secondary py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <AnimateIn animation="fade-up" className="text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={200}>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:text-primary hover:no-underline transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateIn>
      </div>
    </section>
  )
}
