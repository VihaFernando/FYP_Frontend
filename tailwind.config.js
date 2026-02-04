/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0071E3',
                secondary: '#F5F5F7',
                dark: '#1D1D1F',
                lightGray: '#F5F5F7',
                mediumGray: '#D2D2D7',
                darkGray: '#86868B',
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1rem',
            }
        },
    },
    plugins: [],
}
