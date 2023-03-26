/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      libre: ["Libre Baskervile", "serif"],
      handrawn: ['Delicious Handrawn', "cursive"],
      alkatra: ["Alkatra", "cursive"],
      redacted:["Redacted Script", "cursive"],
      roboto: ["Roboto Mono", "monoscript"],
      DMsans: ["DM Sans", "sans-serif"],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      before: "100% 100%",
      after: "0% 100%",
    },
    extend: {
      colors: {
        berryblue: "#3b3d5b",
      },
      animation: {
        type: "type 2.7s ease-out .8s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(2ch)" },
          "25%, 30%": { transform: "translateX(3ch)" },
          "35%, 40%": { transform: "translateX(4ch)" },
          "45%, 50%": { transform: "translateX(5ch)" },
          "55%, 60%": { transform: "translateX(6ch)" },
        },
      },
      fontFamily: {
        BuonaDisplay: ["BuonaDisplay", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
