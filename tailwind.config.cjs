/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'player': "url('/assets/play.png')"
      },
      animation: {
        'slow-spin': "4s linear 0s infinite normal none running spin"
      } 
    },
  },
  plugins: [],
}
