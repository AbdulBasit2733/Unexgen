"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import aboutImage3 from "@/assets/images/about_img_3.jpg";
import vision from "@/assets/icons/vision.png";
import mission from "@/assets/icons/mission.png";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

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

export default function AboutContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section id="about" className="w-full">
      {/* Header */}
      <div className="bg-[#2F7642] lg:py-20 py-10">
        <h1 className="text-4xl text-white uppercase font-extrabold text-center">
          About Us
        </h1>
      </div>

      {/* Hero Section */}
      <div className="lg:px-12 lg:py-20 py-2 w-full">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-20">
          <div className="relative">
            <Image
              src={aboutImage3}
              alt="About Atmos"
              className="filter brightness-50 lg:rounded-md"
              priority
            />

            <motion.h1
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="xl:text-6xl text-2xl text-white font-bold absolute top-[2rem] left-2 md:top-1/3 md:left-10 md:text-5xl xl:top-[20%] xl:left-10 xl:w-4/5 lg:text-4xl lg:top-1/4 lg:w-5/6"
            >
              Empowering Sustainable Progress Through Innovative Energy and
              Eco-Friendly Solutions.
            </motion.h1>
          </div>

          {/* Office Address */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full px-3"
          >
            <h1 className="text-3xl font-bold mb-5">Office Address</h1>

            <div className="space-y-5">
              <div className="shadow-lg inline-flex items-center gap-5 px-4 py-5 rounded-md">
                <FaLocationDot className="text-3xl text-[#2F7642]" />
                <div className="w-[15rem] text-sm">
                  <p className="capitalize">
                    Bari Colony, Jaswantpura, Aurangabad
                  </p>
                  <p className="capitalize">Maharashtra, India</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-5 shadow-lg rounded-md px-4 py-5">
                <FaPhoneAlt className="text-3xl text-[#2F7642]" />
                <p className="font-semibold">+91 7972745051</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 lg:pt-28">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            {[{ img: vision, title: "Vision" }, { img: mission, title: "Mission" }].map(
              (item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="shadow-md rounded-md py-4 lg:max-w-md md:max-w-sm"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-20 mx-auto"
                  />
                  <div className="px-5 py-2 text-center">
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                    <p>
                      {item.title === "Vision"
                        ? "At Green Atmos Solutions, we promote sustainability by helping businesses and communities reduce their carbon footprint through innovative eco-friendly solutions."
                        : "Our mission is to empower businesses and communities to reduce their environmental impact through innovative solutions in renewable energy, waste management, and green hydrogen technology."}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
