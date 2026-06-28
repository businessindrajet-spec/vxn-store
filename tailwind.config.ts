import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        "paper-raised": "var(--paper-raised)",
        brass: "var(--brass)",
        "brass-strong": "var(--brass-strong)",
        forest: "var(--forest)",
        rust: "var(--rust)",
        line: "var(--line)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        voice: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
