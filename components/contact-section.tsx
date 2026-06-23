'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AnimateIn } from '@/components/animate-in'
import Link from 'next/link'

const WHATSAPP_NUMBER = '918275582562'
const CONTACT_EMAIL = 'office.unexgentechnology@gmail.com'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function sendInquiry(form: HTMLFormElement, intent: string) {
    const data = new FormData(form)
    const name = (data.get('name') as string)?.trim() || ''
    const company = (data.get('company') as string)?.trim() || ''
    const mobile = (data.get('mobile') as string)?.trim() || ''
    const email = (data.get('email') as string)?.trim() || ''
    const city = (data.get('city') as string)?.trim() || ''
    const requirement = (data.get('requirement') as string)?.trim() || ''

    const lines = [
      `*New ${intent} - Unexgen Technology*`,
      '',
      `*Name:* ${name}`,
      company ? `*Company:* ${company}` : '',
      `*Mobile:* ${mobile}`,
      `*Email:* ${email}`,
      city ? `*City:* ${city}` : '',
      requirement ? `*Requirement:* ${requirement}` : '',
    ].filter(Boolean)

    const message = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null
    const intent = submitter?.value === 'quote' ? 'Quote Request' : 'Consultation Request'
    sendInquiry(e.currentTarget, intent)
  }

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateIn animation="fade-up" delay={0}>
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
              Let&apos;s Engineer Your Sustainable Cooling Solution
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Tell us about your project and our engineering team will get back to
              you with a tailored consultation and quote.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+91 8275582562"
                className="flex items-center gap-4 text-foreground"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">+91 8275582562 </span>
              </a>
              <a
                href="mailto:office.unexgentechnology@gmail.com"
                className="flex items-center gap-4 text-foreground"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium break-all">
                  office.unexgentechnology@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-4 text-foreground">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium leading-relaxed">
                  Chikalthana MIDC, Naregaon, Chhatrapati Sambhajinagar
                  (Aurangabad), Maharashtra 431001
                </span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary text-white hover:bg-[#22aa7d] shadow-sm"
            >
              <Link
                href="https://wa.me/918275582562"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-1'
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                WhatsApp Inquiry
              </Link>
            </Button>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={200} className="rounded-2xl border border-border bg-secondary p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-accent" />
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                  Opening WhatsApp...
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We&apos;ve opened WhatsApp with your details. Just press send and
                  our team will reply shortly.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  WhatsApp didn&apos;t open? Message us directly at{' '}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline hover:text-[#22aa7d]"
                  >
                    +91 82755 82562
                  </a>{' '}
                  or email{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-primary underline hover:text-[#22aa7d]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-primary text-primary hover:bg-[#E9FBF5]"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" placeholder="Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      placeholder="+91"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" placeholder="City" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="requirement">Project Requirement</Label>
                    <Textarea
                      id="requirement"
                      name="requirement"
                      rows={4}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    name="intent"
                    value="consultation"
                    className="flex-1 bg-primary text-white hover:bg-[#22aa7d]"
                  >
                    <MessageCircle className="mr-1 h-4 w-4" />
                    Get Consultation
                  </Button>
                  <Button
                    type="submit"
                    name="intent"
                    value="quote"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-[#E9FBF5]"
                  >
                    Request Quote
                  </Button>
                </div>
              </form>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
