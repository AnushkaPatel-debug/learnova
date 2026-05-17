"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

  return (
    <nav
  className={`fixed top-0 z-50 w-full transition-all duration-300 ${
    scrolled
      ? "border-b border-white/10 bg-black/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-xl"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        <h1 className="text-2xl font-bold">
          Learn<span className="text-violet-500">ova</span>
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>

          <a href="#features" className="text-gray-300 hover:text-white">
            Features
          </a>

          <a href="#testimonials" className="text-gray-300 hover:text-white">
            Testimonials
          </a>

          <button className="rounded-full bg-violet-600 px-5 py-2 font-medium transition hover:scale-105 hover:bg-violet-500">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 border-t border-white/10 bg-[#050816] px-6 py-6 md:hidden"
        >
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>

          <button className="rounded-full bg-violet-600 px-5 py-3 font-medium">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}