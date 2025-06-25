 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Add this line
  theme: { 
    extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          accent: "var(--accent)",
          hlDark: "var(--hlDark)",
          hlLight: "var(--hlLight)",
          white: "var (--off-white)",
        },
    } 
  },
  plugins: [],
};
