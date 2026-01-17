"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import sustainable from "@/assets/images/sustainable.jpg";
import capabilities from "@/assets/images/capabilities.jpg";
import benefits from "@/assets/images/benefits.png";

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

export default function SustainableEnergyContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="max-w-full h-full relative">
      {/* HERO */}
      <div className="relative w-full max-h-[90vh] xl:h-[70vh] h-80">
        <Image
          src={sustainable}
          alt="Sustainable Energy"
          fill
          priority
          className="object-cover brightness-[35%]"
        />
      </div>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-10 left-3 md:top-10 md:w-4/5 text-3xl md:text-5xl lg:top-[4rem] xl:w-3/5 lg:left-10 font-bold text-white lg:text-6xl"
      >
        Committed to a greener planet,{" "}
        <span className="text-[#2F7642] font-extrabold">Atmos</span> excels in
        sustainable energy innovations.
      </motion.div>

      {/* INTRO TITLE */}
      <div className="mt-10">
        <div className="py-20 px-2 bg-[#2F7642]">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-white font-bold text-center"
          >
            Empowering a Greener Tomorrow with Advanced Renewable Energy
            Solutions
          </motion.h3>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-10 lg:px-20 px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-20 items-center">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl font-bold mb-5">Our Capabilities</h1>
              <ul className="list-disc space-y-2 font-semibold">
                <li>
                  <strong>Custom Renewable Energy Systems:</strong>{" "}
                  <span className="font-normal">
                    Tailored solar, wind, and clean energy solutions.
                  </span>
                </li>
                <li>
                  <strong>Energy Audits and Consulting:</strong>{" "}
                  <span className="font-normal">
                    Expert analysis to optimize efficiency and reduce costs.
                  </span>
                </li>
                <li>
                  <strong>Heat Pump & Green Hydrogen Integration:</strong>{" "}
                  <span className="font-normal">
                    Advanced technologies for clean energy management.
                  </span>
                </li>
                <li>
                  <strong>Sustainable Infrastructure Development:</strong>{" "}
                  <span className="font-normal">
                    Eco-friendly infrastructure with regulatory compliance.
                  </span>
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
                src={capabilities}
                alt="Capabilities of Atmos"
                className="rounded-sm"
              />
            </motion.div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20 lg:px-20 px-10">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <Image
                src={benefits}
                alt="Benefits of Sustainable Energy"
                className="rounded-sm"
              />
            </motion.div>

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-3xl font-bold mb-5">Benefits</h1>
              <ul className="list-disc space-y-2 font-semibold">
                <li>
                  <strong>Cost Reduction:</strong>{" "}
                  <span className="font-normal">
                    Lower energy bills through renewables.
                  </span>
                </li>
                <li>
                  <strong>Environmental Impact:</strong>{" "}
                  <span className="font-normal">
                    Reduced carbon emissions.
                  </span>
                </li>
                <li>
                  <strong>Energy Independence:</strong>{" "}
                  <span className="font-normal">
                    Less reliance on traditional grids.
                  </span>
                </li>
                <li>
                  <strong>Long-term Savings:</strong>{" "}
                  <span className="font-normal">
                    Sustainable investments that pay off.
                  </span>
                </li>
                <li>
                  <strong>Regulatory Compliance:</strong>{" "}
                  <span className="font-normal">
                    Meet global environmental standards.
                  </span>
                </li>
                <li>
                  <strong>Job Creation:</strong>{" "}
                  <span className="font-normal">
                    Growth through green projects.
                  </span>
                </li>
                <li>
                  <strong>Enhanced Energy Security:</strong>{" "}
                  <span className="font-normal">
                    Diversified, reliable energy sources.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
