/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      black: "#191919",
      white: "#fff",
      accent: "#D87C49",
      accentHover: "#ed7837",
      gray: {
        light: "#F1F1F1",
        dark: "#949494",
      },
    },
    extend: {
      borderRadius: {
        "2.5xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
