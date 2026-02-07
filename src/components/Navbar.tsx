import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative">
                        <img src="/assets/logo.png" alt="AI Agency Mentorship Logo" className="h-12 w-auto object-contain" />
                        {/* Subtle glow behind logo */}
                        <div className="absolute inset-0 bg-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Text is incorporated in the logo asset as per request, but fallback/SEO text here if needed, hidden visually if logo has text */}
                </div>

                {/* No other links as per Master Blueprint Phase 1 */}
            </div>
        </nav>
    );
}
