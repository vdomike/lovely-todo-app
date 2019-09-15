module.exports = {
  theme: {
    extend: {
      fontFamily: {
        title: ['Cookie', 'sans-serif'],
        main: ['Fredoka One', 'cursive']
      },
      colors: {
        pink: '#ff787f',
        mintBlue: '#cee4e2',
        orange: '#ff9002',
        yellow: '#f2f256',
        beige: '#ede8d5'
      },
      fontSize: {
        '7xl': '5rem'
      },
      boxShadow: {
        list: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        section: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      },
      inset: {
        '100': '100%',
        '30': '30%',
        '-30': '-30%',
        '2rem': '2rem'
      },
      zIndex: {
        '-10': '-10'
      },
      maxHeight: {
        '1/2': '50%'
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.trans-fast': {
          transition: '.15s'
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
