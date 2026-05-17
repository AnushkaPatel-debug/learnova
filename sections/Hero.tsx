
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {

  const words = [
    "AI Skills",
    "Full Stack",
    "UI/UX Design",
    "Machine Learning",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {

    if (subIndex < words[index].length) {

      const timeout = setTimeout(() => {
        setText(words[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex(0);
      setText("");
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);

    return () => clearTimeout(timeout);

  }, [subIndex, index]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Stars */}
      <div className="stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Glow blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-10 top-10 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="shine-text text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl"
        >
          Learn Future Skills With Learnova
        </motion.h1>

        {/* Typing animation */}
        <div className="mt-6 text-2xl font-semibold text-violet-400 md:text-3xl">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg"
        >
          Master AI, Full Stack Development, and modern technologies with immersive learning experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            Start Learning
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
          >
            Explore Courses
          </motion.button>

        </motion.div>

        
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">

  <div className="animate-line h-full w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

</div>
    </section>
  );
}