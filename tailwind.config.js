/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#32384b',
      'white': 'white',
      'light-grey': '#f2f3ff',
      'mansa-blue': '#08a5aa',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
