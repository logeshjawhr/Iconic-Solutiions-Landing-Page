/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navcolor":"#EEEEEE",
        "bg":"#FFD369"
      }
    },
  },
  plugins: [],
}

