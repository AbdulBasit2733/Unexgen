"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";

import logo from "@/assets/logo/unexgen.png";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full px-5 border-b py-3">
      <nav className="flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Unexgen Logo"
            className=" cursor-pointer"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-2xl">nexgen</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 font-semibold">
          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServiceMenuOpen(true)}
            onMouseLeave={() => setServiceMenuOpen(false)}
          >
            <Link
              href="/services"
              className="hover:bg-[#2a5c2e] hover:text-white px-4 py-1 rounded-full transition-all duration-500"
            >
              Services
            </Link>

            {serviceMenuOpen && (
              <ul className="bg-white text-sm shadow-lg w-48 py-3 px-1 flex flex-col absolute top-8 z-20 rounded-md">
                {[
                  { href: "/sustainable-energy", label: "Sustainable Solutions" },
                  { href: "/waste-management", label: "Waste Management" },
                  { href: "/heat-pump", label: "Heat Pump" },
                  { href: "/green-hydrogen", label: "Green Hydrogen" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setServiceMenuOpen(false)}
                    className="hover:bg-[#2a5c2e] hover:text-white transition-all duration-500 px-2 py-2 rounded-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/about-us"
              className="hover:bg-[#2a5c2e] hover:text-white px-4 py-1 rounded-full transition-all duration-500"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Contact Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:block bg-[#2a5c2e] hover:bg-white hover:text-[#2a5c2e] hover:border hover:border-[#2a5c2e] px-5 py-2 rounded-md text-white font-bold transition-all duration-300"
        >
          Contact Us
        </Link>

        {/* Mobile Menu */}
        <div
          className={`absolute bg-white z-50 py-10 top-[5rem] right-[-20px] min-h-screen rounded-sm flex flex-col items-center justify-start transform transition-transform duration-500 ease-in-out md:hidden ${
            toggleMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="font-semibold text-lg flex flex-col px-10 space-y-6">
            <Link
              href="/about-us"
              onClick={() => setToggleMenu(false)}
              className="hover:bg-[#2a5c2e] hover:text-white px-2 py-1 rounded-full transition-all duration-500"
            >
              About Us
            </Link>

            <Link
              href="/services"
              onClick={() => setToggleMenu(false)}
              className="hover:bg-[#2a5c2e] hover:text-white px-2 py-1 rounded-full transition-all duration-500"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setToggleMenu(false)}
              className="bg-[#2a5c2e] mt-6 px-3 py-2 rounded-md text-white font-bold transition-all duration-500"
            >
              Contact Us
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setToggleMenu((prev) => !prev)}
          className="md:hidden text-4xl cursor-pointer z-50 transition-all duration-500"
        >
          {toggleMenu ? <MdClose /> : <MdMenu />}
        </div>
      </nav>
    </header>
  );
}
