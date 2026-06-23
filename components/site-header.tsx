'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logo from '@/public/logo-white-bg.png'
import Link from 'next/link'
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Industries', href: '#industries' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand/95 backdrop-blur supports-[backdrop-filter]:bg-brand/80 shadow-lg'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3" aria-label="Unexgen Technology — Home">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary p-1.5 shadow-sm">
            <Image
              src={logo}
              alt="Unexgen Technology Logo"
              width={32}
              height={32}
              className="h-full w-full object-contain brightness-0 invert"
              priority
            />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-primary-foreground">
              Unexgen
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
              Technology
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-primary-foreground/80 transition-colors duration-200 hover:text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-primary text-white hover:bg-[#22aa7d] focus-visible:ring-primary/40 shadow-sm"
          >
            <a href="#contact">Get Free Consultation</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="rounded-md p-1.5 text-primary-foreground transition-colors hover:bg-primary-foreground/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="border-t border-primary-foreground/10 bg-brand lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-3 bg-primary text-white hover:bg-[#22aa7d]"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Get Free Consultation
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
