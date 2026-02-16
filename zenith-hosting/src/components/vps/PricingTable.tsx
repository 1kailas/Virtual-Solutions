"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: 9,
        description: "Perfect for personal projects and small apps.",
        specs: ["2 vCore", "4GB RAM", "60GB NVMe"],
        highlight: false,
    },
    {
        name: "Pro",
        price: 19,
        description: "The standard for growing businesses.",
        specs: ["4 vCore", "8GB RAM", "120GB NVMe"],
        highlight: true,
    },
    {
        name: "Ultra",
        price: 39,
        description: "Maximum performance for demanding workloads.",
        specs: ["8 vCore", "16GB RAM", "240GB NVMe"],
        highlight: false,
    },
];

export function PricingTable() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    return (
        <div className="py-40 bg-black">
            <div className="container mx-auto px-6 max-w-[1200px]">

                <div className="text-center mb-32">
                    <h2 className="text-pro-display text-white mb-8">Simple Pricing.</h2>
                    {/* Apple-style Segmented Control */}
                    <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-white/5 relative">
                        <motion.div
                            className="absolute top-1 bottom-1 w-[120px] bg-zinc-700/50 rounded-full"
                            animate={{ x: billing === "monthly" ? 0 : 120 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                        <button
                            onClick={() => setBilling("monthly")}
                            className={cn(
                                "w-[120px] py-3 rounded-full text-sm font-medium transition-colors relative z-10",
                                billing === "monthly" ? "text-white" : "text-zinc-500"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling("yearly")}
                            className={cn(
                                "w-[120px] py-3 rounded-full text-sm font-medium transition-colors relative z-10",
                                billing === "yearly" ? "text-white" : "text-zinc-500"
                            )}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={cn(
                                "group relative p-10 md:p-14 rounded-[2rem] border transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-10",
                                plan.highlight
                                    ? "bg-zinc-900/40 border-white/10"
                                    : "bg-black border-zinc-800 hover:border-zinc-700"
                            )}
                        >
                            <div className="space-y-4 flex-1">
                                <h3 className="text-3xl font-semibold text-white tracking-tight">{plan.name}</h3>
                                <p className="text-zinc-400 text-lg max-w-md font-light">{plan.description}</p>
                                <div className="flex gap-6 mt-6">
                                    {plan.specs.map(spec => (
                                        <div key={spec} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-300">
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-12">
                                <div className="text-right">
                                    <div className="text-5xl font-semibold text-white tracking-tight">
                                        ${billing === "yearly" ? Math.round(plan.price * 0.8) : plan.price}
                                    </div>
                                    <div className="text-zinc-500 text-sm mt-1">per month</div>
                                </div>

                                <button className={cn(
                                    "px-10 py-4 rounded-full font-semibold text-sm transition-transform active:scale-95 flex items-center gap-2",
                                    plan.highlight
                                        ? "bg-white text-black hover:bg-zinc-200"
                                        : "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700"
                                )}>
                                    Buy Now
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
