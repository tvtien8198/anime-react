module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: {'max': '480px'},
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      height: {
        xxl: '22rem'
      },
      colors: {
        main:{
          lightt :'#282a58',
          light:'#0b0c2a',
          dark:'#070720'
        }
      },
      fontFamily: {
        'main': 'Be Vietnam Pro'
      },
      lineClamp: {
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      }
    },
  },
  variants: {
    extend: {lineClamp: ['responsive', 'hover']},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
