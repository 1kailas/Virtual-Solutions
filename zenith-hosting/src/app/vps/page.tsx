import { PricingTable } from "@/components/vps/PricingTable";
import { ServerSpecs } from "@/components/vps/ServerSpecs";

export default function VPSPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-white tracking-tight">
                        Pro Performance.
                        <br />
                        <span className="text-zinc-500">On Demand.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Deploy instances powered by the world's most advanced desktop processors.
                        Unmatched single-core performance for your most demanding applications.
                    </p>
                </div>

                <PricingTable />
                <ServerSpecs />
            </div>
        </div>
    );
}
