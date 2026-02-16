"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 border border-neutral-800 bg-neutral-950 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                            Contact Us
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
                        Let's Talk
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        Our professional support team is available 24/7 to assist with technical inquiries, 
                        sales questions, and enterprise solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-10 border border-neutral-900 bg-neutral-950/50">
                            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-neutral-400" size={18} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1 text-sm">Email Support</div>
                                        <div className="text-neutral-400 text-sm">support@zenithhosting.com</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-neutral-400" size={18} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1 text-sm">Phone</div>
                                        <div className="text-neutral-400 text-sm">+1 (555) 123-4567</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="text-neutral-400" size={18} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1 text-sm">Live Chat</div>
                                        <div className="text-neutral-400 text-sm">Available 24/7 in client portal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 p-10 border border-neutral-900 bg-neutral-950/50"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">First Name</label>
                                <input type="text" className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Last Name</label>
                                <input type="text" className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Email Address</label>
                            <input type="email" className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Inquiry Type</label>
                            <select className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors">
                                <option>Sales Inquiry</option>
                                <option>Technical Support</option>
                                <option>Enterprise Solutions</option>
                                <option>General Questions</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Message</label>
                            <textarea rows={5} className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors resize-none" placeholder="Please provide details about your inquiry..." />
                        </div>

                        <button type="button" className="w-full py-4 bg-white text-black font-semibold tracking-wide uppercase hover:bg-neutral-200 transition-colors text-sm">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
