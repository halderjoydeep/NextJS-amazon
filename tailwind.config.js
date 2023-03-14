/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,

  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: '#232F3E',
          default: '#131921',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
};
