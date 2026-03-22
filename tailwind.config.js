/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#2C2C2C",
        accent: "#3A3A3A",
        text: "#FFFFFF",
        highlightDark: "#4A90E2",
        highlight: "#48C9B0",
      },
    },
  },
  plugins: [],
};