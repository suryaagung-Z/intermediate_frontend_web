/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue1": "#7895B2",
      },
      fontFamily: {
        "sourceSerifPro": ["Source Serif Pro",  "serif"],
        "poppins": ["Poppins",  "serif"],
      },
      gridTemplateColumns: {
        "body": "auto 1fr",
        "main": "3fr 1fr"
      },
      gridTemplateRows: {
        "nav": "auto 1fr",
      },
      spacing: {
        "full200": "200%"
      },
      zIndex: {
        "min1": "-1"
      },
      screens: {
        "extra-small": "500px"
      }
    },
  },
  plugins: [],
}
