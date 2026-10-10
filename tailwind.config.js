/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                force: {
                    primary: "#00FFCC",
                    dark: "#0F172A",
                    accent: "#FF6B00",
                },
                wears: {
                    primary: "#1A1A1A",
                    gold: "#D4AF37",
                    ivory: "#F5F5F5",
                }
            },
            fontFamily: {
                sans: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
                serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
                // Bodoni MT where the device has it (Windows with Office); Bodoni Moda web font everywhere else
                bodoni: ['"Bodoni MT"', 'var(--font-bodoni)', 'Bodoni Moda', 'Didot', 'serif'],
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'marquee-slow': 'marquee 50s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
