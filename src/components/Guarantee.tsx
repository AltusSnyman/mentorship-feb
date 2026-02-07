import React from 'react';

export default function Guarantee() {
    return (
        <section className="py-24 bg-main flex justify-center px-6">
            <div className="max-w-5xl w-full border border-[#222] bg-[#0A0A0A] p-10 md:p-16 text-center rounded-2xl relative overflow-hidden reveal">

                {/* Shield Icon Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                    <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path></svg>
                </div>

                <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-main border border-[#333] mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>

                    <h2 className="text-3xl font-extrabold text-white">The "Do The Work" 30-Day Guarantee.</h2>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                        We don't want your money if you aren't using the tools. Join today. Set up your Smart Hybrid system. If the software savings alone don't cover the cost, email us for a full refund.
                    </p>

                    <p className="text-xs text-gray-600 font-mono pt-4">
                        *Refunds require proof of setup (Connected Domain + N8N Server). We invest in builders.
                    </p>
                </div>
            </div>
        </section>
    );
}
