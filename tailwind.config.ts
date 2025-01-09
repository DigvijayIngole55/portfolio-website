import type { Config } from "tailwindcss";

export default {
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other directories as needed for your project
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Keeping your existing palette
        background: "#1A202C",    // Dark gray background
        foreground: "#E2E8F0",    // Light gray text color
        gold: "#FFD700",          // Gold (primary)
        goldHover: "#E6C200",     // Darker gold for hover
        textMain: "#E2E8F0",      // Main text color
        textSecondary: "#A0AEC0", // Secondary text color
        accentBlue: "#4FD1C5",    // Accent color for buttons or links
        borderGray: "#2D3748",    // Border or divider gray
      },

      // Additional design tokens for a more "techy" look & feel
      backgroundImage: {
        // Example: diagonal stripes or a subtle gradient you could apply via bg-gradient-to-r, etc.
        'tech-gradient': "linear-gradient(to right, #1A202C 0%, #2D3748 100%)",
        // Feel free to add more backgrounds (particle or geometric) if desired
      },

      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      transitionTimingFunction: {
        // A smoother transition curve for modern UIs
        'soft': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },

      boxShadow: {
        // Subtle, medium, and strong "glow" effects
        'glow-sm': "0 0 6px rgba(255, 255, 255, 0.15)",
        'glow-md': "0 0 12px rgba(255, 255, 255, 0.25)",
        'glow-lg': "0 0 20px rgba(255, 255, 255, 0.35)",
        // You can also add color-specific glows (e.g. gold or accentBlue) if desired
        'gold-glow': "0 0 12px rgba(255, 215, 0, 0.4)",
        'accentBlue-glow': "0 0 12px rgba(79, 209, 197, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
