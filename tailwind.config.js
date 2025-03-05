/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "280px",
      md: "450px",
      lg: "650px"
    },
    fontFamily: {
      great: ["Great Vibes", "cursive"],
      raleway: ["Raleway", "sans-serif"],
      
    },
    container:{
      center: true,
      padding: {
        DEFAUL: "12px",
        md: "32px"
      }}
  },
  plugins: [],
}