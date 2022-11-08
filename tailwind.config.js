/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      maxHeight: {
        "600px": "600px",
      },
      backgroundColor: {
        mydark: "rgba(24,27,33, 1)",
      },
      colors: {
        mydark: "rgba(24,27,33, 1)",
        mydark04: "rgba(24,27,33, 0.4)",
        mydark05: "rgba(24,27,33, 0.5)",
        mydark005: "rgba(24,27,33, 0.05)",
        myBlue: "#40AAEB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        body: "auto 1fr",
        main: "3fr 1fr",
      },
      gridTemplateRows: {
        nav: "auto 1fr",
      },
      spacing: {
        full200: "200%",
      },
      zIndex: {
        min1: "-1",
      },
      screens: {
        "extra-small": "500px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: ["rounded"],
  },
};
