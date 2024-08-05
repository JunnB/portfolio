import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        primary: ["var(--font-fredoka)", "sans-serif"],
        secondary: ["var(--font-happy-monkey)", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "linear-primary-secondary":
          "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))",
        "linear-primary-accent":
          "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
        "linear-secondary-accent":
          "linear-gradient(to right, hsl(var(--secondary)), hsl(var(--accent)))",
        "linear-primary-secondary-accent":
          "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))",
        "radial-primary-secondary":
          "radial-gradient(hsl(var(--primary)), hsl(var(--secondary)))",
        "radial-primary-accent":
          "radial-gradient(hsl(var(--primary)), hsl(var(--accent)))",
        "radial-secondary-accent":
          "radial-gradient(hsl(var(--secondary)), hsl(var(--accent)))",
        "radial-primary-secondary-accent":
          "radial-gradient(hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void
    }) {
      const newUtilities = {
        ".text-gradient": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config

export default config
