import { Cpu, HardDrive, Zap } from "lucide-react";

export function ServerSpecs() {
    return (
        <section className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 md:p-20 flex flex-col justify-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white tracking-tight">
                        Power of Ryzen 9.
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                        Every instance is powered by the AMD Ryzen 9 7950X, delivering unparalleled single-threaded performance.
                        Combined with DDR5 memory and Gen4 NVMe storage, your applications will run faster than ever before.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center text-white">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">AMD Ryzen 9 7950X</h3>
                                <p className="text-zinc-500 text-sm">Up to 5.7 GHz Boost Clock</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center text-white">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">DDR5 Memory</h3>
                                <p className="text-zinc-500 text-sm">4800 MHz ECC RAM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center text-white">
                                <HardDrive size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">NVMe Gen4 Storage</h3>
                                <p className="text-zinc-500 text-sm">7000 MB/s Read Speeds</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black/50 p-12 md:p-20 flex items-center justify-center border-l border-white/5">
                    {/* Abstract Representation of Chip */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-zinc-800 rounded-3xl border border-white/10 rotate-3 transform transition-transform duration-1000 hover:rotate-6 shadow-2xl shadow-indigo-500/10 flex items-center justify-center">
                            <div className="text-zinc-600 font-mono text-xs p-4 opacity-50 absolute top-4 left-4">
                                RYZEN 9 7950X
                            </div>
                            <Cpu size={80} className="text-zinc-700 opacity-20" />
                            <div className="absolute bottom-10 right-10 w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        </div>
                        <div className="absolute inset-0 bg-zinc-700/50 rounded-3xl border border-white/5 -rotate-3 transform -z-10 blur-sm" />
                    </div>
                </div>
            </div>
        </section>
    );
}
