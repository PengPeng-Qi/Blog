import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const Config: Config = {
  darkMode: ["class"],
  content: [
    "./blogs/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      height: {
        "66vh": "66vh",
      },
      colors: {
        "dark-primary": "hsl(230deg, 100%, 69%)",
        "light-primary": "hsl(245deg, 100%, 60%)",
        "light-card-primary": "hsl(200deg, 75%, 80%)",
        "dark-card-primary": "hsl(200deg, 50%, 20%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

module.exports = Config;
