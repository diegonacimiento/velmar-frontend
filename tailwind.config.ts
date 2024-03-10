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
        "18": "4.5rem",
        "97": "25rem",
        "98": "26rem",
        "99": "27rem",
        "100": "28rem",
        "452p": "28.25rem",
        "600p": "37.5rem"
      },
      minHeight: {
        "600p": "37.5rem",
        "main": "calc(100vh - 526px)"
      },
      width: {
        "draw": "calc(100vw - 100px)",
        "30": "7.5rem",
        "500p": "31.25rem"
      },
      colors: {
        "letter": "#212529",
        "primary": "#e3d5ca",
        "body": "#fef9ef",
        "secondary": "#b56576"
      },
      fontSize: {
        "xxs": "0.55rem"
      },
      maxWidth: {
        "88": "22rem",
        "1k": "38.75rem",
        "2k": "77.5rem",
        "520": "32.5rem",
        "650": "40.625rem",
        "screen-20": "calc(100vw - 70px)"
      },
      screens: {
        "rd": "922px",
        "-rd": {"max": "921px"},
        "-sm": {"max": "640px"},
        "-xsm": {"max": "425px"}
      },
      scale: {
        "200": "2"
      },
      gridTemplateColumns: {
        "checkout": "repeat(3, 1fr) auto"
      }
    },
  },
  plugins: [],
};
export default config;
