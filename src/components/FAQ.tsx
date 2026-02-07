import React, { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Do I need technical experience?",
        answer: "No. Training starts from zero — we give checklists and copy-paste templates so you can implement step-by-step."
    },
    {
        question: "How quickly can I make money?",
        answer: "Fastest students book clients in 2–3 weeks. Most see traction within 30–60 days with consistent implementation."
    },
    {
        question: "What software costs should I expect?",
        answer: "We include essential tools in the membership to minimize upfront software spend."
    },
    {
        question: "Is this ongoing support or a one-time course?",
        answer: "Ongoing mentorship + weekly calls + community access — not a one-and-done course."
    },
    {
        question: "What if I can't find clients?",
        answer: "Use our cold email + SMS scripts, 100K leads starter pack, and call coaching — plug-and-play."
    },
    {
        question: "What happens if I wait?",
        answer: "The price doubles. Same product later, higher cost. Early action locks your founders rate."
    },
    {
        question: "How does the guarantee work?",
        answer: "Follow the steps for Month-1; if you implemented and it failed, refund within 30 days."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-main relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                        COMMON QUERIES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">Questions</span>
                    </h2>
                    <p className="text-secondary text-lg">Everything you need to know about the mentorship.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`reveal reveal-delay-${Math.min(index % 3 + 1, 3)}`}>
                            <FAQItem
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className={clsx(
                "cursor-pointer rounded-xl border transition-all duration-300 overflow-hidden",
                isOpen
                    ? "bg-surface border-accent/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                    : "bg-surface/50 border-white/5 hover:border-white/10 hover:bg-surface"
            )}
        >
            <div className="p-6 flex items-center justify-between gap-4">
                <h3 className={clsx("font-semibold text-lg transition-colors", isOpen ? "text-white" : "text-gray-300")}>
                    {question}
                </h3>
                <div className={clsx("text-accent transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </div>

            <div
                className={clsx(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-secondary leading-relaxed border-t border-transparent">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
