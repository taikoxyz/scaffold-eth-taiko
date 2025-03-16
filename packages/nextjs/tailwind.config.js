/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("daisyui")],
    darkTheme: "dark",
    darkMode: ["selector", "[data-theme='dark']"],
    // DaisyUI theme colors
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#E81899",           // Taiko Pink
                    "primary-content": "#FFFFFF",
                    secondary: "#5D07C8",         // Purple
                    "secondary-content": "#FFFFFF",
                    accent: "#0C101B",            // Deep Gray
                    "accent-content": "#FFFFFF",
                    neutral: "#FFFFFF",
                    "neutral-content": "#0C101B",
                    "base-100": "#FFFFFF",
                    "base-200": "#FFD0E8",        // Light Pink
                    "base-300": "#E81899",        // Taiko Pink
                    "base-content": "#0C101B",
                    info: "#5D07C8",              // Purple
                    success: "#6ECFB0",           // Mint Green
                    warning: "#FCE2A0",           // Light Yellow
                    error: "#FC6264",             // Coral
                },
            },
            {
                dark: {
                    primary: "#E81899",           // Taiko Pink
                    "primary-content": "#FFFFFF",
                    secondary: "#5D07C8",         // Purple
                    "secondary-content": "#FFFFFF",
                    accent: "#0C101B",            // Deep Gray
                    "accent-content": "#FFFFFF",
                    neutral: "#1A1A2E",           // Dark background
                    "neutral-content": "#FFFFFF",
                    "base-100": "#0F0F1A",        // Very dark background
                    "base-200": "#1A1A2E",        // Dark purple-blue
                    "base-300": "#30144F",        // Dark Taiko Purple
                    "base-content": "#FFFFFF",    // White text
                    info: "#5D07C8",              // Purple
                    success: "#6ECFB0",           // Mint Green
                    warning: "#FCE2A0",           // Light Yellow
                    error: "#FC6264",             // Coral
                },
            },
        ],
    },
    theme: {
        extend: {
            boxShadow: {
                center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
            },
            animation: {
                "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            colors: {
                'taiko-pink': '#E81899',
                'taiko-purple': '#5D07C8',
                'pink-200': '#FFD0E8', // Override Tailwind's pink-200 to match the footer color
            },
            backgroundColor: {
                'taiko-gradient-start': '#FFD0E8',
                'taiko-gradient-end': '#E81899',
            },
        },
    },
};