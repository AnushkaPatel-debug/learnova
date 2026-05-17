"use client";

import { motion } from "framer-motion";
import { Brain, Briefcase, Users } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-6xl px-6 py-24 text-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold">
                    Why Choose <span className="text-violet-500">Learnova</span>
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
                    Learn cutting-edge technologies with interactive projects,
                    expert mentors, and real-world experience designed for the
                    future of tech.
                </p>

                <div className="mt-16 grid gap-8 md:grid-cols-3">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                        <Brain
                            className="mx-auto mb-4 text-violet-400"
                            size={40}
                        />
                        <h3 className="text-2xl font-semibold">AI Powered</h3>

                        <p className="mt-4 text-gray-400">
                            Personalized learning experiences powered by AI systems.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                        <Briefcase
                            className="mx-auto mb-4 text-cyan-400"
                            size={40}
                        />
                        <h3 className="text-2xl font-semibold">Industry Ready</h3>

                        <p className="mt-4 text-gray-400">
                            Build projects and gain skills companies actually need.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                        <Users
                            className="mx-auto mb-4 text-pink-400"
                            size={40}
                        />
                        <h3 className="text-2xl font-semibold">Mentor Support</h3>

                        <p className="mt-4 text-gray-400">
                            Get guidance from experienced developers and mentors.
                        </p>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}