import { PricingTable } from "@/components/vps/PricingTable";
import { ServerSpecs } from "@/components/vps/ServerSpecs";

export default function VPSPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="text-center mb-24">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 border border-neutral-800 bg-neutral-950 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                            VPS Hosting Solutions
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
                        Professional VPS Hosting
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Enterprise-grade virtual private servers with guaranteed resources, 
                        root access, and full control. Powered by AMD Ryzen processors.
                    </p>
                </div>

                <PricingTable />
                <ServerSpecs />
            </div>
        </div>
    );
}
