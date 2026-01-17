"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Images
import industry1 from "@/assets/images/industry1.jpg";
import wasteManagement from "@/assets/images/wasteManagement3.jpg";
import heatPump from "@/assets/images/heatPump3.jpg";
import greenHydrogen from "@/assets/images/green-hydrogen3.png";

type Slide = {
  image: any;
  heading: React.ReactNode;
  link: string;
  linkText: string;
};

const slides: Slide[] = [
  {
    image: industry1,
    heading: (
      <h1 className="text-5xl xl:text-6xl tracking-widest leading-snug font-extrabold mb-2 lg:mb-5 text-white uppercase">
        Innovative{" "}
        <span className="text-[#2F7642]">sustainable energy</span> solutions for a
        brighter future.
      </h1>
    ),
    link: "/sustainable-energy",
    linkText: "Our Services",
  },
  {
    image: wasteManagement,
    heading: (
      <h1 className="text-5xl xl:text-6xl tracking-widest leading-snug font-extrabold mb-2 lg:mb-5 text-white uppercase">
        Expert <span className="text-[#2F7642]">waste management</span> services
        for a cleaner, greener community.
      </h1>
    ),
    link: "/waste-management",
    linkText: "Our Services",
  },
  {
    image: heatPump,
    heading: (
      <h1 className="text-5xl xl:text-6xl tracking-widest leading-snug font-extrabold mb-2 lg:mb-5 text-white uppercase">
        Efficient <span className="text-[#2F7642]">heat pump</span> solutions for
        sustainable energy and comfort.
      </h1>
    ),
    link: "/heat-pump",
    linkText: "Our Services",
  },
  {
    image: greenHydrogen,
    heading: (
      <h1 className="text-5xl xl:text-6xl tracking-widest leading-snug font-extrabold mb-2 lg:mb-5 text-white uppercase">
        Clean, renewable{" "}
        <span className="text-[#2F7642]">green hydrogen</span> for sustainable
        energy.
      </h1>
    ),
    link: "/green-hydrogen",
    linkText: "Our Services",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image.src})`,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-start w-full h-full px-4 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              className="w-full sm:w-3/4 xl:w-3/5"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {slides[currentSlide].heading}

              <Link
                href={slides[currentSlide].link}
                className="inline-block mt-4 bg-white text-[#2F7642] hover:bg-[#2F7642] hover:text-white transition-all duration-300 font-semibold rounded-md px-4 py-2 lg:px-5 lg:py-2"
              >
                {slides[currentSlide].linkText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
