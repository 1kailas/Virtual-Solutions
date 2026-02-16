"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

function FeatureSection({
    title,
    subtitle,
    description,
    align = "left",
    visual
}: {
    title: string;
    subtitle: string;
    description: string;
    align?: "left" | "right";
    visual: React.ReactNode;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="min-h-screen flex items-center justify-center py-40 overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className={cn(
                    "flex flex-col md:flex-row items-center gap-20 md:gap-40",
                    align === "right" ? "md:flex-row-reverse" : ""
                )}>
                    {/* Text Content */}
                    <motion.div
                        style={{ opacity }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 font-medium tracking-wide uppercase backdrop-blur-md">
                            {title}
                        </div>
                        <h2 className="text-pro-display text-white">
                            {subtitle}
                        </h2>
                        <p className="text-pro-body text-zinc-400 max-w-lg">
                            {description}
                        </p>
                    </motion.div>

                    {/* Visual Content */}
                    <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
                        {visual}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Features() {
    return (
        <div className="bg-black relative z-10 space-y-20">

            {/* Feature 1: Global Mesh */}
            <FeatureSection
                title="Global Network"
                subtitle="Latency is a choice. We chose zero."
                description="Our intelligent mesh routing automatically finds the fastest path for your data. With 24 regions active and more coming online, your users are never far from the edge."
                align="left"
                visual={
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[100px]" />
                        <div className="relative w-[80%] h-[80%] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]">
                            <div className="absolute inset-0 border border-t-white/50 border-transparent rounded-full" />
                        </div>
                        <div className="absolute w-[60%] h-[60%] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]">
                            <Globe size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20" />
                        </div>
                    </div>
                }
            />

            {/* Feature 2: Performance */}
            <FeatureSection
                title="Performance"
                subtitle="Speed that defies physics."
                description="Powered by the latest Ryzen 9 processors and PCIe Gen 4 NVMe storage. We don't just host your applications; we accelerate them to their theoretical limits."
                align="right"
                visual={
                    <div className="relative w-full h-full flex items-center justify-center bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <div className="flex items-end gap-4 h-[300px] items-center">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-8 bg-white rounded-md"
                                    animate={{ height: [40, 150 + (i * 30), 40] }}
                                    transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                                />
                            ))}
                        </div>
                    </div>
                }
            />

            {/* Feature 3: Security */}
            <FeatureSection
                title="Security"
                subtitle="Unbreakable protection."
                description="Our multi-layered DDoS mitigation scrubs traffic in real-time, ensuring that malicious actors never touch your infrastructure. Staying online isn't a feature; it's a guarantee."
                align="left"
                visual={
                    <div className="relative w-full h-full flex items-center justify-center">
                        <ShieldCheck size={120} strokeWidth={1} className="text-white/80" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[300px] h-[300px] border border-white/10 rounded-full animate-pulse" />
                            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
                        </div>
                    </div>
                }
            />
        </div>
    );
}
