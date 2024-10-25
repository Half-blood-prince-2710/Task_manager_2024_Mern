/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'heading': 'clamp(2.5rem , 3vw, 6rem)',
        'formText': 'clamp(1.3rem , 1.6vw, 3rem)'
      }
    },
  },
  plugins: [],
}