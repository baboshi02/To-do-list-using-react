/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    colors:{
      red:colors.red,
      gray:colors.gray,
      blue:colors.blue,
      indigo:colors.indigo,
      PrimaryColor:"#1D1D1D",
      SecondaryColor:"#2272FF"

    },
    extend: {},
  },
  plugins: [],
}

