const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        devs: {
          black: "#141414",
          yellow: "#E7CD54",
          yellow100: "#FFE87B",
          blue: "#2797FA",
          gray400: "#1B1A1A",
          gray300: "#232121",
          gray200: "#2E2D2D",
          gray100: "#7F7F7F",
          gray50: "#454343",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        bossa: "Bossa",
      },
    },
  },
}
