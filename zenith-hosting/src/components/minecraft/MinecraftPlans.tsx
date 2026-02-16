"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
    {
        name: "Starter",
        ram: "4GB",
        price: 12,
        description: "Ideal for small communities up to 20 players.",
        features: ["4GB DDR4 RAM", "Unlimited Storage", "DDoS Protection", "Daily Backups"]
    },
    {
        name: "Standard",
        ram: "8GB",
        price: 24,
        description: "Perfect for modded servers up to 50 players.",
        features: ["8GB DDR4 RAM", "Unlimited Storage", "Priority Support", "Instant Setup"],
        popular: true
    },
    {
        name: "Professional",
        ram: "16GB",
        price: 48,
        description: "Designed for large networks up to 100 players.",
        features: ["16GB DDR4 RAM", "NVMe Storage", "Dedicated IP", "24/7 Support"]
    },
    {
        name: "Enterprise",
        ram: "32GB",
        price: 96,
        description: "Maximum performance for enterprise networks.",
        features: ["32GB DDR4 RAM", "Dedicated Resources", "Account Manager", "Custom Config"]
    }
];

export function MinecraftPlans() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Choose Your Plan</h2>
                    <p className="text-lg text-neutral-400">All plans include automatic backups and DDoS protection</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative p-8 border transition-all duration-300 flex flex-col",
                                tier.popular
                                    ? "bg-neutral-950 border-neutral-700"
                                    : "bg-black border-neutral-900 hover:border-neutral-800"
                            )}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider">
                                    Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight uppercase">{tier.name}</h3>
                                <p className="text-sm text-neutral-500">{tier.ram} RAM</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white tracking-tight">${tier.price}</span>
                                    <span className="text-neutral-500 text-base">/month</span>
                                </div>
                            </div>

                            <p className="text-sm text-neutral-400 mb-8">{tier.description}</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                {tier.features.map(feature => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-neutral-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={cn(
                                    "w-full py-3 font-semibold text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2",
                                    tier.popular
                                        ? "bg-white text-black hover:bg-neutral-200"
                                        : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800"
                                )}
                            >
                                Select Plan
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
