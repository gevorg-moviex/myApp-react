/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        shadow1: "0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1)",
        shadow2: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      backgroundColor: {
        bgColor1: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
      },
      textColor: {
        color1: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}
