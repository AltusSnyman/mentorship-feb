import React from 'react';

export default function Problem() {
    return (
        <section className="py-24 bg-surface border-y border-[#222] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text Content */}
                <div className="space-y-8 reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                        The "Old Way" Is <span className="text-red-500">Broken</span>.
                    </h2>

                    <p className="text-xl text-gray-400 leading-relaxed font-body">
                        If you try to build an agency the traditional way, you go broke before Day 1. The software fees alone will bleed your runway dry.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-main border border-red-500/20 reveal reveal-delay-1">
                            <span className="text-red-500 text-xl font-bold">❌</span>
                            <div className="flex-1">
                                <h3 className="text-white font-bold">CRM Software</h3>
                            </div>
                            <span className="text-red-400 font-mono text-lg">$497/mo</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-main border border-red-500/20 reveal reveal-delay-2">
                            <span className="text-red-500 text-xl font-bold">❌</span>
                            <div className="flex-1">
                                <h3 className="text-white font-bold">Automation Tools</h3>
                            </div>
                            <span className="text-red-400 font-mono text-lg">$100/mo</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-main border border-red-500/20 reveal reveal-delay-3">
                            <span className="text-red-500 text-xl font-bold">❌</span>
                            <div className="flex-1">
                                <h3 className="text-white font-bold">Hosting & Zapier</h3>
                            </div>
                            <span className="text-red-400 font-mono text-lg">$200/mo</span>
                        </div>
                    </div>

                    <div className="pt-4 reveal reveal-delay-4">
                        <p className="text-white text-lg font-bold">
                            Conclusion: <span className="text-gray-400 font-normal">You are paying <span className="text-red-500 underline decoration-red-500/50 decoration-2">$800/mo</span> just to have an empty business.</span>
                        </p>
                    </div>
                </div>

                {/* Right: Visual */}
                <div className="relative reveal reveal-delay-2">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-[#333] shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                        <img
                            src="/assets/chaos-infographic.png"
                            alt="High Cost and Chaos of Traditional Agency Building"
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-main/90 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
}
