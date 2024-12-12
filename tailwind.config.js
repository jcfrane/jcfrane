/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandUbuntuOrange: {
          "1000": "#E95420",
          "900": "#EB6536",
          "800": "#ED764D",
          "700": "#F08763",
          "600": "#F08763",
          "500": "#F29879",
          "400": "#F4AA90",
          "300": "#F6BBA6",
          "200": "#F8CCBC",
          "100": "#FBDDD2",
          "50": "#FDEEE9"
        },
        brandLightAubergine: {
          "1000": "#77216F",
          "900": "#84377D",
          "800": "#924D8B",
          "700": "#924D8B",
          "600": "#9F639A",
          "500": "#AD79A8",
          "400": "#BB90B7",
          "300": "#C8A6C5",
          "200": "#D6BCD3",
          "100": "#E3D2E2",
          "50": "#F1E8F0"
        },
        brandMidAubergine: {
          "1000": "#5E2750",
          "900": "#6E3C61",
          "800": "#7E5273",
          "700": "#8E6784",
          "600": "#9E7D96",
          "500": "#AE93A7",
          "400": "#BEA8B9",
          "300": "#DED3DC",
          "200": "#EEE9ED",
        },
        brandWarmGrey: {
          "1000": "#AEA79F",
          "900": "#B6AFA8",
          "800": "#BEB8B2",
          "700": "#C6C1BB",
          "600": "#C6C1BB",
          "500": "#CECAC5",
          "400": "#DEDBD8",
          "300": "#EEEDEB",
          "200": "#F2F1F0",
          "100": "#F6F6F5",
          "50": "#F1E8F0"
        }
      }
    },
  },
  plugins: [],
}
