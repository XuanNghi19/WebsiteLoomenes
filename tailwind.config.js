/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      openSans: ['"Open Sans"'],
      playfairDisplay: ['"Playfair Display"'],
      popins: ['"Poppins"'],
    },
    extend: {
      colors: {
        "color-amber": "#fef3c7",
        "color-amberGray": "#f1cf87",
        "color-boldYellow": "#caa250",
        "color-dirtyYellow": "#555438",
        "color-gray": "#9F9F9f",
        "color-red": "#D80203",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
