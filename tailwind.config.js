/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Nijam':['Oswald','sans-serif'],
      'Nijam1': ['Pacifico, cursive']
    }
  },
  plugins: [require("daisyui")],
}

