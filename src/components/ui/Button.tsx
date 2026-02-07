import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    className?: string;
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    const baseStyles = 'px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-accent text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1',
        secondary: 'border border-white/20 bg-white/5 text-primary hover:bg-white/10 hover:border-accent/50',
        ghost: 'text-primary hover:text-accent hover:bg-white/5',
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
