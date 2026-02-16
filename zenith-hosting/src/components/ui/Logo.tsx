"use client";

import { motion } from "framer-motion";

export function Logo({ className = "w-6 h-6", textSize = "text-lg" }: { className?: string; textSize?: string }) {
    return (
        <div className="flex items-center gap-2 group cursor-pointer select-none">
            <div className={`relative ${className} flex items-center justify-center`}>
                {/* Simple, clean V icon */}
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white drop-shadow-lg">
                    <path
                        d="M12 22L3 5H7L12 15L17 5H21L12 22Z"
                        fill="currentColor"
                        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    />
                </svg>
            </div>
            <div className="flex flex-col">
                <span className={`${textSize} font-medium tracking-tight text-white group-hover:text-gray-200 transition-colors leading-none`}>
                    Virtual Solutions
                </span>
            </div>
        </div>
    );
}
