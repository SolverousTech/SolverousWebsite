/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
        body: ['Inria Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

