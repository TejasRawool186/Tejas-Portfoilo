import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        card: "#F0EDE8",
        primary: "#1D4ED8",
        secondary: "#FFB703",
        highlight: "#E63946",
        ink: "#1A1A1A",
        muted: "#B0ADA6",
        grid: "#C8C4BC",
        success: "#16A34A",
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        display: ["var(--font-inter)"],
        accent: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        brutal: "6px 6px 0 #1A1A1A",
        brutalLg: "10px 10px 0 #1A1A1A",
        blue: "3px 3px 0 #1D4ED8",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(26,26,26,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.12) 1px, transparent 1px)",
      },
      keyframes: {
        floatGeometric: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(3deg)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "floatGeometric 4s ease-in-out infinite",
        fade: "fadeInUp 200ms ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
