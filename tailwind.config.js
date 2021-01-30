module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'jura': ['Jura'],
      'roboto': ['Roboto'],
    },
    extend: {
      colors: {
        'everyBlue': '#02051E',
        'everyYellow': '#F8E505',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
