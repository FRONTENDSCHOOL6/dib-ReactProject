/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        subVisual: 'url("/subVisual.png")',
        mainVisual: 'url("/MainBanner1.png")',
        mainVisual1: 'url("/MainBanner2.png")',
        bookMarkTrue: 'url("/bookMarkTrue.png")',
      },
      colors: {
        primary: '#627D59',
        dibFooter: '#382F2D',
        dibBlack: '#181818',
        dibHeart: '#FA2D2D',
        dibGray: '#DCDCDC',
        dibCategoryBg: '#EEF1EC',
        dibBookWrite: '#818181',
        dibCategory: '#999',
        horizontal: '#c8c8c8',
        bookInfoBg: '#f1f1f1',
        infoCategory: '#3e3e3e',
        dateColor: '#9c9c9c',
      },
    },
  },
  plugins: [],
};
