"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/vps", label: "VPS Hosting" },
    { href: "/minecraft", label: "Game Servers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 transition-all duration-300",
                    scrolled ? "bg-black/95 backdrop-blur-md border-b border-neutral-900" : "bg-transparent"
                )}
            >
                <Link href="/" className="relative z-50">
                    <span className="text-lg font-semibold tracking-tight text-neutral-100 hover:text-white transition-colors">
                        ZENITH HOSTING
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium tracking-wide transition-colors uppercase",
                                pathname === link.href
                                    ? "text-white"
                                    : "text-neutral-400 hover:text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-4 px-6 py-2.5 bg-white text-black text-sm font-semibold tracking-wide uppercase hover:bg-neutral-200 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                        className="w-6 h-[2px] bg-white transition-colors"
                    />
                    <motion.span
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        className="w-6 h-[2px] bg-white transition-colors"
                    />
                    <motion.span
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                        className="w-6 h-[2px] bg-white transition-colors"
                    />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-40 bg-black lg:hidden"
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                        {links.map((link, index) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-3xl font-semibold tracking-tight transition-colors uppercase",
                                        pathname === link.href ? "text-white" : "text-neutral-500 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: links.length * 0.1, duration: 0.3 }}
                            className="mt-8"
                        >
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-black text-lg font-semibold tracking-wide uppercase hover:bg-neutral-200 transition-colors inline-block"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
