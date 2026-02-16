import { Shield, Zap, Globe, Package } from "lucide-react";

export function GameFeatures() {
    return (
        <section className="bg-zinc-900/30 border border-white/5 rounded-3xl p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
                        Built for <span className="text-emerald-500">Communities.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg font-light leading-relaxed">
                        Whether you're hosting a private SMP or a massive network, our platform scales with you.
                        Enjoy enterprise-grade features simplified for gamers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                            <Package size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">1-Click Modpacks</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Install CurseForge, Modrinth, and FTB modpacks instantly from our panel. No FTP required.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">DDoS Protection</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Specialized game-traffic mitigation ensures your server stays online even during attacks.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">Low Latency Locations</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Servers available in NA, EU, and Asia. Pick the location closest to your player base.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">Instant Setup</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Your server is online within seconds of payment. Start playing immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
