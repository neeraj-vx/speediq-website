import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        body: "var(--body)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "accent-soft": "var(--accent-soft)",
        "accent-soft-2": "var(--accent-soft-2)",
        paper: "var(--paper)",
        mist: "var(--mist)",
        "mist-2": "var(--mist-2)",
        "mist-line": "var(--mist-line)",
      },
      // Every weight utility sits a notch heavier than Tailwind's default. This
      // relies on variable fonts (Inter and Google Sans Flex), which render the
      // in-between values; see app/layout.tsx.
      fontWeight: {
        light: "350",
        normal: "450",
        medium: "550",
        semibold: "650",
        bold: "720",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        md: "var(--radius)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        shot: "var(--shadow-shot)",
        card: "0 1px 2px rgba(11, 15, 25, 0.04), 0 8px 24px -16px rgba(11, 15, 25, 0.18)",
      },
      maxWidth: {
        site: "1320px",
      },
    },
  },
  plugins: [],
} satisfies Config;
