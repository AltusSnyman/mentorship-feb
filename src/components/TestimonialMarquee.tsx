import React from 'react';

const testimonials = [
    {
        name: 'Sarah J.',
        role: 'Creative Director',
        date: '2h • General discussion',
        title: 'Just launched!',
        body: "My agency site is live in just 24 hours. The 5-day sprint works. The Smart Hybrid system is insane. Got my first booked appointment already.",
        avatar: '/assets/avatars/sarah.png'
    },
    {
        name: 'Mike T.',
        role: 'Tech Founder',
        date: '1d • Wins',
        title: "The math doesn't lie.",
        body: "Cancelled my $497/mo direct GHL account today. Switched to the Founders rate here. Saved $400/mo instantly for the exact same setup. No brainer.",
        avatar: '/assets/avatars/mike.png'
    },
    {
        name: 'David L.',
        role: 'Developer',
        date: '3h • Vibe Coding',
        title: 'Vibe Coding is real.',
        body: "I don’t know Python, but I just 'vibe coded' a custom lead qualification bot for a real estate agent using Lovable. This skill is a game changer.",
        avatar: '/assets/avatars/david.png'
    },
    {
        name: 'Chris P.',
        role: 'Agency Owner',
        date: '5d • Infrastructure',
        title: 'Finally look professional.',
        body: "Love the grey-label setup. My clients log into MY domain with MY logo. They have no idea it's GHL underneath. It looks enterprise grade.",
        avatar: '/assets/avatars/chris.png'
    },
    {
        name: 'Amanda R.',
        role: 'Operations',
        date: '12h • Automations',
        title: 'The blueprints saved me weeks.',
        body: "Downloaded the N8N lead scraping workflow from the vault, plugged it in, and it just worked. The automation library alone is worth the price of admission.",
        avatar: '/assets/avatars/amanda.png'
    }
];

export default function TestimonialMarquee() {
    return (
        <div className="w-full overflow-hidden relative">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-main via-transparent to-main"></div>

            {/* Scroll Right Animation - Slower (1.5x) */}
            <div className="flex w-max animate-marquee-reverse-slow hover:[animation-play-state:paused]">
                {/* Set 1 */}
                <div className="flex items-start gap-6 px-4">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={`t1-${i}`} {...t} />
                    ))}
                </div>

                {/* Set 2 */}
                <div className="flex items-start gap-6 px-4">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={`t2-${i}`} {...t} />
                    ))}
                </div>

                {/* Set 3 */}
                <div className="flex items-start gap-6 px-4">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={`t3-${i}`} {...t} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ name, date, title, body, avatar }: any) {
    return (
        <div className="w-[400px] shrink-0 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-accent/30 transition-colors group">
            <div className="flex items-center gap-3 mb-3">
                <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-secondary text-xs">{date}</div>
                </div>
            </div>
            <h4 className="text-white font-bold mb-2 group-hover:text-accent transition-colors">{title}</h4>
            <p className="text-secondary text-sm leading-relaxed">{body}</p>
        </div>
    );
}
