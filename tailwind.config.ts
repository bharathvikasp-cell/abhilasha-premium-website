import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#fcf8ff",
          100: "#f4e9ff",
          200: "#ead6ff",
          300: "#d8b6ff",
          400: "#bd84ff",
          500: "#9d55f0",
          600: "#7d31cf",
          700: "#6728aa",
          800: "#522184",
          900: "#3d1765"
        },
        plum: "#2f1648",
        blush: "#fff4f8",
        saffron: "#dd8a12",
        ocean: "#0e4d8a"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(82, 33, 132, 0.16)",
        glow: "0 20px 90px rgba(125, 49, 207, 0.28)",
        card: "0 18px 50px rgba(47, 22, 72, 0.10)"
      },
      backgroundImage: {
        "premium-radial": "radial-gradient(circle at 18% 18%, rgba(216,182,255,.75), transparent 30%), radial-gradient(circle at 88% 8%, rgba(221,138,18,.16), transparent 28%), radial-gradient(circle at 70% 72%, rgba(14,77,138,.10), transparent 30%), linear-gradient(135deg, #fcf8ff 0%, #ffffff 45%, #f4e9ff 100%)",
        "deep-purple": "linear-gradient(135deg, #3d1765 0%, #6728aa 55%, #9d55f0 100%)"
      }
    },
  },
  plugins: [],
};

export default config;
