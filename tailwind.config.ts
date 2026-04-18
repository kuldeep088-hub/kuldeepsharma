import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#0a0a0f",
        "surface-2": "#111118",
        border: "#1e1e2e",
        accent: {
          purple: "#7c3aed",
          blue: "#2563eb",
          violet: "#8b5cf6",
          indigo: "#6366f1",
          cyan: "#06b6d4",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, rgba(37,99,235,0.1) 40%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "purple-blue":
          "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
        "purple-cyan":
          "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,0.3)",
        "glow-blue": "0 0 40px rgba(37,99,235,0.3)",
        "glow-sm": "0 0 20px rgba(124,58,237,0.15)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "gradient-shift": "gradientShift 6s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
