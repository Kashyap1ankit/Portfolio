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
      Inter: ["Inter", "sans-serif"],
      InterTight: ["Inter Tight"],
      Oswald: ["Oswald"],
      Verdana: ["Verdana"],
    },
    colors: {
      custom: "#4338ca",
      sky: "#0284c7",
      white: "white",
      download: "#246cb4",
      connect: "#049b2c",
    },
  },
  plugins: [],
};
