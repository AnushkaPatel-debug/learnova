"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      {particles.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute h-2 w-2 rounded-full bg-violet-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
          }}
        />
      ))}

    </div>
  );
}