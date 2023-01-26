/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#252525',
        tertiary: '#313131',
        quaternary: '#414141',
        newGreen: '#b1142d',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
