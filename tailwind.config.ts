import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "97": "25rem",
        "98": "26rem",
        "99": "27rem",
        "100": "28rem",
      },
      width: {
        "draw": "calc(100vw - 100px)"
      },
      colors: {
        "letter": "#212529",
        "primary": "#cce3de",
        "body": "#eaf4f4"
      },
      fontSize: {
        "xxs": "0.55rem"
      }
    },
  },
  plugins: [],
};
export default config;
