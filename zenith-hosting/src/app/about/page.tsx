"use client";

import { motion } from "framer-motion";
import { Globe, Server, Shield, Users } from "lucide-react";

const stats = [
    { label: "Servers Deployed", value: "10,000+" },
    { label: "Uptime", value: "99.99%" },
    { label: "Support Tickets Solved", value: "50,000+" },
    { label: "Happy Customers", value: "5,000+" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-4 md:px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Driven by Performance
                    </h1>
                    <p className="text-xl text-gray-400">
                        Virtual Solutions was founded with a simple mission: to provide the highest performance server hosting at accessible prices, without compromising on support.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Infrastructure Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Global Infrastructure</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Our network spans 3 continents with 12 strategically located data centers. We use premium bandwidth providers to ensure low latency and high throughput for all users, regardless of location.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <Globe className="text-emerald-400" size={20} />
                                <span>North America (New York, Los Angeles, Dallas)</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Globe className="text-blue-400" size={20} />
                                <span>Europe (London, Frankfurt, Amsterdam)</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Globe className="text-purple-400" size={20} />
                                <span>Asia Pacific (Singapore, Tokyo, Sydney)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-3xl bg-black border border-white/10 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('/world-map.png')] opacity-20 bg-cover bg-center" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <Server size={64} className="text-white mx-auto mb-4 opacity-50" />
                                <p className="text-gray-500">Interactive Network Map Loading...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
