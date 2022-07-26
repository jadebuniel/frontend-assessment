/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.75rem',
        card: '15px',
      },
      boxShadow: {
        card: '0px 0px 4px 2px rgba(69,69,69,0.15)',
      },
      backgroundColor: {
        overlay: '#999',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
