/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004c0bff', 
        secondary: '#ecececff',
      }
    },
  },
  plugins: [],
}