"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-black pt-24 pb-20">
            
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

            <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
                
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-neutral-800 bg-neutral-950 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Operational Worldwide
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Enterprise-Grade
                        <br />
                        <span className="text-neutral-500">Cloud Infrastructure</span>
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Professional hosting solutions backed by 99.9% uptime SLA, 
                    enterprise security, and 24/7 expert support. 
                    Trusted by businesses worldwide.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Link
                        href="/vps"
                        className="group px-8 py-4 bg-white text-black font-semibold tracking-wide uppercase hover:bg-neutral-200 transition-all flex items-center gap-2"
                    >
                        View VPS Plans
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 border border-neutral-700 text-white font-semibold tracking-wide uppercase hover:border-neutral-500 hover:bg-neutral-950 transition-all"
                    >
                        Contact Sales
                    </Link>
                </motion.div>

                {/* Stats/Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                >
                    <div className="flex flex-col items-center text-center p-8 border border-neutral-900 bg-neutral-950/50">
                        <Shield className="w-10 h-10 text-neutral-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2 tracking-wide uppercase">Secure</h3>
                        <p className="text-sm text-neutral-500">
                            Enterprise DDoS protection and multi-layer security infrastructure
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border border-neutral-900 bg-neutral-950/50">
                        <Zap className="w-10 h-10 text-neutral-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2 tracking-wide uppercase">Fast</h3>
                        <p className="text-sm text-neutral-500">
                            Latest AMD Ryzen processors with NVMe SSD storage
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border border-neutral-900 bg-neutral-950/50">
                        <Globe className="w-10 h-10 text-neutral-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2 tracking-wide uppercase">Global</h3>
                        <p className="text-sm text-neutral-500">
                            24 data centers across 6 continents for optimal performance
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
