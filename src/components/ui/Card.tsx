import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
    return (
        <div
            className={twMerge(
                'bg-[#1A1A1A]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6',
                hoverEffect && 'hover:border-accent/40 transition-colors duration-500',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
