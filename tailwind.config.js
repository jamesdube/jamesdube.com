const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
    },
    extend: {
      colors: {
        teal: colors.teal
      },
      zIndex: {
         '-10': '-10',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  	require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
}
