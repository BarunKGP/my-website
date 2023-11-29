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
        noto: ["Noto Sans KR", "sans-serif"],
        // quicksand: ["Quicksand", "sans-serif"],
        aileron: ["Aileron", "sans-serif"],

        bayon: ["var(--font-bayon)", "sans-serif"],
        handjet: ["var(--font-handjet)", "sans-serif"],
        hwr: ["var(--font-hwr)", "cursive", "sans-serif"],
        qs: ["var(--font-qs)", "sans-serif"],
        cantarell: ["var(--font-cantarell)", "sans-serif"],
        akatab: ["var(--font-akatab)", "sans-serif"],

        lora: ["Lora", "serif"],
        bali: ["Noto Serif Balinese", "serif"],
        merriweather: ["Merriweather", "serif"],

        mplus1: ["M PLUS 1 Code", "monospace"],
      },
      fontWeight: {
        "aileron-regular": 400,
        "aileron-light": 300,
        "aileron-semibold": 600,
        "aileron-bold": 700,
        "bayon-regular": 400,
        "handjet-extralight": 200,
        "handjet-light": 300,
        "handwriting-regular": 400,
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