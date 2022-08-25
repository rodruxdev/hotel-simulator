/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C45AD",
        secondary: "#FF702E",
        background: "#E9E6E9",
        black: "#060B10",
        dark: "#1E3242",
        error: "#991802",
      },
      fontFamily: {
        sans: ["Roboto ", "sans-serif"],
      },
    },
  },
  plugins: [],
};
