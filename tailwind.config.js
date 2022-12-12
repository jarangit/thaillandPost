/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // that is animation class
        animation: {
          fade: 'fadeIn 3s ease-in-out',
        },
    },
    colors: {
      'red': {
        light: '#FF3A1C',
        DEFAULT: '#D30D2B',
      },
      'blue': {
        light: '#B9D2DD',
        DEFAULT: '#002369',
        dark: '#49748A',
      },
      'white': {
        light: '#',
        DEFAULT: '#ffff',
        dark: '#',
      },
      'gray': {
        light: '#D6D6D6',
        DEFAULT: '#9B9898',
        dark: '#707070',
      },
      'green': {
        light: '#A3DFC9',
        DEFAULT: '#22952A',
      },
      'orange': {
        light: '#F8DFC1',
        DEFAULT: '#F7A848',
      },
      'black': {
        DEFAULT: '#000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
