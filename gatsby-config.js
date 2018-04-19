module.exports = {
  siteMetadata: {
    title: 'Roy Eden -Front End Dev-'
  },
  pathPrefix: '/Portfolio',
  plugins: ['gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#342e37',
        showSpinner: false
      }
    }]
}
