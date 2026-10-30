import type { Config } from "tailwindcss";

// Colours map to the CSS variables defined in src/index.css (DESIGN.md tokens).
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}", "!./src/components/ui/**"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", '"SFMono-Regular"', "Menlo", "Consolas", "monospace"],
      },
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        sunken: "var(--surface-sunken)",
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
        ink: "var(--text)",
        "ink-2": "var(--text-2)",
        "ink-3": "var(--text-3)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "on-accent": "var(--on-accent)",
        // Kept so the shadcn primitives still resolve
        border: "var(--border)",
        background: "var(--canvas)",
        foreground: "var(--text)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      maxWidth: {
        reading: "680px",
      },
      boxShadow: {
        overlay: "var(--overlay-shadow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
