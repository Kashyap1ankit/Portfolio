/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      // Inter: ["Inter", "sans-serif"],
      Anta: ["Anta", "sans-serif"],
      Verdana: ["Verdana"],
      Kanit: ["Kanit", "sans-serif"],
    },
    colors: {
      custom: "#4338ca",
      sky: "#0284c7",
      white: "white",
      download: "#246cb4",
      connect: "#049b2c",
      gray: "#cbd5e1",
      skyLight: "#0ea5e9",
      pink: "#ff0066;",
    },
    invert: {
      10: "0.1",
      25: ".25",
      50: ".5",
      65: ".65",
      75: ".75",
      80: ".80",
      100: "1",
    },
  },
  plugins: [],
};
