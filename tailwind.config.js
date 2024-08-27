// tailwind.config.js
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
        secondary: "#F0F6FB",
        red: "#FFE7E7",
        yell: "#E7D37F"
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '75%': { transform: 'translateX(1px)' },
        },
      },
      animation: {
        shake: 'shake 0.3s ease-in-out',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('hover-override', '&:hover:not(.group:hover)');
    }
  ],
}