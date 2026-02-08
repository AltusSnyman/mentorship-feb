import React from 'react';
import { Check } from 'lucide-react';
import NeuralBackground from './ui/flow-field-background';

const stackItems = [
    {
        title: 'The "Smart Hybrid" Enterprise License',
        subtitle: '(Unlimited Sub-Accounts + Toll-Free Line Setup)',
        value: '$497/mo',
    },
    {
        title: 'The "Vibe Coding" Automation Vault',
        subtitle: '(40+ N8N Workflows + 120+ Industry Snapshots)',
        value: '$3,500',
    },
    {
        title: 'The Agency Growth Protocol',
        subtitle: '(Pipeline Architecture + Consultative Sales Framework)',
        value: '$2,500',
    },
    {
        title: 'The 5-Day Launch Sprint',
        subtitle: '(Implementation Guide + Weekly "Fresh Drop" Updates)',
        value: '$997',
    },
];

export default function OfferStack() {
    return (
        <section className="py-24 bg-[#080808] flex items-center justify-center font-mono">
            <div className="w-full max-w-[800px] px-6">

                {/* Vault Container */}
                <div
                    className="relative bg-[#111111] border border-[#00F0FF] rounded-2xl p-10 overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)]"
                >
                    <NeuralBackground
                        color="#00F0FF"
                        trailOpacity={0.2}
                        speed={0.6}
                        className="absolute inset-0 pointer-events-none bg-[#111111]"
                    />
                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center border-b border-gray-800 pb-8 mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider uppercase mb-2">
                                The Agency Infrastructure Bundle
                            </h2>
                            <div className="h-1 w-24 bg-[#00F0FF] mx-auto rounded-full shadow-[0_0_15px_#00F0FF]"></div>
                        </div>

                        {/* Stack Components */}
                        <div className="space-y-6 mb-12">
                            {stackItems.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-[#00F0FF]/30">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[24px]">
                                            <Check className="w-6 h-6 text-[#00F0FF] drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]" strokeWidth={3} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                                            <p className="text-[#A3A3A3] text-sm mt-1">{item.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#E6E6E6] font-bold text-lg md:text-right pl-10 md:pl-0">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-dashed border-gray-700 my-8"></div>

                        {/* Pricing Breakdown */}
                        <div className="space-y-4 text-center mb-10">
                            {/* Total Value */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg">
                                <span className="text-[#A3A3A3] uppercase tracking-widest">Total Value</span>
                                <span className="text-red-500 font-bold line-throughDecoration-red-500 line-through decoration-2">
                                    $11,490+
                                </span>
                            </div>

                            {/* Standard Price */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg">
                                <span className="text-[#A3A3A3] uppercase tracking-widest">Standard Market Price</span>
                                <span className="text-gray-500 font-bold line-through decoration-2">
                                    $497/mo
                                </span>
                            </div>
                        </div>

                        {/* The Anchor Price */}
                        <div className="text-center mb-10">
                            <p className="text-[#00F0FF] text-sm uppercase tracking-[0.2em] mb-4 text-glow">
                                Your Founder's Rate
                            </p>
                            <div className="text-6xl md:text-[4rem] font-extrabold text-[#00F0FF] leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                                $97 <span className="text-3xl text-[#E6E6E6] font-normal align-middle">/ Month</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <a
                                href="https://app.gohighlevel.com/v2/preview/O4GBs6uRUtGi8iPesP0m"
                                className="inline-block w-full md:w-auto px-12 py-5 bg-[#00F0FF] text-black font-extrabold text-xl rounded-lg hover:bg-[#33F4FF] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.5)] uppercase tracking-wide"
                            >
                                Claim My Founder's Rate
                            </a>
                            <p className="mt-4 text-[#A3A3A3] text-sm">
                                (Save $400/mo Instantly)
                            </p>
                        </div>

                        {/* Decorative Corner Accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00F0FF] rounded-tl-2xl opacity-50 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00F0FF] rounded-tr-2xl opacity-50 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#00F0FF] rounded-bl-2xl opacity-50 pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00F0FF] rounded-br-2xl opacity-50 pointer-events-none"></div>

                    </div> {/* End Content Wrapper */}

                </div>
            </div>
        </section >
    );
}
