/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oliver: ['Oliver', 'sans-serif'],
      },
      colors: {
        background: "#FAE4F0",
        primary: "#C36E9A",
        secondary: "#72BF96",
        text: "#121420",
      },
    },
  },
  plugins: [],
};
