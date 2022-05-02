const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          500: '#ef4444',
          800: '#d63434'
        },
        trueGray: {
          ...colors.trueGray,
        }
      }
    },
  },
  plugins: [],
}
