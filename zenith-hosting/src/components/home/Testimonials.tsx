"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Minecraft Server Owner",
        content: "The performance is unmatched. We migrated our 200+ player SMP and haven't seen a single TPS drop since.",
        rating: 5,
    },
    {
        name: "Sarah Chen",
        role: "Full Stack Developer",
        content: "Virtual Solutions' VPS instances are blazing fast. Deployments that used to take minutes now take seconds.",
        rating: 5,
    },
    {
        name: "Marcus Johnson",
        role: "Game Studio Lead",
        content: "Best DDoS protection in the industry. We were getting hit daily before switching to Virtual Solutions. Now it's smooth sailing.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "DevOps Engineer",
        content: "The API is a joy to work with. Automating our infrastructure scaling has never been easier.",
        rating: 5,
    }
];

export function Testimonials() {
    return (
        <section className="py-32 bg-black overflow-hidden relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-white tracking-tight">
                    Trusted by <span className="text-zinc-500">Developers.</span>
                </h2>
            </div>

            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 px-6"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[400px] p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-white text-white" />
                                    ))}
                                </div>
                                <p className="text-zinc-300 mb-8 leading-relaxed text-[15px]">"{t.content}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-zinc-400 flex items-center justify-center text-black font-bold text-sm">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-white text-sm">{t.name}</p>
                                        <p className="text-xs text-zinc-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
