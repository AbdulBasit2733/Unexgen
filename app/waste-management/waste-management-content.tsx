"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import wasteManagement from "@/assets/images/wasteManagement.jpg";
import wasteManagement2 from "@/assets/images/wasteManagement2.jpg";
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

export default function WasteManagementContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative max-w-full h-full">
      {/* HERO */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative w-full py-10">
          <Image
            src={wasteManagement}
            alt="Waste Management"
            className="object-fill object-center brightness-50"
            priority
          />

          <motion.h1
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-[1.3em] md:w-3/4 md:top-[30%] left-6 text-4xl md:text-5xl lg:top-[5rem] lg:left-5 font-bold text-white lg:text-6xl"
          >
            Pioneering Sustainable Waste Management Solutions.
          </motion.h1>
        </div>

        {/* INTRO */}
        <div className="lg:w-[80%] bg-[#2F7642] lg:py-60 py-20 px-5 text-white text-lg font-semibold">
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            At Atmos, we provide innovative waste management and recycling
            solutions that minimize waste, improve recycling rates, and support
            a cleaner, circular economy.
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
          The Importance of Waste Management and Recycling
        </motion.h1>
      </div>

      {/* CONTENT */}
      <div className="w-full mt-10 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <Image
              src={wasteManagement2}
              alt="Recycling Process"
              className="rounded-sm"
            />
          </motion.div>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg px-3"
          >
            Effective waste management reduces pollution, conserves resources,
            lowers emissions, and promotes sustainability across industries and
            communities.
          </motion.p>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-20 px-8 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <h1 className="text-3xl font-bold mb-5">Capabilities</h1>
              <ul className="list-disc space-y-2 font-semibold">
                <li>
                  <strong>Comprehensive Waste Audits:</strong>{" "}
                  <span className="font-normal">
                    Identify waste reduction and recycling opportunities.
                  </span>
                </li>
                <li>
                  <strong>Recycling Programs:</strong>{" "}
                  <span className="font-normal">
                    Efficient material collection and recovery.
                  </span>
                </li>
                <li>
                  <strong>Organic Waste Solutions:</strong>{" "}
                  <span className="font-normal">
                    Composting systems for organic waste.
                  </span>
                </li>
                <li>
                  <strong>Hazardous Waste Management:</strong>{" "}
                  <span className="font-normal">
                    Safe handling and regulatory compliance.
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
                src={abilities}
                alt="Waste Management Capabilities"
                className="rounded-sm"
              />
            </motion.div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20 px-8 lg:px-0">
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
                <strong>Reduced Environmental Impact:</strong>{" "}
                <span className="font-normal">
                  Lower ecological footprint through recycling.
                </span>
              </li>
              <li>
                <strong>Cost Efficiency:</strong>{" "}
                <span className="font-normal">
                  Reduced disposal and material costs.
                </span>
              </li>
              <li>
                <strong>Regulatory Compliance:</strong>{" "}
                <span className="font-normal">
                  Meet environmental regulations.
                </span>
              </li>
              <li>
                <strong>Energy Recovery:</strong>{" "}
                <span className="font-normal">
                  Convert waste into renewable energy.
                </span>
              </li>
              <li>
                <strong>Positive Brand Image:</strong>{" "}
                <span className="font-normal">
                  Strengthen sustainability leadership.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
