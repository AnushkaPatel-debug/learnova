"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-5xl font-extrabold"
      >
        Learn
        <span className="text-violet-500">
          ova
        </span>
      </motion.h1>

    </div>
  );
}