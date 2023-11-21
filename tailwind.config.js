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
        noto: ["Noto Sans KR", "sans-serif"],
        staatliches: ["Staatliches", "cursive"],
        akatab: ["Akatab", "sans-serif"],
        mplus1: ["M PLUS 1 Code", "monospace"],
        fonda: ["Fondamento", "cursive"],
        bali: ["Noto Serif Balinese", "serif"],
        merriweather: ["Merriweather", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
        cantarell: ["Cantarell", "sans-serif"],
      },
      transitionTimingFunction: {
        "fill-in-out": "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      },
      minHeight: {
        "40r": "40rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};