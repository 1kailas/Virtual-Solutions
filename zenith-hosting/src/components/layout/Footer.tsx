import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

const footerLinks = {
    Services: [
        { name: "VPS Hosting", href: "/vps" },
        { name: "Game Server Hosting", href: "/minecraft" },
        { name: "Dedicated Servers", href: "#" },
        { name: "Enterprise Solutions", href: "#" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Contact Us", href: "/contact" },
        { name: "News & Updates", href: "#" },
    ],
    Legal: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "SLA", href: "#" },
        { name: "Acceptable Use", href: "#" },
    ],
    Support: [
        { name: "Documentation", href: "#" },
        { name: "System Status", href: "#" },
        { name: "Knowledge Base", href: "#" },
        { name: "Contact Support", href: "/contact" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-neutral-900 bg-black pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
                    <div className="col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-lg font-semibold tracking-tight text-white">
                                ZENITH HOSTING
                            </span>
                        </Link>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-sm">
                            Professional cloud infrastructure and hosting solutions. Trusted by enterprises worldwide for reliability, security, and performance.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="mailto:contact@zenithhosting.com"
                                className="w-9 h-9 flex items-center justify-center border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={16} />
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="w-9 h-9 flex items-center justify-center border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                                aria-label="Phone"
                            >
                                <Phone size={16} />
                            </a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-semibold text-white text-[13px] mb-4 tracking-wide uppercase">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-[13px] text-neutral-500 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-600 text-xs tracking-wide">
                        © {new Date().getFullYear()} Zenith Hosting. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-neutral-600">
                        <Link href="#" className="hover:text-neutral-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-neutral-400 transition-colors">
                            Terms of Service
                        </Link>
                        <span>|</span>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span className="text-neutral-500">All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
