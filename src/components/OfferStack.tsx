import React from 'react';
import Button from './ui/Button';

const offerItems = [
    { name: 'Unlimited "Smart Hybrid" License', value: '$497/mo' },
    { name: 'The 5-Day Launch Sprint', value: '$997' },
    { name: 'Vibe Coding Academy', value: '$2,000' },
    { name: 'N8N Blueprints Vault', value: '$1,500' },
];

export default function OfferStack() {
    return (
        <section className="py-24 bg-[#080808] relative overflow-hidden flex items-center justify-center">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent/5 blur-[150px] pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl w-full mx-6">

                {/* Receipt Container */}
                <div className="bg-surface border border-accent/30 rounded-lg p-8 md:p-14 shadow-[0_0_50px_rgba(0,240,255,0.1)] relative reveal">

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

                    {/* Header */}
                    <div className="text-center mb-12 border-b border-gray-800 pb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest mb-3">The Agency Infrastructure Bundle</h2>
                        <p className="text-gray-500 font-mono text-base">Official Receipt • Founders Access</p>
                    </div>

                    {/* Line Items */}
                    <div className="space-y-8 mb-12 font-mono text-base md:text-lg">
                        {offerItems.map((item, index) => (
                            <div key={index} className={`flex items-center justify-between group reveal reveal-delay-${index + 1}`}>
                                <span className="text-gray-300 relative z-10 bg-surface pr-4">{item.name}</span>
                                {/* Dotted Line */}
                                <div className="flex-1 border-b-2 border-dashed border-gray-800 mx-4 relative top-1"></div>
                                <span className="text-accent relative z-10 bg-surface pl-4">{item.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Totals */}
                    <div className="bg-[#050505] p-10 rounded border border-gray-800 text-center space-y-6 reveal reveal-delay-3">
                        <div className="flex justify-between text-gray-500 text-base md:text-lg px-4">
                            <span>Total Value</span>
                            <span className="line-through decoration-red-500 decoration-2">$10,000+</span>
                        </div>
                        <div className="flex justify-between text-gray-500 text-base md:text-lg px-4">
                            <span>Standard Price</span>
                            <span className="line-through decoration-red-500 decoration-2">$497/mo</span>
                        </div>

                        <div className="py-8 border-t border-gray-800 mt-6">
                            <p className="text-gray-400 text-base uppercase tracking-widest mb-4">Your Founder's Rate</p>
                            <div className="text-[7rem] md:text-[10rem] font-extrabold text-white tracking-tighter flex items-end justify-center gap-4 leading-none" style={{ textShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }}>
                                $97 <span className="text-2xl md:text-3xl text-gray-500 font-normal mb-4 md:mb-6">/ Month</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 reveal reveal-delay-4">
                        <a href="https://github.com/AltusSnyman/mentorship-feb.git" className="block w-full text-center py-5 bg-accent text-black font-extrabold text-lg uppercase tracking-wider hover:bg-[#33F4FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300">
                            Claim My Founder's Rate
                        </a>
                        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span>Secure Checkout • Cancel Anytime</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
