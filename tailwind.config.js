/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'dark-blue': '#06070e',
        'light-blue': '#70bccc',
      }

    },
  },
  plugins: [],
}