/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        noto: ["Noto Sans KR, sans-serif"],
      },
      transitionTimingFunction: {
        "fill-in-out": "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      },
      minHeight: {
        "40r": "40rem",
      },
    },
    // colors: {
    //   cream: "#f2f4f3",
    //   viridian: "#22333b",
    //   mud: "#5e503f",
    //   dark: "#0a0908",
    // },
  },
  plugins: [],
  darkMode: "class",
};
