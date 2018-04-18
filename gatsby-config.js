module.exports = {
  siteMetadata: {
    title: 'Roy Eden -Front End Dev-'
  },
  pathPrefix: '/Portfolio',
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: '#342e37',
      // Disable the loading spinner.
      showSpinner: false
    }
  }]
}
