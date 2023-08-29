/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        paragraph: "15px",
      },
      fontFamily: {
        'outfit': ['Outfit']
      },
      colors: {
        white: "#ffffff",
        "light-gray": "#d6e2f0",
        "grayish-blue": "#7b879d",
        "dark-blue": "#1f3251",
      },
    },
  },
  plugins: [],
};
