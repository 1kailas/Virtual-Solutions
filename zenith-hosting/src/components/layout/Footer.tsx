import Link from "next/link";
import { Twitter, Github, Disc } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
    Product: [
        { name: "VPS Hosting", href: "/vps" },
        { name: "Minecraft Hosting", href: "/minecraft" },
        { name: "Dedicated Servers", href: "#" },
        { name: "Feature List", href: "#" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "/contact" },
    ],
    Support: [
        { name: "Help Center", href: "#" },
        { name: "Status", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Logo />
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
                            Premium cloud infrastructure and game hosting solutions designed for performance and reliability.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Disc size={18} />
                            </a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-medium text-white text-sm mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-[13px] text-zinc-500 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-600 text-[11px]">
                        © {new Date().getFullYear()} Virtual Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                        <span className="text-zinc-500 text-[11px]">All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
