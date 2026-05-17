"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are the courses beginner friendly?",
    answer:
      "Yes, all courses are designed for beginners as well as advanced learners.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes, students receive certificates after successfully completing courses.",
  },
  {
    question: "Is mentorship included?",
    answer:
      "Absolutely. Students get access to mentors and project guidance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 text-gray-400"
                  >
                    {faq.answer}
                  </motion.p>
                )}

              </div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}