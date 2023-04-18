/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1E1E1E",
          DEFAULT: "#2D2D2D",
        },
      },
    },
  },
  plugins: [],
};
