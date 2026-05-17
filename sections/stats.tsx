"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="px-4 sm:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl gap-8 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-3"
      >

        <div className="text-center">
          <h2 className="text-5xl font-bold text-violet-400">
            10K+
          </h2>

          <p className="mt-3 text-gray-400">
            Active Students
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-cyan-400">
            250+
          </h2>

          <p className="mt-3 text-gray-400">
            Courses Available
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-pink-400">
            95%
          </h2>

          <p className="mt-3 text-gray-400">
            Success Rate
          </p>
        </div>

      </motion.div>
    </section>
  );
}