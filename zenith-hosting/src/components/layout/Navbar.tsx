"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const navItems = [
    { name: "Home", href: "/" },
    { name: "VPS", href: "/vps" },
    { name: "Minecraft", href: "/minecraft" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
                    scrolled ? "glass-nav h-[70px]" : "bg-transparent h-[90px]"
                )}
            >
                <div className="w-full px-8 md:px-12 h-full flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Logo className="w-5 h-5" textSize="text-[15px]" />
                    </Link>

                    {/* Desktop Navigation - Strictly Centered */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300",
                                    pathname === item.href
                                        ? "text-white bg-white/10"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {item.name === "Minecraft" ? "Game Cloud" : item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-white text-black px-5 py-2 rounded-full text-[13px] font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-black pt-20 px-6 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-2 mt-4">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-2xl font-medium block py-3 border-b border-white/10 flex justify-between items-center",
                                            pathname === item.href ? "text-white" : "text-zinc-400"
                                        )}
                                    >
                                        {item.name}
                                        <ChevronRight size={16} className="opacity-50" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 flex flex-col gap-3"
                            >
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-3 text-center rounded-lg bg-zinc-900 text-white font-medium border border-white/10 text-sm"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-3 text-center rounded-lg bg-white text-black font-medium text-sm"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
