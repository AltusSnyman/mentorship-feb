import React from 'react';

const logos = [
    { name: 'n8n', src: '/assets/logos/n8n.png' },
    { name: 'GoHighLevel', src: '/assets/logos/ghl.png' },
    { name: 'Antigravity', src: '/assets/logos/antigravity.png' },
    { name: 'OpenAI', src: '/assets/logos/openai.png' },
    { name: 'Skool', src: '/assets/logos/skool.png' },
];

export default function LogoMarquee() {
    return (
        <div className="w-full overflow-hidden relative">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-main via-transparent to-main"></div>

            <div className="flex w-max animate-marquee">
                {/* Set 1 */}
                <div className="flex items-center gap-16 px-8">
                    {logos.map((logo, index) => (
                        <img
                            key={`logo-1-${index}`}
                            src={logo.src}
                            alt={logo.name}
                            className="h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </div>

                {/* Set 2 (Duplicate for loop) */}
                <div className="flex items-center gap-16 px-8">
                    {logos.map((logo, index) => (
                        <img
                            key={`logo-2-${index}`}
                            src={logo.src}
                            alt={logo.name}
                            className="h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </div>

                {/* Set 3 (Extra buffer) */}
                <div className="flex items-center gap-16 px-8">
                    {logos.map((logo, index) => (
                        <img
                            key={`logo-3-${index}`}
                            src={logo.src}
                            alt={logo.name}
                            className="h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
