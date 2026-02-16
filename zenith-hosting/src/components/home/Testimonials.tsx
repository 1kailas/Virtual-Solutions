"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Michael Thompson",
        role: "CTO, TechCorp Solutions",
        content: "Zenith Hosting has been instrumental in scaling our infrastructure. Their professional support team and reliable uptime have exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Sarah Williams",
        role: "DevOps Lead, CloudScale Inc",
        content: "Outstanding performance and security. The deployment speed and server management tools have significantly improved our workflow efficiency.",
        rating: 5,
    },
    {
        name: "James Rodriguez",
        role: "IT Director, DataSync Systems",
        content: "After evaluating multiple providers, Zenith stood out for their enterprise-grade infrastructure and responsive 24/7 support. Highly recommended.",
        rating: 5,
    },
    {
        name: "Emily Chen",
        role: "VP of Engineering, AppDynamics",
        content: "Their DDoS protection and security measures are second to none. We've had zero downtime since migrating to Zenith Hosting.",
        rating: 5,
    }
];

export function Testimonials() {
    return (
        <section className="py-24 lg:py-32 bg-black border-t border-neutral-900">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 border border-neutral-800 bg-neutral-950 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                            Client Testimonials
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Trusted by <span className="text-neutral-500">Industry Leaders</span>
                    </motion.h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 border border-neutral-900 bg-neutral-950/30"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-white text-white" />
                                ))}
                            </div>
                            <p className="text-neutral-300 mb-8 leading-relaxed text-base">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-neutral-900">
                                <div className="w-12 h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900 text-white font-semibold text-sm">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-neutral-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
