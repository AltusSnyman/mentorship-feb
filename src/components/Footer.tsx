import React from 'react';

export default function Footer() {
    return (
        <footer className="py-16 bg-main border-t border-[#111] text-center">
            <div className="max-w-7xl mx-auto px-6 space-y-12">

                {/* Warning Banner */}
                <div className="inline-block bg-accent/10 border border-accent/20 rounded-lg px-6 py-3">
                    <p className="text-accent font-mono text-sm tracking-wide">
                        ⚠️ Price increases to $197/month after launch window
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white font-bold text-lg">AI Agency Mentorship</h3>
                    <p className="text-secondary text-sm">Part of Altcutm LLC</p>
                    <p className="text-secondary text-sm max-w-sm mx-auto">
                        Training & mentorship to launch your AI & Automation agency.
                    </p>
                </div>

                <div className="space-y-2 text-sm text-secondary">
                    <p><a href="mailto:alt@altcutman.com" className="hover:text-white transition-colors">alt@altcutman.com</a></p>
                    <p>+64 21 255 0493</p>
                    <p>Message Altus directly in community</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6 text-xs text-gray-600 font-medium uppercase tracking-wider">
                    <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                </div>

                <p className="text-[11px] text-gray-500 max-w-4xl mx-auto leading-relaxed text-justify">
                    Disclaimer: Results shown on this site are not typical and individual results will vary. Your success depends on your effort, dedication, skill level, and market conditions. We make no guarantees of income or results. All content is for educational and informational purposes only. This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. We are an independent education company and providing software access via an agency license. We do not guarantee specific earnings. See our Terms of Service for full details.
                </p>

                <p className="text-[10px] text-gray-800">
                    &copy; {new Date().getFullYear()} Altcutm LLC. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
