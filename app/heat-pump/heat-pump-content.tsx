"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import heatPumpImage from "@/assets/images/heatPump3.jpg";
import heatPump4 from "@/assets/images/heatPump4.jpg";
import abilities from "@/assets/images/abilities.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export default function HeatPumpContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative max-w-full h-full">
      {/* HERO */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative w-full py-10">
          <Image
            src={heatPumpImage}
            alt="Heat Pump Technology"
            className="object-fill object-center filter brightness-50"
            priority
          />

          <motion.h1
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/4 left-5 text-4xl md:text-5xl lg:top-[7rem] lg:left-10 font-bold text-white lg:text-6xl"
          >
            Harnessing Clean Energy with Advanced Heat Pump Technology
          </motion.h1>
        </div>

        {/* INTRO */}
        <div className="lg:w-[80%] bg-[#2F7642] lg:py-64 py-20 px-5 text-white text-lg font-semibold">
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            At Atmos, we provide cutting-edge heat pump solutions that utilize
            renewable energy to heat and cool spaces efficiently. Our systems
            significantly reduce energy consumption and greenhouse gas emissions
            compared to traditional heating methods.
          </motion.p>
        </div>
      </div>

      {/* SECTION TITLE */}
      <div className="py-20 px-3 bg-[#2F7642] mt-10 lg:mt-0">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white"
        >
          The Power of Heat Pump Technology
        </motion.h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full mt-10 lg:px-20 px-3">
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <Image src={heatPump4} alt="Heat Pump System" />
          </motion.div>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg"
          >
            Heat pumps are an energy-efficient way to provide heating and cooling
            by transferring heat between the indoors and outdoors. They use
            significantly less electricity than conventional systems.
          </motion.p>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl font-bold mb-5">Capabilities</h1>
              <ul className="list-disc space-y-2 font-semibold">
                <li>
                  <strong>Heating & Cooling Efficiency:</strong> Up to 50% less
                  energy usage than traditional systems.
                </li>
                <li>
                  <strong>Renewable Energy Integration:</strong> Compatible with
                  solar and wind energy.
                </li>
                <li>
                  <strong>Smart Control Systems:</strong> Intelligent temperature
                  and energy optimization.
                </li>
                <li>
                  <strong>Scalable Solutions:</strong> From homes to large
                  commercial spaces.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <Image
                src={abilities}
                alt="Heat Pump Capabilities"
                className="rounded-sm"
              />
            </motion.div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h1 className="text-3xl font-bold mb-5">Benefits</h1>
            <ul className="list-disc space-y-2 font-semibold">
              <li>
                <strong>Energy Savings:</strong> Lower utility bills.
              </li>
              <li>
                <strong>Reduced Carbon Footprint:</strong> Supports climate
                goals.
              </li>
              <li>
                <strong>Versatile Applications:</strong> Residential to
                industrial usage.
              </li>
              <li>
                <strong>Enhanced Comfort:</strong> Stable temperatures
                year-round.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
