"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Sun,
  Snowflake,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const slides = [
  {
    video: "/videos/14743044_1920_1080_30fps.mp4",
    eyebrow: "Green Cooling & Renewable Energy",
    eyebrowIcon: Sun,
    heading: "Sustainability-Driven Smart Cooling & Renewable Energy Solutions",
    subheading:
      "Advanced Green Cold Storage, HVAC Engineering, Thermal Energy Storage and Solar EPC Solutions designed to improve profitability while reducing environmental impact.",
    stats: [
      { icon: Sun, label: "Solar Powered" },
      { icon: Snowflake, label: "24/7 Cooling" },
      { icon: Gauge, label: "20-30% Grid Cut" },
    ],
  },
  {
    video: "/videos/Factory_Industrial_1920x1080.mp4",
    eyebrow: "HVAC Engineering & Industrial Cooling",
    eyebrowIcon: Snowflake,
    heading: "Precision-Engineered HVAC & Industrial Refrigeration Systems",
    subheading:
      "From industrial HVAC to large-scale refrigeration, our engineering teams design and commission reliable, energy-efficient systems tailored to your operations.",
    stats: [
      { icon: Snowflake, label: "Industrial HVAC" },
      { icon: Gauge, label: "Energy Efficient" },
      { icon: Sun, label: "Low Carbon" },
    ],
  },
  {
    video: "/videos/solar.mp4",
    eyebrow: "Solar EPC & Thermal Energy Storage",
    eyebrowIcon: Gauge,
    heading: "Integrated Solar EPC & Thermal Storage Cooling Systems",
    subheading:
      "Our smart cooling ecosystem combines solar power generation, thermal energy storage and intelligent automation to deliver 24/7 cooling with dramatically lower operating costs.",
    stats: [
      { icon: Sun, label: "Rooftop Solar EPC" },
      { icon: Snowflake, label: "Thermal Storage" },
      { icon: Gauge, label: "Remote Monitoring" },
    ],
  },
];

const SLIDE_DURATION = 1000; // ms

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setCurrent(index);
    videoRefs.current[index]?.play().catch(() => {});
    setTimeout(() => setAnimating(false), 900);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Play current video on mount / slide change
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Video Layers ─────────────────────────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-[800ms] ease-in-out",
            i === current ? "opacity-100 z-0" : "opacity-0 z-0",
          )}
          aria-hidden={i !== current}
        >
          <video
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={slide.video}
            autoPlay={true}
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* ── Overlays ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* ── Slide Content ─────────────────────────────────────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-28 pb-24 md:px-8">
        {slides.map((slide, i) => {
          const EyebrowIcon = slide.eyebrowIcon;
          return (
            <div
              key={i}
              className={cn(
                "absolute inset-0 flex items-center px-4 pt-28 pb-24 md:px-8 transition-all duration-700 ease-in-out",
                i === current
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none",
              )}
              aria-hidden={i !== current}
            >
              <div className="max-w-4xl">
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <EyebrowIcon className="h-3.5 w-3.5" />
                  {slide.eyebrow}
                </span>

                {/* Heading */}
                <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-balance text-white sm:text-5xl lg:text-6xl">
                  {slide.heading}
                </h1>

                {/* Subheading */}
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                  {slide.subheading}
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    // asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-[#22aa7d] shadow-lg shadow-primary/30 focus-visible:ring-primary/40"
                  >
                    <Link
                      href="#contact"
                      className="flex w-full h-full items-center gap-2"
                    >
                      Get Free Consultation
                      <ArrowRight className="h-20 w-20" />
                    </Link>
                  </Button>
                  <Button
                    // asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/50"
                  >
                    <Link href="#contact">Request Project Quote</Link>
                  </Button>
                </div>

                {/* Stats bar */}
                <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-8">
                  {slide.stats.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-start gap-2"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium text-white/90">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Spacer so the section has the right height */}
        <div className="invisible max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs">
            &nbsp;
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl">
            &nbsp;
          </h1>
          <p className="mt-6 text-lg">&nbsp;</p>
          <div className="mt-8 flex gap-3">
            <span className="h-9 px-4">&nbsp;</span>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-transparent pt-8">
            <div className="h-12">&nbsp;</div>
          </div>
        </div>
      </div>

      {/* ── Slide Controls ────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex cursor-pointer h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-primary/80 hover:border-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div
          className="flex items-center gap-2.5"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex cursor-pointer h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-primary/80 hover:border-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
