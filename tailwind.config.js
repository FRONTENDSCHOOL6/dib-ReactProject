/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        subVisual: 'url("/subVisual.png")',
        bookMarkTrue: 'url("/bookMarkTrue.png")',
        bookMarkFalse: 'url("/bookMarkFalse.png")',
        mainVisual: 'url("/mainBanner.png")',
        mainVisual1: 'url("/mainBanner-1.png")',
        mainBanner1: 'url("@/assets/mainBanner1.png")',
        bookMark: 'url("/bookMark.png")',
        checkedBookMark: 'url("/checkedBookMark.png")',
      },
      colors: {
        primary: '#627D59',
        dibFooter: '#382F2D',
        dibBlack: '#181818',
        dibHeart: '#FA2D2D',
        dibGray: '#757575',
        dibCategoryBg: '#EEF1EC',
        dibBookWrite: '#818181',
        dibCategory: '#999',
        horizontal: '#c8c8c8',
        dibRed: '#ED0000',
        bookInfoBg: '#f1f1f1',
        infoCategory: '#3e3e3e',
        dateColor: '#9c9c9c',
        dibCommentsInfo: '#F7F2EF',
        commentBox: '#333',
      },
    },
  },
  plugins: [],
};
