/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#273043",
        honey: "#F39237",
        magenta: "#BF1363",
        azure: "#0E79B2",
        parchment: "#FBFFF1",
      },

      fontFamily: {
        outfit: ["Outfit"],
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
