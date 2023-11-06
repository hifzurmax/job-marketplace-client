/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        'main': '#00AE79',
        'second': '#495057',
        'third': '#F8CD61',
        'footer': '#2E3538',
      },
    },
  },
  plugins: [require("daisyui")],
}

