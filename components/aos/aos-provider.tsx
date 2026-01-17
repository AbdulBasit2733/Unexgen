"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

interface AOSProviderProps {
  children: ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init({
      // Optional global settings
      duration: 800, // animation duration
      once: false, // whether animation should only happen once
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
