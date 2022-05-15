module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          900: "#CB0152",
          800: "#E1035C",
          700: "#F10664",
          600: "#F01069",
          500: "#ED156D",
          400: "#FF0A54",
          300: "#FF477E",
          200: "#FF7096",
          100: "#FBB1BD",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [],
};
