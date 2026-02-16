"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen min-h-[900px] flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-white selection:text-black">

            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Starfield / Particles */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />

                {/* Central Glow - The "Core" */}
                <motion.div
                    style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]) }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"
                />
            </div>

            {/* Content Container - z-10 for interactivity */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center max-w-[1400px]"
            >
                {/* Badge - Micro-interaction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <Link href="/vps" className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md cursor-pointer">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">New Regions Available</span>
                        <ChevronRight size={14} className="text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>

                {/* Main Headline - Massive Scale */}
                <motion.h1
                    initial={{ opacity: 0, y: 40, letterSpacing: "-0.08em" }}
                    animate={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-pro-display-large text-white mb-10 glow-text"
                >
                    Infrastructure <br />
                    <span className="text-zinc-600">Reimagined.</span>
                </motion.h1>

                {/* Subtext - Professional Body */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-pro-body text-zinc-400 max-w-2xl mx-auto mb-16"
                >
                    Experience the next generation of cloud computing.
                    Built for speed, engineered for scale, and designed for you.
                </motion.p>

                {/* Primary Actions - Button Physics */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link
                        href="/vps"
                        className="group relative px-10 py-5 rounded-full bg-white text-black text-lg font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">Deploy Server</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Link>

                    <Link
                        href="/minecraft"
                        className="group text-lg font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        View Game Cloud
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
            </motion.div>
        </section>
    );
}
