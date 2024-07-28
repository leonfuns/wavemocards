/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "a, button, input, select, textarea": {
          transition:
            "all " +
            theme("transitionDuration.DEFAULT") +
            " " +
            theme("transitionTimingFunction.DEFAULT"),
        },
      });
    },
  ],
  darkMode: "selector",
};
