"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20">
            <div className="container mx-auto px-4 md:px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-400">
                        Our support team is available 24/7 to help you with any questions or issues.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Mail className="text-emerald-400" size={24} />
                                    <span>support@virtual.solutions</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <MessageSquare className="text-blue-400" size={24} />
                                    <span>Join our Discord Community</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Phone className="text-purple-400" size={24} />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">First Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can we help?" />
                        </div>

                        <button type="button" className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
