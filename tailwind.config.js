const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      bookRed:'#F17367',
      bookGreen: '#64755F',
      bookWhite: '#FAF5EC',
      black: colors.black,
      white: colors.white,
      green: colors.emerald,
      gray: colors.gray
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
