module.exports = {
  purge: [],
  // 테일윈드가 제공하는 용량 최적화?
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },

  },
  variants: {
    extend: {
      display: ['group-hover'],
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],

    },
  },
  plugins: [

  ],


};
