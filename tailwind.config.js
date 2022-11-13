/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red': {
        light: '#F06852',
        DEFAULT: '#D30D2B',
        dark: '#',
      },
      'blue': {
        light: '#',
        DEFAULT: '#002369',
        dark: '#',
      },
      'white': {
        light: '#',
        DEFAULT: '#ffff',
        dark: '#',
      },
      'gray': {
        light: '#',
        DEFAULT: '##9B9898',
        dark: '#707070',
      },
    },
  },
  plugins: [],
}
