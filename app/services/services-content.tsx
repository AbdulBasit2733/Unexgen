"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heatPump from "@/assets/icons/heatpump.png";
import sustainable from "@/assets/icons/sustainable.png";
import waste from "@/assets/icons/waste.png";
import green from "@/assets/icons/green.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      title: "Sustainable energy solutions",
      description:
        "Atmos offers solar and wind energy solutions to help reduce dependence on fossil fuels and promote a sustainable future.",
      icon: sustainable,
      href: "/sustainable-energy",
    },
    {
      title: "Waste management and recycling",
      description:
        "Efficient waste management services that reduce landfill waste and maximize resource recovery.",
      icon: waste,
      href: "/waste-management",
    },
    {
      title: "Heat pump",
      description:
        "Energy-efficient heat pump solutions for sustainable heating and cooling.",
      icon: heatPump,
      href: "/heat-pump",
    },
    {
      title: "Green hydrogen applications",
      description:
        "Innovative green hydrogen solutions enabling a zero-carbon future.",
      icon: green,
      href: "/green-hydrogen",
    },
  ];

  return (
    <section>
      {/* Header */}
      <div className="bg-[#2F7642] py-20">
        <h1 className="text-4xl text-white font-extrabold text-center">
          Services
        </h1>
      </div>

      {/* Cards */}
      <div className="lg:px-12 px-3 lg:py-5 py-8">
        <div className="flex flex-col flex-wrap items-center lg:flex-row gap-14 justify-center">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="shadow-md rounded-md py-2 lg:max-w-md md:max-w-sm hover:bg-[#2F7642] hover:text-white cursor-pointer transition-all duration-700 border border-[#2F7642] group block"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-20 mx-auto"
                />

                <div className="px-5 py-3 space-y-3">
                  <h1 className="text-center text-xl capitalize font-semibold">
                    {service.title}
                  </h1>

                  <p>{service.description}</p>

                  <div className="pt-3">
                    <span className="border bg-[#2F7642] text-white font-semibold px-5 py-2 rounded-md transition-all duration-700 group-hover:bg-white group-hover:text-black group-hover:border-white inline-block">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
