"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Images
import aboutImage from "@/assets/images/about_img2.jpg";
import img4 from "@/assets/images/img4.jpg";
import wave6 from "@/assets/images/wave6.png";

import vision from "@/assets/icons/vision.png";
import mission from "@/assets/icons/mission.png";
import green from "@/assets/icons/green.png";
import heatPump from "@/assets/icons/heatpump.png";
import sustainable from "@/assets/icons/sustainable.png";
import waste from "@/assets/icons/waste.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLR = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export default function HomeContent() {
  // Scroll to top (client-only behavior)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ABOUT */}
      <section id="about" className="mt-10 w-full">
        <div className="bg-[#2F7642] py-20">
          <h1 className="text-4xl text-white font-extrabold text-center">
            About Us
          </h1>
        </div>

        <div className="lg:px-12 px-3 py-20 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            variants={fadeLR}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl text-[#2F7642] font-bold mb-3">
              Where Innovation Meets Growth
            </h1>
            <p className="text-lg">
              Green Atmos Solutions empowers businesses and communities to reduce
              their environmental impact through innovative solutions in
              renewable energy, waste management, and green hydrogen.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image src={aboutImage} alt="About" className="lg:w-2/4" />
          </motion.div>
        </div>

        {/* Vision / Mission */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          {[{ img: vision, title: "Vision" }, { img: mission, title: "Mission" }].map(
            (item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="shadow-md rounded-md py-4 max-w-md"
              >
                <Image src={item.img} alt={item.title} className="w-20 mx-auto" />
                <div className="px-5 py-2 text-center">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="mt-2">
                    {item.title === "Vision"
                      ? "We promote sustainability through innovative eco-friendly solutions."
                      : "Empowering businesses with renewable and green technologies."}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="bg-[#2F7642] py-20 mt-10">
          <h1 className="text-4xl text-white font-extrabold text-center">
            Services
          </h1>
        </div>

        <div className="lg:px-12 px-3 py-10">
          <motion.div
            variants={fadeLR}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl text-[#2F7642] font-bold mb-3">
              Innovative Green Solutions for a Sustainable Future
            </h1>
            <p className="text-xl">
              We provide solar, waste management, heat pumps, and green hydrogen
              solutions for a cleaner future.
            </p>
          </motion.div>

          <Image src={img4} alt="Services" className="lg:w-2/4 mt-6" />

          {/* Service Cards */}
          <div className="mt-10 flex flex-wrap justify-center gap-14">
            {[
              { icon: sustainable, path: "/sustainable-energy", title: "Sustainable Energy" },
              { icon: waste, path: "/waste-management", title: "Waste Management" },
              { icon: heatPump, path: "/heat-pump", title: "Heat Pump" },
              { icon: green, path: "/green-hydrogen", title: "Green Hydrogen" },
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="shadow-md rounded-md py-4 max-w-md border border-[#2F7642] hover:bg-[#2F7642] hover:text-white transition-all"
              >
                <Image src={service.icon} alt={service.title} className="w-20 mx-auto" />
                <div className="px-5 py-3 text-center space-y-3">
                  <h1 className="text-xl font-semibold">{service.title}</h1>
                  <Link
                    href={service.path}
                    className="inline-block bg-[#2F7642] text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Image src={wave6} alt="Wave" className="hidden md:block w-full" />
    </>
  );
}
