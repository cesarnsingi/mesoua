import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        condensed: ["'Barlow Condensed'", "sans-serif"],
        barlow: ["'Barlow'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
