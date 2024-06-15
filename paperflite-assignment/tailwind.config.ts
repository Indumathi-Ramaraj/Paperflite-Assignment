import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Samsung Sharp Sans": ["Samsung Sharp Sans", "sans-serif"],
      },
    },
    screens: {

      sm: "320px",

      md: "375px",

      lg: "768px",

      xl: "1024px",
    },
  },

  plugins: [],
};
export default config;
