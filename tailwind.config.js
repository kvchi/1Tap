/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E95F4",
        secondary:"#F0F6FB",
        red: "#FFE7E7",
        yell: "#E7D37F"
    },
    },
  },
  plugins: [],
}