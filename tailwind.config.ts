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
        background: "#0F172A",
        card: "#1E293B",
        primary: "#6366F1",
        secondary: "#8B5CF6",
        highlight: "#22D3EE",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
        accent: ["var(--font-poppins)"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,0.35), 0 0 36px rgba(34,211,238,0.22)",
        neon: "0 0 45px rgba(99,102,241,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        glow: "pulseGlow 5s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
