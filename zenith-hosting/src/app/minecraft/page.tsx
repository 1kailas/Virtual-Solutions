import { MinecraftPlans } from "@/components/minecraft/MinecraftPlans";
import { GameFeatures } from "@/components/minecraft/GameFeatures";

export default function MinecraftPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="text-center mb-24">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 border border-neutral-800 bg-neutral-950 text-xs font-medium text-neutral-400 tracking-wider uppercase">
                            Game Server Hosting
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
                        Professional Game Hosting
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        High-performance Minecraft server hosting with DDoS protection, 
                        automatic backups, and one-click modpack installation.
                    </p>
                </div>

                <MinecraftPlans />
                <GameFeatures />
            </div>
        </div>
    );
}
