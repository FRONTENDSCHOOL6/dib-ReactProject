/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        subVisual: 'url("/subVisual.png")',
        bookMarkTrue: 'url("/bmkTrue.png")',
        bookMarkFalse: 'url("/bmkFalse.png")',
        mainVisual: 'url("/mainBanner1.png")',
        mainVisual1: 'url("/mainBanner2.png")',
        mainBanner1: 'url("@/assets/mainBanner1.png")',
        bookMark: 'url("/bookMark.png")',
        checkedBookMark: 'url("/checkedBookMark.png")',
      },
      colors: {
        primary: '#627D59',
        dibFooter: '#EEF1EC',
        dibBlack: '#181818',
        dibHeart: '#FA2D2D',
        dibGray: '#757575',
        dibCategoryBg: '#EEF1EC',
        dibBookWrite: '#818181',
        dibCategory: '#999',
        horizontal: '#808080',
        bookInfoBg: '#f1f1f1',
        infoCategory: '#3e3e3e',
        dateColor: '#9c9c9c',
        dibCommentsInfo: '#F7F2EF',
        commentBox: '#333',
        dibRed: '#ED0000',
      },
    },
  },
  plugins: [],
};
