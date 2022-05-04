module.exports = {
  content: ["./_includes/*.{html,js,njk}"],
  theme: {
    fontFamily: {
      'serif': ['Crimson Text', 'Georgia', 'ui-serif', 'Cambria', 'Times', 'serif']
    },
    fontSize: {
      'lg': '1.5rem',
      'xl': '1.55rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
    },
    extend: {
      typography: {
        lg: {
          css: {
            'font-size': '1.25rem',
            'line-height': '1.35em',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
