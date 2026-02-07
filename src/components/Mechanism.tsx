import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

export default function Mechanism() {
    return (
        <section className="py-24 bg-main relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 space-y-24">

                {/* Feature 1: The Infrastructure */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Visual (Left) */}
                    <div className="order-2 lg:order-1 relative group reveal">
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.05)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.15)] transition-shadow duration-500">
                            <img
                                src="/assets/smart-hybrid-dashboard.png"
                                alt="Smart Hybrid Dashboard Interface"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-main/80 to-transparent"></div>
                        </div>
                    </div>

                    {/* Text (Right) */}
                    <div className="order-1 lg:order-2 space-y-6 reveal reveal-delay-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-widest uppercase">
                            Core Infrastructure
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            The "Smart Hybrid"<br />Infrastructure.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed font-body">
                            We use community buying power to get you an Unlimited "Grey-Label" License. You get the full power of GoHighLevel (Unlimited Sub-accounts) without the <span className="text-red-400 line-through">$497</span> monthly fee.
                        </p>
                        <ul className="space-y-3 pt-2">
                            {['Unlimited Sub-Accounts', 'White-Label Desktop App', 'API Access Included'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-white/80">
                                    <span className="text-accent">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Feature 2: Vibe Coding */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text (Left) */}
                    <div className="space-y-6 reveal">
                        <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-widest uppercase">
                            New Skillset
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            The "Vibe Coding" Protocol.<br />
                            <span className="text-accent">The End of Templates.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed font-body">
                            Templates are a commodity. Custom software is an asset. We teach you how to use Lovable, Antigravity, and Cursor to build enterprise-grade applications just by typing in plain English. Stop reselling the same GHL snapshot as everyone else. Start building custom IP.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {[
                                {
                                    title: 'Natural Language Dev',
                                    desc: 'Type "Build a Real Estate CRM" and watch the code write itself in real-time.'
                                },
                                {
                                    title: 'Full-Stack Authority',
                                    desc: 'Create databases, front-ends, and API connections without learning a single line of React or Python.'
                                },
                                {
                                    title: 'Commercial Rights',
                                    desc: 'You own the code you generate. Sell these custom tools to clients for $5k - $10k setup fees.'
                                }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/90">
                                    <span className="text-accent mt-1 shrink-0">✓</span>
                                    <span>
                                        <strong className="text-white block mb-1">{item.title}:</strong>
                                        <span className="text-gray-400 text-sm">{item.desc}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual (Right) */}
                    <div className="relative group reveal reveal-delay-2">
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.05)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.15)] transition-shadow duration-500">
                            <img
                                src="/assets/vibe-code-editor.png"
                                alt="Vibe Coding Editor Interface"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-main/50 to-transparent"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
