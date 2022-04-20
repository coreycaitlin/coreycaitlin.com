module.exports = {
  content: ["./_includes/*.{html,js,njk}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
