"use client";

import { motion } from "framer-motion";
import { Globe, Server, Shield, Users } from "lucide-react";

const stats = [
    { label: "Servers Deployed", value: "10,000+" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Support Tickets Resolved", value: "50,000+" },
    { label: "Enterprise Clients", value: "500+" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-24"
                >
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 border border-neutral-800 bg-neutral-950 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                            About Zenith Hosting
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
                        Enterprise Infrastructure
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        Zenith Hosting delivers professional-grade cloud infrastructure and hosting solutions. 
                        Trusted by businesses worldwide for reliability, security, and performance.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center p-8 border border-neutral-900 bg-neutral-950/50"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.value}</div>
                            <div className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Infrastructure Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="mb-6">
                            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                                Infrastructure
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-tight">Global Network</h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Our infrastructure spans 6 continents with 24 strategically positioned data centers. 
                            We leverage enterprise-grade network carriers to ensure optimal performance and reliability.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-4 text-neutral-300">
                                <Globe className="text-neutral-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <div className="font-semibold text-white mb-1">North America</div>
                                    <div className="text-sm text-neutral-500">New York, Los Angeles, Dallas, Toronto</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-neutral-300">
                                <Globe className="text-neutral-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <div className="font-semibold text-white mb-1">Europe</div>
                                    <div className="text-sm text-neutral-500">London, Frankfurt, Amsterdam, Paris</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-neutral-300">
                                <Globe className="text-neutral-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <div className="font-semibold text-white mb-1">Asia Pacific</div>
                                    <div className="text-sm text-neutral-500">Singapore, Tokyo, Sydney, Mumbai</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[500px] bg-neutral-950 border border-neutral-900 flex items-center justify-center">
                        <div className="text-center">
                            <Server size={80} className="text-neutral-800 mx-auto mb-6" />
                            <div className="font-mono text-xs text-neutral-600 tracking-wider mb-2">NETWORK STATUS</div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm text-neutral-500">All Systems Operational</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
