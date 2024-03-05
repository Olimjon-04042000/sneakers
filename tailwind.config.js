/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            content: {
                'link': 'url("/icons/link.svg")',
            },
        },
    },
    plugins: [require('daisyui')],
}