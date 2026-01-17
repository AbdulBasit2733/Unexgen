import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo/unexgen.png";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-10">
      <div className="border-t-[3px] border-[#2F7642]">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo */}
          <Image
            src={logo}
            alt="Atmos Logo"
            className="cursor-pointer ml-2 mt-10"
            priority={false}
            width={60}
            height={60}
          />

          {/* Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 gap-5 px-5 py-10">
            {/* About */}
            <div>
              <h1 className="font-bold text-2xl">About Company</h1>
              <div className="my-5 border-t-4 border-dashed w-20 border-[#2F7642]" />
              <p>
                At Atmos, we specialize in sustainable energy solutions, waste
                management, heat pump technology, and green hydrogen
                applications. Our expert team delivers innovative services,
                empowering businesses and communities to reduce their
                environmental impact and achieve sustainable growth.
              </p>
            </div>

            {/* Address */}
            <div>
              <h1 className="font-bold text-2xl">Address</h1>
              <div className="my-5 border-t-[4px] border-dashed w-20 border-[#2F7642]" />
              <ul className="font-semibold space-y-1">
                <li>+91 7972745051</li>
                <li>Camp, Aurangabad, Maharashtra</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h1 className="font-bold text-2xl">Links</h1>
              <div className="my-5 border-t-[4px] border-dashed w-20 border-[#2F7642]" />
              <ul className="font-semibold space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#2F7642] flex items-center gap-2"
                  >
                    <FaLinkedin size={25} color="#2F7642" /> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#2F7642] flex items-center gap-2"
                  >
                    <FaFacebook size={25} color="#2F7642" /> Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#2F7642] flex items-center gap-2"
                  >
                    <FaTwitter size={25} color="#2F7642" /> Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#2F7642] flex items-center gap-2"
                  >
                    <FaInstagram size={25} color="#2F7642" /> Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-[1.3px] border-[#2F7642] lg:px-10 lg:py-6 px-5 py-4 font-semibold flex flex-col lg:flex-row justify-between md:items-center gap-3">
        <h3>
          Copyright © 2025{" "}
          <span className="text-[#2F7642] font-bold">Unexgen</span>. All Rights
          Reserved.
        </h3>

        <ul className="md:flex gap-5">
          <li>
            <Link
              href="/"
              className="hover:text-[#2F7642] transition-all duration-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="hover:text-[#2F7642] transition-all duration-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-[#2F7642] transition-all duration-500"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
