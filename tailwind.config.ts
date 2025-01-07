import type { Config } from "tailwindcss";

export default {
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#1A202C", // Dark gray background
        foreground: "#E2E8F0", // Light gray text color
        gold: "#FFD700", // Gold as the primary color
        goldHover: "#E6C200", // Slightly darker gold for hover effects
        textMain: "#E2E8F0", // Main text color
        textSecondary: "#A0AEC0", // Secondary text color
        accentBlue: "#4FD1C5", // Accent color for buttons or links
        borderGray: "#2D3748", // Border or divider gray
      },
    },
  },
  plugins: [],
} satisfies Config;