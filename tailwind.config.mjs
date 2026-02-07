/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                main: '#0A0A0A', // Deep Void (was #050505)
                surface: '#1A1A1A', // Secondary Background
                primary: '#FFFFFF', // Headings
                secondary: '#A3A3A3', // Body text
                accent: '#3B82F6', // Electric Blue (was #00F0FF)
                'accent-light': '#60A5FA', // Lighter Blue for gradients
                'accent-dark': '#2563EB', // Darker Blue for hover
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                body: ['Roboto', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
                'marquee-reverse-slow': 'marquee-reverse 37.5s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0%)' },
                }
            }
        },
    },
    plugins: [],
}
