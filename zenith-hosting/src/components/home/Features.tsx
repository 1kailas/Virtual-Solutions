"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Server, Clock, Headphones } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description: "Multi-layer DDoS protection, SSL certificates, automated backups, and 24/7 security monitoring to keep your infrastructure safe."
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "AMD Ryzen 9 processors, NVMe SSD storage, and dedicated resources ensure maximum speed and reliability for your applications."
    },
    {
        icon: Globe,
        title: "Global Network",
        description: "24 data centers strategically located worldwide with intelligent routing for optimal latency and 99.9% uptime guarantee."
    },
    {
        icon: Server,
        title: "Scalable Infrastructure",
        description: "Easily scale resources up or down based on demand. From startup to enterprise, we grow with your business needs."
    },
    {
        icon: Clock,
        title: "Instant Deployment",
        description: "Deploy servers in under 60 seconds with our automated provisioning system. Get started immediately with zero setup hassle."
    },
    {
        icon: Headphones,
        title: "Expert Support",
        description: "24/7 professional support from our experienced team. Average response time under 15 minutes for critical issues."
    }
];

export function Features() {
    return (
        <section className="py-24 lg:py-32 bg-black border-t border-neutral-900">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 border border-neutral-800 bg-neutral-950 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                            Why Choose Zenith
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Built for <span className="text-neutral-500">Professionals</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-neutral-400 max-w-2xl mx-auto"
                    >
                        Enterprise-grade infrastructure with the reliability and support your business demands.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 border border-neutral-900 bg-neutral-950/30 hover:border-neutral-800 hover:bg-neutral-950/60 transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900 mb-6 group-hover:border-neutral-700 transition-colors">
                                <feature.icon className="w-6 h-6 text-neutral-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
