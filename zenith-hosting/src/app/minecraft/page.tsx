import { MinecraftPlans } from "@/components/minecraft/MinecraftPlans";
import { GameFeatures } from "@/components/minecraft/GameFeatures";

export default function MinecraftPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-white tracking-tight">
                        Crafted for <span className="text-emerald-500">Speed.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        The ultimate hosting experience for your community.
                        Zero lag, instant setup, and modpack support out of the box.
                    </p>
                </div>

                <MinecraftPlans />
                <GameFeatures />
            </div>
        </div>
    );
}
