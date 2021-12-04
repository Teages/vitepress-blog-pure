module.exports = {
  purge: ['./docs/**/*.{vue,js,ts,jsx,tsx,html}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [{
            pre: {
              marginTop: 'unset',
              marginBottom: 'unset',
              paddingTop: '1.25rem',
              paddingRight: '1.5rem',
              paddingBottom: '1.25rem',
              paddingLeft: '1.5rem',
              backgroundColor: 'transparent',
            },
            "blockquote p:first-of-type::before": {
              content: ''
            },
            "blockquote p:last-of-type::after": {
              content: ''
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          }]
        }
      })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
