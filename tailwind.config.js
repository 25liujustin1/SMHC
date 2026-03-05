/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:    "#0D1B4B",
        royal:   "#2452A4",
        saffron: "#F4871E",
        "gold-light": "#FAC97E",
        cream:   "#FDFAF5",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
};