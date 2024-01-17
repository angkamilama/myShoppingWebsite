/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        navToggleRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        navToggleRight: "navToggleRight 0.5s ease-in-out 1",
      },
    },
    fontFamily: {
      myFont: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
