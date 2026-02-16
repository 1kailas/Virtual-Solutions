import { Shield, Zap, Globe, Package } from "lucide-react";

export function GameFeatures() {
    return (
        <section className="mt-24 bg-neutral-950 border border-neutral-900 p-10 md:p-16">
            <div className="max-w-2xl mb-12">
                <div className="mb-6">
                    <span className="px-3 py-1 border border-neutral-800 bg-neutral-900 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                        Platform Features
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Everything You Need
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed">
                    Professional game server hosting with enterprise features designed specifically 
                    for gaming communities and network operators.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex gap-5">
                    <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0 text-neutral-400">
                        <Package size={20} />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-white mb-2">One-Click Modpack Installation</h3>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Install CurseForge, Modrinth, and FTB modpacks instantly through our management panel. 
                            No technical knowledge required.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0 text-neutral-400">
                        <Shield size={20} />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-white mb-2">Advanced DDoS Protection</h3>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Game-optimized traffic filtering ensures your server remains accessible during attacks 
                            without affecting legitimate players.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0 text-neutral-400">
                        <Globe size={20} />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-white mb-2">Global Data Centers</h3>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Deploy servers in North America, Europe, or Asia. Choose the location closest 
                            to your player base for optimal performance.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0 text-neutral-400">
                        <Zap size={20} />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-white mb-2">Instant Provisioning</h3>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Servers are automatically deployed within 60 seconds of payment confirmation. 
                            Start playing immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
