"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import hydrogenBg from "@/assets/images/hydrogen_bg_1.jpg";
import greenHydrogen2 from "@/assets/images/green-hydrogen2.jpg";
import abilities from "@/assets/images/abilities.jpg";

import hydrogen1 from "@/assets/icons/hydrogen1.png";
import hydrogen2 from "@/assets/icons/hydrogen2.png";
import hydrogen3 from "@/assets/icons/hydrogen3.png";

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

export default function GreenHydrogenContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative max-w-full h-full">
      {/* HERO */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative w-full py-10">
          <Image
            src={hydrogenBg}
            alt="Green Hydrogen Background"
            className="object-fill object-center filter brightness-50"
            priority
          />

          <motion.h1
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-[20%] left-3 text-4xl xl:top-[12rem] lg:top-[6rem] lg:left-10 md:w-4/5 md:text-5xl md:top-1/3 font-bold text-white lg:text-6xl"
          >
            Powering the Future with Clean Hydrogen Energy.
          </motion.h1>

          {/* Icons */}
          <div className="flex gap-10 items-center mt-10 justify-center">
            <Image src={hydrogen1} alt="" className="w-20 animate-pulse" />
            <Image src={hydrogen3} alt="" className="w-20 animate-pulse" />
            <Image src={hydrogen2} alt="" className="w-20 animate-pulse" />
          </div>
        </div>

        {/* INTRO TEXT */}
        <div className="lg:w-[80%] bg-[#2F7642] lg:py-72 py-20 px-5 text-white text-lg font-semibold">
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            At Atmos, we are at the forefront of green hydrogen technology,
            offering innovative solutions that drive the transition to a clean,
            sustainable energy future. Green hydrogen, produced from renewable
            energy sources like wind and solar, is a critical component in the
            global effort to reduce carbon emissions and achieve a zero-emission
            economy.
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
          The Power of Green Hydrogen
        </motion.h1>
      </div>

      {/* CONTENT */}
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
            <Image src={greenHydrogen2} alt="Green Hydrogen" />
          </motion.div>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg"
          >
            Green hydrogen is an eco-friendly energy carrier that plays a pivotal
            role in decarbonizing industries, transportation, and power
            generation. By using renewable energy to split water into hydrogen
            and oxygen, it offers a zero-emission alternative to fossil fuels.
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
                  <strong>Hydrogen Production Systems:</strong> Efficient
                  electrolyzer systems powered by renewable energy.
                </li>
                <li>
                  <strong>Energy Storage:</strong> Store excess renewable energy
                  as hydrogen.
                </li>
                <li>
                  <strong>Transportation Solutions:</strong> Clean hydrogen fuel
                  for heavy transport.
                </li>
                <li>
                  <strong>Industrial Decarbonization:</strong> Tailored hydrogen
                  solutions for manufacturing.
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
                alt="Capabilities"
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
                <strong>Reduced Environmental Impact:</strong> Zero-emission
                energy carrier.
              </li>
              <li>
                <strong>Cost Savings:</strong> Long-term energy efficiency.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> Meets global clean energy
                standards.
              </li>
              <li>
                <strong>Energy Recovery:</strong> Reliable renewable storage.
              </li>
              <li>
                <strong>Sustainable Brand Image:</strong> Leadership in green
                innovation.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
