import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This matches the variable name we set in layout.tsx
        sans: ["var(--font-wix)", "sans-serif"], 
      },
      colors: {
        // Deep Space Palette - Premium Dark Mode
        dark: {
          bg: "#0B1121",           // Rich Slate-950/Navy hybrid - Main background
          secondary: "#151F32",     // Lighter Navy - Cards, dropdowns, alternating sections
          border: "rgba(255, 255, 255, 0.08)", // Subtle white stroke
        },
        // Text Colors for dark theme
        text: {
          heading: "#F8FAFC",       // Slate-50 - For headings
          body: "#94A3B8",          // Slate-400 - For body text (prevents eye strain)
          muted: "#64748B",         // Slate-500 - Muted text
        },
      },
      backgroundColor: {
        "dark-bg": "#0B1121",
        "dark-secondary": "#151F32",
      },
      borderColor: {
        "dark-border": "rgba(255, 255, 255, 0.08)",
      },
      boxShadow: {
        // Glow effects for premium feel
        "glow-blue": "0 0 30px -5px rgba(59, 130, 246, 0.5)",
        "glow-blue-lg": "0 0 60px -10px rgba(59, 130, 246, 0.3)",
        "dark-lg": "0 10px 40px rgba(0, 0, 0, 0.5)",
        "dark-xl": "0 20px 60px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        // Gradient for premium elements
        "blue-glow": "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;