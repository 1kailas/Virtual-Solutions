import { Cpu, HardDrive, Zap, Shield } from "lucide-react";

export function ServerSpecs() {
    return (
        <section className="mt-24 bg-neutral-950 border border-neutral-900 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                    <div className="mb-6">
                        <span className="px-3 py-1 border border-neutral-800 bg-neutral-900 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                            Technical Specifications
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                        Enterprise Hardware
                    </h2>
                    <p className="text-neutral-400 text-base leading-relaxed mb-10">
                        All VPS instances are powered by AMD Ryzen 9 7950X processors with DDR5 ECC memory 
                        and Gen4 NVMe storage for maximum performance and reliability.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-400 flex-shrink-0">
                                <Cpu size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm mb-1">AMD Ryzen 9 7950X</h3>
                                <p className="text-neutral-500 text-sm">16-core processor up to 5.7 GHz</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-400 flex-shrink-0">
                                <Zap size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm mb-1">DDR5 ECC Memory</h3>
                                <p className="text-neutral-500 text-sm">Error-correcting RAM at 4800 MHz</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-400 flex-shrink-0">
                                <HardDrive size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm mb-1">NVMe Gen4 Storage</h3>
                                <p className="text-neutral-500 text-sm">7000 MB/s sequential read speeds</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-400 flex-shrink-0">
                                <Shield size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm mb-1">DDoS Protection</h3>
                                <p className="text-neutral-500 text-sm">Multi-layer enterprise security included</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black p-10 md:p-16 flex items-center justify-center border-l border-neutral-900">
                    <div className="relative w-full max-w-xs aspect-square">
                        <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                            <div className="text-center">
                                <Cpu size={64} className="text-neutral-700 mx-auto mb-4" />
                                <div className="font-mono text-xs text-neutral-600 tracking-wider">
                                    RYZEN 9 7950X
                                </div>
                                <div className="mt-2 flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs text-neutral-600">OPERATIONAL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
