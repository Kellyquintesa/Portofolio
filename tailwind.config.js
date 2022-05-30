module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        primary: "#f6d9d2",
        bio: "#92CAA4",
        hoverText: "#fff7ed",
        hoverBg: "#d9a79f",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
