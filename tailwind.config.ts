import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "66vh": "66vh",
      },
      colors: {
        "dark-primary": "hsl(230deg, 100%, 69%)",
        "light-primary": "hsl(245deg, 100%, 60%)",
        "light-card-primary": "hsl(200deg, 75%, 65%)",
        "dark-card-primary": "hsl(200deg, 50%, 60%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
