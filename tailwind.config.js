module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
    },

    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        veryDarkBlue: 'hsl(233, 47%, 7%)',
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        paragraph: 'hsla(0, 0%, 100%, 0.75)',
        statHeading: 'hsla(0, 0%, 100%, 0.6)',
      },
    },
  },
  plugins: [],
}
