import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            zIndex: {
                '60': '60',
                '70': '70',
            }
        }
    },
    plugins: [],
}

export default config