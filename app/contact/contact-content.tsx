"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import contactImage from "@/assets/images/contact.jpg";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactContent() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const [service, setService] = useState<string>("Sustainable Energy");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      service,
      message: messageRef.current?.value,
    };

    console.log(payload);

    // 🔜 Later:
    // - API Route (/api/contact)
    // - Email service
    // - DB save
  };

  return (
    <section className="w-full min-h-full">
      <div className="lg:px-20 lg:py-10 py-5 px-3">
        <h1 className="text-4xl font-extrabold uppercase text-[#2F7642]">
          Contact Us
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Connect with Atmos – Powering Sustainable Growth for a Greener
          Tomorrow.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row justify-evenly items-center lg:gap-20 gap-5 rounded-lg border-2 border-[#2F7642] py-20">
          {/* FORM */}
          <form onSubmit={handleFormSubmit}>
            <h1 className="mb-10 text-2xl font-bold uppercase">
              Reach Out To Us
            </h1>

            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg">Name</label>
              <input
                ref={nameRef}
                type="text"
                placeholder="Enter Your Name"
                required
                className="font-semibold px-5 py-3 focus:outline-none rounded-md border lg:w-[25rem]"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg">Email</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter Your Email"
                required
                className="font-semibold px-5 py-3 focus:outline-none rounded-md border lg:w-[25rem]"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg">Service Name</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="px-5 py-3 font-semibold rounded-md outline-none border text-gray-500"
              >
                <option>Sustainable Energy</option>
                <option value="Waste Management">Waste Management</option>
                <option value="Heat Pump">Heat Pump</option>
                <option value="Green Hydrogen Energy">
                  Green Hydrogen Energy
                </option>
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg">Message</label>
              <textarea
                ref={messageRef}
                placeholder="Enter Your Message"
                required
                className="font-semibold px-5 py-3 focus:outline-none rounded-md border lg:w-[25rem]"
              />
            </div>

            <button className="px-6 py-2 rounded-md bg-[#2F7642] text-white hover:bg-white hover:outline hover:text-black font-semibold transition-all">
              Submit
            </button>
          </form>

          {/* INFO */}
          <div className="lg:w-1/2 px-3 lg:px-0 mt-5 lg:mt-0">
            <h3 className="font-normal text-lg text-gray-500">
              Reach out to Atmos and discover how our innovative sustainable
              energy solutions can transform your business and reduce
              environmental impact.
            </h3>

            <div className="mt-5">
              <Image
                src={contactImage}
                alt="Contact Atmos"
                className="lg:w-56"
                priority={false}
              />

              <h1 className="text-3xl font-bold mt-5">Office Address</h1>

              <div className="mt-4 space-y-5 text-sm">
                <div className="flex items-center gap-3">
                  <FaLocationDot className="text-2xl text-[#2F7642]" />
                  <div className="lg:w-1/3">
                    <p className="capitalize">
                      Bari Colony, Jaswantpura, Aurangabad, Maharashtra, India
                    </p>
                  </div>
                </div>

                <p className="flex gap-3 items-center">
                  <FaPhone className="text-2xl text-[#2F7642]" />
                  +91 7972745051
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
