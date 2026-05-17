"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AuthModal({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    if (!open) return null;
    const [success, setSuccess] = useState(false);
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1120] p-8"
            >

                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold">
                        Login
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl"
                    >
                        ×
                    </button>
                </div>

                <div className="mt-8 flex flex-col gap-4">

                    <input
                        type="email"
                        placeholder="Email"
                        className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
                    />

                    <button
                        onClick={() => {
                            setSuccess(true);

                            setTimeout(() => {
                                setOpen(false);
                                setSuccess(false);
                            }, 2000);
                        }}
                        className="rounded-xl bg-violet-600 p-4 font-semibold transition hover:bg-violet-500"
                    >
                        Login
                    </button>
                    {success && (
                        <p className="text-center text-green-400">
                            Login Successful 🚀
                        </p>
                    )}

                </div>

            </motion.div>
        </div>
    );
}