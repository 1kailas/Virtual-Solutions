"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Box } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
    {
        name: "Grass",
        ram: "4GB",
        price: 9.99,
        description: "Perfect for vanilla servers and small friend groups.",
        color: "bg-emerald-500",
        features: ["Standard Support", "US Location", "DDoS Protection"]
    },
    {
        name: "Iron",
        ram: "8GB",
        price: 19.99,
        description: "Ideal for modded servers and growing communities.",
        color: "bg-zinc-400",
        features: ["Priority Support", "Global Locations", "NVMe Storage"]
    },
    {
        name: "Diamond",
        ram: "16GB",
        price: 39.99,
        description: "For large networks and heavier modpacks.",
        color: "bg-cyan-400",
        features: ["24/7 Priority Support", "Dedicated IP", "Thread Pinning"],
        popular: true
    },
    {
        name: "Netherite",
        ram: "32GB",
        price: 79.99,
        description: "Enterprise-grade power for massive servers.",
        color: "bg-purple-500",
        features: ["Dedicated Account Manager", "Custom Hardware", "Off-site Backups"]
    }
];

export function MinecraftPlans() {
    return (
        <section className="py-40 bg-black">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center mb-32">
                    <h2 className="text-pro-display text-white mb-6">Game Cloud.</h2>
                    <p className="text-xl text-zinc-400 font-light">Choose your power level.</p>
                </div>

                <div className="flex flex-col gap-4">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group relative p-10 rounded-[2rem] border transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 h-[200px] hover:h-[220px]",
                                tier.popular
                                    ? "bg-zinc-900 border-white/10"
                                    : "bg-black border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/20"
                            )}
                        >
                            {/* Left: Identity */}
                            <div className="flex items-center gap-8 flex-1">
                                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-black shadow-lg", tier.color)}>
                                    <Box size={32} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-white tracking-tight mb-2">{tier.name}</h3>
                                    <p className="text-zinc-400 font-light">{tier.description}</p>
                                </div>
                            </div>

                            {/* Middle: Feature Pills */}
                            <div className="hidden lg:flex gap-3">
                                {tier.features.slice(0, 2).map((f) => (
                                    <span key={f} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-300">
                                        {f}
                                    </span>
                                ))}
                            </div>

                            {/* Right: Price & CTA */}
                            <div className="flex items-center gap-10">
                                <div className="text-right">
                                    <span className="text-4xl font-semibold text-white tracking-tight">${tier.price}</span>
                                    <span className="text-sm text-zinc-500 block">/mo</span>
                                </div>
                                <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
