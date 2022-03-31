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
          blue: "#2797FA",
          gray400: "#1B1A1A",
          gray300: "#232121",
          gray200: "#2E2D2D",
          gray100: "#76787E",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        bossa: "Bossa",
      },
    },
  },
}
