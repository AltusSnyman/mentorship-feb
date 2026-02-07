import React from 'react';

const days = [
    { day: 'Day 1', title: 'Infrastructure Initialization', icon: '🏗️', desc: 'Domain & DNS Setup' },
    { day: 'Day 2', title: 'Asset Deployment', icon: '🏪', desc: 'One-Click Website Install' },
    { day: 'Day 3', title: 'Traffic Control', icon: '📅', desc: 'Calendar & Booking Config' },
    { day: 'Day 4', title: 'Monetization Grid', icon: '💳', desc: 'Stripe Integration' },
    { day: 'Day 5', title: 'AI Verification', icon: '🤖', desc: 'A2P & Trust Protocols' },
];

export default function Curriculum() {
    return (
        <section className="py-24 bg-main border-t border-[#222]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-16 reveal">
                    The 5-Day Agency Sprint
                </h2>

                <div className="space-y-4">
                    {days.map((item, index) => (
                        <div key={index} className={`group relative p-6 bg-surface border border-white/5 hover:border-accent/50 rounded-lg transition-colors duration-300 reveal reveal-delay-${Math.min(index + 1, 5)}`}>
                            <div className="flex items-center gap-6">
                                <div className="text-2xl">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-1">
                                        <span className="text-sm font-mono text-accent/80 uppercase tracking-widest">{item.day}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm hidden sm:block">{item.desc}</p>
                                </div>
                                <div className="text-gray-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
