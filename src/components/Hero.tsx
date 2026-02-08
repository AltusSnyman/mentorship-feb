import Button from './ui/Button';

export default function Hero() {
    return (
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-6 overflow-hidden">

            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-70"
                >
                    <source src="/assets/vid1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* 1. Headline (H1) */}
            <div className="relative z-10 max-w-5xl mx-auto mb-6">
                <h1 className="text-5xl lg:text-7xl font-extrabold text-center tracking-tight leading-[1.1]">
                    <span className="text-white">Launch Your AI Agency Using The New </span>
                    <br className="hidden md:block" />
                    <span className="text-accent text-glow">"Vibe Coding Protocol"</span>
                    <span className="text-white"> + The </span>
                    <span className="text-accent text-glow">Enterprise Tech Stack</span>
                    <span className="text-white"> (Included).</span>
                </h1>
            </div>

            {/* 2. Subheadline (H2) */}
            <h2 className="relative z-10 text-lg md:text-xl text-gray-200 text-center max-w-[700px] mx-auto mb-12 leading-relaxed font-body">
                Stop struggling with complex code and expensive monthly software fees. We teach you how to build custom AI tools using natural language and give you the unlimited
                <strong className="text-white ml-1">"Smart Hybrid" Infrastructure</strong> to run it all.
            </h2>

            {/* 3. CTA Button (Formerly 4) */}
            <div className="relative z-10 flex flex-col items-center gap-4">
                <a href="https://app.gohighlevel.com/v2/preview/O4GBs6uRUtGi8iPesP0m" className="px-10 py-5 bg-accent text-black font-extrabold text-lg tracking-wide rounded-sm shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:bg-[#33F4FF] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] hover:-translate-y-1 transition-all duration-300 uppercase">
                    Start The 5-Day Agency Sprint
                </a>

                {/* 4. Trust Text (Formerly 5) */}
                <p className="text-sm text-gray-400 font-mono tracking-wide">
                    Get The Unlimited Infrastructure + Vibe Coding Academy for $97/mo
                </p>
            </div>

        </section>
    );
}
