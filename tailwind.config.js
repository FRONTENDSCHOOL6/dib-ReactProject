/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        subVisual: 'url("/subVisual.png")',
      },
      colors: {
        primary: "#627D59",
        dibFooter: "#382F2D",
        dibBlack: "#181818",
        dibHeart: "#FA2D2D",
        dibGray: "#DCDCDC",
        dibCategory: "#EEF1EC",
      },
    },
  },
  plugins: [],
};