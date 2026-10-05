/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                /* Brand orange — from the Force bull logo (#F15A24). 600+ pass AA on white. */
                brand: {
                    50: "#FFF5F0",
                    100: "#FFE6D9",
                    200: "#FFCAB0",
                    300: "#FFA67D",
                    400: "#F97C45",
                    500: "#F15A24",
                    600: "#C9410D",
                    700: "#A3340B",
                    800: "#7E290A",
                    900: "#5A1E08",
                    950: "#361205",
                },
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
                sans: ['Barlow', 'system-ui', 'sans-serif'],
                display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
                serif: ['Georgia', 'serif'],
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
