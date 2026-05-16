import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#fbf8ff",
          100: "#f3ecff",
          200: "#e9dcff",
          300: "#d8c2ff",
          400: "#bd99ff",
          500: "#9f6bf1",
          600: "#854bd6",
          700: "#6d36b4",
          800: "#5b3092",
          900: "#4b2876"
        },
        plum: "#39204f",
        blush: "#fff7fb"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(109, 54, 180, 0.16)",
        glow: "0 20px 80px rgba(159, 107, 241, 0.25)"
      },
      backgroundImage: {
        "premium-radial": "radial-gradient(circle at 20% 20%, rgba(216,194,255,.65), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,247,251,.9), transparent 34%), linear-gradient(135deg, #fbf8ff 0%, #ffffff 46%, #f3ecff 100%)"
      }
    },
  },
  plugins: [],
};

export default config;
