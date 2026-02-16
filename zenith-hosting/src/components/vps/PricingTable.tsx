"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: 12,
        description: "Essential resources for development and testing environments.",
        specs: ["2 vCPU Cores", "4GB DDR4 RAM", "60GB NVMe SSD", "2TB Bandwidth", "DDoS Protection"],
        highlight: false,
    },
    {
        name: "Business",
        price: 24,
        description: "Recommended for production applications and growing businesses.",
        specs: ["4 vCPU Cores", "8GB DDR4 RAM", "120GB NVMe SSD", "4TB Bandwidth", "Priority Support"],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: 48,
        description: "Maximum performance for mission-critical workloads.",
        specs: ["8 vCPU Cores", "16GB DDR4 RAM", "240GB NVMe SSD", "8TB Bandwidth", "Dedicated Support"],
        highlight: false,
    },
];

export function PricingTable() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Transparent Pricing</h2>
                        <p className="text-lg text-neutral-400">Select the plan that fits your needs. Scale anytime.</p>
                    </div>

                    <div className="inline-flex p-1 border border-neutral-800 bg-neutral-950">
                        <button
                            onClick={() => setBilling("monthly")}
                            className={cn(
                                "px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all",
                                billing === "monthly" 
                                    ? "bg-white text-black" 
                                    : "bg-transparent text-neutral-400 hover:text-white"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling("yearly")}
                            className={cn(
                                "px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all relative",
                                billing === "yearly" 
                                    ? "bg-white text-black" 
                                    : "bg-transparent text-neutral-400 hover:text-white"
                            )}
                        >
                            Yearly
                            <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-black text-[10px] font-bold tracking-wide">
                                -20%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={cn(
                                "relative p-8 border transition-all duration-300 flex flex-col",
                                plan.highlight
                                    ? "bg-neutral-950 border-neutral-700 scale-105"
                                    : "bg-black border-neutral-900 hover:border-neutral-800"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">{plan.name}</h3>
                                <p className="text-sm text-neutral-500">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-white tracking-tight">
                                        ${billing === "yearly" ? Math.round(plan.price * 0.8) : plan.price}
                                    </span>
                                    <span className="text-neutral-500 text-lg">/month</span>
                                </div>
                                {billing === "yearly" && (
                                    <p className="text-xs text-neutral-600 mt-2">
                                        Billed annually at ${Math.round(plan.price * 0.8 * 12)}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.specs.map(spec => (
                                    <div key={spec} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-neutral-300">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={cn(
                                    "w-full py-4 font-semibold text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2",
                                    plan.highlight
                                        ? "bg-white text-black hover:bg-neutral-200"
                                        : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800"
                                )}
                            >
                                Get Started
                                <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
