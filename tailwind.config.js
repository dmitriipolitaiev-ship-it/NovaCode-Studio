/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* 🔵 ТВОЯ СТАРАЯ АНИМАЦИЯ */
      keyframes: {
        fade: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        /* 🔥 НОВАЯ АНИМАЦИЯ ДЛЯ ПРОЛИСТЫВАНИЯ ЦИФР */
        flip: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },

      animation: {
        "fade-in": "fade 0.6s ease-out",

        /* 🔥 АНИМАЦИЯ ДЛЯ FLIPNUMBER */
        flip: "flip 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
