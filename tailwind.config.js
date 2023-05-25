/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const myTheme = {
  primary: '#FBEAEB',
  secondary: '#2F3C7E',
  white: colors.white,
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: myTheme,
    backgroundColor: myTheme,
    extend: {},
  },
  plugins: [],
}