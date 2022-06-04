module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      fontFamily: {
        primary: ["'Tiro Gurmukhi'", "serif"],
        secondary: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        primary: "#DD7041",
        bio: "#92CAA4",
        hoverBg: "#d9a79f",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
